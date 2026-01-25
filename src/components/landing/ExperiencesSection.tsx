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
    description: "Interação autêntica com cangurus livres em Jervis Bay. Uma experiência que não é encenada. Você está na natureza. Este é um momento que ficará com você para sempre.",
    image: kangaroosImage,
  },
  {
    emoji: "🐬",
    title: "Avistamento de Golfinhos",
    description: "Passeio privativo em barco para observar golfinhos em seu habitat natural. Águas cristalinas e momentos mágicos. Uma experiência que transforma sua perspectiva sobre a vida.",
    image: dolphinsImage,
  },
  {
    emoji: "🍷",
    title: "Almoço em Vinícola Boutique",
    description: "Crooked River Estate com almoço harmonizado em vinhos locais. Vista para vinhedos. Uma celebração da boa vida.",
    image: wineryImage,
  },
  {
    emoji: "🌊",
    title: "Polinésia Francesa",
    description: "3 ilhas paradisíacas: Papeete, Moorea e Raiatea. O coração do paraíso em um cruzeiro de classe mundial. Uma experiência que redefine o conceito de beleza.",
    image: polynesiaImage,
  },
  {
    emoji: "🌴",
    title: "Honolulu & Diamond Head",
    description: "Iolani Palace, Manoa Falls, e o Halekulani, um dos hotéis mais luxuosos do mundo. O glamour havaiano em sua essência mais pura.",
    image: honoluluImage,
  },
  {
    emoji: "✨",
    title: "Hollywood & Beverly Hills",
    description: "Walk of Fame, TCL Chinese Theatre, Rodeo Drive. The Beverly Hills Hotel. Você vive o glamour de Hollywood como protagonista.",
    image: hollywoodImage,
  },
];

export const ExperiencesSection = () => {
  return (
    <section className="py-20 md:py-32 section-ocean relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="experience-card glass-card rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Emoji overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-2xl">
                  {experience.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
