import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Globe, Ship } from "lucide-react";
import { useState, useEffect } from "react";

import photo1531366936337 from "@/assets/cruzeiro-norte/vertical-aerial-view-beautiful-town-lofoten-norway-captured-fog_11zon.jpg";
import photo1520483601560 from "@/assets/cruzeiro-norte/beautiful-view-crowland-abbey-from-snowden-field-cloudy-day_11zon.jpg";
import photo1476514525535 from "@/assets/cruzeiro-norte/geiranger-fjord-waterfall-seven-sisters-beautiful-nature-norway-natural-landscape_11zon.jpg";

const heroImages = [
  { src: photo1531366936337, alt: "Aurora Boreal na Islândia" },
  { src: photo1520483601560, alt: "Fjords Noruegueses" },
  { src: photo1476514525535, alt: "Cruzeiro pelo Atlântico" }
];

const highlights = [
  {
    icon: Calendar,
    title: "21 dias de transformação",
    description: "9 a 29 de Setembro de 2026",
  },
  {
    icon: User,
    title: "Validado pessoalmente",
    description: "Evandro testou cada detalhe",
  },
  {
    icon: Globe,
    title: "4 países icônicos",
    description: "Londres → Islândia → Noruega → Escócia",
  },
  {
    icon: Ship,
    title: "Norwegian Star",
    description: "15 noites de cruzeiro de luxo",
  },
];

export const HeroSectionCN = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex].src}
            alt={heroImages[currentImageIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="hero-overlay absolute inset-0" />
        
        {/* Wave pattern overlay */}
        <div className="absolute inset-0 wave-pattern" />
        
        {/* Image indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? "bg-primary w-6" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ver imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-body tracking-wide text-primary">
              21 Dias de Imersão • Expedição de Luxo
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Cruzeiro</span>
            <br />
            <span className="text-gradient-gold">Islândia, Noruega, Escócia & Reino Unido</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-primary font-light tracking-wide mb-12 max-w-3xl mx-auto"
          >
            Há algo no Norte que chama... Uma expedição onde a natureza ainda governa e os humanos são visitantes respeitosos.
          </motion.p>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass-card gold-border-left p-4 text-left rounded-lg hover:bg-muted/20 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection("#formulario")}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105"
            >
              Reservar Minha Vaga
            </button>
            <button
              onClick={() => scrollToSection("#journey")}
              className="px-8 py-4 glass-card text-foreground font-semibold rounded-lg hover:bg-muted/30 transition-all duration-300"
            >
              Ver Itinerário Completo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
