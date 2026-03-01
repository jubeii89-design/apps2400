import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is Pokerstr8ts?", a: "Pokerstr8ts is a unique board game that combines elements of poker and str8ts number puzzles into an exciting competitive experience." },
  { q: "How do I enter a tournament?", a: "Visit centriko.com and enter the event code for the tournament you want to join. Event codes are listed on our Tournaments page." },
  { q: "Can I play APPs2400 games online?", a: "Yes! Several of our games are available to play online. Visit the Online Games page or centriko.com for more details." },
  { q: "How do I reserve a game?", a: "Go to our Reserve A Game page, fill out the form with your preferred game and date, and we'll confirm your reservation." },
  { q: "Do you offer charity fundraiser programs?", a: "Absolutely! We partner with charities to organize Pokerstr8ts tournament fundraisers. Visit our Charity page to learn more." },
  { q: "How can my business partner with APPs2400?", a: "We offer flexible partnership programs for small businesses. Visit our Partnerships page to submit an inquiry." },
  { q: "Where can I buy APPs2400 games?", a: "You can browse and purchase games on our Buy Games page. We ship across Canada and internationally." },
  { q: "Is the Pokerstr8ts download free?", a: "Yes! The standalone Pokerstr8ts computer game is completely free to download from our website." },
];

const FAQ = () => (
  <div className="container mx-auto px-4 py-12">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="mb-2 font-display text-4xl font-bold">Frequently Asked Questions</h1>
      <p className="mb-8 text-lg text-muted-foreground">Find answers to common questions about APPs2400.</p>
    </motion.div>

    <div className="mx-auto max-w-2xl">
      <Accordion type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="font-display text-left">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default FAQ;
