// their are 4 basic type in graphQL (int, float, String, ID)
// "!" will mark the feild as required
// "#" is used to add comments in side a query
// Query will be the gateway for the server to accese the requested schema

export const typeDefs = `#graphql
    type Game{
        id: ID! 
        title: String!
        platform: [String!]! # game can be for more than one platform or it has to be for one platform
        reviews: [Review!] # game will either have a review or not so the array can be null but if a review exit it cannot be empty
    }  
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game! # The game this review is for
        author: Author! # a review will be given by another user (author)
    }  
    type Author {
        id: ID!
        name: String!
        verified: Boolean! 
        reviews: [Review!] # Author can have multiple or no reviews so the array can be null but if a review exit it cannot be empty
    } 
    type Query {
        games: [Game] # Retrieve all games
        game(id: ID!): Game # Retrieve a specific game by ID
        reviews: [Review] # Retrieve all reviews
        review(id: ID!): Review # Retrieve a specific review by ID
        authors: [Author] # Retrieve all authors
        author(id: ID!): Author # Retrieve a specific author by ID
    }
    type Mutation{
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID! , edits: editGameInput!): Game
    }
    input AddGameInput{
        title: String!
        platform: [String!]!
    }
    input editGameInput{
        title: String
        platform: [String!]
    }
`;
