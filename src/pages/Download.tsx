import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Heart, CreditCard, Building2, Receipt, HandHeart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const presetAmounts = [5, 10, 19, 25, 50];
const currencies = ["CAD", "USD"];

const Download = () => {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(19);
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState("CAD");

  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <div className="min-h-screen bg-background">
      {/* Top banner */}
      <section className="bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Download className="mx-auto mb-4 h-12 w-12" />
            <h1 className="mb-3 font-display text-4xl font-bold md:text-5xl">
              Download Pokerstr8ts
            </h1>
            <p className="mx-auto max-w-xl text-primary-foreground/80">
              Get the free standalone Pokerstr8ts game — and if you love it, consider supporting our mission.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left column — Donation */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-2">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-secondary/20 p-3">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">Support APPs2400</h2>
                    <p className="text-sm text-muted-foreground">
                      Your donation supports game development and charitable tournaments.
                    </p>
                  </div>
                </div>

                {/* Frequency */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-foreground">Donation Frequency</label>
                  <div className="flex gap-2">
                    {(["one-time", "monthly"] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFrequency(f)}
                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                          frequency === f
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {f === "one-time" ? "One-time" : "Monthly"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-foreground">Select Amount</label>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`rounded-xl px-5 py-3 text-sm font-bold transition-all ${
                          selectedAmount === amount && !customAmount
                            ? "bg-secondary text-secondary-foreground scale-105 shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">or</span>
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="max-w-[160px]"
                      min={1}
                    />
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground"
                    >
                      {currencies.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-display text-base">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Donate ${activeAmount || "..."} {currency} via Credit Card
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 font-display text-base">
                    Donate via PayPal
                  </Button>
                </div>

                {/* Collapsible sections */}
                <div className="space-y-3">
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/80 transition-colors">
                      <span className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" /> Bank Transfer Information
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pt-3 text-sm text-muted-foreground">
                      <p>For bank transfers, please contact us at <strong>donate@apps2400.com</strong> and we'll provide the relevant banking details for your region.</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/80 transition-colors">
                      <span className="flex items-center gap-2">
                        <Receipt className="h-4 w-4" /> Tax Deduction Information
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pt-3 text-sm text-muted-foreground">
                      <p>Donations to APPs2400's charitable programs may be eligible for tax deductions in Canada. A tax receipt will be issued for donations over $20 CAD.</p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Donate time */}
                <div className="mt-8 rounded-xl bg-accent/10 p-5">
                  <div className="flex items-start gap-3">
                    <HandHeart className="mt-0.5 h-6 w-6 text-accent" />
                    <div>
                      <h3 className="mb-1 font-display text-lg font-semibold text-foreground">Or Donate Your Time</h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Help organize charity tournaments, volunteer at events, or spread the word about Pokerstr8ts in your community.
                      </p>
                      <Link to="/charity">
                        <Button variant="outline" size="sm">Learn about volunteering</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA below donation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
                  <Download className="h-12 w-12 shrink-0 text-primary" />
                  <div className="flex-1">
                    <h3 className="mb-1 font-display text-xl font-bold text-foreground">Ready to play?</h3>
                    <p className="text-sm text-muted-foreground">Download Pokerstr8ts free for Windows. No account required.</p>
                  </div>
                  <Button size="lg" className="font-display text-base shrink-0">
                    <Download className="mr-2 h-5 w-5" /> Download Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right column — About */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  We're a community-driven board game company
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  APPs2400 is a Canadian company dedicated to bringing people together through innovative board games and online tournaments. Every donation directly supports:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "New game development and design",
                    "Free community tournament hosting",
                    "Charity fundraiser programs across Canada",
                    "Keeping Pokerstr8ts free for everyone",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <h4 className="mb-2 font-display text-lg font-semibold text-foreground">
                  Your support helps us keep creating
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  From developing new games like Pokerstr8ts to organizing charity tournaments, your generosity makes a real difference. Thank you for being part of the APPs2400 community!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
