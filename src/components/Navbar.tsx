import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dice5 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const topLinks = [
  { label: "Home", path: "/" },
  { label: "Games Night", path: "/board-games" },
  { label: "Online Games", path: "/online-games" },
  { label: "Tournaments", path: "/tournaments" },
  { label: "Reserve A Game", path: "/reserve" },
  { label: "Buy Games", path: "/buy-games" },
];

const bottomLinks = [
  { label: "Partnerships", path: "/partnerships" },
  { label: "Charity", path: "/charity" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
  { label: "Download", path: "/download" },
];

const allLinks = [...topLinks, ...bottomLinks];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path: string) =>
    `rounded px-2 py-0.5 text-xs font-medium transition-colors hover:bg-muted ${
      location.pathname === path
        ? "bg-primary/10 text-primary"
        : "text-muted-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        {/* Top row: logo + top 5 links + auth */}
        <div className="flex items-center justify-between py-1">
          <Link to="/" className="flex items-center gap-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <Dice5 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-sm font-bold text-foreground">
              Strategic <span className="text-primary">Titan's</span>
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {topLinks.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-1.5 lg:flex">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="h-7 text-xs px-2">Login</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="h-7 text-xs px-2">Register</Button>
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Bottom row: remaining 6 links (desktop only) */}
        <div className="hidden items-center justify-center gap-0.5 border-t border-border/50 py-0.5 lg:flex">
          {bottomLinks.map((link) => (
            <Link key={link.path} to={link.path} className={linkClass(link.path)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t bg-card lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-0.5 px-4 py-3">
              {allLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`rounded px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full h-7 text-xs">Login</Button>
                </Link>
                <Link to="/register" className="flex-1" onClick={() => setOpen(false)}>
                  <Button className="w-full h-7 text-xs">Register</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
