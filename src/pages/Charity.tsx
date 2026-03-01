import { motion } from "framer-motion";
import { Heart, Gift, Users, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Charity = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 font-display text-4xl font-bold">Charity Fund Raising Partnerships</h1>
        <p className="mb-8 text-lg text-muted-foreground">Use the power of board games to raise funds for causes you care about.</p>
      </motion.div>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: Heart, title: "Raise Funds", desc: "Organize Pokerstr8ts tournament fundraisers to support your charity." },
          { icon: Gift, title: "Game Donations", desc: "We donate games for charity events and silent auctions." },
          { icon: Users, title: "Community Impact", desc: "Bring people together while making a positive difference." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-xl bg-game-pink/10 p-4"><Icon className="h-8 w-8 text-game-pink" /></div>
                <h3 className="mb-2 font-display text-xl font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-lg rounded-2xl bg-muted p-8">
        <h2 className="mb-4 font-display text-2xl font-bold">Start a Fundraiser</h2>
        {submitted ? (
          <p className="text-center font-display text-lg font-semibold text-secondary">Thank you! We'll reach out soon.</p>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <Input placeholder="Organization Name" required />
            <Input placeholder="Contact Email" type="email" required />
            <Input placeholder="Charity / Cause" required />
            <Textarea placeholder="Tell us about your fundraising goals..." required />
            <Button className="w-full font-display" size="lg"><Send className="mr-2 h-4 w-4" /> Submit Request</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Charity;
