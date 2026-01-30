import { motion } from "framer-motion";

export const ProblemSectionUC = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Por Que Roteiros Comuns Não Funcionam?</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center"
        >
          <p>Você pesquisa sobre a Patagônia.</p>
          <p>Você encontra pacotes de viagem "tudo incluso".</p>
          <p>Você lê avaliações de turistas frustrados.</p>
          
          <p className="font-semibold text-foreground text-xl pt-4">Mas no fundo, você sabe que algo não está certo.</p>
          
          <div className="space-y-2 pt-6">
            <p className="text-primary font-semibold">Falta o cuidado com cada detalhe.</p>
            <p className="text-primary font-semibold">Falta um guia que conhece cada trilha.</p>
            <p className="text-primary font-semibold">Falta aquele momento em que você sente que está no FIM DO MUNDO.</p>
          </div>
          
          <div className="space-y-4 pt-8">
            <p>Você já imaginou pisar onde a terra termina, em Ushuaia?</p>
            <p>Você já imaginou ouvir o estrondo de blocos de gelo caindo do Perito Moreno?</p>
            <p>Você já imaginou navegar entre pinguins e leões marinhos no Canal Beagle?</p>
            <p>Você já imaginou atravessar florestas subantárticas no Trem do Fim do Mundo?</p>
            <p>Você já imaginou caminhar sobre uma geleira milenar?</p>
          </div>
          
          <div className="space-y-4 pt-8">
            <p className="text-xl font-semibold text-foreground">Você merecia viver isso.</p>
            <p className="text-xl font-semibold text-foreground">E você pode.</p>
            <p className="text-2xl font-bold text-primary">Agora.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20"
          >
            <p className="text-lg text-foreground italic">
              "A Patagônia não é só um destino. É uma experiência que transforma. 
              É onde você descobre que o mundo é maior do que imaginava."
            </p>
            <p className="text-primary font-semibold mt-4">— Evandro Mendes</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
