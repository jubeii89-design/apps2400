import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus, X, Dice5 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

type CartItem = { id: number; name: string; price: number; qty: number };

const products = [
  { id: 1, name: "Pokerstr8ts Deluxe", price: 39.99, desc: "The complete Pokerstr8ts experience with premium components.", color: "bg-primary" },
  { id: 2, name: "CrossWord Pyramids", price: 49.99, desc: "Strategic word-building game with pyramid formations.", color: "bg-secondary" },
  { id: 3, name: "Treasure Hunt Family", price: 29.99, desc: "Fun for all ages — the perfect family game night starter.", color: "bg-accent" },
  { id: 4, name: "Word Wizard Pro", price: 24.99, desc: "Competitive word game with advanced rule variants.", color: "bg-game-purple" },
  { id: 5, name: "Galaxy Quest Expansion", price: 19.99, desc: "Expand your Galaxy Quest with new planets and missions.", color: "bg-game-teal" },
  { id: 6, name: "Dice Derby Turbo", price: 34.99, desc: "The faster, crazier version of the classic Dice Derby.", color: "bg-game-pink" },
];

const BuyGames = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item).filter((item) => item.qty > 0));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold">Buy Games</h1>
          <p className="text-lg text-muted-foreground">Shop our collection of board games.</p>
        </motion.div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="relative">
              <ShoppingCart className="mr-2 h-4 w-4" /> Cart
              {totalItems > 0 && (
                <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs">{totalItems}</Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-display">Shopping Cart</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground">Your cart is empty.</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-lg bg-muted p-3">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQty(item.id, -1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQty(item.id, 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => updateQty(item.id, -item.qty)}>
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-display text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <Button className="mt-4 w-full font-display" size="lg">Proceed to Checkout</Button>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Card className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`${product.color} flex h-44 items-center justify-center`}>
                <Dice5 className="h-16 w-16 text-white/40 transition-transform group-hover:scale-110" />
              </div>
              <CardContent className="p-5">
                <h3 className="mb-1 font-display text-lg font-semibold">{product.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  <Button size="sm" onClick={() => addToCart(product)}>
                    <ShoppingCart className="mr-1 h-4 w-4" /> Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BuyGames;
