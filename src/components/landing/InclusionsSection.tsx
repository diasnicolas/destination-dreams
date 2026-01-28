import { motion } from "framer-motion";
import { Check, X, Ship } from "lucide-react";

const included = [
  "Todos os voos internacionais (GRU → SCL → SYD → AKL → SCL → GRU)",
  "Hospedagem em hotéis 4-5 estrelas",
  "16 noites em cruzeiro Anthem of the Seas",
  "Acompanhamento pessoal de Evandro Mendes",
  "City tour em Sydney",
  "Experiência com cangurus em Jervis Bay",
  "Avistamento de golfinhos",
  "Almoço em vinícola boutique",
  "Visitas a Iolani Palace e Honolulu Museum of Art",
  "Hollywood Walk of Fame, TCL Chinese Theatre, Dolby Theatre",
  "Traslados privados em cada destino",
  "Seguro de viagem Plus Reason (USD 75.000 de cobertura)",
  "Acesso a restaurantes selecionados",
  "Suporte 24/7 durante a viagem",
];

const notIncluded = [
  "Refeições não mencionadas no roteiro",
  "Vistos para Austrália, Nova Zelândia e EUA",
  "Gorjetas para funcionários",
  "Atividades opcionais não mencionadas",
  "Bebidas alcoólicas não incluídas nas refeições",
  "Compras pessoais",
  "Despesas extras não mencionadas",
];

export const InclusionsSection = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/5 to-transparent" />
      </div>

      {/* Floating ship icon */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 text-turquoise/10"
      >
        <Ship className="w-32 h-32" />
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
            <span className="text-foreground"> (e o que não está)</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparência total sobre seu investimento
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  transition={{ duration: 0.3, delay: index * 0.05 }}
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
      </div>
    </section>
  );
};
