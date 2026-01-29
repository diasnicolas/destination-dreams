import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Index from "./pages/Index";
import AustraliaNZ from "./pages/AustraliaNZ";
import ReinoUnido from "./pages/ReinoUnido";
import SuicaTrem from "./pages/SuicaTrem";
import AfricaMauricio from "./pages/AfricaMauricio";
import ChinaMaravilhas from "./pages/ChinaMaravilhas";
import JapaoChina from "./pages/JapaoChina";
import PugliaAmalfi from "./pages/PugliaAmalfi";
import TailandiaDubai from "./pages/TailandiaDubai";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cruzeiro-transpacifico-2027" element={<Index />} />
          <Route path="/australia-novazelandia-2027" element={<AustraliaNZ />} />
          <Route path="/reino-unido" element={<ReinoUnido />} />
          <Route path="/suica-trem" element={<SuicaTrem />} />
          <Route path="/africa-mauricio" element={<AfricaMauricio />} />
          <Route path="/china-maravilhas" element={<ChinaMaravilhas />} />
          <Route path="/japao-china" element={<JapaoChina />} />
          <Route path="/puglia-amalfi" element={<PugliaAmalfi />} />
          <Route path="/tailandia-dubai" element={<TailandiaDubai />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
