import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { 
    number: "01", 
    title: "A CHEGADA AO NORTE", 
    subtitle: "Helsinque & Tallinn • 3 Noites", 
    description: "Você chega em Helsinque. A capital sofisticada da Finlândia. Você se acostuma com a Europa nórdica. Você explora a Praça do Senado, a Catedral de Helsinque, a Igreja na Rocha — uma igreja construída dentro de uma rocha. Você faz um bate-volta de ferry para Tallinn, na Estônia — uma cidade medieval preservada, patrimônio da UNESCO. Você caminha pelas ruas de pedra, pelos casarões coloridos. Você se prepara para ir mais ao norte.", 
    hotel: "Hotel em Helsinque (3 noites)", 
    highlights: ["Catedral de Helsinque", "Igreja na Rocha", "Tallinn Medieval", "Market Square"] 
  },
  { 
    number: "02", 
    title: "A LAPÔNIA MÁGICA", 
    subtitle: "Rovaniemi & Levi • 6 Noites", 
    description: "Você voa para Rovaniemi. Você chega à Lapônia. Você vê a neve. Você sente o frio ártico. Você está em um lugar que parece outro planeta. Safari de Huskies — você corre em um trenó puxado por huskies siberianos. Santa Claus Village — você cruza o Círculo Polar Ártico, você encontra o Papai Noel. Caça à Aurora Boreal — você vê luzes verdes, roxas, azuis dançando no céu. Hotel de Gelo — você dorme em um iglu e acorda com a aurora acima de você.", 
    hotel: "Hotel em Rovaniemi (5 noites) + Hotel Iglu em Levi (1 noite)", 
    highlights: ["Safari de Huskies", "Papai Noel", "Aurora Boreal", "Hotel de Gelo"] 
  },
  { 
    number: "03", 
    title: "A CAPITAL DA AURORA", 
    subtitle: "Tromsø, Noruega • 3 Noites", 
    description: "Você voa para Tromsø. A capital da Aurora Boreal. Você está em um lugar ainda mais mágico. Passeio pelos fiordes árticos — paisagens de mar, montanhas cobertas de neve, vilarejos de conto de fadas. City tour em Tromsø — ruas charmosas, cafés aconchegantes. Teleférico Fjellheisen — você sobe a montanha, você vê o Ártico se estendendo até o horizonte. Múltiplas noites de caça à Aurora Boreal. Você vê a dança das luzes. Você nunca se cansa.", 
    hotel: "Hotel em Tromsø (3 noites)", 
    highlights: ["Fiordes Árticos", "Fjellheisen", "Aurora Boreal", "City Tour"] 
  },
];

export const JourneySectionLT = () => {
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
            A Jornada <span className="text-primary">(16 Dias)</span>
          </h2>
          <p className="text-xl text-muted-foreground">1 a 16 de Março 2027 • Finlândia, Estônia & Noruega</p>
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
          <p className="text-lg text-muted-foreground">Você viaja de volta para o Brasil via Amsterdã.</p>
          <p className="text-xl font-semibold text-primary mt-4">Você volta diferente. Porque você foi ao Ártico.</p>
        </motion.div>
      </div>
    </section>
  );
};
