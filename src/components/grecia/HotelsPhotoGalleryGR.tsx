import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Star, MapPin } from "lucide-react";

import hotel01 from "@/assets/grecia/hotel-01.jpeg";
import hotel02 from "@/assets/grecia/hotel-02.jpeg";
import hotel03 from "@/assets/grecia/hotel-03.jpeg";
import hotel04 from "@/assets/grecia/hotel-04.jpeg";
import hotel05 from "@/assets/grecia/hotel-05.jpeg";

const hotelImages = [
  { 
    src: hotel01, 
    title: "The Pinnacle Athens", 
    category: "Atenas",
    nights: "2 noites",
    description: "Hotel boutique de luxo com vista panorâmica para a Acrópole",
    rating: 5
  },
  { 
    src: hotel02, 
    title: "Contessina Hotel", 
    category: "Zakynthos",
    nights: "3 noites",
    description: "Resort à beira-mar com piscinas infinitas e spa de classe mundial",
    rating: 5
  },
  { 
    src: hotel03, 
    title: "Petani Bay Hotel", 
    category: "Cefalônia",
    nights: "3 noites",
    description: "Boutique hotel com vista deslumbrante para a Baía de Petani",
    rating: 4
  },
  { 
    src: hotel04, 
    title: "Tropicana Hotel Mykonos", 
    category: "Mykonos",
    nights: "3 noites",
    description: "Hotel icônico em localização privilegiada na Paradise Beach",
    rating: 4
  },
  { 
    src: hotel05, 
    title: "Desiterra Luxury Suites", 
    category: "Santorini",
    nights: "3 noites",
    description: "Suítes de luxo escavadas na rocha com vista para a caldeira",
    rating: 5
  },
];

export const HotelsPhotoGalleryGR = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? hotelImages.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === hotelImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent" />
      </div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-turquoise/5 rounded-full blur-3xl" />

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
            <span className="text-foreground">Onde Você Vai </span>
            <span className="text-gradient-gold">Se Hospedar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hotéis cuidadosamente selecionados em cada ilha para uma experiência inesquecível
          </p>
        </motion.div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelImages.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-primary/20 group"
            >
              {/* Image */}
              <div 
                onClick={() => openLightbox(index)}
                className="relative h-48 overflow-hidden cursor-pointer"
              >
                <img
                  src={hotel.src}
                  alt={hotel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Nights badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur text-xs text-primary-foreground font-semibold">
                  {hotel.nights}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Location */}
                <div className="flex items-center gap-1 text-turquoise text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.category}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {hotel.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {[...Array(5 - hotel.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-muted-foreground/30" />
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {hotel.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto border border-primary/20">
            <p className="text-foreground font-display font-semibold text-lg mb-2">
              14 Noites de Hospedagem Premium
            </p>
            <p className="text-muted-foreground text-sm">
              Todos os hotéis incluem café da manhã e localização privilegiada
            </p>
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
                  src={hotelImages[selectedIndex].src}
                  alt={hotelImages[selectedIndex].title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                />
                
                {/* Caption */}
                <div className="mt-4 p-4 text-center">
                  <span className="text-sm text-turquoise uppercase tracking-wider flex items-center justify-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {hotelImages[selectedIndex].category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-1">
                    {hotelImages[selectedIndex].title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {hotelImages[selectedIndex].description}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(hotelImages[selectedIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 block">
                    {selectedIndex + 1} / {hotelImages.length}
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
