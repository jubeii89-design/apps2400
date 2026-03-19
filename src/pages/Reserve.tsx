import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const Reserve = () => {
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 font-display text-2xl font-bold">Reserve A Game</h1>
        <p className="mb-5 text-sm text-muted-foreground">Reserve a board game for your next event or game night.</p>
      </motion.div>

      <div className="mx-auto max-w-lg rounded-2xl bg-muted p-8">
        {submitted ? (
          <div className="text-center">
            <p className="font-display text-lg font-semibold text-secondary">Reservation submitted! We'll confirm shortly.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <Input placeholder="Your Name" required />
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Phone Number" />
            <Select>
              <SelectTrigger><SelectValue placeholder="Select a Game" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="pokerstr8ts">Pokerstr8ts Deluxe</SelectItem>
                <SelectItem value="crosswordpyramids">CrossWord Pyramids</SelectItem>
                <SelectItem value="treasure">Treasure Hunt Family</SelectItem>
                <SelectItem value="wordwizard">Word Wizard Pro</SelectItem>
                <SelectItem value="galaxy">Galaxy Quest</SelectItem>
                <SelectItem value="dicederby">Dice Derby Turbo</SelectItem>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
            <Button className="w-full font-display" size="lg"><Send className="mr-2 h-4 w-4" /> Reserve Game</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Reserve;
