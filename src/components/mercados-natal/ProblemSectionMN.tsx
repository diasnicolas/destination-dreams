import { motion } from "framer-motion";

export const ProblemSectionMN = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Você Se Lembra Daquela Sensação?</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center"
        >
          <p>Aquele Natal da infância. Quando tudo era mágico.</p>
          <p>Quando as luzes piscavam. Quando o aroma de canela e vinho quente preenchia o ar.</p>
          <p className="font-semibold text-foreground text-xl pt-4">Quando você acreditava em milagres.</p>
          
          <div className="space-y-2 pt-6">
            <p className="text-primary font-semibold">Essa sensação ainda existe.</p>
            <p className="text-primary font-semibold">Está na Europa. Nos Mercados de Natal.</p>
            <p className="text-primary font-semibold">E eu vou te levar lá.</p>
          </div>
          
          <div className="space-y-4 pt-8">
            <p>Você já imaginou caminhar pelo mercado de Natal mais antigo da Europa?</p>
            <p>Você já imaginou passear por vilas que parecem saídas de um conto de fadas?</p>
            <p>Você já imaginou ver os Alpes cobertos de neve enquanto saboreia um vinho quente?</p>
            <p>Você já imaginou reviver aquela magia da infância?</p>
          </div>
          
          <div className="space-y-4 pt-8 glass-card p-8 rounded-xl border border-primary/20">
            <p className="text-muted-foreground">
              Muitas agências vendem pacotes de Natal apressados. Você corre de um mercado para outro. Você tira fotos rápidas. Você volta para casa cansado.
            </p>
            <p className="text-muted-foreground">
              Esse roteiro é diferente. <strong className="text-foreground">Você não visita os mercados de Natal. Você vive a magia do Natal europeu.</strong>
            </p>
          </div>
          
          <div className="space-y-4 pt-8">
            <p className="text-xl font-semibold text-foreground">Você merece essa magia.</p>
            <p className="text-xl font-semibold text-foreground">E você pode vivê-la.</p>
            <p className="text-2xl font-bold text-primary">Agora.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
