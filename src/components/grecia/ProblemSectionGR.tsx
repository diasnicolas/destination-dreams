import { motion } from "framer-motion";

export const ProblemSectionGR = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A Grécia que Você Não Conhece</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center"
        >
          <p>Há uma Grécia que aparece nos cartões-postais.</p>
          <p>Santorini lotada. Mykonos cheia de influencers. Atenas apressada.</p>
          <p>Milhões de turistas fazendo as mesmas fotos, nos mesmos lugares, com os mesmos ângulos.</p>
          <p className="font-semibold text-foreground text-xl pt-4">Mas existe outra Grécia.</p>
          
          <div className="space-y-2 pt-6">
            <p className="text-primary font-semibold">Uma Grécia de praias desertas com águas turquesa.</p>
            <p className="text-primary font-semibold">Uma Grécia de vilarejos onde o tempo parou.</p>
            <p className="text-primary font-semibold">Uma Grécia de tavernas familiares onde a moussaka é feita pela avó.</p>
          </div>
          
          <div className="space-y-4 pt-8">
            <p>Você já imaginou nadar em Navagio Beach — a praia mais fotografada do mundo — sem multidões?</p>
            <p>Você já imaginou caminhar pelas vilas de Cefalônia, onde os moradores ainda cumprimentam estranhos?</p>
            <p>Você já imaginou ver o pôr do sol em Santorini de um lugar secreto, longe das massas?</p>
            <p>Você já imaginou conhecer a Grécia autêntica, além do óbvio?</p>
          </div>
          
          <div className="space-y-4 pt-8 glass-card p-8 rounded-xl border border-primary/20">
            <p className="text-muted-foreground">
              A maioria das agências vende a Grécia turística. Você vai onde todo mundo vai. Você vê o que todo mundo vê. Você volta com as mesmas fotos de sempre.
            </p>
            <p className="text-muted-foreground">
              Este roteiro é diferente. <strong className="text-foreground">Você não visita a Grécia. Você vive a Grécia autêntica.</strong>
            </p>
            <p className="text-muted-foreground">
              Ilhas secretas que poucos brasileiros conhecem. Experiências locais autênticas. Tempo para absorver cada momento.
            </p>
          </div>
          
          <div className="space-y-4 pt-8">
            <p className="text-xl font-semibold text-foreground">Você vai para a Grécia.</p>
            <p className="text-xl font-semibold text-foreground">Você descobre a Grécia que poucos conhecem.</p>
            <p className="text-xl font-semibold text-foreground">Você volta transformado.</p>
            <p className="text-2xl font-bold text-primary">Setembro 2026.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
