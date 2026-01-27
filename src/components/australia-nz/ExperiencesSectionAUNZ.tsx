import { motion } from "framer-motion";
import kangaroosImage from "@/assets/cruzeiro-01/cangurus.webp";
import dolphinsImage from "@/assets/cruzeiro-01/dolphins.webp";
import wineryImage from "@/assets/cruzeiro-01/winery.webp";
import boraboraImage from "@/assets/cruzeiro-01/borabora.webp";
import sydneyImage from "@/assets/cruzeiro-01/sidney.webp";
import hollywoodImage from "@/assets/cruzeiro-01/hollywood.webp";

const experiences = [
  {
    emoji: "🦘",
    title: "Cangurus e Coalas na Natureza",
    description: "Toque, alimente, conviva. Você não está em um zoológico. Você está na natureza australiana, interagindo com animais livres em seu habitat natural.",
    image: kangaroosImage,
    location: "Cairns, Austrália",
  },
  {
    emoji: "🐬",
    title: "Avistamento de Golfinhos",
    description: "Natação com golfinhos selvagens em águas cristalinas. Uma experiência que poucas pessoas no mundo vivem.",
    image: dolphinsImage,
    location: "Cairns, Austrália",
  },
  {
    emoji: "✈️",
    title: "Sobrevoo da Barreira de Corais",
    description: "Vista aérea da maior estrutura viva do planeta em um hidravião. Cores que você nunca viu antes. Um momento de tirar o fôlego.",
    image: boraboraImage,
    location: "Cairns, Austrália",
  },
  {
    emoji: "🏔️",
    title: "Great Ocean Road & 12 Apóstolos",
    description: "Veja as formações rochosas gigantes ao pôr do sol. O oceano se quebrando nas rochas. Uma paisagem que fica na memória para sempre.",
    image: sydneyImage,
    location: "Melbourne, Austrália",
  },
  {
    emoji: "🧙",
    title: "Hobbiton — O Condado",
    description: "Caminhe pelo cenário do Senhor dos Anéis. Visite as casas dos hobbits. A ficção vira realidade. Um momento mágico e emocionante.",
    image: hollywoodImage,
    location: "Queenstown, Nova Zelândia",
  },
  {
    emoji: "🌋",
    title: "Gêiseres de Rotorua",
    description: "Veja a Terra viva em ação. Vapores subindo do solo. Lama borbulhando. A geotermia neozelandesa em toda sua glória.",
    image: wineryImage,
    location: "Rotorua, Nova Zelândia",
  },
  {
    emoji: "🎭",
    title: "Show Maori Autêntico",
    description: "Dança, música e tradição da Nova Zelândia. Uma imersão cultural profunda na rica herança do povo Maori.",
    image: boraboraImage,
    location: "Rotorua, Nova Zelândia",
  },
  {
    emoji: "🏞️",
    title: "Milford Sound",
    description: "Navegue pelas cachoeiras mais bonitas do mundo. Montanhas gigantes. Um fjord neozelandês que parece saído de um filme.",
    image: dolphinsImage,
    location: "Queenstown, Nova Zelândia",
  },
];

export const ExperiencesSectionAUNZ = () => {
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
            <span className="text-foreground">Experiências </span>
            <span className="text-gradient-gold">Exclusivas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiências que você NÃO VAI ENCONTRAR em outro roteiro
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
              <div className="relative h-32 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Emoji overlay */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-xl border border-primary/30">
                  {experience.emoji}
                </div>

                {/* Location badge */}
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-background/60 backdrop-blur text-xs text-primary">
                  {experience.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display text-sm font-bold text-foreground mb-2">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
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
