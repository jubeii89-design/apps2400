import { motion } from "framer-motion";
import {
  Building2,
  Users,
  TrendingUp,
  Coffee,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Megaphone,
  DollarSign,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    icon: TrendingUp,
    title: "Drive Foot Traffic",
    desc: "Attract new customers every week with a fun, recurring event that brings the community through your doors.",
  },
  {
    icon: Users,
    title: "Build Community",
    desc: "Create a loyal following of regulars who associate your venue with great times and memorable experiences.",
  },
  {
    icon: Megaphone,
    title: "We market YOU",
    desc: "We promote your venue across our website, social media, and email newsletters.",
  },
  {
    icon: DollarSign,
    title: "Boost Revenue",
    desc: "Game night attendees spend on food, drinks, and more. It's a reliable weekly revenue boost.",
  },
];

const howItWorks = [
  { step: "1", title: "Apply Below", desc: "Fill out the form with your venue details and preferred schedule." },
  { step: "2", title: "We Set Up", desc: "We bring the games, table signage, and event structure — you provide the space." },
  { step: "3", title: "Host & Earn", desc: "Welcome players each week and watch your venue become a community hotspot." },
];

const testimonials = [
  {
    quote: "Game nights doubled our Wednesday traffic. Best decision we made this year.",
    name: "Sarah M.",
    venue: "The Roasted Bean Café",
  },
  {
    quote: "Our customers love it. It's brought a whole new crowd into the pub.",
    name: "James K.",
    venue: "BrewDog Midtown",
  },
];

const BecomeAHost = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-accent" />
          <div className="absolute bottom-10 right-20 h-48 w-48 rounded-full bg-secondary" />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold">
              <Building2 className="mr-1.5 h-4 w-4" /> Now Accepting Venue Partners
            </Badge>
            <h1 className="mb-4 font-display text-5xl font-bold md:text-6xl">Become a Host</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
              Turn your café, pub, or community space into the go-to game night destination. We handle the games — you
              reap the rewards.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-display text-base"
              onClick={() => document.getElementById("host-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowRight className="mr-2 h-5 w-5" /> Apply Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">Why Host With Us?</h2>
          <p className="mb-10 text-center text-muted-foreground">Everything you need to run a successful game night.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-xl bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-10 text-center font-display text-3xl font-bold text-foreground">How It Works</h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-10 text-center font-display text-3xl font-bold text-foreground">What Hosts Are Saying</h2>
        </motion.div>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-4 italic text-muted-foreground">"{t.quote}"</p>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.venue}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="host-form" className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">Apply to Host</h2>
            <p className="mb-8 text-center text-muted-foreground">
              Fill out the form below and we'll get back to you within 48 hours.
            </p>
          </motion.div>

          <div className="mx-auto max-w-lg">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Card>
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
                    <h3 className="mb-2 font-display text-xl font-bold text-foreground">Application Received!</h3>
                    <p className="mb-4 text-muted-foreground">
                      Thanks for your interest! We'll review your application and reach out within 48 hours.
                    </p>
                    <Button onClick={() => navigate("/board-games")} className="font-display">
                      Back to Game Nights
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Your Name</label>
                      <Input placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                      <Input type="email" placeholder="jane@venue.com" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Business / Venue Name</label>
                    <Input placeholder="The Cozy Corner Café" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Venue Address</label>
                    <Input placeholder="123 Main St, Toronto, ON" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Tell us about your space & preferred schedule
                    </label>
                    <Textarea placeholder="We have seating for ~30 guests and would love to host on Thursday evenings..." rows={4} />
                  </div>
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display"
                    size="lg"
                    onClick={() => setSubmitted(true)}
                  >
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeAHost;
