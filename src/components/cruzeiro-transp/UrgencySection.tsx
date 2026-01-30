import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/common/CountdownTimer";
import { LimitedSpotsIndicator } from "./LimitedSpotsIndicator";
import { Anchor, Waves } from "lucide-react";

const stats = [
  { number: "1", label: "Única Saída" },
  { number: "10", label: "Cabines" },
  { number: "20", label: "Viajantes" },
  { number: "27", label: "Dias" },
];

export const UrgencySection = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-navy to-ocean-deep relative overflow-hidden">
      {/* Ocean wave decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-turquoise/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-turquoise/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-turquoise/20"
      >
        <Anchor className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-turquoise/20"
      >
        <Waves className="w-20 h-20" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">2027. Uma única saída. 20 viajantes.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O tempo está passando. Sua vaga está esperando.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-4">
            Embarque em 8 de Abril de 2027
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Limited Spots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <LimitedSpotsIndicator totalSpots={20} remainingSpots={7} />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 text-center border border-primary/30 hover:border-primary/50 transition-colors"
            >
              <div className="stat-number mb-2">{stat.number}</div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground">
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => scrollToSection("#formulario")}
            className="btn-luxury inline-block rounded-md animate-pulse-gold"
          >
            Agendar Consulta Privada Agora
          </button>
        </motion.div>
      </div>
    </section>
  );
};
