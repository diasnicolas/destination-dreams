import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { 
    number: "01", 
    title: "A CAPITAL DO NATAL", 
    subtitle: "Estrasburgo • 3 Noites", 
    description: "Você chega em Estrasburgo. A Capital do Natal. Você caminha pelo mercado de Natal mais antigo da Europa (desde 1570). Você explora o bairro Petite France com seus casarões medievais. Você visita a Catedral de Estrasburgo. Você faz um cruzeiro noturno pelo Rio Ill com a cidade toda iluminada. Você degusta vinhos alsacianos. Você vive a magia.", 
    hotel: "Sofitel Strasbourg Grande Ile", 
    highlights: ["Mercado desde 1570", "Petite France", "Catedral UNESCO", "Cruzeiro Noturno"] 
  },
  { 
    number: "02", 
    title: "VILAS DE CONTO DE FADAS", 
    subtitle: "Colmar • 3 Noites + Baden-Baden", 
    description: "Você viaja para Colmar. A Pequena Veneza da França. Casinhas coloridas refletidas nos canais. Mercados de Natal em vilas medievais. Você visita Riquewihr e Eguisheim — perfeição absoluta. Cenários que parecem saídos de um sonho. Você também faz um day trip a Baden-Baden na Alemanha: mercados refinados da Floresta Negra, fontes termais, elegância.", 
    hotel: "La Maison des Têtes", 
    highlights: ["Pequena Veneza", "Riquewihr", "Eguisheim", "Baden-Baden"] 
  },
  { 
    number: "03", 
    title: "OS ALPES NEVADOS", 
    subtitle: "Montreux & Sils Maria • 4 Noites", 
    description: "Você viaja para a Suíça. Montreux às margens do Lago Léman. Os Alpes suíços cobertos de neve. Mercados de Natal suíços. O luxo do Fairmont Le Montreux Palace. Depois, Sils Maria nos Alpes. Cenário alpino de tirar o fôlego. Inverno europeu de verdade. A magia do Natal em sua forma mais pura.", 
    hotel: "Fairmont Le Montreux Palace / Hotel Schweizerhof", 
    highlights: ["Lago Léman", "Alpes Nevados", "Fairmont Palace", "Sils Maria"] 
  },
];

export const JourneySectionMN = () => {
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
            A Jornada <span className="text-primary">(13 Dias)</span>
          </h2>
          <p className="text-xl text-muted-foreground">Dezembro 2026 • França & Suíça</p>
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
          <h3 className="text-2xl font-bold mb-4">Retorno</h3>
          <p className="text-lg text-muted-foreground">Você viaja de volta para o Brasil.</p>
          <p className="text-xl font-semibold text-primary mt-4">E você volta com a magia do Natal no coração.</p>
        </motion.div>
      </div>
    </section>
  );
};
