import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, MapPin, Star } from "lucide-react";

import hotelImg1 from "@/assets/ushuaia-calafate/photo-1566073771259-6a8506099945.jpg";
import hotelImg2 from "@/assets/ushuaia-calafate/photo-1582719508461-905c673771fd.jpg";
import hotelImg3 from "@/assets/ushuaia-calafate/photo-1551882547-ff40c63fe5fa.jpg";
import hotelImg4 from "@/assets/ushuaia-calafate/photo-1520250497591-112f2f40a3f4.jpg";
import hotelImg5 from "@/assets/ushuaia-calafate/photo-1578683010236-d716f9a3f461.jpg";
import hotelImg6 from "@/assets/ushuaia-calafate/photo-1564501049412-61c2a3083791.jpg";

const hotels = [
  {
    name: "Los Ñires Ushuaia",
    location: "Ushuaia, Argentina",
    nights: "3 noites",
    description: "Hotel aconchegante com vista para as montanhas nevadas. Localização privilegiada na cidade mais austral do mundo.",
    images: [
      { src: hotelImg1, title: "Fachada Los Ñires" },
      { src: hotelImg2, title: "Quarto Confortável" },
    ]
  },
  {
    name: "Hotel Kosten Aike",
    location: "El Calafate, Argentina",
    nights: "3 noites",
    description: "Hotel premium com vista para o Lago Argentino. A base perfeita para explorar as geleiras.",
    images: [
      { src: hotelImg3, title: "Vista Lago Argentino" },
      { src: hotelImg4, title: "Área Comum" },
    ]
  },
  {
    name: "Recoleta Grand",
    location: "Buenos Aires, Argentina",
    nights: "2 noites",
    description: "Elegância portenha no coração da Recoleta. Sofisticação e conforto para o final perfeito da jornada.",
    images: [
      { src: hotelImg5, title: "Lobby Recoleta Grand" },
      { src: hotelImg6, title: "Suíte Elegante" },
    ]
  }
];

const allImages = hotels.flatMap(hotel => 
  hotel.images.map(img => ({
    ...img,
    hotelName: hotel.name,
    location: hotel.location
  }))
);

export const HotelsPhotoGalleryUC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === allImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  let imageIndex = 0;

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-navy to-ocean-deep relative overflow-hidden">
      {/* Decorative elements */}
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
            <span className="text-foreground">Onde Você Vai </span>
            <span className="text-gradient-gold">Se Hospedar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hotéis selecionados para seu conforto em cada destino
          </p>
        </motion.div>

        {/* Hotels Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {hotels.map((hotel, hotelIndex) => (
            <motion.div
              key={hotelIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: hotelIndex * 0.1 }}
              className="bg-card/50 rounded-2xl overflow-hidden border border-primary/20"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Hotel Info */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <Star className="w-4 h-4 text-primary fill-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full w-fit mb-4">
                    {hotel.nights}
                  </span>
                  <p className="text-muted-foreground">{hotel.description}</p>
                </div>

                {/* Hotel Images */}
                <div className="grid grid-cols-2 gap-2 p-2">
                  {hotel.images.map((image, imgIndex) => {
                    const currentIndex = imageIndex++;
                    return (
                      <motion.div
                        key={imgIndex}
                        onClick={() => openLightbox(currentIndex)}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center">
                            <ZoomIn className="w-5 h-5 text-primary-foreground" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
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
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors z-50"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors z-50"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors z-50"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

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
                  src={allImages[selectedIndex].src}
                  alt={allImages[selectedIndex].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />
                
                <div className="mt-4 p-4 text-center">
                  <span className="text-sm text-primary uppercase tracking-wider">
                    {allImages[selectedIndex].hotelName}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {allImages[selectedIndex].title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {selectedIndex + 1} / {allImages.length}
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
