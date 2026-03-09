import { motion } from "framer-motion";
import { Gamepad2, Globe, Users, Play, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { onlineGames } from "@/data/onlineGames";

const OnlineGames = () => (
  <div className="min-h-screen bg-[hsl(220,25%,8%)] text-[hsl(210,20%,95%)]">
    {/* Hero */}
    <div className="bg-gradient-to-br from-[hsl(217,91%,30%)] to-[hsl(217,91%,50%)] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative mx-auto px-4 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
            Online Games for Individuals
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Play APPs2400 games online against players around the world. No downloads — just open your browser and play.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2"><Gamepad2 className="h-5 w-5" /> Play Anytime</span>
            <span className="flex items-center gap-2"><Globe className="h-5 w-5" /> Global Players</span>
            <Link to="/leaderboards" className="flex items-center gap-2 hover:text-white transition-colors"><Users className="h-5 w-5" /> Leaderboards</Link>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Game Cards Grid */}
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-2xl font-bold text-white/90">Available Games</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {onlineGames.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/online-games/${game.id}`}>
              <Card className="group overflow-hidden border-white/10 bg-[hsl(220,25%,12%)] hover:border-white/20 transition-all hover:shadow-xl">
                <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${game.color}`}>
                  <img src="/placeholder.svg" alt={game.name} className="h-20 w-20 opacity-50" />
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs text-white/70">
                    <Clock className="h-3 w-3" /> {game.duration}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-white/90 group-hover:text-primary transition-colors">
                    {game.name}
                  </h3>
                  <p className="mb-3 text-sm text-white/60 line-clamp-2">{game.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {game.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/10 text-white/70 border-none text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {game.players}</span>
                    <span className="flex items-center gap-1"><Play className="h-3 w-3" /> Play Now</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-2xl border border-white/10 bg-[hsl(220,25%,12%)] p-10 text-center">
        <h2 className="mb-3 text-2xl font-bold text-white/90">Ready to Play?</h2>
        <p className="mb-6 text-white/60">
          Visit centriko.com to start playing Pokerstr8ts and other APPs2400 games online.
        </p>
        <a href="https://centriko.com" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold px-8">
            <Play className="mr-2 h-5 w-5 fill-current" /> Play Now on Centriko
          </Button>
        </a>
      </div>
    </div>
  </div>
);

export default OnlineGames;
