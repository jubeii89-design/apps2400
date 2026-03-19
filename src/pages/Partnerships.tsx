import { motion } from "framer-motion";
import { Building2, TrendingUp, Handshake, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const benefits = [
  { icon: Building2, title: "Brand Exposure", desc: "Get your brand in front of thousands of board game enthusiasts across Canada." },
  { icon: TrendingUp, title: "Grow Together", desc: "Co-promote events, tournaments, and game nights to expand your reach." },
  { icon: Handshake, title: "Flexible Terms", desc: "We tailor partnerships to fit your business needs and budget." },
];

const Partnerships = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 font-display text-4xl font-bold">Small Business Partnerships</h1>
        <p className="mb-8 text-lg text-muted-foreground">Partner with Strategic Titan's to grow your business through the power of play.</p>
      </motion.div>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-xl bg-primary/10 p-4"><Icon className="h-8 w-8 text-primary" /></div>
                <h3 className="mb-2 font-display text-xl font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-lg rounded-2xl bg-muted p-8">
        <h2 className="mb-4 font-display text-2xl font-bold">Inquire About a Partnership</h2>
        {submitted ? (
          <div className="text-center">
            <p className="font-display text-lg font-semibold text-secondary">Thank you! We'll be in touch.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <Input placeholder="Business Name" required />
            <Input placeholder="Contact Email" type="email" required />
            <Input placeholder="Phone Number" />
            <Textarea placeholder="Tell us about your business and partnership ideas..." required />
            <Button className="w-full font-display" size="lg"><Send className="mr-2 h-4 w-4" /> Submit Inquiry</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Partnerships;
