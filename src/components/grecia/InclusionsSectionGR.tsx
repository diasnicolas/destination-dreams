import { motion } from "framer-motion";
import { Check, X, Plane } from "lucide-react";

const included = [
  "Voos internacionais (São Paulo > Madrid > Atenas > Santorini > Madrid > São Paulo)",
  "Voos domésticos entre as ilhas gregas",
  "14 noites em hotéis 4-5 estrelas selecionados",
  "Café da manhã diário",
  "Todos os transfers privados",
  "Guias locais especializados",
  "Passeio de barco para Navagio Beach (Praia do Naufrágio)",
  "Visita às Blue Caves (Cavernas Azuis)",
  "Exploração da Caverna Melissani",
  "Tour pela ilha sagrada de Delos",
  "Experiência vulcânica em Santorini",
  "App exclusivo com todos os detalhes (funciona offline)",
  "Seguro Plus Reason (18 motivos, USD 75.000)",
  "Acompanhamento We Travel UK 24/7",
  "Bagagem incluída",
  "Grupo no WhatsApp para interação",
];

const notIncluded = [
  "Almoços e jantares (exceto quando especificado)",
  "Atividades opcionais",
  "Bebidas alcoólicas",
  "Gorjetas (opcional)",
  "Despesas pessoais",
];

const differentials = [
  {
    emoji: "📱",
    title: "App Exclusivo",
    description: "Todos os detalhes na palma da mão. Funciona offline.",
  },
  {
    emoji: "🛡️",
    title: "Seguro Plus Reason",
    description: "18 motivos de cobertura. Até USD 75.000.",
  },
  {
    emoji: "💬",
    title: "Grupo no WhatsApp",
    description: "Interação antes, durante e depois da viagem.",
  },
  {
    emoji: "🏛️",
    title: "Guias Locais",
    description: "Especialistas em história e cultura grega.",
  },
  {
    emoji: "👥",
    title: "Acompanhamento 24/7",
    description: "Suporte em português. Você não está sozinho.",
  },
  {
    emoji: "🎯",
    title: "Roteiro Exclusivo",
    description: "Além do óbvio. Ilhas que poucos conhecem.",
  },
];

export const InclusionsSectionGR = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      {/* Floating plane icon */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 text-primary/10"
      >
        <Plane className="w-32 h-32" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">O Que Está </span>
            <span className="text-gradient-gold">Incluído</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparência total sobre seu investimento na Grécia
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-8 border border-primary/30 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              O Que Está Incluído
            </h3>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not Included */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-8 border border-destructive/30 hover:border-destructive/50 transition-colors"
          >
            <h3 className="font-display text-2xl font-bold text-destructive mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              O Que Não Está Incluído
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Diferenciais <span className="text-primary">Exclusivos</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{diff.emoji}</span>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm mb-1">{diff.title}</h4>
                    <p className="text-muted-foreground text-xs">{diff.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
