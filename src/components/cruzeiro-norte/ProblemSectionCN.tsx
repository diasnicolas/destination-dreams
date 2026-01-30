import { motion } from "framer-motion";

export const ProblemSectionCN = () => {
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
            Você Já Se Sentiu Assim em um Cruzeiro?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center"
        >
          <p>Você embarca em um cruzeiro com expectativas altas.</p>
          <p>Você imagina descobrir lugares incríveis, viver experiências únicas.</p>
          
          <p className="font-semibold text-foreground text-xl pt-4">
            Mas o que você encontra é diferente.
          </p>

          <div className="space-y-2 pt-6">
            <p className="text-primary font-semibold">
              Navios com 5.000 pessoas. Você é um número.
            </p>
            <p className="text-primary font-semibold">
              Portos lotados. Duas horas para "conhecer" um destino.
            </p>
            <p className="text-primary font-semibold">
              Experiências genéricas. Nada foi testado por alguém que se importa.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <p>Você já imaginou desembarcar em Reykjavik e ver gêiseres, geleiras, um mundo que parece alienígena?</p>
            <p>Você já imaginou navegar pelos fjords noruegueses — montanhas cobertas de neve, cascatas que caem direto para o mar?</p>
            <p>Você já imaginou caminhar pelas ruas de Edimburgo, uma cidade que parece saída de um conto de fadas?</p>
            <p>Você já imaginou ter tempo real para explorar, se perder, descobrir?</p>
          </div>

          <div className="space-y-4 pt-8">
            <p className="text-xl font-semibold text-foreground">
              Você merecia viver isso.
            </p>
            <p className="text-xl font-semibold text-foreground">
              E você pode.
            </p>
            <p className="text-2xl font-bold text-primary">
              Agora.
            </p>
          </div>
        </motion.div>

        {/* Differentiator Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16"
        >
          <div className="p-6 bg-card rounded-lg border border-destructive/30 text-center">
            <h3 className="text-lg font-bold text-destructive mb-3">Cruzeiro Genérico</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>5.000+ passageiros</li>
              <li>2 horas em cada porto</li>
              <li>Roteiro não validado</li>
              <li>Você é um número</li>
            </ul>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-muted text-center">
            <h3 className="text-lg font-bold text-muted-foreground mb-3">Cruzeiro "Premium"</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>3.000 passageiros</li>
              <li>4 horas em cada porto</li>
              <li>Roteiro padrão</li>
              <li>Serviço impessoal</li>
            </ul>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-primary text-center">
            <h3 className="text-lg font-bold text-primary mb-3">Este Cruzeiro</h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li>~2.000 passageiros</li>
              <li>Tempo real em cada porto</li>
              <li>Validado pessoalmente</li>
              <li>Grupo de 15-20 pessoas</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
