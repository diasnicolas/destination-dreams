import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import muralhaChinaImage from "@/assets/china/shutterstock_2615728833_11zon.webp";
import cidadeProibidaImage from "@/assets/china/shutterstock_2712346939_11zon.webp";
import guerreirosTerracotaImage from "@/assets/china/shutterstock_2316622135_11zon.webp";
import parqueAvatarImage from "@/assets/china/shutterstock_2687434733_11zon.webp";
import pandasGigantesImage from "@/assets/china/shutterstock_2539905366_11zon.webp";
import shangaiSkylineImage from "@/assets/china/shutterstock_1488846827_11zon.webp";

interface ExperienceVideo {
  id: number;
  title: string;
  location: string;
  youtubeId: string;
  thumbnail: string;
  isVertical?: boolean;
}

// Dados dos vídeos de lugares a serem visitados
const experienceVideos: ExperienceVideo[] = [
  {
    id: 1,
    title: "Grande Muralha da China",
    location: "Pequim",
    youtubeId: "k_FtfawvAZI", // Substituir pelo ID real do YouTube
    thumbnail: muralhaChinaImage,
    isVertical: true
  },
  {
    id: 2,
    title: "Cidade Proibida",
    location: "Pequim",
    youtubeId: "MejPC1NhL_s",
    thumbnail: cidadeProibidaImage,
    isVertical: true
  },
  {
    id: 3,
    title: "Guerreiros de Terracota",
    location: "Xian",
    youtubeId: "oP7td1aF5v4",
    thumbnail: guerreirosTerracotaImage,
    isVertical: true
  },
  {
    id: 4,
    title: "Parque do Avatar em Zhangjiajie",
    location: "Zhangjiajie",
    youtubeId: "N61rExCCsCY",
    thumbnail: parqueAvatarImage,
    isVertical: true
  },
  {
    id: 5,
    title: "Pandas Gigantes",
    location: "Chengdu",
    youtubeId: "5OLTN2DqQ4s",
    thumbnail: pandasGigantesImage,
    isVertical: true
  },
  {
    id: 6,
    title: "Xangai Skyline",
    location: "Xangai",
    youtubeId: "2MCsEQdBh4E",
    thumbnail: shangaiSkylineImage,
    isVertical: true
  }
];

interface VideoCardProps {
  video: ExperienceVideo;
  isActive: boolean;
  isPlaying: boolean;
  onPlay: (id: number) => void;
  onPause: () => void;
}

const VideoCard = ({ video, isPlaying, onPlay, onPause }: VideoCardProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay(video.id);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Envia comando de mute/unmute para o iframe do YouTube
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: isMuted ? 'unMute' : 'mute'
        }),
        '*'
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Card Container */}
      <div className={`relative bg-card/30 rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20 aspect-[9/16]`}>
        
        {!isPlaying ? (
          // Thumbnail com overlay
          <div className="relative w-full h-full">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            {/* Location badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span className="text-xs text-white font-medium">{video.location}</span>
              </div>
            </div>
            
            {/* Play button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-2xl shadow-primary/50 group-hover:scale-110">
                <Play className="w-7 h-7 md:w-9 md:h-9 text-white ml-1" fill="white" />
              </div>
            </button>
            
            {/* Content info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 line-clamp-2">
                {video.title}
              </h3>
            </div>
            
            {/* Video indicator */}
            <div className="absolute top-4 right-4 z-10">
              <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                <span className="text-xs text-white font-medium">VÍDEO</span>
              </div>
            </div>
          </div>
        ) : (
          // YouTube iframe player
          <div className="relative w-full h-full">
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${video.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
              className="w-full h-full pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Overlay to block clicks on iframe */}
            <div className="absolute inset-0 z-10" />
            
            {/* Controls overlay */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-auto">
                {/* Pause button */}
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-all duration-300 z-20 backdrop-blur-sm border border-white/20 hover:border-primary/50"
                >
                  <Pause className="w-6 h-6 text-white" />
                </button>
                
                {/* Mute button */}
                <button
                  onClick={toggleMute}
                  className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-all duration-300 z-20 backdrop-blur-sm border border-white/20 hover:border-primary/50"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Video indicator */}
            <div className="absolute top-4 right-4 z-10">
              <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                <span className="text-xs text-white font-medium">VÍDEO</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface FabulousExperienceSectionCHProps {
  videos?: ExperienceVideo[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export const FabulousExperienceSectionCH = ({ 
  videos = experienceVideos,
  title = " que você vai conhecer",
  titleHighlight = "Lugares incríveis",
  subtitle = "Veja um pouco do que espera por você nesta jornada única pela China"
}: FabulousExperienceSectionCHProps) => {
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
    setCurrentIndex(prev => Math.max(0, prev - 3));
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth * 0.8,
        behavior: 'smooth'
      });
    }
    setCurrentIndex(prev => Math.min(videos.length - 1, prev + 3));
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
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
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left navigation button */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 border border-primary/30 hover:border-primary/60 shadow-lg z-20"
            aria-label="Vídeos anteriores"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>

          {/* Carousel container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 px-2 py-4 scrollbar-none"
          >
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="flex-shrink-0 w-[280px] md:w-[320px]"
              >
                <VideoCard 
                  video={video}
                  isActive={currentIndex === video.id - 1}
                  isPlaying={playingVideoId === video.id}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />
              </div>
            ))}
          </div>

          {/* Right navigation button */}
          <button
            onClick={scrollRight}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 border border-primary/30 hover:border-primary/60 shadow-lg z-20"
            aria-label="Próximos vídeos"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="hidden md:flex justify-center gap-3 mt-8">
          {videos.map((_, index) => (
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

        {/* Video counter */}
        <div className="text-center mt-6">
          <p className="text-white/70 text-sm md:text-base">
            <span className="text-primary font-semibold">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{videos.length}</span>
            <span className="ml-4 text-white/60">• Clique para reproduzir</span>
          </p>
        </div>
      </div>
    </section>
  );
};
