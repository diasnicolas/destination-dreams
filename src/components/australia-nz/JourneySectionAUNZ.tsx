import { motion } from "framer-motion";
import sydneyImage from "@/assets/cruzeiro-01/sidney.webp";
import kangaroosImage from "@/assets/cruzeiro-01/cangurus.webp";
import boraboraImage from "@/assets/cruzeiro-01/borabora.webp";
import { MapPin } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Sydney",
    subtitle: "A Porta de Entrada — 4 Noites",
    description: `Você chega em Sydney e é recebido pelo nosso acompanhamento.

Dia 1: Você visita a Ópera de Sydney — um ícone do mundo. Você vê a Ponte do Porto. Você sente que sua jornada começou.

Dia 2: Você explora o Darling Harbour — água azul, barcos, vida. Você caminha pelas ruas de Sydney.

Dia 3: Você vai para Bondi Beach — a praia mais famosa da Austrália. Você nada em águas cristalinas.

Dia 4: Tempo livre para explorar Sydney no seu ritmo.`,
    image: sydneyImage,
    highlights: ["Opera House", "Harbour Bridge", "Bondi Beach", "Darling Harbour"],
    stats: { nights: 4, hotel: "Hotéis 4-5★" },
  },
  {
    number: "02",
    title: "Cairns & Melbourne",
    subtitle: "Grande Barreira & Great Ocean Road — 6 Noites",
    description: `Em Cairns, você sobrevoa a Barreira de Corais em hidravião. Você vê cores que nunca viu antes. Você faz snorkeling em águas cristalinas. Você interage com cangurus e coalas na natureza.

Em Melbourne, você dirige pela Great Ocean Road. Você vê os 12 Apóstolos — formações rochosas gigantes ao pôr do sol. Você explora a arte urbana e os cafés incríveis.

E você entende que a natureza é poderosa.`,
    image: kangaroosImage,
    highlights: ["Barreira de Corais", "Hidravião", "12 Apóstolos", "Cangurus e Coalas"],
    stats: { nights: 6, hotel: "Hotéis 4-5★" },
  },
  {
    number: "03",
    title: "Nova Zelândia",
    subtitle: "Queenstown, Rotorua & Auckland — 8 Noites",
    description: `Em Queenstown, você visita Hobbiton — o cenário do Senhor dos Anéis. Você caminha pelas casas dos hobbits. Você chora. Porque a ficção vira realidade.

Você navega pelo Milford Sound — montanhas gigantes e cachoeiras caindo direto no mar.

Em Rotorua, você vê os gêiseres e assiste ao show Maori autêntico.

Em Auckland, você reflete sobre tudo que viveu. E volta para casa diferente.`,
    image: boraboraImage,
    highlights: ["Hobbiton", "Milford Sound", "Gêiseres", "Cultura Maori"],
    stats: { nights: 8, hotel: "Hotéis 4-5★" },
  },
];

export const JourneySectionAUNZ = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative ocean elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/10 to-transparent" />

      {/* Floating map pin */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-40 left-10 text-primary/10"
      >
        <MapPin className="w-20 h-20" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">A Jornada de </span>
            <span className="text-gradient-gold">18 Dias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            6 cidades que transformarão sua vida para sempre
          </p>
        </motion.div>

        {/* Phases */}
        <div className="space-y-24 md:space-y-32 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-ocean border border-turquoise/20">
                  <img
                    src={phase.image}
                    alt={phase.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  
                  {/* Phase number overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="font-display text-6xl md:text-7xl font-bold text-primary/30">
                      {phase.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="space-y-6">
                  <div>
                    <span className="text-turquoise font-semibold text-sm tracking-widest uppercase">
                      Fase {phase.number}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {phase.subtitle}
                    </p>
                  </div>

                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {phase.description}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {phase.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium bg-turquoise/10 text-turquoise rounded-full border border-turquoise/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
