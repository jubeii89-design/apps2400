import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Monitor,
  Flag,
  Clock,
  Users,
  Play,
  Spade,
  Heart,
  Diamond,
  Club,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getOnlineGameById, onlineGames } from "@/data/onlineGames";

const CardSpread = () => {
  const cards = [
    { suit: Spade, value: "A", color: "text-foreground", bg: "bg-card" },
    { suit: Heart, value: "K", color: "text-destructive", bg: "bg-card" },
    { suit: Diamond, value: "Q", color: "text-destructive", bg: "bg-card" },
    { suit: Club, value: "J", color: "text-foreground", bg: "bg-card" },
  ];
  return (
    <div className="flex items-end justify-center gap-3">
      {cards.map((c, i) => {
        const SuitIcon = c.suit;
        const rotation = (i - 1.5) * 8;
        const yOff = Math.abs(i - 1.5) * 8;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: -yOff, rotate: rotation }}
            transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 120 }}
            className={`${c.bg} relative h-36 w-24 rounded-xl border border-border shadow-xl flex flex-col items-center justify-center select-none`}
          >
            <span className={`text-2xl font-bold ${c.color}`}>{c.value}</span>
            <SuitIcon className={`h-8 w-8 ${c.color} mt-1`} />
            <span className={`absolute top-2 left-2 text-xs font-bold ${c.color}`}>{c.value}</span>
            <SuitIcon className={`absolute top-2 right-2 h-3 w-3 ${c.color}`} />
          </motion.div>
        );
      })}
    </div>
  );
};

