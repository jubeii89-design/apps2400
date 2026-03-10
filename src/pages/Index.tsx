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
      <section className="relative overflow-hidden bg-primary px-4 py-24 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <Dice5
              key={i}
              className="absolute h-16 w-16"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-display text-5xl font-bold leading-tight md:text-7xl"
          >
            Play. Compete.{" "}
            <span className="text-accent">Win.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80 md:text-xl"
          >
            APPs2400 is a Canadian Board Game Company dedicated to bringing people together through innovative and exciting board games and online tournaments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/tournaments">
              <Button size="lg" variant="secondary" className="font-display text-lg">
                <Trophy className="mr-2 h-5 w-5" /> Enter Tournaments
              </Button>
            </Link>
            <Link to="/buy-games">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 font-display text-lg text-primary-foreground hover:bg-primary-foreground/10">
                Browse Games
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          About APPs2400
        </h2>
        <Tabs defaultValue="mission" className="mx-auto max-w-3xl">
          <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="vision">Vision</TabsTrigger>
            <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            <TabsTrigger value="fundraisers">Fundraisers</TabsTrigger>
            <TabsTrigger value="donors">Donors</TabsTrigger>
          </TabsList>
          <TabsContent value="mission">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3"><Target className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold">Our Mission</h3>
                    <p className="text-muted-foreground">To create innovative board games that bring people together, fostering connection, competition, and community across Canada and beyond. We believe in the power of play to build lasting memories.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vision">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-secondary/10 p-3"><Sparkles className="h-6 w-6 text-secondary" /></div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold">Our Vision</h3>
                    <p className="text-muted-foreground">To become a leading board game company recognized for innovative game design, inclusive gameplay experiences, and building a global community of passionate gamers and tournament players.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tournaments">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-accent/10 p-3"><Trophy className="h-6 w-6 text-accent" /></div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold">Tournaments</h3>
                    <p className="text-muted-foreground">Join exciting online and in-person tournaments! Compete against players worldwide in Pokerstr8ts and other APPs2400 games. Visit centriko.com to enter events with your event code.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="fundraisers">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-game-pink/10 p-3"><Heart className="h-6 w-6 text-game-pink" /></div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold">Pokerstr8ts Fundraisers</h3>
                    <p className="text-muted-foreground">Use Pokerstr8ts tournaments to raise funds for your favorite charity! Our fundraiser program makes it easy to organize game nights that give back to the community.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="donors">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-game-teal/10 p-3"><Users className="h-6 w-6 text-game-teal" /></div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold">Pokerstr8ts Donors</h3>
                    <p className="text-muted-foreground">A huge thank you to all our generous donors who support the Pokerstr8ts community. Your contributions help us grow tournaments and support charitable causes across Canada.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Download Section */}
      <section className="bg-muted px-4 py-16">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl bg-card p-8 shadow-lg"
          >
            <Download className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-3 font-display text-3xl font-bold">Download Pokerstr8ts Free</h2>
            <p className="mb-6 text-muted-foreground">Get the standalone Pokerstr8ts game for free and start playing on your computer today!</p>
            <Link to="/download">
              <Button size="lg" className="font-display text-lg">
                <Download className="mr-2 h-5 w-5" /> Download Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center font-display text-3xl font-bold md:text-4xl">Featured Games</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden transition-shadow hover:shadow-xl">
                <div className={`${game.color} flex h-48 items-center justify-center`}>
                  <Dice5 className="h-20 w-20 text-white/50 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <CardContent className="p-5">
                  <h3 className="mb-1 font-display text-lg font-semibold">{game.name}</h3>
                  <p className="text-sm text-muted-foreground">{game.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social / Follow Us */}
      <section className="bg-primary px-4 py-16 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-display text-3xl font-bold">Join the Community</h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">Follow us on social media for game updates, tournament announcements, and behind-the-scenes content!</p>
          <div className="flex justify-center gap-4">
            {["Facebook", "Instagram", "X", "YouTube", "TikTok"].map((name) => (
              <a
                key={name}
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20 text-sm font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <Star className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
