import { motion } from "framer-motion";
import { Gamepad2, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OnlineGames = () => (
  <div className="container mx-auto px-4 py-12">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="mb-2 font-display text-4xl font-bold">Online Games for Individuals</h1>
      <p className="mb-8 text-lg text-muted-foreground">Play APPs2400 games online against players around the world.</p>
    </motion.div>
    <div className="grid gap-6 md:grid-cols-3">
      {[
        { icon: Gamepad2, title: "Play Anytime", desc: "Access our games 24/7 from any device with a web browser." },
        { icon: Globe, title: "Global Players", desc: "Match up against opponents from across Canada and worldwide." },
        { icon: Users, title: "Leaderboards", desc: "Track your scores and compete for top positions on our leaderboards." },
      ].map(({ icon: Icon, title, desc }, i) => (
        <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <Card className="h-full">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-xl bg-primary/10 p-4"><Icon className="h-8 w-8 text-primary" /></div>
              <h3 className="mb-2 font-display text-xl font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    <div className="mt-10 rounded-2xl bg-muted p-8 text-center">
      <h2 className="mb-3 font-display text-2xl font-bold">Ready to Play?</h2>
      <p className="mb-6 text-muted-foreground">Visit centriko.com to start playing Pokerstr8ts and other APPs2400 games online.</p>
      <a href="https://centriko.com" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="font-display">Play Now on Centriko</Button>
      </a>
    </div>
  </div>
);

export default OnlineGames;
