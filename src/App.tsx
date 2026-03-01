import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import BoardGames from "./pages/BoardGames";
import OnlineGames from "./pages/OnlineGames";
import Tournaments from "./pages/Tournaments";
import BuyGames from "./pages/BuyGames";
import Partnerships from "./pages/Partnerships";
import Charity from "./pages/Charity";
import Reserve from "./pages/Reserve";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/board-games" element={<BoardGames />} />
            <Route path="/online-games" element={<OnlineGames />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/buy-games" element={<BuyGames />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
