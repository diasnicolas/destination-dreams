import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { 
    number: "01", 
    title: "AS RAÍZES", 
    subtitle: "Atenas • 3 Noites", 
    description: "Você chega em Atenas. A cidade que inventou a democracia, a filosofia, o teatro. Você está onde tudo começou. Você sobe à Acrópole ao nascer do sol — antes das multidões. Você vê o Partenon banhado pela luz dourada. Você caminha pelo bairro de Plaka, pelas vielas de pedra, pelos cafés escondidos. Você visita o Museu da Acrópole — uma cápsula do tempo da Grécia Antiga. Você experimenta a culinária ateniense em tavernas autênticas. Você se prepara para as ilhas.", 
    hotel: "Hotel boutique em Plaka (3 noites)", 
    highlights: ["Acrópole ao Nascer do Sol", "Partenon", "Bairro de Plaka", "Museu da Acrópole"] 
  },
  { 
    number: "02", 
    title: "AS ILHAS SECRETAS", 
    subtitle: "Zakynthos & Cefalônia • 6 Noites", 
    description: "Você voa para Zakynthos. A ilha que guarda a praia mais famosa do mundo — Navagio Beach, a Praia do Naufrágio. Você chega de barco, você nada nas águas cristalinas, você vê o navio encalhado. Você explora as grutas azuis, onde a luz cria tons de azul impossíveis. Você segue para Cefalônia — a ilha que poucos conhecem. Praias desertas. Vilarejos de pescadores. A caverna de Melissani — um lago subterrâneo iluminado pelo sol. Você descobre a Grécia autêntica. A Grécia além do óbvio.", 
    hotel: "Hotel boutique em Zakynthos (3 noites) + Hotel em Cefalônia (3 noites)", 
    highlights: ["Navagio Beach", "Grutas Azuis", "Caverna de Melissani", "Vilarejos de Pescadores"] 
  },
  { 
    number: "03", 
    title: "O CLÍMAX", 
    subtitle: "Mykonos & Santorini • 6 Noites", 
    description: "Você chega em Mykonos. A ilha cosmopolita. Os moinhos de vento icônicos. As ruas brancas de Little Venice. Você experimenta a vida noturna elegante, os beach clubs sofisticados. Você segue para Santorini — o grand finale. O pôr do sol em Oia — considerado o mais bonito do mundo. As casas brancas com cúpulas azuis. Você visita vinícolas locais, você prova vinhos únicos nascidos em solo vulcânico. Você assiste ao pôr do sol de um lugar secreto — longe das multidões. Você termina a viagem no clímax.", 
    hotel: "Hotel em Mykonos (3 noites) + Hotel com vista para Caldera em Santorini (3 noites)", 
    highlights: ["Moinhos de Mykonos", "Little Venice", "Pôr do Sol em Oia", "Vinícolas de Santorini"] 
  },
];

export const JourneySectionGR = () => {
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
          <p className="text-xl text-muted-foreground">14 a 29 de Setembro 2026 • Atenas → Zakynthos → Cefalônia → Mykonos → Santorini</p>
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
          <p className="text-lg text-muted-foreground">Você viaja de volta para o Brasil desde Santorini.</p>
          <p className="text-xl font-semibold text-primary mt-4">Você volta diferente. Porque você descobriu a Grécia além do óbvio.</p>
        </motion.div>
      </div>
    </section>
  );
};
