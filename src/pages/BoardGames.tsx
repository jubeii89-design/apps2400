import { motion } from "framer-motion";
import {
  Dice5,
  MapPin,
  Calendar,
  Users,
  Clock,
  Star,
  Building2,
  Camera,
  ChevronRight,
  Trophy,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { games } from "@/data/games";

const upcomingEvents = [
  {
    id: 1,
    title: "Friday Night Strategy Showdown",
    date: "Every Friday · 7:00 PM – 10:00 PM",
    venue: "The Roasted Bean Café",
    address: "245 King St W, Toronto, ON",
    sponsor: "Roasted Bean Coffee Co.",
    sponsorLogo: "/placeholder.svg",
    games: ["Pokerstr8ts", "Galaxy Quest", "CrossWord Pyramids"],
    spots: 24,
    spotsLeft: 8,
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: 2,
    title: "Weekend Family Game Day",
    date: "Saturdays · 1:00 PM – 4:00 PM",
    venue: "Community Hub Library",
    address: "890 Bloor St E, Toronto, ON",
    sponsor: "Maple Leaf Insurance",
    sponsorLogo: "/placeholder.svg",
    games: ["Treasure Hunt", "Dice Derby", "Word Wizard"],
    spots: 30,
    spotsLeft: 14,
    image: "/placeholder.svg",
    featured: false,
  },
  {
    id: 3,
    title: "Corporate Team Building Night",
    date: "Wednesdays · 6:00 PM – 9:00 PM",
    venue: "BrewDog Midtown",
    address: "500 Yonge St, Toronto, ON",
    sponsor: "TechVenture Solutions",
    sponsorLogo: "/placeholder.svg",
    games: ["Pokerstr8ts", "Word Wizard", "Treasure Hunt"],
    spots: 20,
    spotsLeft: 3,
    image: "/placeholder.svg",
    featured: false,
  },
];

const photoGallery = [
  { id: 1, src: "/placeholder.svg", caption: "Strategy night at The Roasted Bean" },
  { id: 2, src: "/placeholder.svg", caption: "Families enjoying Treasure Hunt" },
  { id: 3, src: "/placeholder.svg", caption: "Corporate team building session" },
  { id: 4, src: "/placeholder.svg", caption: "Tournament finals — Pokerstr8ts" },
  { id: 5, src: "/placeholder.svg", caption: "Kids corner at the Community Hub" },
  { id: 6, src: "/placeholder.svg", caption: "Award ceremony night" },
];

const sponsors = [
  { name: "Roasted Bean Coffee Co.", logo: "/placeholder.svg", tier: "Gold" },
  { name: "Maple Leaf Insurance", logo: "/placeholder.svg", tier: "Silver" },
  { name: "TechVenture Solutions", logo: "/placeholder.svg", tier: "Gold" },
  { name: "Urban Print Shop", logo: "/placeholder.svg", tier: "Bronze" },
  { name: "Fresh Bites Catering", logo: "/placeholder.svg", tier: "Silver" },
  { name: "Northside Brewing Co.", logo: "/placeholder.svg", tier: "Bronze" },
];

const tierColors: Record<string, string> = {
  Gold: "bg-accent text-accent-foreground",
  Silver: "bg-muted text-muted-foreground",
  Bronze: "bg-secondary/20 text-secondary",
};

const BoardGames = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-accent" />
        <div className="absolute bottom-10 right-20 h-48 w-48 rounded-full bg-secondary" />
        <div className="absolute right-1/3 top-1/4 h-20 w-20 rounded-full bg-game-pink" />
      </div>
      <div className="container relative mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold">
            <PartyPopper className="mr-1.5 h-4 w-4" /> Now Hosting Weekly Events
          </Badge>
          <h1 className="mb-4 font-display text-5xl font-bold md:text-6xl">Games Night</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Bring your team, your friends, or your family — enjoy a night of APPs2400 board games at a local venue near
            you. Hosted by local businesses, powered by play.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display text-base">
              <Calendar className="mr-2 h-5 w-5" /> View Upcoming Events
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display text-base"
            >
              <Building2 className="mr-2 h-5 w-5" /> Become a Host
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="border-b bg-card">
      <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
        {[
          { icon: Calendar, label: "Weekly Events", value: "3+" },
          { icon: MapPin, label: "Venues", value: "6" },
          { icon: Users, label: "Monthly Players", value: "250+" },
          { icon: Trophy, label: "Games Available", value: String(games.length) },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 justify-center">
            <div className="rounded-xl bg-primary/10 p-2.5">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="container mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Upcoming Game Nights</h2>
            <p className="mt-1 text-muted-foreground">Find a game night near you and reserve your spot.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {upcomingEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="group h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              {/* Event photo */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                {event.featured && (
                  <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
                    <Sparkles className="mr-1 h-3 w-3" /> Featured
                  </Badge>
                )}
                <div className="absolute bottom-3 right-3 rounded-lg bg-card/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
                  <span className={event.spotsLeft <= 5 ? "text-destructive" : "text-secondary"}>
                    {event.spotsLeft} spots left
                  </span>{" "}
                  / {event.spots}
                </div>
              </div>

              <CardContent className="p-5">
                <h3 className="mb-2 font-display text-lg font-bold text-foreground">{event.title}</h3>

                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-destructive" />
                    <span>{event.venue} — {event.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-secondary" />
                    <span>Sponsored by <strong className="text-foreground">{event.sponsor}</strong></span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Games Being Played
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {event.games.map((g) => (
                      <Badge key={g} variant="secondary" className="text-xs">
                        {g}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full font-display" size="sm">
                  Reserve a Spot <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Photo Gallery */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground">
            <Camera className="mr-2 inline h-8 w-8 text-primary" />
            Game Night Gallery
          </h2>
          <p className="mt-1 text-muted-foreground">Moments from our community game nights.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {photoGallery.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-card"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Games */}
    <section className="container mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="mb-2 font-display text-3xl font-bold text-foreground">Games We Play</h2>
        <p className="mb-8 text-muted-foreground">Our curated collection of board games available at every game night.</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className={`${game.color} flex h-36 items-center justify-center`}>
                <Dice5 className="h-14 w-14 text-white/40 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              </div>
              <CardContent className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">{game.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-accent">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="font-semibold">{game.rating}</span>
                  </div>
                </div>
                <h3 className="mb-1 font-display text-lg font-bold text-foreground">{game.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{game.desc}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{game.players}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{game.duration}</span>
                  <span>{game.age}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Sponsors */}
    <section className="border-t bg-card py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground">Our Sponsors &amp; Hosts</h2>
          <p className="mt-1 text-muted-foreground">
            Local businesses making game nights possible. Want to sponsor?{" "}
            <a href="/partnerships" className="font-semibold text-primary underline-offset-4 hover:underline">
              Get in touch
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="flex h-full flex-col items-center p-5 text-center transition-shadow hover:shadow-md">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <img src={s.logo} alt={s.name} className="h-10 w-10 object-contain" />
                </div>
                <p className="mb-2 text-sm font-semibold text-foreground leading-tight">{s.name}</p>
                <Badge className={`text-xs ${tierColors[s.tier]}`}>{s.tier} Sponsor</Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 font-display text-3xl font-bold">Host a Game Night at Your Business</h2>
          <p className="mx-auto mb-6 max-w-xl text-primary-foreground/80">
            We provide the games, the structure, and the fun — you provide the venue. It's the perfect way to drive
            foot traffic and build community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display">
              <Building2 className="mr-2 h-5 w-5" /> Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default BoardGames;
