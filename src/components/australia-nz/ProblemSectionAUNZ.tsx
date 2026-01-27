import { motion } from "framer-motion";
import { Heart, Sparkles, Mountain, Compass } from "lucide-react";

const painPoints = [
  "Você trabalha todos os dias.",
  "Você cumpre suas responsabilidades.",
  "Você vive uma vida 'normal'.",
  "Mas no fundo, você sente que falta algo.",
];

const dreams = [
  { icon: Mountain, text: "Você já imaginou explorar a Grande Barreira de Coral?" },
  { icon: Compass, text: "Você já imaginou visitar Hobbiton, o cenário do Senhor dos Anéis?" },
  { icon: Sparkles, text: "Você já imaginou ver o pôr do sol mais mágico da Nova Zelândia?" },
];

export const ProblemSectionAUNZ = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/10 to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating heart */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 text-primary/10"
      >
        <Heart className="w-20 h-20" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Você Sente Que </span>
              <span className="text-gradient-gold">Falta Algo?</span>
            </h2>
          </motion.div>

          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 mb-12"
          >
            {painPoints.map((point, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-lg md:text-xl text-muted-foreground text-center"
              >
                {point}
              </motion.p>
            ))}
          </motion.div>

          {/* What's Missing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card rounded-2xl p-8 md:p-12 border border-primary/30 mb-12"
          >
            <div className="text-center space-y-4">
              <p className="text-xl md:text-2xl text-foreground font-display">
                Falta <span className="text-primary font-bold">magia</span>.
              </p>
              <p className="text-xl md:text-2xl text-foreground font-display">
                Falta <span className="text-primary font-bold">transformação</span>.
              </p>
              <p className="text-xl md:text-2xl text-foreground font-display">
                Falta aquele momento em que você se sente <span className="text-primary font-bold">VIVO</span>.
              </p>
            </div>
          </motion.div>

          {/* Dreams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {dreams.map((dream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-4 glass-card rounded-xl p-4 border border-turquoise/20 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0">
                  <dream.icon className="w-6 h-6 text-turquoise" />
                </div>
                <p className="text-lg text-foreground">{dream.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-12 space-y-4"
          >
            <p className="text-xl md:text-2xl text-foreground font-display">
              Você merecia viver isso.
            </p>
            <p className="text-2xl md:text-3xl text-primary font-display font-bold">
              E você pode. Agora.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
