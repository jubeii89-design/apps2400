import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 font-display text-4xl font-bold">Contact Us</h1>
        <p className="mb-8 text-lg text-muted-foreground">Have a question? We'd love to hear from you.</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          { icon: Mail, title: "Email", info: "info@apps2400.com" },
          { icon: Phone, title: "Phone", info: "+1 (800) 555-2400" },
          { icon: MapPin, title: "Location", info: "Canada" },
        ].map(({ icon: Icon, title, info }) => (
          <Card key={title}>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-primary/10 p-3"><Icon className="h-6 w-6 text-primary" /></div>
              <div>
                <p className="font-display font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{info}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-muted p-8">
        <h2 className="mb-4 font-display text-2xl font-bold">Send a Message</h2>
        {submitted ? (
          <p className="text-center font-display text-lg font-semibold text-secondary">Message sent! We'll reply soon.</p>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <Input placeholder="Your Name" required />
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Subject" required />
            <Textarea placeholder="Your message..." rows={5} required />
            <Button className="w-full font-display" size="lg"><Send className="mr-2 h-4 w-4" /> Send Message</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
