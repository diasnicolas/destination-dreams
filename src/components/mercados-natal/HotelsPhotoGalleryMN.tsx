import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import hotelEstrasburgo from "@/assets/mercados-natal/photo-1566073771259-6a8506099945.jpg";
import hotelColmar from "@/assets/mercados-natal/photo-1582719508461-905c673771fd.jpg";
import hotelMontreux from "@/assets/mercados-natal/photo-1551882547-ff40c63fe5fa.jpg";
import hotelSilsMaria from "@/assets/mercados-natal/photo-1520250497591-112f2f40a3f4.jpg";

const galleryImages = [
  { src: hotelEstrasburgo, title: "Sofitel Strasbourg Grande Ile", category: "Estrasburgo • 3 noites" },
  { src: hotelColmar, title: "La Maison des Têtes", category: "Colmar • 3 noites" },
  { src: hotelMontreux, title: "Fairmont Le Montreux Palace", category: "Montreux • 2 noites" },
  { src: hotelSilsMaria, title: "Hotel Schweizerhof Sils Maria", category: "Sils Maria • 2 noites" },
];

export const HotelsPhotoGalleryMN = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Onde você vai se </span>
            <span className="text-gradient-gold">Hospedar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hotéis 4-5 estrelas selecionados pessoalmente
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-primary uppercase tracking-wider">{image.category}</span>
                <h3 className="text-sm font-display font-semibold text-foreground">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hotels Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl border border-primary/20">
              <h3 className="font-bold text-lg mb-2 text-primary">Sofitel Strasbourg Grande Ile</h3>
              <p className="text-sm text-muted-foreground">
                Localização privilegiada no coração de Estrasburgo, a poucos passos da Catedral e dos mercados de Natal.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-primary/20">
              <h3 className="font-bold text-lg mb-2 text-primary">La Maison des Têtes</h3>
              <p className="text-sm text-muted-foreground">
                Hotel boutique histórico em Colmar, em um edifício do século XVII com fachada renascentista única.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-primary/20">
              <h3 className="font-bold text-lg mb-2 text-primary">Fairmont Le Montreux Palace</h3>
              <p className="text-sm text-muted-foreground">
                Luxo absoluto às margens do Lago Léman, com vista espetacular dos Alpes suíços.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-primary/20">
              <h3 className="font-bold text-lg mb-2 text-primary">Hotel Schweizerhof Sils Maria</h3>
              <p className="text-sm text-muted-foreground">
                Elegância alpina tradicional em uma das vilas mais charmosas dos Alpes suíços.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors z-50"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Container */}
            <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
              {/* Navigation - Previous */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors z-50"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              {/* Navigation - Next */}
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors z-50"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Image container */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl"
              >
                <img
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />
                
                {/* Caption */}
                <div className="mt-4 p-4 text-center">
                  <span className="text-sm text-primary uppercase tracking-wider">
                    {galleryImages[selectedIndex].category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {galleryImages[selectedIndex].title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {selectedIndex + 1} / {galleryImages.length}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
