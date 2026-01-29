import { motion } from "framer-motion";
import { Sparkles, Camera, Ship, Building } from "lucide-react";

const credentials = [
  { icon: Sparkles, text: "🏮 Festival Yi Peng — Solte lanternas no céu em Chiang Mai" },
  { icon: Camera, text: "📸 Fotógrafo Pedro — Fotos profissionais durante toda a viagem" },
  { icon: Ship, text: "🚤 Speedboat privado — Tour pelas ilhas Phi Phi e Maya Bay" },
  { icon: Building, text: "🏙️ Dubai — Luxo e modernidade no final da viagem" },
];

export const ConnectionSectionTD = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-primary/10 via-background to-primary/10" id="solution">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Apresento: Tailândia & Dubai</h2>
          <p className="text-xl text-primary font-semibold">19 dias de templos, praias paradisíacas e luxo</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl mx-auto space-y-6 text-lg text-center mb-12">
          <p>Criei um roteiro que não é turístico. É um roteiro que EU PESSOALMENTE criei.</p>
          <p>Eu pesquisei, testei e selecionei cada detalhe.</p>
          <p>Experiências que você <span className="font-bold">NÃO VAI ENCONTRAR</span> em outro roteiro.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Experiências Exclusivas:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex gap-4 p-6 bg-card rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                  <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{credential.text}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["🛕 Templos de Bangkok", "🐘 Santuário de Elefantes", "🏝️ Maya Bay (A Praia)", "🌅 Pôr do sol em Phuket", "🏨 Emirates Airlines"].map((h, i) => (
              <span key={i} className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">{h}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
