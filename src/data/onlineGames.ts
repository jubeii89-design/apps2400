export type OnlineGame = {
  id: string;
  name: string;
  tags: string[];
  desc: string;
  longDesc: string;
  players: string;
  duration: string;
  ageRating: string;
  ageLabel: string;
  publisher: string;
  developer: string;
  releaseDate: string;
  gameplay: string;
  languages: string[];
  screenshots: string[];
  features: string[];
  color: string;
};

export const onlineGames: OnlineGame[] = [
  {
    id: "pokerstr8ts",
    name: "Pokerstr8ts",
    tags: ["Strategy", "Card Game", "Puzzle", "Multiplayer"],
    desc: "A unique fusion of poker hands and Str8ts number puzzles — now playable online!",
    longDesc: `Experience the ultimate card-puzzle hybrid that challenges your strategic thinking and poker instincts!

Pokerstr8ts brings together the excitement of poker hand rankings with the brain-teasing logic of Str8ts number puzzles. Play against opponents from around the world in real-time matches, climb the global leaderboards, and prove you're the ultimate card strategist.

What's Inside:

Online Multiplayer — Challenge players worldwide in ranked and casual matches. Test your skills against the best!

4-Card Spread — Each round features a unique 4-card spread that determines your strategic options. Read the spread, plan your moves, and outsmart your opponents.

Multiple Game Modes — Play Quick Match for fast rounds, Ranked for competitive play, or Tournament mode for high-stakes competitions.

Progressive Difficulty — Start with beginner tables and work your way up to expert-level games as your rating improves.

Daily Challenges — Complete unique daily puzzles to earn rewards and bonus points.

Global Leaderboards — Track your ranking against thousands of players worldwide with our comprehensive stats system.

Master the spread, dominate the table!`,
    players: "1-4 players",
    duration: "10-30 min",
    ageRating: "E10+",
    ageLabel: "Everyone 10+",
    publisher: "Strategic Titan's",
    developer: "Strategic Titan's",
    releaseDate: "01/15/2025",
    gameplay: "Online PvP, Single Player, Ranked",
    languages: ["English", "French", "Spanish", "German"],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Real-time online multiplayer",
      "4-card spread strategic gameplay",
      "Global ranked leaderboards",
      "Daily challenges and rewards",
      "Multiple game modes",
    ],
    color: "from-[hsl(217,91%,30%)] to-[hsl(217,91%,50%)]",
  },
  {
    id: "number-clash",
    name: "Number Clash",
    tags: ["Puzzle", "Strategy", "Multiplayer"],
    desc: "Fast-paced number battle game where quick math meets tactical play.",
    longDesc: `Number Clash is a fast-paced competitive puzzle game where players race to solve number challenges and claim territory on a shared board.

Combine quick mental math with strategic placement to outmaneuver your opponents. Each round presents new number combinations that test both speed and tactical thinking.

Features quick 5-minute matches perfect for casual play, plus longer strategic modes for dedicated players.`,
    players: "1-2 players",
    duration: "5-15 min",
    ageRating: "E",
    ageLabel: "Everyone",
    publisher: "Strategic Titan's",
    developer: "Strategic Titan's",
    releaseDate: "03/01/2025",
    gameplay: "Online PvP, Single Player",
    languages: ["English", "French"],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Quick competitive matches",
      "Mental math challenges",
      "Territory control mechanics",
    ],
    color: "from-[hsl(150,60%,25%)] to-[hsl(150,60%,45%)]",
  },
  {
    id: "grid-masters",
    name: "Grid Masters",
    tags: ["Strategy", "Board Game", "Multiplayer"],
    desc: "Tactical grid conquest — claim squares, block opponents, dominate the board.",
    longDesc: `Grid Masters is a strategic territory control game played on a dynamic grid. Players take turns placing pieces to claim squares and block their opponents.

With multiple board sizes and rule variants, every game presents fresh strategic challenges. Play against AI or challenge friends online in this addictive tactical experience.

Features a robust tutorial system and AI opponents at multiple difficulty levels.`,
    players: "1-4 players",
    duration: "10-20 min",
    ageRating: "E",
    ageLabel: "Everyone",
    publisher: "Strategic Titan's",
    developer: "Strategic Titan's",
    releaseDate: "06/15/2025",
    gameplay: "Online PvP, Single Player, Local PvP",
    languages: ["English"],
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Dynamic grid sizes",
      "AI opponents at multiple levels",
      "Online and local multiplayer",
    ],
    color: "from-[hsl(270,60%,30%)] to-[hsl(270,60%,55%)]",
  },
];

export function getOnlineGameById(id: string): OnlineGame | undefined {
  return onlineGames.find((g) => g.id === id);
}
