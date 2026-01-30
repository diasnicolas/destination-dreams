import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX, Pause } from "lucide-react";

// Interface para os depoimentos em vídeo
export interface VideoTestimonial {
  id: number;
  youtubeId: string;
  thumbnail: string;
  rating: number;
}

interface VideoCardProps {
  testimonial: VideoTestimonial;
  isActive?: boolean;
  isPlaying: boolean;
  onPlay: (id: number) => void;
  onPause: () => void;
}

const VideoCard = ({ testimonial, isActive = false, isPlaying, onPlay, onPause }: VideoCardProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayClick = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay(testimonial.id);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  // Gera a URL do iframe do YouTube otimizada para vertical
  const getYouTubeIframeUrl = (playing: boolean) => {
    const baseUrl = `https://www.youtube.com/embed/${testimonial.youtubeId}`;
    const params = new URLSearchParams({
      autoplay: playing ? '1' : '0',
      mute: isMuted ? '1' : '0',
      controls: '0',
      modestbranding: '1',
      rel: '0',
      playsinline: '1',
      enablejsapi: '1',
      origin: window.location.origin,
      iv_load_policy: '3',
      fs: '0',
      autohide: '1',
      showinfo: '0',
      vq: 'hd720',
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  // Atualiza o iframe quando o estado de play muda
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.src) {
      // Para pausar o vídeo, recarregamos o iframe sem autoplay
      iframeRef.current.src = getYouTubeIframeUrl(isPlaying);
    }
  }, [isPlaying, isMuted]);

  if (!testimonial.youtubeId || testimonial.youtubeId.length !== 11) {
    return (
      <div className={`aspect-[9/16] rounded-2xl overflow-hidden bg-navy border-2 border-border/30 flex items-center justify-center`}>
        <p className="text-muted-foreground text-center p-4">Vídeo indisponível</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border-2 transition-all duration-300 flex-shrink-0 ${
        isActive ? "border-primary shadow-gold" : "border-border/30"
      }`}
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <img
            src={testimonial.thumbnail}
            alt="Depoimento"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Overlay escuro para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          
          {/* Play Button Overlay */}
          <div 
            onClick={handlePlayClick}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors shadow-2xl shadow-primary/50"
            >
              <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
            </motion.div>
          </div>
        </>
      ) : (
        <div className="w-full h-full relative bg-black">
          {/* Container para vídeo vertical */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <iframe
              ref={iframeRef}
              src={getYouTubeIframeUrl(true)}
              title="Depoimento"
              className="absolute w-[177.78%] h-full max-w-none"
              style={{
                height: '100%',
                width: '177.78%',
                left: '50%',
                transform: 'translateX(-50%)',
                objectFit: 'cover',
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            
            {/* Overlay para cortar bordas laterais */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          </div>
          
          {/* Video Controls */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-black/40 to-transparent z-10">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePlayClick}
                className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-all duration-300 z-20 pointer-events-auto backdrop-blur-sm border border-white/20 hover:border-primary/50"
              >
                <Pause className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={toggleMute}
                className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-all duration-300 z-20 pointer-events-auto backdrop-blur-sm border border-white/20 hover:border-primary/50"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
          
          {/* Indicador de que é um vídeo */}
          <div className="absolute top-4 right-4 z-10">
            <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
              <span className="text-xs text-white font-medium">VÍDEO</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

interface TestimonialsSectionProps {
  testimonials: VideoTestimonial[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export const TestimonialsSection = ({ 
  testimonials,
  title = " de quem já atendeu ao chamado",
  titleHighlight = "Histórias",
  subtitle = "Depoimentos reais de viajantes que viveram a experiência"
}: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlay = (id: number) => {
    setPlayingVideoId(id);
  };

  const handlePause = () => {
    setPlayingVideoId(null);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth * 0.8,
        behavior: 'smooth'
      });
    }
    // Atualiza índice baseado na posição aproximada
    setCurrentIndex(prev => Math.max(0, prev - 3));
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth * 0.8,
        behavior: 'smooth'
      });
    }
    // Atualiza índice baseado na posição aproximada
    setCurrentIndex(prev => Math.min(testimonials.length - 1, prev + 3));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth / (isMobile ? 1 : 3);
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient-gold">{titleHighlight}</span>
            <span className="text-foreground">{title}</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Desktop: Carousel horizontal */}
        <div className="relative max-w-7xl mx-auto">
          {/* Botão de navegação esquerda */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 border border-primary/30 hover:border-primary/60 shadow-lg z-20"
            aria-label="Vídeos anteriores"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>

          {/* Container do carousel - scrollbar escondido */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 px-2 py-4 scrollbar-none"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 w-[280px] md:w-[320px]"
              >
                <VideoCard 
                  testimonial={testimonial}
                  isActive={currentIndex === testimonial.id - 1}
                  isPlaying={playingVideoId === testimonial.id}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />
              </div>
            ))}
          </div>

          {/* Botão de navegação direita */}
          <button
            onClick={scrollRight}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 border border-primary/30 hover:border-primary/60 shadow-lg z-20"
            aria-label="Próximos vídeos"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>
        </div>

        {/* Dots Indicator para desktop */}
        <div className="hidden md:flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? "w-8 h-2 bg-primary rounded-full" 
                  : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50"
              }`}
              aria-label={`Ir para vídeo ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador de vídeos */}
        <div className="text-center mt-6">
          <p className="text-white/70 text-sm md:text-base">
            <span className="text-primary font-semibold">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{testimonials.length}</span>
            <span className="ml-4 text-white/60">• Clique para reproduzir/pausar</span>
          </p>
        </div>
      </div>
    </section>
  );
};
