import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, MapPin, Sparkles } from "lucide-react";

import elenRU from "@/assets/reino-unido/IMG_0033 2_11zon.jpg";
import susanaRU from "@/assets/reino-unido/IMG_0687 2_11zon.jpg";
import guia_thumb from "@/assets/reino-unido/guia_video_thumbnail.png";


// Interface para o vídeo da guia
interface GuideVideo {
  youtubeId: string;
  thumbnail: string;
  name: string;
}

// Dados das guias
const guides = [
  {
    id: 1,
    name: "Ellen",
    location: "Londres | Inglaterra",
    flag: "🇬🇧",
    description: "A Ellen mora em Londres, a capital britânica, há muitos anos. É uma guia experiente, apaixonada pela cidade e conhece cada cantinho da terra do Rei — dos grandes marcos históricos aos detalhes que só quem vive ali percebe.",
    highlight: "Com ela, nossa experiência em Londres se torna mais rica, fluida e completa, sempre com explicações claras, curiosidades e aquele olhar local que transforma visitas em vivências.",
  },
  {
    id: 2,
    name: "Susana",
    location: "Edimburgo | Escócia",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    description: "Na Escócia, quem nos acompanha é a Susana, historiadora e moradora de Edimburgo há 16 anos.",
    highlight: "Ela vai nos conduzir por becos, castelos e histórias fascinantes, explicando o passado escocês de forma envolvente e fácil de entender. Cada caminhada com a Susana é uma verdadeira viagem no tempo, que abrilhanta ainda mais nossa experiência escocesa.",
  },
];

// Componente do card de vídeo vertical (mesmo estilo dos depoimentos)
const VideoCard = ({ 
  video, 
  isPlaying, 
  onPlay, 
  onPause 
}: { 
  video: GuideVideo; 
  isPlaying: boolean; 
  onPlay: () => void; 
  onPause: () => void;
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayClick = () => {
    if (isPlaying) {
      onPause();
    } else {
      setIsMuted(false);
      onPlay();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const getYouTubeIframeUrl = (playing: boolean) => {
    const baseUrl = `https://www.youtube.com/embed/${video.youtubeId}`;
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

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.src) {
      iframeRef.current.src = getYouTubeIframeUrl(isPlaying);
    }
  }, [isPlaying, isMuted]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;
      if (!iframeRef.current) return;

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.event === "onStateChange" && data?.info === 0) {
          onPause();
          setIsMuted(true);
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onPause]);

  // Placeholder enquanto não tem o vídeo
  if (!video.youtubeId) {
    return (
      <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-navy/50 border-2 border-primary/30 flex items-center justify-center">
        <div className="text-center p-6">
          <Play className="w-12 h-12 text-primary/50 mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">Vídeo em breve</p>
          <p className="text-primary font-semibold mt-2">{video.name}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border-2 border-primary/30 transition-all duration-300 hover:border-primary shadow-lg"
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <img
            src={video.thumbnail}
            alt={`Depoimento de ${video.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
          
          {/* Play Button */}
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
            <p className="mt-4 text-white font-semibold">{video.name}</p>
          </div>
        </>
      ) : (
        <div className="w-full h-full relative bg-black">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <iframe
              ref={iframeRef}
              src={getYouTubeIframeUrl(true)}
              title={`Vídeo de ${video.name}`}
              id={`guide-video-${video.youtubeId}`}
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
          </div>
          
          {/* Video Controls */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePlayClick}
                className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-all duration-300 z-20 backdrop-blur-sm border border-white/20 hover:border-primary/50"
              >
                <Pause className="w-6 h-6 text-white" />
              </button>
              
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
        </div>
      )}
    </motion.div>
  );
};

export const GuidesSectionRU = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Dados do vídeo da Susana - substitua o youtubeId quando tiver
  const susanaVideo: GuideVideo = {
    youtubeId: "ZmfkbDJ8rIE", // Adicione o ID do YouTube aqui quando disponível
    thumbnail: guia_thumb, // Adicione a URL da thumbnail aqui
    name: "Susana",
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Experiência Local Autêntica</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nossas Guias nesta Jornada pelo{" "}
            <span className="text-primary">Reino Unido & Escócia</span> ✨
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Durante essa jornada tão especial pelo Reino Unido, vocês estarão acompanhados por guias cuidadosamente escolhidas, 
            que não apenas conhecem os destinos, mas vivem a cultura local no dia a dia. Isso faz toda a diferença na experiência.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20"
            >
              {/* Guide Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{guide.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{guide.name}</h3>
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{guide.location}</span>
                  </div>
                </div>
              </div>

              {/* Guide Description */}
              <p className="text-muted-foreground mb-4">
                {guide.description}
              </p>
              
              <p className="text-foreground font-medium italic border-l-4 border-primary pl-4">
                {guide.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video and Photos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Conheça nossas <span className="text-primary">guias</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Foto 1 - Evandro com Ellen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] rounded-2xl overflow-hidden bg-navy/50 border-2 border-primary/30"
            >
            
              
              <img
                src={elenRU} 
                alt="Evandro com Ellen em Londres" 
                className="w-full h-full object-cover"
              />
              
            </motion.div>

            {/* Vídeo da Susana - Vertical */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:scale-110 md:-my-4 z-10"
            >
              <VideoCard
                video={susanaVideo}
                isPlaying={isVideoPlaying}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
            </motion.div>

            {/* Foto 2 - Evandro com Susana */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[4/5] rounded-2xl overflow-hidden bg-navy/50 border-2 border-primary/30"
            >
              
              <img 
                src={susanaRU}
                alt="Evandro com Susana em Edimburgo" 
                className="w-full h-full object-cover"
              />
             
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
