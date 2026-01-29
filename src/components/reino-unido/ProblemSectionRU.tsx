import { motion } from "framer-motion";

export const ProblemSectionRU = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Você Sente Que Falta Algo?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center"
        >
          <p>Você trabalha todos os dias.</p>
          <p>Você cumpre suas responsabilidades.</p>
          <p>Você vive uma vida "normal".</p>
          <p className="font-semibold text-foreground text-xl pt-4">Mas no fundo, você sente que falta algo.</p>
          
          <div className="space-y-2 pt-6">
            <p className="text-primary font-semibold">Falta magia.</p>
            <p className="text-primary font-semibold">Falta história.</p>
            <p className="text-primary font-semibold">Falta aquele momento em que você se sente VIVO.</p>
          </div>

          <div className="space-y-4 pt-8">
            <p>Você já imaginou estar em Londres, dormindo em um hotel ao lado do Big Ben?</p>
            <p>Você já imaginou caminhar pelas ruas medievais de Durham?</p>
            <p>Você já imaginou explorar o Castelo de Edinburgh com uma historiadora que conhece cada pedra?</p>
            <p>Você já imaginou descobrir as Highlands da Escócia em Inverness?</p>
            <p>Você já imaginou conhecer Liverpool, a cidade da música e da história?</p>
            <p>Você já imaginou relaxar em Bath, a cidade romana mais bem preservada?</p>
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
