import { motion } from "framer-motion";
import sydneyImage from "@/assets/sydney-opera.jpg";
import polynesiaImage from "@/assets/polynesia-moorea.jpg";
import hollywoodImage from "@/assets/hollywood.jpg";
import { MapPin } from "lucide-react";

const acts = [
  {
    number: "01",
    title: "O Embarque",
    subtitle: "Sydney — 4 Noites de Imersão Australiana",
    description: `Você chega em Sydney em 10 de abril. Não é um check-in comum. É uma recepção VIP no aeroporto.

Evandro está esperando você. Ele mostra a verdadeira Sydney — não a turística. A Opera House por dentro. O Harbour Bridge com suas histórias. The Rocks, o bairro histórico. O Royal Botanic Garden com plantas nativas.

Mas o momento mais marcante é em Jervis Bay. Você encontra cangurus em seu habitat natural. Você vê golfinhos em passeio privativo. Você almoça na Crooked River Estate com vinhos australianos.

No quarto dia, você embarca no Anthem of the Seas. Pronto para cruzar o Pacífico.`,
    image: sydneyImage,
    highlights: ["Recepção VIP", "Opera House", "Jervis Bay", "Cangurus livres", "Golfinhos", "Vinícola boutique"],
    stats: { nights: 4, hotel: "Shangri-La Sydney 5★" },
  },
  {
    number: "02",
    title: "A Navegação",
    subtitle: "Anthem of the Seas — 16 Noites de Luxo Transpacífico",
    description: `Você embarca no Anthem of the Seas. Este não é um cruzeiro comum. É um navio de classe mundial com capacidade para 4.000 passageiros, mas seu grupo é de apenas 20 viajantes + Evandro.

Você navega pelo Pacífico Sul. Você para em Bay of Islands, Nova Zelândia — paisagens espetaculares e cultura Maori. Você explora 3 ilhas da Polinésia Francesa: Papeete, Moorea e Raiatea. Snorkel em águas cristalinas. Almoço em bungalow à beira-mar.

À noite, você janta em restaurantes de classe mundial. Você assiste a shows de Broadway. Você tem dias em alto-mar para descansar, refletir, renovar-se. Você cruza a Linha Internacional de Data.

Você chega em Honolulu transformado.`,
    image: polynesiaImage,
    highlights: ["Bay of Islands", "Papeete", "Moorea", "Raiatea", "Shows de Broadway", "Cruzamento da Linha de Data"],
    stats: { nights: 16, hotel: "Anthem of the Seas" },
  },
  {
    number: "03",
    title: "O Retorno",
    subtitle: "Honolulu & Los Angeles — 6 Noites de Glamour",
    description: `Você desembarca em Honolulu. Você fica no Halekulani, um dos hotéis mais luxuosos do mundo. Jantar à beira-mar com culinária havaiana.

Você visita Iolani Palace, o único palácio real dos Estados Unidos. Honolulu Museum of Art. Manoa Falls, uma cachoeira de 64 metros. Waikiki Beach. Jantar de despedida no La Mer at Halekulani.

Você voa para Los Angeles. Você fica no The Beverly Hills Hotel. Hollywood Walk of Fame. TCL Chinese Theatre com pegadas de celebridades. Dolby Theatre, o palco do Oscar. Rodeo Drive com Gucci, Louis Vuitton, Prada. Beverly Hills Mansion Tour.

Jantar final no Nobu Malibu ou Mastro's com Wagyu Beef. E então você volta para São Paulo. Mas você não é mais o mesmo.`,
    image: hollywoodImage,
    highlights: ["Halekulani 5★", "Iolani Palace", "Beverly Hills Hotel 5★", "Walk of Fame", "Rodeo Drive", "Nobu Malibu"],
    stats: { nights: 6, hotel: "Halekulani + Beverly Hills Hotel" },
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
