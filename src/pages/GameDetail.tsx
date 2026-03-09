import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Users, Clock, Calendar, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getGameById } from "@/data/games";
import NotFound from "./NotFound";

const GameDetail = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameId ? getGameById(gameId) : undefined;

  if (!game) return <NotFound />;

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(game.rating));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className={`${game.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <Link to="/board-games" className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Board Games
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <Badge className="mb-3 bg-white/20 text-white hover:bg-white/30">{game.category}</Badge>
            <h1 className="mb-3 font-display text-4xl font-bold text-white md:text-5xl">{game.name}</h1>
            <p className="text-lg text-white/90">{game.desc}</p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex gap-0.5">
                {stars.map((filled, i) => (
                  <Star key={i} className={`h-5 w-5 ${filled ? "fill-yellow-400 text-yellow-400" : "text-white/40"}`} />
                ))}
              </div>
              <span className="text-sm text-white/80">{game.rating} ({game.reviews} reviews)</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about">
              <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="mb-4 font-display text-2xl font-bold">About {game.name}</h2>
                  <p className="leading-relaxed text-muted-foreground">{game.longDesc}</p>
                </motion.div>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="mb-4 font-display text-2xl font-bold">Game Features</h2>
                  <ul className="space-y-3">
                    {game.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>
              <TabsContent value="details" className="mt-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="mb-4 font-display text-2xl font-bold">Game Details</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InfoCard icon={<Users className="h-5 w-5 text-primary" />} label="Players" value={game.players} />
                    <InfoCard icon={<Calendar className="h-5 w-5 text-primary" />} label="Age" value={game.age} />
                    <InfoCard icon={<Clock className="h-5 w-5 text-primary" />} label="Play Time" value={game.duration} />
                    <InfoCard icon={<Star className="h-5 w-5 text-primary" />} label="Rating" value={`${game.rating}/5`} />
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-4 text-3xl font-bold text-foreground">${game.price.toFixed(2)} <span className="text-base font-normal text-muted-foreground">CAD</span></div>
                <Button className="mb-3 w-full gap-2" size="lg">
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to="/buy-games">View All Games</Link>
                </Button>

                <div className="mt-6 space-y-3 border-t pt-6">
                  <SidebarRow label="Players" value={game.players} />
                  <SidebarRow label="Age" value={game.age} />
                  <SidebarRow label="Play Time" value={game.duration} />
                  <SidebarRow label="Category" value={game.category} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <Card>
    <CardContent className="flex items-center gap-3 p-4">
      {icon}
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </CardContent>
  </Card>
);

const SidebarRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default GameDetail;
