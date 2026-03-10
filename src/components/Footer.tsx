import { Link } from "react-router-dom";
import { Gamepad2, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialLinks = [
  { label: "Facebook", url: "https://facebook.com", icon: "f" },
  { label: "Instagram", url: "https://instagram.com", icon: "ig" },
  { label: "X", url: "https://x.com", icon: "x" },
  { label: "YouTube", url: "https://youtube.com", icon: "yt" },
  { label: "TikTok", url: "https://tiktok.com", icon: "tt" },
];

const Footer = () => (
  <footer className="border-t border-primary/20 bg-background relative">
    {/* Top neon line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 border border-primary/40">
              <Gamepad2 className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display text-lg font-bold">
              APPs<span className="text-primary">2400</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Canadian Board Game Company — bringing fun to tables everywhere since day one.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 font-pixel text-[10px] uppercase tracking-widest text-primary">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Board Games", path: "/board-games" },
              { label: "Buy Games", path: "/buy-games" },
              { label: "Tournaments", path: "/tournaments" },
              { label: "Contact", path: "/contact" },
              { label: "FAQ", path: "/faq" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 font-pixel text-[10px] uppercase tracking-widest text-primary">Follow Us</h4>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border text-xs font-bold text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:neon-border"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-4 font-pixel text-[10px] uppercase tracking-widest text-primary">Newsletter</h4>
          <p className="mb-3 text-sm text-muted-foreground">Get updates on new games & tournaments.</p>
          <div className="flex gap-2">
            <Input placeholder="Your email" className="flex-1 bg-muted border-border focus:border-primary" />
            <Button size="icon" className="neon-border bg-primary/20 text-primary border border-primary/40 hover:bg-primary hover:text-primary-foreground">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} APPs2400 Canadian Board Game Company. All rights reserved.
        </p>
        <p className="mt-1 font-pixel text-[8px] text-muted-foreground/50 tracking-wider">
          <Zap className="inline h-3 w-3 text-primary/50" /> POWERED BY PIXELS & PASSION
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;