import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { number: "01", title: "BARI", subtitle: "1 Noite", description: "Você chega em Bari. A porta de entrada para a Puglia. Você explora o centro histórico. Você prova a culinária local. Você se prepara para a aventura.", hotel: "Hotel 4-5 estrelas centro", highlights: ["Centro Histórico", "Gastronomia"] },
  { number: "02", title: "POLIGNANO A MARE", subtitle: "4 Noites", description: "Você viaja para Polignano a Mare. Praias azul-turquesa de tirar o fôlego. Você mergulha nas águas cristalinas. Você explora as grutas marinhas. Você janta com vista para o mar. Grotta Palazzese (restaurante na gruta).", hotel: "Hotel com vista para o mar", highlights: ["Praias Azul-Turquesa", "Grutas Marinhas", "Grotta Palazzese"] },
  { number: "03", title: "ALBEROBELLO", subtitle: "Passeio", description: "Você visita Alberobello. Os trulli mágicos (UNESCO). Casas de pedra únicas no mundo. Você caminha pelas ruas de pedra. Você se encanta com a arquitetura.", hotel: "Passeio de dia inteiro", highlights: ["Trulli", "UNESCO", "Arquitetura única"] },
  { number: "04", title: "MATERA", subtitle: "Passeio", description: "Você visita Matera. As sassi (cidade mais antiga da Europa). Patrimônio UNESCO. Cenário de filmes de Hollywood. Você se sente transportado no tempo. Experiência única.", hotel: "Passeio de dia inteiro", highlights: ["Sassi", "UNESCO", "Cidade mais antiga"] },
  { number: "05", title: "LECCE", subtitle: "Passeio", description: "Você visita Lecce. A 'Florença do Sul'. Barroco italiano em sua forma mais pura. Você explora igrejas ornamentadas. Você prova pasticciotto (doce típico).", hotel: "Passeio de dia inteiro", highlights: ["Barroco", "Florença do Sul", "Pasticciotto"] },
  { number: "06", title: "SORRENTO", subtitle: "6 Noites", description: "Você viaja para Sorrento. Base para explorar a Costa Amalfitana. Você vê o mar azul. Você prova limoncello. Você vive a dolce vita.", hotel: "Hotel com vista para o mar", highlights: ["Costa Amalfitana", "Limoncello", "Vista para o mar"] },
  { number: "07", title: "POSITANO & AMALFI", subtitle: "Passeio", description: "Você visita Positano. Cartão postal da Costa Amalfitana. Casinhas coloridas na encosta. Você vê o pôr do sol. Você visita Amalfi. Catedral histórica.", hotel: "Passeio de dia inteiro", highlights: ["Positano", "Casinhas Coloridas", "Pôr do sol"] },
  { number: "08", title: "RAVELLO", subtitle: "Passeio", description: "Você visita Ravello. Jardins Villa Cimbrone. Terraço do Infinito. Vista mais bonita da Costa Amalfitana. Você se sente no paraíso.", hotel: "Passeio de dia inteiro", highlights: ["Villa Cimbrone", "Terraço do Infinito"] },
  { number: "09", title: "CAPRI", subtitle: "Passeio", description: "Você navega até Capri. A ilha do glamour italiano. Você visita a Gruta Azul. Você explora Anacapri. Você vive o luxo italiano.", hotel: "Passeio de dia inteiro", highlights: ["Gruta Azul", "Anacapri", "Glamour"] },
  { number: "10", title: "ROMA", subtitle: "2 Noites", description: "Você viaja para Roma. A Cidade Eterna. Você visita o Coliseu. Você joga moeda na Fontana di Trevi. Você se despede da Itália.", hotel: "Hotel 4-5 estrelas centro", highlights: ["Coliseu", "Fontana di Trevi", "Cidade Eterna"] },
];

export const JourneySectionPA = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-primary/5 to-background" id="journey">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Jornada <span className="text-primary">(16 Dias)</span></h2>
          <p className="text-xl text-muted-foreground">Junho de 2026 - Da Puglia à Costa Amalfitana</p>
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
          <p className="text-lg text-muted-foreground">Você viaja de volta para o Brasil.</p>
          <p className="text-xl font-semibold text-primary mt-4">E você volta para casa transformado.</p>
        </motion.div>
      </div>
    </section>
  );
};
