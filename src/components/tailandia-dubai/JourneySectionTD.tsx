import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { number: "01", title: "BANGKOK", subtitle: "3 Noites", description: "Você chega em Bangkok. A cidade dos templos dourados. Você visita o Grande Palácio. Você visita Wat Pho (Buda Reclinado). Você visita Wat Arun (Templo do Amanhecer). Você explora mercados flutuantes. Você prova a culinária tailandesa.", hotel: "Hotel 4-5 estrelas centro", highlights: ["Grande Palácio", "Wat Pho", "Wat Arun", "Mercados Flutuantes"] },
  { number: "02", title: "CHIANG MAI - FESTIVAL YI PENG", subtitle: "4 Noites", description: "Você viaja para Chiang Mai. O norte da Tailândia. Você vive o FESTIVAL DAS LANTERNAS YI PENG. Milhares de lanternas subindo ao céu. Momento mágico e espiritual. Você visita templos. Você visita santuário de elefantes.", hotel: "Hotel 4-5 estrelas", highlights: ["Festival Yi Peng", "Lanternas", "Santuário de Elefantes", "Templos"] },
  { number: "03", title: "KRABI", subtitle: "3 Noites", description: "Você viaja para Krabi. Praias paradisíacas. Você vê formações rochosas incríveis. Você faz passeios de barco. Você mergulha em águas cristalinas. Railay Beach. Ao Nang.", hotel: "Resort à beira-mar", highlights: ["Praias", "Formações Rochosas", "Passeios de Barco"] },
  { number: "04", title: "KOH PHI PHI - MAYA BAY", subtitle: "Passeio", description: "Você faz passeio de SPEEDBOAT PRIVADO até Koh Phi Phi. Você visita Maya Bay (cenário do filme 'A Praia' com Leonardo DiCaprio). Você nada em águas cristalinas. Paisagens de tirar o fôlego.", hotel: "Passeio de dia inteiro", highlights: ["Speedboat Privado", "Maya Bay", "A Praia (filme)"] },
  { number: "05", title: "PHUKET", subtitle: "4 Noites", description: "Você viaja para Phuket. A maior ilha da Tailândia. Você relaxa nas praias. Você vê o pôr do sol. Você explora a Old Town. Você aproveita a vida noturna. Patong Beach.", hotel: "Resort à beira-mar", highlights: ["Praias", "Pôr do sol", "Old Town", "Patong Beach"] },
  { number: "06", title: "DUBAI", subtitle: "3 Noites", description: "Você viaja para Dubai. Você vê o Burj Khalifa (prédio mais alto do mundo). Você visita o Dubai Mall. Você faz passeio no deserto. Você vive o luxo árabe. Conexão perfeita antes de voltar ao Brasil.", hotel: "Hotel 4-5 estrelas", highlights: ["Burj Khalifa", "Dubai Mall", "Deserto", "Luxo"] },
];

export const JourneySectionTD = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-primary/5 to-background" id="journey">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Jornada <span className="text-primary">(19 Dias)</span></h2>
          <p className="text-xl text-muted-foreground">Da espiritualidade tailandesa ao luxo de Dubai</p>
        </motion.div>
        <div className="space-y-16 max-w-7xl mx-auto">
          {acts.map((act, index) => (
            <motion.div key={act.number} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 border border-primary/20">
                  <div className="absolute top-4 right-4"><span className="text-5xl font-bold text-primary/20">{act.number}</span></div>
                  <div className="relative z-10">
                    <MapPin className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{act.title}</h3>
                    <p className="text-primary font-semibold mb-4">{act.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-2">Hospedagem:</p>
                    <p className="font-medium mb-6">{act.hotel}</p>
                    <div className="flex flex-wrap gap-2">{act.highlights.map((h, i) => (<span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">{h}</span>))}</div>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}><div className="text-muted-foreground leading-relaxed whitespace-pre-line">{act.description}</div></div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Retorno</h3>
          <p className="text-lg text-muted-foreground">Você viaja de volta para o Brasil pela Emirates.</p>
          <p className="text-xl font-semibold text-primary mt-4">E você volta para casa transformado.</p>
        </motion.div>
      </div>
    </section>
  );
};
