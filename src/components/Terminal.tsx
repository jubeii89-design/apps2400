import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error" | "info";
  text: string;
}

const BANNER = [
  "  ____  _             _             _    _   _ ",
  " / ___|| |_ _ __ __ _| |_ ___  __ _(_) _| |_(_)",
  " \\___ \\| __| '__/ _` | __/ _ \\/ _` | |/ __| __|",
  "  ___) | |_| | | (_| | ||  __/ (_| | | (__| |_ ",
  " |____/ \\__|_|  \\__,_|\\__\\___|\\__, |_|\\___|\\__|",
  "                               |___/            ",
  "",
  " Strategic Titan's Gaming Platform v1.0.0",
  " Type 'help' for available commands.",
  "",
];

const HELP_TEXT = [
  "Available commands:",
  "",
  "  help              Show this help message",
  "  games             List board games",
  "  online            List online games",
  "  leaderboard       Show leaderboard",
  "  tournaments       Tournament info",
  "  goto <page>       Navigate to a page",
  "  ls                List all pages",
  "  about             About Strategic Titan's",
  "  whoami            Current user info",
  "  clear             Clear the terminal",
  "  exit              Close the terminal",
  "",
  "Pages for 'goto': home, board-games, online-games,",
  "  leaderboards, tournaments, buy-games, reserve,",
  "  partnerships, charity, contact, faq, download,",
  "  login, register",
];

const PAGE_MAP: Record<string, string> = {
  home: "/",
  "board-games": "/board-games",
  "online-games": "/online-games",
  leaderboards: "/leaderboards",
  tournaments: "/tournaments",
  "buy-games": "/buy-games",
  reserve: "/reserve",
  partnerships: "/partnerships",
  charity: "/charity",
  contact: "/contact",
  faq: "/faq",
  download: "/download",
  login: "/login",
  register: "/register",
};

interface Props {
  open: boolean;
  onClose: () => void;
}

