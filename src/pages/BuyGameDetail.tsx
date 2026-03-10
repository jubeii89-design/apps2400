import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Clock, Star, ShoppingCart, Share2, ChevronLeft, ChevronRight, Dice5, Globe, Gamepad2, Calendar, Building2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { games, type Game } from "@/data/games";
import { useState, useRef } from "react";

const BuyGameDetail = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = games.find((g) => g.id === gameId);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Game Not Found</h1>
        <p className="mt-2 text-muted-foreground">We couldn't find that game.</p>
        <Link to="/buy-games">
          <Button className="mt-6"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const otherGames = games.filter((g) => g.id !== game.id);

  const scrollScreenshots = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className={`${game.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <Link to="/buy-games" className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Shop
          </Link>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-12">
            {/* Game Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-44 w-44 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl border border-white/20"
            >
              <Dice5 className="h-20 w-20 text-white/60" />
            </motion.div>

            {/* Game Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1"
            >
              <h1 className="font-display text-4xl font-bold text-white md:text-5xl">{game.name}</h1>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {game.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {game.players} players</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {game.duration}</span>
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-accent text-accent" /> {game.rating} ({game.reviews} reviews)</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button size="lg" className="font-display text-lg shadow-lg">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Buy — ${game.price.toFixed(2)}
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>

              <p className="mt-3 text-xs text-white/50">Ages {game.age}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="font-display text-2xl font-bold mb-4">Screenshots</h2>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card shadow-md border border-border"
              onClick={() => scrollScreenshots("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div ref={scrollRef} className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
              {game.screenshots.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveScreenshot(i)}
                  className={`shrink-0 snap-start cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                    activeScreenshot === i ? "border-primary shadow-lg scale-[1.02]" : "border-transparent hover:border-muted-foreground/30"
                  }`}
                >
                  <div className={`${game.color}/20 flex h-36 w-64 items-center justify-center bg-muted`}>
                    <Dice5 className="h-10 w-10 text-muted-foreground/40" />
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card shadow-md border border-border"
              onClick={() => scrollScreenshots("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Main Content: Description + Details Sidebar */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="font-display text-2xl font-bold mb-4">Description</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {game.longDesc.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <Separator className="my-8" />

            <h3 className="font-display text-xl font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              {game.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Details Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-5">
                <h3 className="font-display text-lg font-bold">Game Details</h3>

                <DetailRow icon={<Dice5 className="h-4 w-4" />} label="Game Title" value={game.name} />
                <DetailRow icon={<Calendar className="h-4 w-4" />} label="Release Date" value={game.releaseDate} />
                <DetailRow icon={<Building2 className="h-4 w-4" />} label="Publisher" value={game.publisher} />
                <DetailRow icon={<Code2 className="h-4 w-4" />} label="Developer" value={game.developer} />
                <DetailRow icon={<Gamepad2 className="h-4 w-4" />} label="Gameplay" value={game.gameplay} />
                <DetailRow icon={<Users className="h-4 w-4" />} label="Players" value={game.players} />
                <DetailRow icon={<Globe className="h-4 w-4" />} label="Languages" value={game.languages.join(", ")} />

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">${game.price.toFixed(2)}</span>
                  <Button>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* You Might Also Like */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <h2 className="font-display text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {otherGames.slice(0, 5).map((g) => (
              <Link key={g.id} to={`/buy-games/${g.id}`}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className={`${g.color} flex h-32 items-center justify-center`}>
                    <Dice5 className="h-10 w-10 text-white/40 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardContent className="p-3">
                    <p className="font-display text-sm font-semibold truncate">{g.name}</p>
                    <p className="text-xs text-muted-foreground">${g.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 text-muted-foreground">{icon}</span>
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

export default BuyGameDetail;
