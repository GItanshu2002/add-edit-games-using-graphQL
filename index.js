import { ApolloServer } from "@apollo/server"; //  It's the primary way to set up a GraphQL server with Apollo Server use this when integrating GraphQL into our application
import { startStandaloneServer } from "@apollo/server/standalone"; // This function is used to start a standalone instance of Apollo Server, separate from any specific HTTP server framework. It's useful for testing or for running Apollo Server without integrating it into a larger application.

// db
import db from "./db.js";

// schema type
import { typeDefs } from "./schema.js";

// resolver
const resolvers = {
  Query: {
    // Resolver to fetch all games
    games() {
      return db.game;
    },
    // Resolver to find a specific game by ID
    game(_, args) {
      // Corrected the parameter name to args
      const game = db.game.find((game) => game.id === args.id); // find the game by ID
      return game || null; // Handle case when game is not found
    },
    // Resolver to fetch all reviews
    reviews() {
      return db.review;
    },
    // Resolver to find a specific review by ID
    review(_, args) {
      // Corrected the parameter name to args
      const review = db.review.find((review) => review.id === args.id);
      return review || null; // Handle case when review is not found
    },
    // Resolver to fetch all authors
    authors() {
      return db.author;
    },
    // Resolver to find a specific author by ID
    author(_, args) {
      // Corrected the parameter name to args
      const author = db.author.find((author) => author.id === args.id);
      return author || null; // Handle case when author is not found
    },
  },
  Game: {
    // Resolver to fetch all reviews associated with a game
    reviews(parent) {
      return db.review.filter((r) => r.game_id === parent.id); // Filter reviews based on the parent game's ID
    },
  },
  Author: {
    // Resolver to fetch all reviews associated with an author
    reviews(parent) {
      return db.review.filter((r) => r.author_id === parent.id); // Filter reviews based on the parent author's ID
    },
  },
  Review: {
    // Resolver to fetch the author of a review
    author(parent) {
      return db.author.find((a) => a.id === parent.id); // Find the author of the review
    },
    // Resolver to fetch the game associated with a review
    game(parent) {
      return db.game.find((g) => g.id === parent.game_id); // Find the game associated with the review
    },
  },
  Mutation: {
    // Resolver to delete a game by ID
    deleteGame(_, args) {
      db.game = db.game.filter((g) => g.id !== args.id); // Filter out the game with the provided ID
      return db.game;
    },
    // Resolver to add a new game
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.game.push(game); // Add the new game to the database
      return game;
    },
    // Resolver to update an existing game
    updateGame(_, args) {
      db.game = db.game.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.edits }; // Update the game with the provided edits
        }
        return g;
      });
      return db.game.find((g) => g.id === args.id); // Return the updated game
    },
  },
};

// server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Port runing at:", url);
