import { motion } from "framer-motion";
import { Compass, Waves, AlertCircle } from "lucide-react";
import { CountdownTimer } from "@/components/common/CountdownTimer";

const stats = [
  { number: "16", label: "Dias" },
  { number: "5", label: "Destinos" },
  { number: "4", label: "Ilhas" },
  { number: "∞", label: "Memórias" },
];

const steps = [
  "Clique no botão abaixo",
  "Preencha o formulário",
  "Agende uma consulta comigo",
  "Vamos conversar sobre seus sonhos",
  "Você recebe uma proposta personalizada",
  "Você confirma sua vaga",
  "Você começa a contar os dias para a Grécia",
];

export const UrgencySectionGR = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-navy to-ocean-deep relative overflow-hidden">
      {/* Mediterranean-inspired decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-primary/20"
      >
        <Compass className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-primary/20"
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
            <span className="text-foreground">Você Está Pronto Para </span>
            <span className="text-gradient-gold">Descobrir a Grécia?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Essa oportunidade não vai durar para sempre.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-4">
            Embarque em 14 de Setembro de 2026
          </p>
          <CountdownTimer targetDate="2026-09-14T00:00:00" />
        </motion.div>

        {/* Urgency Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto mb-12 border border-destructive/30"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse">
              <AlertCircle className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-lg font-semibold text-destructive uppercase tracking-wide">
              Vagas Limitadas
            </span>
          </div>
          
          <div className="text-center space-y-4 text-muted-foreground">
            <p className="text-lg">As vagas são limitadas para garantir uma experiência exclusiva.</p>
            <p className="text-lg">Cada dia que passa, mais pessoas confirmam presença.</p>
            <p className="text-xl text-foreground font-display font-medium">
              Você quer estar nessa jornada pelo Mediterrâneo?
            </p>
          </div>
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

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-8">
            Próximos <span className="text-primary">Passos</span>
          </h3>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4 glass-card rounded-lg p-4 border border-primary/20"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <span className="text-foreground">{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <p className="text-lg text-muted-foreground">
            Não deixe para depois. As vagas estão se preenchendo rapidamente.
          </p>
          <p className="text-xl md:text-2xl text-foreground font-display font-medium">
            Você merece descobrir a Grécia além do óbvio.
          </p>
          <div className="pt-4">
            <p className="text-muted-foreground italic">Até breve,</p>
            <p className="text-foreground font-display font-bold text-lg mt-2">Evandro Mendes</p>
            <p className="text-primary text-sm">We Travel UK</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => scrollToSection("#formulario")}
            className="btn-luxury inline-block rounded-md animate-pulse-gold text-lg px-12 py-5"
          >
            QUERO DESCOBRIR A GRÉCIA - AGENDAR CONSULTA
          </button>
        </motion.div>
      </div>
    </section>
  );
};
