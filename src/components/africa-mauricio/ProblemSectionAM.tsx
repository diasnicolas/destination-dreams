import { motion } from "framer-motion";

export const ProblemSectionAM = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-muted/30 to-background" id="problem">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Você Sente Que Falta Algo?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center"
        >
          <p>Você vive a vida. Você segue o ritmo do dia a dia.</p>
          <p className="font-semibold text-foreground text-xl pt-4">Mas no fundo, você sente que falta algo.</p>
          
          <div className="space-y-2 pt-6">
            <p className="text-primary font-semibold">Falta magia.</p>
            <p className="text-primary font-semibold">Falta transformação.</p>
            <p className="text-primary font-semibold">Falta aquele momento em que você se sente VIVO.</p>
          </div>

          <div className="space-y-4 pt-8">
            <p>Você já imaginou estar frente a frente com um leão africano?</p>
            <p>Você já imaginou ver os Big Five na natureza selvagem?</p>
            <p>Você já imaginou estar em uma praia paradisíaca com águas cristalinas?</p>
            <p>Você já imaginou viajar em voo privado (não em van de 7 horas)?</p>
            <p>Você já imaginou ter 3 safáris inclusos em um único roteiro?</p>
          </div>

          <div className="space-y-4 pt-8">
            <p className="text-xl font-semibold text-foreground">Você merecia viver isso.</p>
            <p className="text-xl font-semibold text-foreground">E você pode.</p>
            <p className="text-2xl font-bold text-primary">Agora.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
