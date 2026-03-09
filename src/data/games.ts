export type Game = {
  id: string;
  name: string;
  category: string;
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
};

export const games: Game[] = [
  {
    id: "pokerstr8ts",
    name: "Pokerstr8ts",
    category: "Strategy",
    desc: "A unique blend of poker and str8ts number puzzles. Challenge your mind!",
    color: "bg-primary",
    players: "2-6",
    age: "12+",
    duration: "30-60 min",
    rating: 4.5,
    reviews: 128,
    price: 29.99,
    longDesc: "Pokerstr8ts combines the thrill of poker with the brain-teasing challenge of str8ts number puzzles. Players compete to create the best combinations using strategic card placement and number sequencing. Perfect for game nights with friends and family who love a mental challenge.",
    features: [
      "Unique poker and puzzle hybrid gameplay",
      "Easy to learn, hard to master",
      "Multiple difficulty levels",
      "Includes 120 premium cards and scoring pad",
      "Perfect for game nights and tournaments",
    ],
    screenshots: [],
  },
  {
    id: "battle-grid",
    name: "Battle Grid",
    category: "Strategy",
    desc: "Tactical grid-based combat for 2-4 players. Outmaneuver your opponents!",
    color: "bg-secondary",
    players: "2-4",
    age: "10+",
    duration: "45-90 min",
    rating: 4.3,
    reviews: 87,
    price: 39.99,
    longDesc: "Battle Grid is an intense tactical board game where players command armies on a hex-based grid. Deploy units, capture territories, and outmaneuver your opponents in this deep strategy experience. Each faction has unique abilities that create endless replayability.",
    features: [
      "Hex-based tactical combat system",
      "4 unique factions with special abilities",
      "Campaign and skirmish modes",
      "High-quality miniatures included",
      "Expandable with future faction packs",
    ],
    screenshots: [],
  },
  {
    id: "treasure-hunt",
    name: "Treasure Hunt",
    category: "Family",
    desc: "A fun adventure game for the whole family. Find the hidden treasure first!",
    color: "bg-accent",
    players: "2-6",
    age: "6+",
    duration: "20-40 min",
    rating: 4.7,
    reviews: 215,
    price: 24.99,
    longDesc: "Embark on an exciting treasure hunt adventure! Players explore a modular island board, collect clues, avoid traps, and race to find the hidden treasure. With a different island layout every game, no two adventures are the same. Great fun for the whole family!",
    features: [
      "Modular board for endless replayability",
      "Simple rules for young players",
      "Hidden traitor variant for older players",
      "Beautiful illustrated island tiles",
      "Includes 3D treasure chest game piece",
    ],
    screenshots: [],
  },
  {
    id: "word-wizard",
    name: "Word Wizard",
    category: "Party",
    desc: "Fast-paced word game that tests your vocabulary and quick thinking.",
    color: "bg-game-purple",
    players: "3-8",
    age: "8+",
    duration: "15-30 min",
    rating: 4.6,
    reviews: 164,
    price: 19.99,
    longDesc: "Word Wizard is the ultimate party word game! Players race against a timer to create words from randomly drawn letter tiles, with bonus points for using special challenge letters. Quick rounds keep everyone engaged, and the magic spell cards add hilarious twists.",
    features: [
      "Fast-paced party gameplay",
      "Magic spell cards add wild twists",
      "Team and individual play modes",
      "Compact travel-friendly box",
      "Over 200 challenge cards included",
    ],
    screenshots: [],
  },
  {
    id: "galaxy-quest",
    name: "Galaxy Quest",
    category: "Strategy",
    desc: "Explore the cosmos and build your galactic empire across the stars.",
    color: "bg-game-teal",
    players: "2-5",
    age: "14+",
    duration: "60-120 min",
    rating: 4.4,
    reviews: 93,
    price: 49.99,
    longDesc: "Galaxy Quest is an epic space exploration and empire-building game. Discover new star systems, establish colonies, trade resources, and engage in interstellar diplomacy. With a tech tree spanning 50+ technologies, every game tells a different story of galactic conquest.",
    features: [
      "Epic space exploration and conquest",
      "50+ technologies to research",
      "Dynamic trade and diplomacy system",
      "Solo campaign mode included",
      "Stunning sci-fi artwork throughout",
    ],
    screenshots: [],
  },
  {
    id: "dice-derby",
    name: "Dice Derby",
    category: "Family",
    desc: "Roll your way to victory in this exciting dice-racing board game!",
    color: "bg-game-pink",
    players: "2-6",
    age: "6+",
    duration: "20-30 min",
    rating: 4.8,
    reviews: 302,
    price: 22.99,
    longDesc: "Dice Derby is a thrilling racing game where luck meets strategy! Roll custom dice to move your racer forward, use power-up cards to boost ahead or sabotage opponents, and navigate exciting track hazards. The first to cross the finish line wins!",
    features: [
      "Custom engraved racing dice",
      "6 unique racer characters",
      "Double-sided game board with 2 tracks",
      "Power-up and hazard card deck",
      "Quick setup and fast gameplay",
    ],
    screenshots: [],
  },
];

export function getGameById(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}
