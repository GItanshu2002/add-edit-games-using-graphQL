let game = [
  {
    id: "1",
    title: "The Witcher 3: Wild Hunt",
    platform: ["PlayStation 4", "Xbox One", "PC"],
  },
  {
    id: "2",
    title: "Red Dead Redemption 2",
    platform: ["PlayStation 4", "Xbox One", "PC"],
  },
  {
    id: "3",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch"],
  },
  {
    id: "4",
    title: "Dark Souls III",
    platform: ["PlayStation 4", "Xbox One", "PC"],
  },
  {
    id: "5",
    title: "Final Fantasy VII Remake",
    platform: ["PlayStation 4"],
  },
];

let author = [
  {
    id: "1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    verified: false,
  },
  {
    id: "3",
    name: "Alex Johnson",
    verified: true,
  },
  {
    id: "4",
    name: "Emily Brown",
    verified: false,
  },
  {
    id: "5",
    name: "Michael Davis",
    verified: true,
  },
];

let review = [
  {
    id: "1",
    rating: 5,
    content: "Absolutely fantastic game, a must-play for any RPG fan.",
    author_id: "1", // Author ID for this review
    game_id: "2", // Game ID for this review
  },
  {
    id: "2",
    rating: 4,
    content:
      "Beautiful open world and captivating story, although some gameplay mechanics can be frustrating.",
    author_id: "2", // Author ID for this review
    game_id: "3", // Game ID for this review
  },
  {
    id: "3",
    rating: 5,
    content:
      "A masterpiece of game design. The freedom to explore and interact with the world is unparalleled.",
    author_id: "3", // Author ID for this review
    game_id: "1", // Game ID for this review
  },
  {
    id: "4",
    rating: 3,
    content: "Challenging but rewarding. Not for the faint of heart.",
    author_id: "4", // Author ID for this review
    game_id: "5", // Game ID for this review
  },
  {
    id: "5",
    rating: 4,
    content:
      "An amazing remake that captures the spirit of the original while updating it for modern audiences.",
    author_id: "5", // Author ID for this review
    game_id: "4", // Game ID for this review
  },
];

export default { game, author, review };