const Terminal = ({ open, onClose }: Props) => {
  const navigate = useNavigate();
  const [lines, setLines] = useState<TerminalLine[]>(
    BANNER.map((text) => ({ type: "info", text }))
  );
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const addLines = useCallback((newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const processCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim();
      if (!cmd) return;

      addLines([{ type: "input", text: `$ ${cmd}` }]);
      setHistory((prev) => [cmd, ...prev]);
      setHistoryIndex(-1);

      const [command, ...args] = cmd.toLowerCase().split(/\s+/);

      switch (command) {
        case "help":
          addLines(HELP_TEXT.map((text) => ({ type: "output" as const, text })));
          break;

        case "clear":
          setLines(BANNER.map((text) => ({ type: "info", text })));
          break;

        case "exit":
          onClose();
          break;

        case "about":
          addLines([
            { type: "output", text: "Strategic Titan's Gaming Platform" },
            { type: "output", text: "─────────────────────────────────" },
            { type: "output", text: "Your premier destination for board games," },
            { type: "output", text: "online gaming, tournaments, and more." },
            { type: "output", text: "" },
            { type: "output", text: "Website:  https://strategictitans.com" },
            { type: "output", text: "Version:  1.0.0" },
          ]);
          break;

        case "whoami":
          addLines([
            { type: "output", text: "guest@strategictitans" },
            { type: "output", text: "Role: Visitor" },
            { type: "output", text: "Login to unlock full access." },
          ]);
          break;

        case "games":
          addLines([
            { type: "output", text: "Board Games available on Strategic Titan's:" },
            { type: "output", text: "" },
            { type: "output", text: "  • Chess          — Classic strategy game" },
            { type: "output", text: "  • Catan          — Resource management" },
            { type: "output", text: "  • Risk           — World domination" },
            { type: "output", text: "  • Pandemic       — Cooperative survival" },
            { type: "output", text: "  • Ticket to Ride — Route building" },
            { type: "output", text: "" },
            { type: "output", text: "Run 'goto board-games' to browse all games." },
          ]);
          break;

        case "online":
          addLines([
            { type: "output", text: "Online Games available on Strategic Titan's:" },
            { type: "output", text: "" },
            { type: "output", text: "  • Chess Online   — Play vs humans or AI" },
            { type: "output", text: "  • Poker          — Texas Hold'em tables" },
            { type: "output", text: "  • Word Games     — Multiplayer word battles" },
            { type: "output", text: "" },
            { type: "output", text: "Run 'goto online-games' to browse all." },
          ]);
          break;

        case "leaderboard":
          addLines([
            { type: "output", text: "Top Players — Strategic Titan's Leaderboard" },
            { type: "output", text: "────────────────────────────────────────────" },
            { type: "output", text: "  #1   TitanMaster     2,450 pts" },
            { type: "output", text: "  #2   GameWarlord     2,120 pts" },
            { type: "output", text: "  #3   StrategistX     1,980 pts" },
            { type: "output", text: "  #4   BoardKing       1,755 pts" },
            { type: "output", text: "  #5   DiceWizard      1,640 pts" },
            { type: "output", text: "" },
            { type: "output", text: "Run 'goto leaderboards' for the full list." },
          ]);
          break;

        case "tournaments":
          addLines([
            { type: "output", text: "Upcoming Tournaments:" },
            { type: "output", text: "" },
            { type: "output", text: "  [OPEN]   Chess Open Championship  — May 2026" },
            { type: "output", text: "  [OPEN]   Catan Masters Cup        — Jun 2026" },
            { type: "output", text: "  [SOON]   Risk Grand Prix          — Jul 2026" },
            { type: "output", text: "" },
            { type: "output", text: "Run 'goto tournaments' to register." },
          ]);
          break;

        case "ls":
          addLines([
            { type: "output", text: "Pages:" },
            { type: "output", text: "" },
            ...Object.keys(PAGE_MAP).map((page) => ({
              type: "output" as const,
              text: `  ${page.padEnd(16)} → ${PAGE_MAP[page]}`,
            })),
          ]);
          break;

        case "goto":
        case "navigate":
        case "cd": {
          const target = args[0];
          if (!target) {
            addLines([{ type: "error", text: `Usage: ${command} <page>` }]);
            break;
          }
          const path = PAGE_MAP[target];
          if (!path) {
            addLines([
              { type: "error", text: `Unknown page: '${target}'` },
              { type: "error", text: "Run 'ls' to see available pages." },
            ]);
            break;
          }
          addLines([{ type: "output", text: `Navigating to ${path}...` }]);
          setTimeout(() => {
            navigate(path);
            onClose();
          }, 400);
          break;
        }

        default:
          addLines([
            {
              type: "error",
              text: `Command not found: '${command}'. Type 'help' for options.`,
            },
          ]);
      }
    },
    [addLines, navigate, onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = historyIndex + 1;
      if (next < history.length) {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const lineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "input":
        return "text-green-300";
      case "error":
        return "text-red-400";
      case "info":
        return "text-cyan-400";
      default:
        return "text-green-100";
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="flex w-full max-w-3xl flex-col rounded-lg border border-green-900/60 bg-gray-950 shadow-2xl shadow-green-900/20"
            style={{ height: "clamp(400px, 60vh, 600px)" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 rounded-t-lg border-b border-green-900/40 bg-gray-900 px-4 py-2">
              <button
                onClick={onClose}
                className="flex h-3 w-3 items-center justify-center rounded-full bg-red-500 hover:bg-red-400"
                aria-label="Close"
              >
                <X className="h-2 w-2 text-red-900 opacity-0 hover:opacity-100" />
              </button>
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="mx-auto font-mono text-xs text-green-600">
                strategic-titans — bash
              </span>
              <button onClick={onClose} className="ml-auto text-green-800 hover:text-green-500">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Output area */}
            <div
              className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <div key={i} className={lineColor(line.type)}>
                  {line.text || " "}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div className="flex items-center gap-2 border-t border-green-900/40 px-4 py-2 font-mono text-xs">
              <span className="text-green-500">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-green-200 outline-none placeholder:text-green-900"
                placeholder="type a command..."
                autoComplete="off"
                spellCheck={false}
              />
              <span className="animate-pulse text-green-500">▋</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
