import { motion } from "framer-motion";
import { Trophy, Medal, Crown, TrendingUp, Users, Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { onlineGames } from "@/data/onlineGames";

const mockPlayers = [
  { rank: 1, name: "CardShark99", score: 12450, wins: 342, games: "Pokerstr8ts", avatar: "🃏" },
  { rank: 2, name: "StrategyKing", score: 11200, wins: 298, games: "Number Clash", avatar: "♟️" },
  { rank: 3, name: "GridMaster_X", score: 10890, wins: 276, games: "Grid Masters", avatar: "🎯" },
  { rank: 4, name: "BluffQueen", score: 9750, wins: 251, games: "Pokerstr8ts", avatar: "👑" },
  { rank: 5, name: "NumWizard", score: 9300, wins: 230, games: "Number Clash", avatar: "🧙" },
  { rank: 6, name: "AceHunter", score: 8900, wins: 215, games: "Pokerstr8ts", avatar: "🎰" },
  { rank: 7, name: "TileBreaker", score: 8400, wins: 198, games: "Grid Masters", avatar: "💎" },
  { rank: 8, name: "LuckyDraw77", score: 7950, wins: 182, games: "Pokerstr8ts", avatar: "🍀" },
  { rank: 9, name: "MindGamer", score: 7600, wins: 170, games: "Number Clash", avatar: "🧠" },
  { rank: 10, name: "ProPlayer_1", score: 7200, wins: 155, games: "Grid Masters", avatar: "⚡" },
];

const RankIcon = ({ rank }: { rank: number }) => {
  if (rank === 1) return <Crown className="h-5 w-5 text-yellow-400" />;
  if (rank === 2) return <Medal className="h-5 w-5 text-gray-300" />;
  if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
  return <span className="text-sm font-bold text-white/50">#{rank}</span>;
};

const LeaderboardTable = ({ players }: { players: typeof mockPlayers }) => (
  <div className="space-y-2">
    {players.map((player, i) => (
      <motion.div
        key={player.rank}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.05 }}
      >
        <Card
          className={`border-white/10 bg-[hsl(220,25%,12%)] hover:border-white/20 transition-colors ${
            player.rank <= 3 ? "border-yellow-500/30" : ""
          }`}
        >
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center">
              <RankIcon rank={player.rank} />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
              {player.avatar}
            </div>
            <div className="flex-1">
              <p className="font-bold text-white/90">{player.name}</p>
              <p className="text-xs text-white/50">{player.games}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-primary">{player.score.toLocaleString()}</p>
              <p className="text-xs text-white/50">{player.wins} wins</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

const Leaderboards = () => (
  <div className="min-h-screen bg-[hsl(220,25%,8%)] text-[hsl(210,20%,95%)]">
    {/* Hero */}
    <div className="bg-gradient-to-br from-yellow-600/80 to-amber-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative mx-auto px-4 py-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Trophy className="mx-auto mb-4 h-12 w-12 text-yellow-300" />
          <h1 className="mb-3 text-2xl font-bold text-white md:text-3xl">Leaderboards</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            See who's dominating Strategic Titan's online games. Climb the ranks and earn your place at the top.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2"><Users className="h-5 w-5" /> 2,847 Active Players</span>
            <span className="flex items-center gap-2"><Gamepad2 className="h-5 w-5" /> 15,320 Games Played</span>
            <span className="flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Updated Daily</span>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 py-8">
      {/* Top 3 Podium */}
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {mockPlayers.slice(0, 3).map((player, i) => {
          const order = [1, 0, 2];
          const p = mockPlayers[order[i]];
          const heights = ["h-40", "h-48", "h-36"];
          return (
            <motion.div
              key={p.rank}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`order-${i + 1} md:order-none`}
            >
              <Card className="border-yellow-500/20 bg-gradient-to-b from-[hsl(220,25%,15%)] to-[hsl(220,25%,10%)] text-center">
                <CardContent className={`flex ${heights[i]} flex-col items-center justify-center p-6`}>
                  <div className="mb-2 text-2xl">{p.avatar}</div>
                  <RankIcon rank={p.rank} />
                  <p className="mt-2 font-bold text-white/90">{p.name}</p>
                  <p className="text-2xl font-bold text-primary">{p.score.toLocaleString()}</p>
                  <Badge variant="secondary" className="mt-2 bg-white/10 text-white/60 border-none text-xs">
                    {p.wins} wins
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 bg-[hsl(220,25%,12%)] border border-white/10">
          <TabsTrigger value="all">All Games</TabsTrigger>
          {onlineGames.map((g) => (
            <TabsTrigger key={g.id} value={g.id}>{g.name}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">
          <LeaderboardTable players={mockPlayers} />
        </TabsContent>
        {onlineGames.map((g) => (
          <TabsContent key={g.id} value={g.id}>
            <LeaderboardTable players={mockPlayers.filter((p) => p.games === g.name)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </div>
);

export default Leaderboards;
