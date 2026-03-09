import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Users,
  Clock,
  Calendar,
  ShoppingCart,
  Share2,
  Flag,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Gamepad2,
  Globe,
  Monitor,
  Dice5,
} from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getGameById, games } from "@/data/games";
import NotFound from "./NotFound";

const GameDetail = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameId ? getGameById(gameId) : undefined;
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!game) return <NotFound />;

  const relatedGames = games.filter((g) => g.id !== game.id).slice(0, 6);
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(game.rating));

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 280;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#e0e0e0]">
      {/* Hero Section – Full-width banner */}
      <div className="relative">
        {/* Background image / color */}
        <div className={`${game.color} relative h-[420px] md:h-[480px] overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Dice5 className="h-48 w-48 text-white" />
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8">
          <div className="container mx-auto">
            <Link
              to="/board-games"
              className="mb-4 inline-flex items-center gap-2 text-sm text-[#a0a0b8] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Board Games
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h1 className="mb-3 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {game.name}
              </h1>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                  {game.players} players
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                  {game.duration}
                </span>
              </div>

              {/* CTA + Price */}
              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base font-semibold">
                  <ShoppingCart className="h-5 w-5" />
                  Buy Now – ${game.price.toFixed(2)} CAD
                </Button>
              </div>

              {/* Age Rating + actions */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#a0a0b8]">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">
                    {game.age}
                  </div>
                  <span>Ages {game.age}</span>
                </div>
                <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Flag className="h-4 w-4" />
                  Report Issue
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Screenshots Carousel */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-4 font-display text-xl font-semibold text-white">
          Trailer & Screenshots
        </h2>
        <div className="relative">
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#2a2a4a] p-2 text-white/70 shadow-lg hover:bg-[#3a3a5a] hover:text-white transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {game.screenshots.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveScreenshot(i)}
                className={`relative flex-shrink-0 overflow-hidden rounded-lg transition-all ${
                  activeScreenshot === i
                    ? "ring-2 ring-primary"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className="h-36 w-64 bg-[#2a2a4a] flex items-center justify-center">
                  <Dice5 className="h-10 w-10 text-[#4a4a6a]" />
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollCarousel("right")}
            className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#2a2a4a] p-2 text-white/70 shadow-lg hover:bg-[#3a3a5a] hover:text-white transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Active Screenshot Preview */}
        <div className="mt-4 overflow-hidden rounded-xl bg-[#2a2a4a]">
          <div className="flex h-64 md:h-96 items-center justify-center">
            <Dice5 className="h-20 w-20 text-[#4a4a6a]" />
          </div>
        </div>
      </div>

      <Separator className="border-[#2a2a4a]" />

      {/* Description + Game Info Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left: Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="mb-4 font-display text-2xl font-bold text-white">
                Description
              </h2>
              <div
                className={`relative text-[#b0b0c8] leading-relaxed whitespace-pre-line ${
                  !showFullDesc ? "max-h-40 overflow-hidden" : ""
                }`}
              >
                {game.longDesc}
                {!showFullDesc && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
                )}
              </div>
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="mt-2 flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {showFullDesc ? (
                  <>
                    See less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    See more <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            </section>

            {/* Features */}
            <section>
              <h2 className="mb-4 font-display text-xl font-bold text-white">
                Features
              </h2>
              <ul className="space-y-2">
                {game.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#b0b0c8]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 font-display text-xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <FAQItem
                  question="How many players can play?"
                  answer={`${game.name} supports ${game.players} players.`}
                />
                <FAQItem
                  question="What is the recommended age?"
                  answer={`This game is recommended for ages ${game.age}.`}
                />
                <FAQItem
                  question="How long does a game last?"
                  answer={`A typical game lasts ${game.duration}.`}
                />
              </div>
            </section>
          </div>

          {/* Right: Game Info Sidebar */}
          <div>
            <div className="sticky top-24 space-y-6">
              {/* Purchase Card */}
              <Card className="border-[#2a2a4a] bg-[#22223a]">
                <CardContent className="p-5">
                  <div className="mb-1 text-3xl font-bold text-white">
                    ${game.price.toFixed(2)}{" "}
                    <span className="text-base font-normal text-[#a0a0b8]">CAD</span>
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {stars.map((filled, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            filled
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-[#4a4a6a]"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[#a0a0b8]">
                      {game.rating} ({game.reviews})
                    </span>
                  </div>
                  <Button className="mb-3 w-full gap-2 rounded-full" size="lg">
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-[#3a3a5a] bg-transparent text-[#e0e0e0] hover:bg-[#2a2a4a]"
                    size="lg"
                    asChild
                  >
                    <Link to="/buy-games">View All Games</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Game Details Card */}
              <Card className="border-[#2a2a4a] bg-[#22223a]">
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#a0a0b8]">
                    Game Details
                  </h3>

                  <DetailRow icon={<Dice5 className="h-4 w-4" />} label="Game Title" value={game.name} />
                  <DetailRow icon={<Calendar className="h-4 w-4" />} label="Release Date" value={game.releaseDate} />
                  <DetailRow icon={<Monitor className="h-4 w-4" />} label="Publisher" value={game.publisher} />
                  <DetailRow icon={<Gamepad2 className="h-4 w-4" />} label="Developer" value={game.developer} />
                  <DetailRow icon={<Users className="h-4 w-4" />} label="Players" value={game.players} />
                  <DetailRow icon={<Clock className="h-4 w-4" />} label="Play Time" value={game.duration} />
                  <DetailRow icon={<Gamepad2 className="h-4 w-4" />} label="Gameplay" value={game.gameplay} />
                  <DetailRow
                    icon={<Globe className="h-4 w-4" />}
                    label="Languages"
                    value={game.languages.join(", ")}
                  />

                  <Separator className="border-[#3a3a5a]" />

                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-[#3a3a5a] text-xs font-bold text-white">
                      {game.age}
                    </div>
                    <span className="text-sm text-[#a0a0b8]">Ages {game.age}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Separator className="border-[#2a2a4a]" />

      {/* You Might Also Like */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-6 font-display text-xl font-semibold text-white">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {relatedGames.map((g) => (
            <Link key={g.id} to={`/board-games/${g.id}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group overflow-hidden rounded-lg"
              >
                <div
                  className={`${g.color} flex h-36 items-center justify-center transition-all`}
                >
                  <Dice5 className="h-10 w-10 text-white/30 group-hover:text-white/50 transition-colors" />
                </div>
                <div className="bg-[#22223a] p-3">
                  <p className="truncate text-sm font-medium text-white">
                    {g.name}
                  </p>
                  <p className="text-xs text-[#a0a0b8]">{g.category}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 text-[#6a6a8a]">{icon}</div>
    <div className="min-w-0">
      <p className="text-xs text-[#6a6a8a]">{label}</p>
      <p className="text-sm font-medium text-[#e0e0e0] break-words">{value}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-[#2a2a4a] bg-[#22223a]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-white hover:text-primary transition-colors"
      >
        {question}
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-[#6a6a8a]" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-[#6a6a8a]" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-3 text-sm text-[#b0b0c8]">{answer}</div>
      )}
    </div>
  );
};

export default GameDetail;
