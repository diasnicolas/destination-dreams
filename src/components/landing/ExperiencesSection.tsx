import { motion } from "framer-motion";
import kangaroosImage from "@/assets/kangaroos-jervis.jpg";
import dolphinsImage from "@/assets/dolphins.jpg";
import wineryImage from "@/assets/winery.jpg";
import polynesiaImage from "@/assets/polynesia-moorea.jpg";
import honoluluImage from "@/assets/honolulu.jpg";
import hollywoodImage from "@/assets/hollywood.jpg";

const experiences = [
  {
    emoji: "🦘",
    title: "Cangurus em Habitat Natural",
    description: "Interação autêntica com cangurus livres em Jervis Bay. Você não está em um zoológico. Você está na natureza. Os cangurus estão livres. Este é um momento que ficará com você para sempre.",
    image: kangaroosImage,
    location: "Jervis Bay, Austrália",
  },
  {
    emoji: "🐬",
    title: "Avistamento de Golfinhos",
    description: "Passeio privativo em barco para observar golfinhos em seu habitat natural. Você está em um barco privativo com apenas 20 pessoas. Águas azul-turquesa. Momento mágico. Uma experiência que transforma sua perspectiva sobre a vida.",
    image: dolphinsImage,
    location: "Jervis Bay, Austrália",
  },
  {
    emoji: "🍷",
    title: "Almoço em Vinícola Boutique",
    description: "Crooked River Estate com almoço harmonizado em vinhos locais. Vista para vinhedos. Entrada de queijos e embutidos locais. Cordeiro grelhado com vegetais. Mousse de chocolate. Seleção de vinhos australianos. Uma celebração da boa vida.",
    image: wineryImage,
    location: "Hunter Valley, Austrália",
  },
  {
    emoji: "🏔️",
    title: "Blue Mountains",
    description: "Exploração das montanhas azuis com guia especializado. Paisagens espetaculares e natureza australiana intocada. Você caminha através de florestas. Você vê cachoeiras. Você observa vistas que tiram o fôlego. Uma jornada de descoberta e renovação.",
    image: kangaroosImage,
    location: "Blue Mountains, Austrália",
  },
  {
    emoji: "🌊",
    title: "Polinésia Francesa",
    description: "3 ilhas paradisíacas: Papeete, Moorea e Raiatea. O coração do paraíso em um cruzeiro de classe mundial. Você navega pelas águas mais bonitas do mundo. Snorkel, praias, bungalows à beira-mar. Uma experiência que redefine o conceito de beleza.",
    image: polynesiaImage,
    location: "Taiti, Moorea, Raiatea",
  },
  {
    emoji: "🌴",
    title: "Honolulu & Diamond Head",
    description: "Iolani Palace, o palácio real do Havaí. Honolulu Museum of Art. Manoa Falls, uma cachoeira de 64 metros. Waikiki Beach. E o Halekulani, um dos hotéis mais luxuosos do mundo. O glamour havaiano em sua essência mais pura.",
    image: honoluluImage,
    location: "Honolulu, Havaí",
  },
  {
    emoji: "✨",
    title: "Hollywood & Beverly Hills",
    description: "Walk of Fame com estrelas de celebridades. TCL Chinese Theatre com pegadas históricas. Dolby Theatre, palco do Oscar. Rodeo Drive com Gucci, Louis Vuitton, Prada, Chanel. The Beverly Hills Hotel. Você vive o glamour de Hollywood como protagonista.",
    image: hollywoodImage,
    location: "Los Angeles, CA",
  },
  {
    emoji: "🛳️",
    title: "Luxo Inabalável",
    description: "Hotéis 5 estrelas: Shangri-La Sydney, Halekulani, The Beverly Hills Hotel. Anthem of the Seas, um navio de classe mundial. Gastronomia de classe mundial. Shows de Broadway. Spas e relaxamento. Você vive o luxo em cada momento.",
    image: polynesiaImage,
    location: "Toda a jornada",
  },
];

export const ExperiencesSection = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-medium to-navy relative overflow-hidden">
      {/* Decorative ocean elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/10 to-transparent" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Momentos que você </span>
            <span className="text-gradient-gold">guardará para sempre</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiências exclusivas que não podem ser compradas. Apenas vividas.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="experience-card glass-card rounded-2xl overflow-hidden group border border-turquoise/20 hover:border-primary/40"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Emoji overlay */}
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-xl border border-primary/30">
                  {experience.emoji}
                </div>

                {/* Location badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-background/60 backdrop-blur text-xs text-primary">
                  {experience.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
