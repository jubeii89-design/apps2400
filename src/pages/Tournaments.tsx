import { motion } from "framer-motion";
import { Trophy, Calendar, Hash, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const upcomingTournaments = [
  { name: "Pokerstr8ts Championship 2026", date: "April 15, 2026", code: "PS2026-CHAMP", prize: "$500" },
  { name: "Spring Showdown", date: "March 20, 2026", code: "SS-SPRING26", prize: "$250" },
  { name: "Community Cup", date: "May 5, 2026", code: "CC-MAY2026", prize: "$100" },
];

const Tournaments = () => (
  <div className="container mx-auto px-4 py-8">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="mb-2 font-display text-4xl font-bold">Online Tournaments</h1>
      <p className="mb-8 text-lg text-muted-foreground">Compete in exciting tournaments and win prizes!</p>
    </motion.div>

    <div className="mb-10 rounded-2xl bg-primary p-8 text-primary-foreground">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <Trophy className="h-12 w-12 shrink-0" />
        <div className="flex-1">
          <h2 className="mb-2 font-display text-2xl font-bold">How to Enter</h2>
          <p className="text-primary-foreground/80">Visit centriko.com and enter your event code to join a tournament. Scores are tracked automatically and winners are announced on our social media channels.</p>
        </div>
        <a href="https://centriko.com" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="lg" className="font-display">
            <ExternalLink className="mr-2 h-4 w-4" /> Go to Centriko
          </Button>
        </a>
      </div>
    </div>

    <h2 className="mb-6 font-display text-2xl font-bold">Upcoming Tournaments</h2>
    <div className="grid gap-4 md:grid-cols-3">
      {upcomingTournaments.map((t, i) => (
        <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <Card className="h-full transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="mb-3 font-display text-lg font-semibold">{t.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {t.date}</div>
                <div className="flex items-center gap-2"><Hash className="h-4 w-4 text-primary" /> Code: <span className="font-mono font-semibold text-foreground">{t.code}</span></div>
                <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Prize: <span className="font-semibold text-foreground">{t.prize}</span></div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Tournaments;
