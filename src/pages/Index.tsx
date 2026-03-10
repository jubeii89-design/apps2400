import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Users, Heart, Download, Dice5, Target, Sparkles, Star, Gamepad2, Zap, Joystick, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const featuredGames = [
  { name: "Pokerstr8ts", desc: "A unique blend of poker and str8ts puzzles", icon: Dice5, color: "from-primary/30 to-primary/5", accent: "primary" },
  { name: "Strategy Quest", desc: "Epic strategy board game for 2-6 players", icon: Swords, color: "from-secondary/30 to-secondary/5", accent: "secondary" },
  { name: "Card Clash", desc: "Fast-paced competitive card game", icon: Zap, color: "from-accent/30 to-accent/5", accent: "accent" },
  { name: "Family Fun Night", desc: "The ultimate family board game collection", icon: Joystick, color: "from-neon-green/30 to-neon-green/5", accent: "neon-green" },
];

const stats = [
  { label: "Games Created", value: "12+", icon: Gamepad2 },
  { label: "Tournaments", value: "500+", icon: Trophy },
  { label: "Active Players", value: "10K+", icon: Users },
  { label: "Charity Raised", value: "$50K+", icon: Heart },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-28 md:py-36 grid-bg scanlines">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

        <div className="container relative z-10 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
          >
            <Zap className="h-3.5 w-3.5" />
            <span className="font-semibold">Canadian Board Game Company</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
          >
            <span className="text-foreground">Play. </span>
            <span className="text-primary neon-glow-purple">Compete. </span>
            <span className="text-secondary neon-glow-cyan">Win.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed"
          >
            Bringing people together through innovative board games and online tournaments. Level up your game night.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/tournaments">
              <Button size="lg" className="font-display text-lg bg-primary hover:bg-primary/80 neon-border">
                <Trophy className="mr-2 h-5 w-5" /> Enter Tournaments
              </Button>
            </Link>
            <Link to="/buy-games">
              <Button size="lg" variant="outline" className="font-display text-lg border-secondary/40 text-secondary hover:bg-secondary/10 neon-border-cyan">
                <Gamepad2 className="mr-2 h-5 w-5" /> Browse Games
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-primary/20 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-2 text-center font-pixel text-[10px] uppercase tracking-[0.3em] text-primary">
            Who We Are
          </h2>
          <h3 className="mb-10 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            About APPs2400
          </h3>
        </motion.div>

        <Tabs defaultValue="mission" className="mx-auto max-w-3xl">
          <TabsList className="mb-6 grid w-full grid-cols-2 bg-muted/50 border border-border md:grid-cols-5">
            <TabsTrigger value="mission" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Mission</TabsTrigger>
            <TabsTrigger value="vision" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Vision</TabsTrigger>
            <TabsTrigger value="tournaments" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Tournaments</TabsTrigger>
            <TabsTrigger value="fundraisers" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Fundraisers</TabsTrigger>
            <TabsTrigger value="donors" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Donors</TabsTrigger>
          </TabsList>

          {[
            { key: "mission", icon: Target, iconColor: "text-primary", title: "Our Mission", text: "To create innovative board games that bring people together, fostering connection, competition, and community across Canada and beyond. We believe in the power of play to build lasting memories." },
            { key: "vision", icon: Sparkles, iconColor: "text-secondary", title: "Our Vision", text: "To become a leading board game company recognized for innovative game design, inclusive gameplay experiences, and building a global community of passionate gamers and tournament players." },
            { key: "tournaments", icon: Trophy, iconColor: "text-neon-yellow", title: "Tournaments", text: "Join exciting online and in-person tournaments! Compete against players worldwide in Pokerstr8ts and other APPs2400 games. Visit centriko.com to enter events with your event code." },
            { key: "fundraisers", icon: Heart, iconColor: "text-accent", title: "Pokerstr8ts Fundraisers", text: "Use Pokerstr8ts tournaments to raise funds for your favorite charity! Our fundraiser program makes it easy to organize game nights that give back to the community." },
            { key: "donors", icon: Users, iconColor: "text-secondary", title: "Pokerstr8ts Donors", text: "A huge thank you to all our generous donors who support the Pokerstr8ts community. Your contributions help us grow tournaments and support charitable causes across Canada." },
          ].map((tab) => (
            <TabsContent key={tab.key} value={tab.key}>
              <Card className="border-border bg-card neon-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-muted p-3 border border-border">
                      <tab.icon className={`h-6 w-6 ${tab.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{tab.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{tab.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Download Section */}
      <section className="relative px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container relative mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-10 neon-border-cyan"
          >
            <Download className="mx-auto mb-4 h-12 w-12 text-secondary animate-pulse-neon" />
            <h2 className="mb-3 font-display text-3xl font-bold text-foreground">
              Download <span className="text-secondary neon-glow-cyan">Pokerstr8ts</span> Free
            </h2>
            <p className="mb-6 text-muted-foreground">Get the standalone Pokerstr8ts game for free and start playing on your computer today!</p>
            <Link to="/download">
              <Button size="lg" className="font-display text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 neon-border-cyan">
                <Download className="mr-2 h-5 w-5" /> Download Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-2 text-center font-pixel text-[10px] uppercase tracking-[0.3em] text-primary">
          Our Collection
        </h2>
        <h3 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl text-foreground">Featured Games</h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-primary/40 hover:neon-border">
                <div className={`bg-gradient-to-br ${game.color} flex h-48 items-center justify-center relative`}>
                  <game.icon className="h-16 w-16 text-foreground/20 transition-all group-hover:scale-110 group-hover:text-primary/40" />
                </div>
                <CardContent className="p-5">
                  <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{game.name}</h3>
                  <p className="text-sm text-muted-foreground">{game.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community CTA */}
      <section className="relative px-4 py-20 overflow-hidden scanlines">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container relative z-10 mx-auto text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Join the <span className="text-accent neon-glow-pink">Community</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Follow us on social media for game updates, tournament announcements, and behind-the-scenes content!
          </p>
          <div className="flex justify-center gap-4">
            {["Facebook", "Instagram", "X", "YouTube", "TikTok"].map((name) => (
              <a
                key={name}
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted text-sm font-bold text-muted-foreground transition-all hover:border-accent/40 hover:text-accent hover:bg-accent/10"
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