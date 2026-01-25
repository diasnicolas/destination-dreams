import { motion } from "framer-motion";

const stats = [
  { number: "1", label: "Única Saída" },
  { number: "10", label: "Cabines" },
  { number: "20", label: "Viajantes" },
  { number: "27", label: "Dias" },
];

export const UrgencySection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-gradient-gold">2027. Uma única saída. 20 viajantes.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-xl p-8 text-center border border-primary/30"
            >
              <div className="stat-number mb-2">{stat.number}</div>
              <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Urgency Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-display">
            As vagas se preenchem rapidamente entre os <strong className="text-primary">círculos de elite</strong>. 
            A questão não é mais "se você pode ir". É "se você será um dos escolhidos".
          </p>
          <p className="text-lg text-muted-foreground">
            Você foi escolhido para receber essa mensagem por uma razão. 
            Talvez seja hora de atender ao chamado.
          </p>
          <p className="text-lg text-foreground font-medium">
            Não demore. Porque as <strong className="text-primary">vagas desaparecerão</strong>. 
            E você nunca mais terá essa oportunidade.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#formulario"
            className="btn-luxury inline-block rounded-md"
          >
            Agendar Consulta Privada Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};
