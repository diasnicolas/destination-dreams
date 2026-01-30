import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { 
    number: "01", 
    title: "O FIM DO MUNDO", 
    subtitle: "Ushuaia • 3 Noites", 
    description: "Você chega em Ushuaia. A cidade mais austral do mundo. Você respira o ar puro da Patagônia. Você embarca no lendário Trem do Fim do Mundo. Você navega pelo Canal Beagle entre pinguins e leões marinhos. Você explora o Parque Nacional Tierra del Fuego. Você sente que chegou ao fim da terra.", 
    hotel: "Los Ñires Ushuaia", 
    highlights: ["Trem do Fim do Mundo", "Canal Beagle", "Parque Nacional", "Fauna Subantártica"] 
  },
  { 
    number: "02", 
    title: "AS GELEIRAS", 
    subtitle: "El Calafate • 3 Noites", 
    description: "Você viaja para El Calafate. Portal das geleiras. Você fica frente a frente com o Perito Moreno. 60 metros de gelo se erguem diante de você. Você ouve o estrondo dos blocos caindo. Você caminha sobre uma geleira milenar. Você sente a força da natureza em estado puro. Uma experiência que muda você para sempre.", 
    hotel: "Hotel Kosten Aike", 
    highlights: ["Perito Moreno", "Trekking no Gelo", "Lago Argentino", "Natureza Selvagem"] 
  },
  { 
    number: "03", 
    title: "O RETORNO À CIVILIZAÇÃO", 
    subtitle: "Buenos Aires • 2 Noites", 
    description: "Você retorna à civilização. Buenos Aires te recebe com sofisticação e cultura. Você passeia pela elegante Recoleta. Você sente o charme europeu misturado com a paixão argentina. Você celebra a jornada em uma das cidades mais vibrantes do mundo. A transição perfeita entre a natureza selvagem e a vida urbana.", 
    hotel: "Recoleta Grand", 
    highlights: ["Recoleta", "Cultura Portenha", "Gastronomia", "Sofisticação"] 
  },
];

export const JourneySectionUC = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-primary/5 to-background" id="journey">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A Jornada <span className="text-primary">(9 Dias)</span>
          </h2>
          <p className="text-xl text-muted-foreground">4 a 12 de Setembro de 2026</p>
        </motion.div>
        
        <div className="space-y-16 max-w-7xl mx-auto">
          {acts.map((act, index) => (
            <motion.div 
              key={act.number} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8 }} 
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 border border-primary/20">
                  <div className="absolute top-4 right-4">
                    <span className="text-5xl font-bold text-primary/20">{act.number}</span>
                  </div>
                  <div className="relative z-10">
                    <MapPin className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{act.title}</h3>
                    <p className="text-primary font-semibold mb-4">{act.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-2">Hospedagem:</p>
                    <p className="font-medium mb-6">{act.hotel}</p>
                    <div className="flex flex-wrap gap-2">
                      {act.highlights.map((h, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {act.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Retorno ao Brasil</h3>
          <p className="text-lg text-muted-foreground">
            Você embarca de volta para casa. Com memórias que durarão para sempre.
          </p>
          <p className="text-xl font-semibold text-primary mt-4">
            E você volta transformado. Porque o Fim do Mundo muda quem você é.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
