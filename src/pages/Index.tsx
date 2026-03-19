import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Users, Heart, Download, Dice5, Target, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const featuredGames = [
  { name: "Pokerstr8ts", desc: "A unique blend of poker and str8ts puzzles", color: "bg-primary" },
  { name: "Strategy Quest", desc: "Epic strategy board game for 2-6 players", color: "bg-secondary" },
  { name: "Card Clash", desc: "Fast-paced competitive card game", color: "bg-game-purple" },
  { name: "Family Fun Night", desc: "The ultimate family board game collection", color: "bg-accent" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-4 py-14 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <Dice5
              key={i}
              className="absolute h-10 w-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
        <div className="container relative mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 font-display text-3xl font-bold leading-tight md:text-5xl"
          >
            Play. Compete.{" "}
            <span className="text-accent">Win.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mb-5 max-w-xl text-sm text-primary-foreground/80 md:text-base"
          >
            Strategic Titan's is a Canadian Board Game Company dedicated to bringing people together through innovative and exciting board games and online tournaments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link to="/tournaments">
              <Button size="sm" variant="secondary" className="font-display text-sm">
                <Trophy className="mr-1.5 h-4 w-4" /> Enter Tournaments
              </Button>
            </Link>
            <Link to="/buy-games">
              <Button size="sm" variant="outline" className="border-primary-foreground/30 font-display text-sm text-primary-foreground hover:bg-primary-foreground/10">
                Browse Games
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="mb-5 text-center font-display text-2xl font-bold text-foreground md:text-3xl">
          About Strategic Titan's
        </h2>
        <Tabs defaultValue="mission" className="mx-auto max-w-2xl">
          <TabsList className="mb-4 grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="mission" className="text-xs">Mission</TabsTrigger>
            <TabsTrigger value="vision" className="text-xs">Vision</TabsTrigger>
            <TabsTrigger value="tournaments" className="text-xs">Tournaments</TabsTrigger>
            <TabsTrigger value="fundraisers" className="text-xs">Fundraisers</TabsTrigger>
            <TabsTrigger value="donors" className="text-xs">Donors</TabsTrigger>
          </TabsList>
          <TabsContent value="mission">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2"><Target className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h3 className="mb-1 font-display text-base font-semibold">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">To create innovative board games that bring people together, fostering connection, competition, and community across Canada and beyond.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vision">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-secondary/10 p-2"><Sparkles className="h-5 w-5 text-secondary" /></div>
                  <div>
                    <h3 className="mb-1 font-display text-base font-semibold">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">To become a leading board game company recognized for innovative game design, inclusive gameplay experiences, and building a global community.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tournaments">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/10 p-2"><Trophy className="h-5 w-5 text-accent" /></div>
                  <div>
                    <h3 className="mb-1 font-display text-base font-semibold">Tournaments</h3>
                    <p className="text-sm text-muted-foreground">Join exciting online and in-person tournaments! Compete against players worldwide. Visit centriko.com to enter events with your event code.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="fundraisers">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-game-pink/10 p-2"><Heart className="h-5 w-5 text-game-pink" /></div>
                  <div>
                    <h3 className="mb-1 font-display text-base font-semibold">Pokerstr8ts Fundraisers</h3>
                    <p className="text-sm text-muted-foreground">Use Pokerstr8ts tournaments to raise funds for your favorite charity! Our fundraiser program makes it easy to organize game nights that give back.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="donors">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-game-teal/10 p-2"><Users className="h-5 w-5 text-game-teal" /></div>
                  <div>
                    <h3 className="mb-1 font-display text-base font-semibold">Pokerstr8ts Donors</h3>
                    <p className="text-sm text-muted-foreground">A huge thank you to all our generous donors who support the Pokerstr8ts community and charitable causes across Canada.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Download Section */}
      <section className="bg-muted px-4 py-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-lg rounded-xl bg-card p-6 shadow-md"
          >
            <Download className="mx-auto mb-3 h-8 w-8 text-primary" />
            <h2 className="mb-2 font-display text-2xl font-bold">Download Pokerstr8ts Free</h2>
            <p className="mb-4 text-sm text-muted-foreground">Get the standalone Pokerstr8ts game for free and start playing today!</p>
            <Link to="/download">
              <Button size="sm" className="font-display">
                <Download className="mr-1.5 h-4 w-4" /> Download Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="mb-5 text-center font-display text-2xl font-bold md:text-3xl">Featured Games</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="group cursor-pointer overflow-hidden transition-shadow hover:shadow-lg">
                <div className={`${game.color} flex h-32 items-center justify-center`}>
                  <Dice5 className="h-14 w-14 text-white/50 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-0.5 font-display text-sm font-semibold">{game.name}</h3>
                  <p className="text-xs text-muted-foreground">{game.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social / Follow Us */}
      <section className="bg-primary px-4 py-10 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="mb-3 font-display text-2xl font-bold">Join the Community</h2>
          <p className="mx-auto mb-5 max-w-md text-sm text-primary-foreground/80">Follow us on social media for game updates, tournament announcements, and behind-the-scenes content!</p>
          <div className="flex justify-center gap-3">
            {["Facebook", "Instagram", "X", "YouTube", "TikTok"].map((name) => (
              <a
                key={name}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20 text-sm font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <Star className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
