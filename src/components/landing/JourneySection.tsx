import { motion } from "framer-motion";
import sydneyImage from "@/assets/cruzeiro-01/sidney.webp";
import polynesiaImage from "@/assets/cruzeiro-01/borabora.webp";
import hollywoodImage from "@/assets/cruzeiro-01/hollywood.webp";
import { MapPin } from "lucide-react";

const acts = [
  {
    number: "01",
    title: "O Embarque",
    subtitle: "Sydney — 4 Noites de Imersão Australiana",
    description: `Você chega em Sydney em 10 de abril. Não é um check-in comum. É uma recepção VIP no aeroporto.

Evandro está esperando você. Ele mostra a verdadeira Sydney, não a turística. A Opera House por dentro. O Harbour Bridge com suas histórias. The Rocks, o bairro histórico. O Royal Botanic Garden com plantas nativas.

Mas o momento mais marcante é em Jervis Bay. Você encontra cangurus em seu habitat natural. Você vê golfinhos em passeio privativo. Você almoça na Crooked River Estate com vinhos australianos.

No quarto dia, você embarca no Anthem of the Seas. Pronto para cruzar o Pacífico.`,
    image: sydneyImage,
    highlights: ["Recepção VIP", "Opera House", "Jervis Bay", "Cangurus livres", "Golfinhos", "Vinícola boutique"],
    stats: { nights: 4, hotel: "Hotel Hyatt Regency" },
  },
  {
    number: "02",
    title: "A Navegação",
    subtitle: "Anthem of the Seas — 16 Noites de Luxo Transpacífico",
    description: `Você navega pelo Pacífico Sul, vivendo dias de conforto, contemplação e experiências cuidadosamente selecionadas.

A jornada começa com 3 noites no Havaí, em Honolulu, onde o clima tropical, as praias icônicas e o ritmo descontraído convidam a desacelerar e entrar no espírito da viagem.

Em seguida, você embarca em um cruzeiro exclusivo pelo Pacífico Sul, explorando três ilhas da Polinésia Francesa: Papeete, Moorea e Raiatea, cenários de águas cristalinas, natureza exuberante e cultura ancestral.
Snorkel em lagoas transparentes, momentos de relaxamento e almoço em bangalô à beira-mar, com o mar como horizonte.

Entre um destino e outro, dias em alto-mar permitem descansar, refletir e renovar-se, aproveitando toda a estrutura do navio com tranquilidade e conforto.

Em um momento especial da viagem, você cruza a Linha Internacional de Data, vivendo a experiência simbólica de ganhar um novo dia, um privilégio de poucas jornadas no mundo.`,
    image: polynesiaImage,
    highlights: ["Papeete", "Moorea", "Raiatea", "Shows de Broadway", "Cruzamento da Linha de Data", "Honolulu"],
    stats: { nights: 16, hotel: "Anthem of the Seas" },
  },
  {
    number: "03",
    title: "O Retorno",
    subtitle: "Honolulu & Los Angeles — 6 Noites de Glamour",
    description: `Após o cruzeiro, você retorna a Honolulu para mais 3 noites, aproveitando o melhor da ilha com calma, sem pressa e sem correria.

Para encerrar, a viagem segue para Los Angeles, com 3 noites para viver a cidade do cinema, da música e da arte. Passeios icônicos, gastronomia de alto nível e o charme da Califórnia completam essa jornada de forma elegante e memorável.

Uma experiência pensada para quem valoriza tempo, conforto e histórias que merecem ser vividas com calma.`,
    image: hollywoodImage,
    highlights: ["Hotel Hyatt Figueroa 5★", "Iolani Palace", "Ilikai Hotel 5★", "Walk of Fame", "Rodeo Drive", "Nobu Malibu"],
    stats: { nights: 6, hotel: "Hotel Hyatt Figueroa + Ilikai Hotel" },
  },
];

export const JourneySection = () => {
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
            <span className="text-foreground">A Jornada em </span>
            <span className="text-gradient-gold">3 Atos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            27 dias que transformarão sua vida, divididos em três atos inesquecíveis
          </p>
        </motion.div>

        {/* Acts */}
        <div className="space-y-24 md:space-y-32 max-w-7xl mx-auto">
          {acts.map((act, index) => (
            <motion.div
              key={act.number}
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
                    src={act.image}
                    alt={act.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  
                  {/* Act number overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="font-display text-6xl md:text-7xl font-bold text-primary/30">
                      {act.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="space-y-6">
                  <div>
                    <span className="text-turquoise font-semibold text-sm tracking-widest uppercase">
                      Ato {act.number}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-2">
                      {act.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {act.subtitle}
                    </p>
                  </div>

                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {act.description}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {act.highlights.map((highlight) => (
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
