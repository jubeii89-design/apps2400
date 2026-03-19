import { Link } from "react-router-dom";
import { Dice5, Mail } from "lucide-react";
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
  <footer className="border-t bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Dice5 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">
              APPs<span className="text-primary">2400</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Canadian Board Game Company — bringing fun to tables everywhere since day one.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
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
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">Follow Us</h4>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">Newsletter</h4>
          <p className="mb-3 text-sm text-muted-foreground">Get updates on new games & tournaments.</p>
          <div className="flex gap-2">
            <Input placeholder="Your email" className="flex-1" />
            <Button size="icon"><Mail className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Strategic Titan's Canadian Board Game Company. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
