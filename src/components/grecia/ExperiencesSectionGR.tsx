import { motion } from "framer-motion";

import photo1613395877344 from "@/assets/grecia/photo-1613395877344-13d4a8e0d49e.jpg";
import photo1570077188670 from "@/assets/grecia/photo-1570077188670-e3a8d69ac5ff.jpg";
import photo1504512485720 from "@/assets/grecia/photo-1504512485720-7d83a16ee930.jpg";
import photo1555993539 from "@/assets/grecia/photo-1555993539-1732b0258235.jpg";
import photo1533105079780 from "@/assets/grecia/photo-1533105079780-92b9be482077.jpg";

const experiences = [
  {
    emoji: "🏛️",
    title: "Acrópole & Atenas Antiga",
    description: "Caminhe pelos mesmos passos de Sócrates e Platão. O Partenon ao amanhecer, o Teatro de Dionísio, a história viva da civilização ocidental sob seus pés.",
    image: photo1613395877344,
    location: "Atenas, Grécia",
  },
  {
    emoji: "🚢",
    title: "Navagio Beach — Praia do Naufrágio",
    description: "A praia mais fotografada do mundo. Um navio encalhado na areia branca, cercado por falésias vertiginosas e águas de um azul impossível. Simplesmente irreal.",
    image: photo1570077188670,
    location: "Zakynthos, Grécia",
  },
  {
    emoji: "🔵",
    title: "Blue Caves — Grutas Azuis",
    description: "Grutas esculpidas pelo mar ao longo de milhares de anos. A luz refletida nas paredes cria um azul sobrenatural. Uma experiência que parece de outro planeta.",
    image: photo1504512485720,
    location: "Zakynthos, Grécia",
  },
  {
    emoji: "💎",
    title: "Caverna de Melissani",
    description: "Um lago subterrâneo de águas turquesa dentro de uma caverna. Quando a luz do sol penetra pelo teto aberto, cria um espetáculo mágico que você nunca vai esquecer.",
    image: photo1504512485720,
    location: "Cefalônia, Grécia",
  },
  {
    emoji: "🌬️",
    title: "Mykonos — Ilha dos Ventos",
    description: "Os icônicos moinhos de vento, Little Venice ao entardecer, ruelas de paralelepípedos brancos. Uma mistura perfeita de tradição grega e glamour cosmopolita.",
    image: photo1555993539,
    location: "Mykonos, Grécia",
  },
  {
    emoji: "🌅",
    title: "Pôr do Sol em Santorini",
    description: "O pôr do sol mais famoso do planeta. Casas caiadas, cúpulas azuis, a caldeira vulcânica ao fundo. Um momento que vai ficar gravado na sua memória para sempre.",
    image: photo1533105079780,
    location: "Santorini, Grécia",
  },
];

export const ExperiencesSectionGR = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-medium to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent" />
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
            <span className="text-gradient-gold">Inesquecíveis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Momentos que você NÃO VAI ENCONTRAR em roteiros convencionais
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="experience-card glass-card rounded-2xl overflow-hidden group border border-primary/20 hover:border-primary/40 transition-colors"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Emoji overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-2xl border border-primary/30">
                  {experience.emoji}
                </div>

                {/* Location badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur text-xs text-primary font-medium">
                  {experience.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-lg">
            E muito mais experiências exclusivas esperando por você...
          </p>
        </motion.div>
      </div>
    </section>
  );
};
