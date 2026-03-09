export type Game = {
  id: string;
  name: string;
  category: string;
  tags: string[];
  desc: string;
  color: string;
  players: string;
  age: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  longDesc: string;
  features: string[];
  screenshots: string[];
  publisher: string;
  developer: string;
  releaseDate: string;
  gameplay: string;
  languages: string[];
};

export const games: Game[] = [
  {
    id: "pokerstr8ts",
    name: "Pokerstr8ts",
    category: "Strategy",
    tags: ["Strategy", "Card Game", "Puzzle"],
    desc: "A unique blend of poker and str8ts number puzzles. Challenge your mind!",
    color: "bg-primary",
    players: "2-6",
    age: "12+",
    duration: "30-60 min",
    rating: 4.5,
    reviews: 128,
    price: 29.99,
    longDesc: "Pokerstr8ts combines the thrill of poker with the brain-teasing challenge of str8ts number puzzles. Players compete to create the best combinations using strategic card placement and number sequencing. Perfect for game nights with friends and family who love a mental challenge.\n\nThe game features multiple difficulty levels so beginners can jump right in while seasoned players can push their strategic limits. With premium components and an intuitive scoring system, every round brings new excitement and tactical decisions.",
    features: [
      "Unique poker and puzzle hybrid gameplay",
      "Easy to learn, hard to master",
      "Multiple difficulty levels",
      "Includes 120 premium cards and scoring pad",
      "Perfect for game nights and tournaments",
    ],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    publisher: "GameCraft Studios",
    developer: "GameCraft Studios",
    releaseDate: "03/15/2024",
    gameplay: "Local PvP, Single Player",
    languages: ["English", "French", "Spanish"],
  },
  {
    id: "crossword-pyramids",
    name: "CrossWord Pyramids",
    category: "Strategy",
    tags: ["Strategy", "Words", "Puzzle"],
    players: "2-4",
    age: "10+",
    duration: "30-60 min",
    rating: 4.5,
    desc: "Build words in pyramid formations to score big.",
    image: "/placeholder.svg",
    reviews: 87,
    price: 39.99,
    longDesc: "CrossWord Pyramids is a strategic word-building game where players form words in ascending pyramid tiers. Each tier requires longer words, and overlapping letters score bonus points. Combine vocabulary skills with spatial strategy to outwit your opponents.\n\nWith solo puzzle challenges and competitive multiplayer modes, CrossWord Pyramids delivers a fresh twist on classic word games. The premium letter tiles and pyramid board create an engaging tabletop experience.",
    features: [
      "Pyramid word-building mechanics",
      "4 unique factions with special abilities",
      "Campaign and skirmish modes",
      "High-quality miniatures included",
      "Expandable with future faction packs",
    ],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    publisher: "Wargame Works",
    developer: "Wargame Works",
    releaseDate: "06/20/2024",
    gameplay: "Local PvP, Co-op",
    languages: ["English", "German", "French"],
  },
  {
    id: "treasure-hunt",
    name: "Treasure Hunt",
    category: "Family",
    tags: ["Family", "Adventure", "Exploration"],
    desc: "A fun adventure game for the whole family. Find the hidden treasure first!",
    color: "bg-accent",
    players: "2-6",
    age: "6+",
    duration: "20-40 min",
    rating: 4.7,
    reviews: 215,
    price: 24.99,
    longDesc: "Embark on an exciting treasure hunt adventure! Players explore a modular island board, collect clues, avoid traps, and race to find the hidden treasure. With a different island layout every game, no two adventures are the same. Great fun for the whole family!\n\nThe game includes a hidden traitor variant for older players, adding an extra layer of suspicion and strategy. Beautiful illustrated island tiles and a 3D treasure chest game piece make every session a visual treat.",
    features: [
      "Modular board for endless replayability",
      "Simple rules for young players",
      "Hidden traitor variant for older players",
      "Beautiful illustrated island tiles",
      "Includes 3D treasure chest game piece",
    ],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    publisher: "Family Fun Games",
    developer: "Family Fun Games",
    releaseDate: "11/10/2023",
    gameplay: "Local PvP, Co-op",
    languages: ["English", "French", "Spanish", "Italian"],
  },
  {
    id: "word-wizard",
    name: "Word Wizard",
    category: "Party",
    tags: ["Party", "Word Game", "Social"],
    desc: "Fast-paced word game that tests your vocabulary and quick thinking.",
    color: "bg-game-purple",
    players: "3-8",
    age: "8+",
    duration: "15-30 min",
    rating: 4.6,
    reviews: 164,
    price: 19.99,
    longDesc: "Word Wizard is the ultimate party word game! Players race against a timer to create words from randomly drawn letter tiles, with bonus points for using special challenge letters. Quick rounds keep everyone engaged, and the magic spell cards add hilarious twists.\n\nWhether you're playing in teams or going solo, Word Wizard guarantees laughs and friendly competition. The compact travel-friendly box means you can bring the fun anywhere!",
    features: [
      "Fast-paced party gameplay",
      "Magic spell cards add wild twists",
      "Team and individual play modes",
      "Compact travel-friendly box",
      "Over 200 challenge cards included",
    ],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    publisher: "Party Play Inc.",
    developer: "Party Play Inc.",
    releaseDate: "01/05/2024",
    gameplay: "Local PvP",
    languages: ["English"],
  },
  {
    id: "galaxy-quest",
    name: "Galaxy Quest",
    category: "Strategy",
    tags: ["Strategy", "Sci-Fi", "Empire Building"],
    desc: "Explore the cosmos and build your galactic empire across the stars.",
    color: "bg-game-teal",
    players: "2-5",
    age: "14+",
    duration: "60-120 min",
    rating: 4.4,
    reviews: 93,
    price: 49.99,
    longDesc: "Galaxy Quest is an epic space exploration and empire-building game. Discover new star systems, establish colonies, trade resources, and engage in interstellar diplomacy. With a tech tree spanning 50+ technologies, every game tells a different story of galactic conquest.\n\nThe game features a solo campaign mode with narrative-driven missions, as well as competitive multiplayer where alliances form and break in the race for galactic supremacy. Stunning sci-fi artwork immerses players in a rich, vibrant universe.",
    features: [
      "Epic space exploration and conquest",
      "50+ technologies to research",
      "Dynamic trade and diplomacy system",
      "Solo campaign mode included",
      "Stunning sci-fi artwork throughout",
    ],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    publisher: "Stellar Games",
    developer: "Stellar Games",
    releaseDate: "09/01/2024",
    gameplay: "Local PvP, Single Player",
    languages: ["English", "German", "French", "Spanish", "Japanese"],
  },
  {
    id: "dice-derby",
    name: "Dice Derby",
    category: "Family",
    tags: ["Family", "Racing", "Dice"],
    desc: "Roll your way to victory in this exciting dice-racing board game!",
    color: "bg-game-pink",
    players: "2-6",
    age: "6+",
    duration: "20-30 min",
    rating: 4.8,
    reviews: 302,
    price: 22.99,
    longDesc: "Dice Derby is a thrilling racing game where luck meets strategy! Roll custom dice to move your racer forward, use power-up cards to boost ahead or sabotage opponents, and navigate exciting track hazards. The first to cross the finish line wins!\n\nWith 6 unique racer characters, a double-sided game board with 2 tracks, and a deck of power-up and hazard cards, every race is a new adventure. Quick setup and fast gameplay make it perfect for family game nights.",
    features: [
      "Custom engraved racing dice",
      "6 unique racer characters",
      "Double-sided game board with 2 tracks",
      "Power-up and hazard card deck",
      "Quick setup and fast gameplay",
    ],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    publisher: "RaceDay Games",
    developer: "RaceDay Games",
    releaseDate: "04/22/2024",
    gameplay: "Local PvP",
    languages: ["English", "French"],
  },
];

export function getGameById(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}
