import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Index from "./pages/Index";
import CruzeiroTranspacifico from "./pages/CruzeiroTranspacifico";
import AustraliaNZ from "./pages/AustraliaNZ";
import ReinoUnido from "./pages/ReinoUnido";
import SuicaTrem from "./pages/SuicaTrem";
import AfricaMauricio from "./pages/AfricaMauricio";
import ChinaMaravilhas from "./pages/ChinaMaravilhas";
import JapaoChina from "./pages/JapaoChina";
import PugliaAmalfi from "./pages/PugliaAmalfi";
import TailandiaDubai from "./pages/TailandiaDubai";
import CruzeiroNorte from "./pages/CruzeiroNorte";
import UshuaiaCalafate from "./pages/UshuaiaCalafate";
import MercadosNatal from "./pages/MercadosNatal";
import LaponiaTromso from "./pages/LaponiaTromso";
import GreciaAlemDoObvio from "./pages/GreciaAlemDoObvio";
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
          <Route path="/cruzeiro-transpacifico-2027" element={<CruzeiroTranspacifico />} />
          <Route path="/australia-novazelandia-2027" element={<AustraliaNZ />} />
          <Route path="/reino-unido-2026" element={<ReinoUnido />} />
          <Route path="/suica-trem-2026" element={<SuicaTrem />} />
          <Route path="/africa-mauricio-2026" element={<AfricaMauricio />} />
          <Route path="/china-maravilhas-2027" element={<ChinaMaravilhas />} />
          <Route path="/japao-china-2026" element={<JapaoChina />} />
          <Route path="/puglia-amalfi-2026" element={<PugliaAmalfi />} />
          <Route path="/tailandia-dubai-2026" element={<TailandiaDubai />} />
          <Route path="/cruzeiro-norte-europeu-2026" element={<CruzeiroNorte />} />
          <Route path="/ushuaia-calafate-2026" element={<UshuaiaCalafate />} />
          <Route path="/mercados-natal-2026" element={<MercadosNatal />} />
          <Route path="/laponia-tromso-2027" element={<LaponiaTromso />} />
          <Route path="/grecia-alem-do-obvio-2026" element={<GreciaAlemDoObvio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