const OnlineGameDetail = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = getOnlineGameById(gameId || "");
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [descExpanded, setDescExpanded] = useState(false);

  if (!game) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Game not found</h1>
        <Link to="/online-games" className="mt-4 text-primary underline">
          Back to Online Games
        </Link>
      </div>
    );
  }

  const isPokerstr8ts = game.id === "pokerstr8ts";
  const relatedGames = onlineGames.filter((g) => g.id !== game.id);
  const descLines = game.longDesc.split("\n").filter(Boolean);
  const shortDesc = descLines.slice(0, 4).join("\n");

  return (
    <div className="min-h-screen bg-[hsl(220,25%,8%)] text-[hsl(210,20%,95%)]">
      {/* Hero Banner */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${game.color}`}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Left: Game Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-xl"
            >
              <Link
                to="/online-games"
                className="mb-4 inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" /> Back to Online Games
              </Link>
              <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                {game.name}
              </h1>
              <div className="mb-4 flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-white/15 text-white border-none text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mb-6 flex items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {game.players}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {game.duration}
                </span>
              </div>
              <a
                href="https://centriko.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-white text-[hsl(220,25%,8%)] hover:bg-white/90 font-bold text-base px-8"
                >
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Play Now on Centriko
                </Button>
              </a>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                <div className="rounded bg-white/20 px-2 py-1 font-bold">{game.ageRating}</div>
                <span>{game.ageLabel}</span>
              </div>
            </motion.div>

            {/* Right: Card Spread or Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center"
            >
              {isPokerstr8ts ? (
                <CardSpread />
              ) : (
                <div className="flex h-48 w-64 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                  <img
                    src="/placeholder.svg"
                    alt={game.name}
                    className="h-24 w-24 opacity-60"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Action bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="container mx-auto flex items-center gap-6 px-4 py-3">
            <button className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <button className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
              <Monitor className="h-4 w-4" /> Add to Desktop
            </button>
            <button className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
              <Flag className="h-4 w-4" /> Report Issue
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Left Column */}
          <div>
            {/* Screenshots Section */}
            <section className="mb-10">
              <h2 className="mb-4 text-lg font-bold text-white/90">Trailer & Screenshots</h2>
              {/* Active preview */}
              <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-[hsl(220,25%,12%)] border border-white/10">
                <img
                  src={game.screenshots[activeScreenshot]}
                  alt={`Screenshot ${activeScreenshot + 1}`}
                  className="h-full w-full object-cover opacity-60"
                />
              </div>
              {/* Thumbnail strip */}
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {game.screenshots.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveScreenshot(i)}
                      className={`flex-shrink-0 h-16 w-28 rounded-lg overflow-hidden border-2 transition-all ${
                        activeScreenshot === i
                          ? "border-primary ring-2 ring-primary/50"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Thumb ${i + 1}`}
                        className="h-full w-full object-cover opacity-60"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Description */}
            <section className="mb-10">
              <h2 className="mb-4 text-lg font-bold text-white/90">Description</h2>
              <div className="text-sm leading-relaxed text-white/70 whitespace-pre-line">
                {descExpanded ? game.longDesc : shortDesc}
              </div>
              {descLines.length > 4 && (
                <button
                  onClick={() => setDescExpanded(!descExpanded)}
                  className="mt-3 text-sm font-medium text-primary hover:underline"
                >
                  {descExpanded ? "See less" : "See more"}
                </button>
              )}
            </section>

            <Separator className="mb-10 bg-white/10" />

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="mb-4 text-lg font-bold text-white/90">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem
                  value="q1"
                  className="rounded-lg border border-white/10 bg-[hsl(220,25%,12%)] px-4"
                >
                  <AccordionTrigger className="text-sm text-white/80 hover:text-white">
                    How do I play {game.name} online?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-white/60">
                    Visit centriko.com and create a free account. You can start playing {game.name}{" "}
                    directly in your web browser — no downloads required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="q2"
                  className="rounded-lg border border-white/10 bg-[hsl(220,25%,12%)] px-4"
                >
                  <AccordionTrigger className="text-sm text-white/80 hover:text-white">
                    Is {game.name} free to play?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-white/60">
                    {game.name} offers a free tier with limited daily matches. Premium features and
                    unlimited play are available with a subscription.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="q3"
                  className="rounded-lg border border-white/10 bg-[hsl(220,25%,12%)] px-4"
                >
                  <AccordionTrigger className="text-sm text-white/80 hover:text-white">
                    Can I play on mobile?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-white/60">
                    Yes! {game.name} works on any device with a modern web browser, including phones
                    and tablets.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <a
                href="/faq"
                className="mt-4 inline-block text-sm text-primary hover:underline"
              >
                Have more questions? Visit our help page →
              </a>
            </section>
          </div>

          {/* Right Sidebar — Game Details */}
          <aside className="space-y-6">
            <Card className="border-white/10 bg-[hsl(220,25%,12%)] text-white/90">
              <CardContent className="p-6 space-y-4">
                {[
                  { label: "Game Title", value: game.name },
                  { label: "Release Date", value: game.releaseDate },
                  { label: "Publisher", value: game.publisher },
                  { label: "Developer", value: game.developer },
                  { label: "Gameplay", value: game.gameplay },
                  { label: "Languages", value: game.languages.join(", ") },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">
                      {label}
                    </h4>
                    <p className="text-sm text-white/80">{value}</p>
                  </div>
                ))}
                <Separator className="bg-white/10" />
                <div className="flex items-center gap-3">
                  <div className="rounded bg-white/20 px-3 py-1.5 text-sm font-bold">
                    {game.ageRating}
                  </div>
                  <span className="text-xs text-white/60">{game.ageLabel}</span>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* You Might Also Like */}
        <section>
          <h2 className="mb-6 text-lg font-bold text-white/90">You Might Also Like</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedGames.map((g) => (
              <Link key={g.id} to={`/online-games/${g.id}`}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="overflow-hidden border-white/10 bg-[hsl(220,25%,12%)] hover:border-white/20 transition-colors">
                    <div
                      className={`flex h-32 items-center justify-center bg-gradient-to-br ${g.color}`}
                    >
                      <img
                        src="/placeholder.svg"
                        alt={g.name}
                        className="h-16 w-16 opacity-60"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-sm font-bold text-white/90">{g.name}</h3>
                      <p className="mt-1 text-xs text-white/50 line-clamp-2">{g.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnlineGameDetail;
