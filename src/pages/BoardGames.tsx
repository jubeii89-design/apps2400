import { motion } from "framer-motion";
import { Dice5 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { games } from "@/data/games";

const BoardGames = () => (
  <div className="container mx-auto px-4 py-12">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="mb-2 font-display text-4xl font-bold">Board Games</h1>
      <p className="mb-8 text-lg text-muted-foreground">Explore our collection of innovative and fun board games.</p>
    </motion.div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {games.map((game, i) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
        >
          <Link to={`/board-games/${game.id}`}>
            <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`${game.color} flex h-44 items-center justify-center`}>
                <Dice5 className="h-16 w-16 text-white/40 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              </div>
              <CardContent className="p-5">
                <span className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{game.category}</span>
                <h3 className="mb-1 font-display text-lg font-semibold">{game.name}</h3>
                <p className="text-sm text-muted-foreground">{game.desc}</p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default BoardGames;
