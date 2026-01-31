import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Compass, MapPin, Plane, Home, ArrowLeft, Map, Phone, Mail, Globe, Anchor, Instagram } from "lucide-react";
import cadasturImage from "@/assets/logoCadastur.png";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();
  const [compassRotation, setCompassRotation] = useState(0);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Animate compass spinning when lost
    const interval = setInterval(() => {
      setCompassRotation(prev => prev + 360);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [location.pathname]);

  const floatingDestinations = [
    { name: "Paris", delay: 0 },
    { name: "Tóquio", delay: 0.5 },
    { name: "Sydney", delay: 1 },
    { name: "Londres", delay: 1.5 },
    { name: "Santorini", delay: 2 },
    { name: "Patagônia", delay: 2.5 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-navy via-ocean-deep to-navy">
      <SEO 
        title="Página Não Encontrada | WE Travel UK"
        description="Oops! Parece que você se perdeu na viagem. Não se preocupe, vamos te ajudar a encontrar o destino dos seus sonhos."
        keywords="404, página não encontrada, WE Travel UK"
      />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating destination tags */}
        {floatingDestinations.map((dest, i) => (
          <motion.div
            key={dest.name}
            className="absolute text-turquoise/20 font-display text-xl"
            style={{
              left: `${10 + (i * 15) % 80}%`,
              top: `${20 + (i * 20) % 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: dest.delay,
            }}
          >
            <MapPin className="w-4 h-4 inline mr-1" />
            {dest.name}
          </motion.div>
        ))}

        {/* Animated plane path */}
        <motion.div
          className="absolute text-turquoise/30"
          animate={{
            x: ["-10%", "110%"],
            y: ["20%", "60%", "30%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Plane className="w-8 h-8 rotate-45" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Spinning Compass */}
          <motion.div
            className="mb-8 inline-block"
            animate={{ rotate: compassRotation }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-turquoise/20 rounded-full blur-2xl scale-150" />
              <Compass className="w-32 h-32 text-turquoise relative z-10" />
            </div>
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-8xl md:text-9xl font-display font-bold bg-gradient-to-r from-turquoise via-coral to-turquoise bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Destino Não Encontrado
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Parece que você se perdeu na jornada! Este destino ainda não está em nosso mapa de aventuras.
            </p>
            <p className="text-sm text-turquoise/70 italic">
              "Nem todos os que vagam estão perdidos" — mas esta página está!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-turquoise to-coral text-white font-semibold rounded-full hover:shadow-lg hover:shadow-turquoise/30 transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Voltar ao Início
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-8 py-4 border-2 border-turquoise/50 text-turquoise font-semibold rounded-full hover:bg-turquoise/10 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Página Anterior
            </button>
          </motion.div>

          {/* Suggested Destinations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-8 border-t border-turquoise/20"
          >
            <p className="text-muted-foreground mb-6 flex items-center justify-center gap-2">
              <Map className="w-4 h-4" />
              Explore nossos destinos disponíveis:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Cruzeiro Transpacífico", path: "/cruzeiro-transpacifico-2027" },
                { name: "Austrália & Nova Zelândia", path: "/australia-novazelandia-2027" },
                { name: "Reino Unido", path: "/reino-unido-2026" },
                { name: "Suíça de Trem", path: "/suica-trem-2026" },
                { name: "África do Sul & Ilhas Maurício", path: "/africa-mauricio-2026" },
                { name: "China: Maravilhas Culturais", path: "/china-maravilhas-2027" },
                { name: "Japão & China", path: "/japao-china-2026" },
                { name: "Puglia & Costa Amalfitana", path: "/puglia-amalfi-2026" },
                { name: "Tailândia & Dubai", path: "/tailandia-dubai-2026" },
                { name: "Cruzeiro Norte Europeu", path: "/cruzeiro-norte-europeu-2026" },
                { name: "Ushuaia, El Calafate & Buenos Aires", path: "/ushuaia-calafate-2026" },
                { name: "Mercados de Natal", path: "/mercados-natal-2026" },
                { name: "Lapônia & Tromsø", path: "/laponia-tromso-2027" },
                { name: "Grécia Além do Óbvio", path: "/grecia-alem-do-obvio-2026" },
              ].map((dest, i) => (
                <motion.div
                  key={dest.path}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <Link
                    to={dest.path}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-navy/50 border border-turquoise/30 rounded-full text-sm text-turquoise hover:bg-turquoise/20 hover:border-turquoise transition-all duration-300"
                  >
                    <MapPin className="w-3 h-3" />
                    {dest.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 fill-turquoise/10"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"
            animate={{
              d: [
                "M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z",
                "M0,64 C480,-20 960,150 1440,64 L1440,120 L0,120 Z",
                "M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 w-full border-t border-turquoise/20 bg-navy/50 backdrop-blur-sm">
        {/* Floating anchor */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-6 right-20 text-turquoise/10 hidden md:block"
        >
          <Anchor className="w-16 h-16" />
        </motion.div>

        <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            {/* Agency Info */}
            <div className="space-y-2">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                WE Travel UK
              </h3>
              <p className="text-muted-foreground text-sm">
                Transformando sonhos em destinos inesquecíveis
              </p>
            </div>

            {/* Link to Home */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-turquoise to-coral text-white font-semibold rounded-full hover:shadow-lg hover:shadow-turquoise/30 transition-all duration-300 hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Conheça Nossos Destinos
            </Link>

            {/* Signature */}
            <div className="pt-6 border-t border-turquoise/20">
              <p className="font-display text-lg font-bold text-foreground">
                Evandro Mendes
              </p>
              <div className="text-sm text-muted-foreground space-y-1 mt-2">
                <p>CEO, WE Travel UK</p>
                <p>Aussie Travel Specialist — Certificado pelo Governo Australiano</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="flex items-center px-4 py-2 shadow-sm">
                    <div className="w-24 h-10 flex items-center justify-center">
                      <img 
                        src={cadasturImage} 
                        alt="Logo CADASTUR" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-foreground text-sm md:text-base">45.759.934/0001-40</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 text-muted-foreground text-sm">
              <a
                href="tel:+5513982263757"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(13) 98226-3757</span>
              </a>
              <a
                href="mailto:contato@wetraveluk.com.br"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contato@wetraveluk.com.br</span>
              </a>
              <a
                href="https://instagram.com/wetravel_uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@wetravel_uk</span>
              </a>
              <a
                href="https://wetraveluk.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>wetraveluk.com.br</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground pt-6">
              © {new Date().getFullYear()} WE Travel UK. Todos os direitos reservados.
            </p>

            {/* ZapTurize Link */}
            <div className="pt-4 border-t border-turquoise/10">
              <a
                href="https://zapturize.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <span>Desenvolvido por</span>
                <span className="font-medium text-foreground">ZapTurize</span>
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
