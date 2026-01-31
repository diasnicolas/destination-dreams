import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Globe, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

import photo1516426122078 from "@/assets/africa-mauricio/photo-1516426122078-c23e76319801.jpg";
import photo1547471080 from "@/assets/africa-mauricio/photo-1547471080-7cc2caa01a7e.jpg";
import photo1580060839134 from "@/assets/africa-mauricio/photo-1580060839134-75a5edca2e99.jpg";
import photo1589197331516 from "@/assets/africa-mauricio/photo-1589197331516-4d84b72ebde3.jpg";
import grupoImg from "@/assets/africa-mauricio/grupo_safari_11zon.jpg";

const heroImages = [
  { src: photo1516426122078, alt: "Leão no Safári" },
  { src: photo1547471080, alt: "Elefantes na África" },
  { src: photo1580060839134, alt: "Cape Town Table Mountain" },
  { src: photo1589197331516, alt: "Ilhas Maurício" },
  { src: grupoImg, alt: "Grupo viagem 2025" },
];

const highlights = [
  {
    icon: Calendar,
    title: "16 dias de transformação",
    description: "África do Sul & Ilhas Maurício",
  },
  {
    icon: User,
    title: "Acompanhamento pessoal",
    description: "Evandro Mendes (CEO, Especialista em África)",
  },
  {
    icon: Globe,
    title: "5 destinos icônicos",
    description: "Johannesburg → Kruger → Cape Town → Stellenbosch → Maurício",
  },
  {
    icon: Sparkles,
    title: "Experiências exclusivas",
    description: "Big Five, voo privado, vinícolas, praias paradisíacas",
  },
];

export const HeroSectionAM = () => {
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
              01 de Outubro de 2026 • 16 dias de transformação
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Você Está Pronto Para Viver</span>
            <br />
            <span className="text-gradient-gold">A Emoção Do Safári Africano?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-primary font-light tracking-wide mb-12 max-w-3xl mx-auto"
          >
            Uma jornada de 16 dias pela África do Sul e Ilhas Maurício que vai despertar todos os seus sentidos
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

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              onClick={() => scrollToSection("#formulario")}
              className="btn-luxury inline-block rounded-md text-sm md:text-base animate-pulse-gold"
            >
              QUERO VIVER A EMOÇÃO DO SAFÁRI AFRICANO
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Descubra mais
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
