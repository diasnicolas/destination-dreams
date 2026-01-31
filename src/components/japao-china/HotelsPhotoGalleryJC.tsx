import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import hotel01 from "@/assets/japao-china/hyatt_regency_oryx_doha.webp";
import hotel02 from "@/assets/japao-china/hotel_anterom_kyoto.jpg";
import hotel03 from "@/assets/japao-china/nikko_nagoya.webp";
import hotel04 from "@/assets/japao-china/plaza_ana_toyama.jpeg";
import hotel05 from "@/assets/japao-china/la_vista_fuji_kawaguchilo.jpg";
import hotel06 from "@/assets/japao-china/Hotel_Metropolitan_Tokyo_Ikebukuro.avif";
import hotel07 from "@/assets/japao-china/Xinqiao_Hotel.jpg";
import hotel08 from "@/assets/japao-china/hotel_metropark.jpg";

const galleryImages = [
  { src: hotel01, title: "Doha", category: "Hyatt Regency Oryx" },
  { src: hotel02, title: "Kyoto", category: "Hotel Anteroom" },
  { src: hotel03, title: "Nagoya", category: "Nikko Style" },
  { src: hotel04, title: "Toyama", category: "Crowne Plaza ANA" },
  { src: hotel05, title: "Fujikawaguchiko", category: "La Vista Fuji Kawaguchik" },
  { src: hotel06, title: "Tóquio", category: "Hotel Metropolitan Tokyo Ikebukuro" },
  { src: hotel07, title: "Hangzhou", category: "Xinqiao Hotel" },
  { src: hotel08, title: "Xangai", category: "Metropark Jichen Hotel Shanghai" },
];

export const HotelsPhotoGalleryJC = () => {
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

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-navy to-ocean-deep relative overflow-hidden">
      {/* Decorative ocean waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/20 to-transparent" />
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
            Clique nas imagens para explorar os hotéis
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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

      {/* Container centralizado com padding */}
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

        {/* Image container com tamanho flexível */}
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
