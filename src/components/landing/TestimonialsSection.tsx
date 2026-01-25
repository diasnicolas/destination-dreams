import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";

// Video testimonials data - usando vídeos placeholder (URLs de demonstração)
const videoTestimonials = [
  {
    id: 1,
    videoUrl: "https://videos.pexels.com/video-files/4058343/4058343-uhd_1440_2560_25fps.mp4",
    thumbnail: "https://images.pexels.com/videos/4058343/free-video-4058343.jpg",
    author: "Roberto Almeida",
    role: "Empresário, 58 anos",
    quote: "Viajei para mais de 40 países. Mas essa jornada foi diferente.",
  },
  {
    id: 2,
    videoUrl: "https://videos.pexels.com/video-files/4057481/4057481-uhd_1440_2560_25fps.mp4",
    thumbnail: "https://images.pexels.com/videos/4057481/free-video-4057481.jpg",
    author: "Maria & José Santos",
    role: "Casal aposentado, 62 e 60 anos",
    quote: "35 anos de casamento e essa viagem renovou nossa relação.",
  },
  {
    id: 3,
    videoUrl: "https://videos.pexels.com/video-files/4536994/4536994-uhd_1440_2560_25fps.mp4",
    thumbnail: "https://images.pexels.com/videos/4536994/free-video-4536994.jpg",
    author: "Carla Mendonça",
    role: "Executiva, 55 anos",
    quote: "Já estive em mais de 50 países. Essa jornada superou todas as expectativas.",
  },
  {
    id: 4,
    videoUrl: "https://videos.pexels.com/video-files/5206966/5206966-uhd_1440_2560_25fps.mp4",
    thumbnail: "https://images.pexels.com/videos/5206966/pexels-photo-5206966.jpeg",
    author: "Fernando Costa",
    role: "Médico, 52 anos",
    quote: "A experiência mais transformadora da minha vida.",
  },
  {
    id: 5,
    videoUrl: "https://videos.pexels.com/video-files/4057567/4057567-uhd_1440_2560_25fps.mp4",
    thumbnail: "https://images.pexels.com/videos/4057567/free-video-4057567.jpg",
    author: "Ana Paula Ferreira",
    role: "Advogada, 48 anos",
    quote: "Cada momento foi pensado para criar memórias inesquecíveis.",
  },
];

interface VideoCardProps {
  testimonial: typeof videoTestimonials[0];
  isActive?: boolean;
}

const VideoCard = ({ testimonial, isActive = false }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative aspect-[9/16] rounded-2xl overflow-hidden bg-navy border-2 transition-all duration-300 ${
        isActive ? "border-primary shadow-gold" : "border-border/30"
      }`}
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <img
            src={testimonial.thumbnail}
            alt={testimonial.author}
            className="w-full h-full object-cover"
          />
          
          {/* Play Button Overlay */}
          <div 
            onClick={handlePlayClick}
            className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent flex flex-col items-center justify-center cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors shadow-gold"
            >
              <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
            </motion.div>
            
            {/* Quote */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm text-foreground font-display italic mb-2 line-clamp-2">
                "{testimonial.quote}"
              </p>
              <p className="text-sm font-semibold text-primary">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Video Player */}
          <video
            src={testimonial.videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />
          
          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-foreground" />
                ) : (
                  <Volume2 className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
            <p className="text-sm font-semibold text-primary">{testimonial.author}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? videoTestimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === videoTestimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-turquoise/10 rounded-full blur-3xl" />
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
            <span className="text-gradient-gold">Histórias</span>
            <span className="text-foreground"> de quem já atendeu ao chamado</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Depoimentos reais de viajantes que viveram a experiência
          </p>
        </motion.div>

        {/* Desktop: Grid of videos */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <VideoCard 
              key={testimonial.id} 
              testimonial={testimonial}
              isActive={index === 2}
            />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          {/* Video Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-[280px]">
              <VideoCard 
                testimonial={videoTestimonials[currentIndex]} 
                isActive={true}
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors border border-primary/30"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors border border-primary/30"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
