import { lazy, Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Terminal from "./components/Terminal";

const Index = lazy(() => import("./pages/Index"));
const BoardGames = lazy(() => import("./pages/BoardGames"));
const GameDetail = lazy(() => import("./pages/GameDetail"));
const OnlineGames = lazy(() => import("./pages/OnlineGames"));
const OnlineGameDetail = lazy(() => import("./pages/OnlineGameDetail"));
const Leaderboards = lazy(() => import("./pages/Leaderboards"));
const Tournaments = lazy(() => import("./pages/Tournaments"));
const BuyGames = lazy(() => import("./pages/BuyGames"));
const BuyGameDetail = lazy(() => import("./pages/BuyGameDetail"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const BecomeAHost = lazy(() => import("./pages/BecomeAHost"));
const Charity = lazy(() => import("./pages/Charity"));
const Reserve = lazy(() => import("./pages/Reserve"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const DownloadPage = lazy(() => import("./pages/Download"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "`" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setTerminalOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
        <Layout onOpenTerminal={() => setTerminalOpen(true)}>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/board-games" element={<BoardGames />} />
              <Route path="/board-games/:gameId" element={<GameDetail />} />
              <Route path="/online-games" element={<OnlineGames />} />
              <Route path="/online-games/:gameId" element={<OnlineGameDetail />} />
              <Route path="/leaderboards" element={<Leaderboards />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/buy-games" element={<BuyGames />} />
              <Route path="/buy-games/:gameId" element={<BuyGameDetail />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/become-a-host" element={<BecomeAHost />} />
              <Route path="/charity" element={<Charity />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
