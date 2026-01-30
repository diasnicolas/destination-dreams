import { motion } from "framer-motion";

export const ProblemSectionLT = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Você Já Sonhou Com Isso?</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center"
        >
          <p>Há um lugar onde a noite dura meses.</p>
          <p>Há um lugar onde a aurora boreal dança no céu como um espírito vivo.</p>
          <p>Há um lugar onde você dorme em um iglu de gelo, onde você corre com huskies puxando um trenó, onde você encontra o Papai Noel no Círculo Polar Ártico.</p>
          <p className="font-semibold text-foreground text-xl pt-4">Lapônia. Finlândia. Noruega.</p>
          
          <div className="space-y-2 pt-6">
            <p className="text-primary font-semibold">16 dias no topo do mundo.</p>
            <p className="text-primary font-semibold">Onde a natureza governa. Onde a magia é real.</p>
            <p className="text-primary font-semibold">Onde você se torna parte de uma história que poucos brasileiros vivem.</p>
          </div>
          
          <div className="space-y-4 pt-8">
            <p>Você já imaginou ver a aurora boreal dançando no céu?</p>
            <p>Você já imaginou dormir em um iglu de gelo e acordar com as luzes do norte acima de você?</p>
            <p>Você já imaginou correr em um trenó puxado por huskies siberianos pelo Ártico?</p>
            <p>Você já imaginou cruzar o Círculo Polar Ártico?</p>
          </div>
          
          <div className="space-y-4 pt-8 glass-card p-8 rounded-xl border border-primary/20">
            <p className="text-muted-foreground">
              Muitas agências vendem pacotes árticos apressados. Você corre de uma atividade para outra. Uma única tentativa de ver a aurora. Você volta frustrado.
            </p>
            <p className="text-muted-foreground">
              Este roteiro é diferente. <strong className="text-foreground">Você não visita o Ártico. Você vive a magia do Ártico.</strong>
            </p>
            <p className="text-muted-foreground">
              Múltiplas tentativas de ver a Aurora Boreal. Tempo para absorver cada experiência. Uma noite inteira em um Hotel de Gelo.
            </p>
          </div>
          
          <div className="space-y-4 pt-8">
            <p className="text-xl font-semibold text-foreground">Você vai para o Ártico.</p>
            <p className="text-xl font-semibold text-foreground">Você volta transformado.</p>
            <p className="text-2xl font-bold text-primary">Março 2027.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
