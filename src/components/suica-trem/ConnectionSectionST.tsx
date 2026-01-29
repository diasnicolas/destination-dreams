import { motion } from "framer-motion";
import { Train, Mountain, Award, Hotel } from "lucide-react";

const credentials = [
  {
    icon: Train,
    text: "Trem panorâmico Monte Pilatus — Ponte da Capela vista de cima",
  },
  {
    icon: Mountain,
    text: "Jungfraujoch — Topo da Europa (3.454m) de trem",
  },
  {
    icon: Train,
    text: "Glacier Express — O trem mais lendário do mundo",
  },
  {
    icon: Mountain,
    text: "Matterhorn — Zermatt com a montanha mais icônica dos Alpes",
  },
];

export const ConnectionSectionST = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-primary/10 via-background to-primary/10" id="solution">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Apresento: Suíça de Trem - Jornada Dos Trens Mais Lindos Do Mundo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Criei um roteiro que não é turístico. É um roteiro que EU PESSOALMENTE criei.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 text-lg text-center mb-12"
        >
          <p>Eu pesquisei, testei e selecionei cada detalhe.</p>
          <p>E para isso, contei com uma guia local que vive há <span className="font-bold text-primary">14 ANOS</span> na Suíça.</p>
          <p>Ela explorou cada trem, cada montanha, cada vilagem.</p>
          <p>Ela criou experiências que você <span className="font-bold">NÃO VAI ENCONTRAR</span> em outro roteiro.</p>
          <p className="text-xl font-semibold text-primary pt-4">
            Experiências autênticas. Experiências mágicas. Experiências que transformam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Experiências Exclusivas Que Você Vai Viver:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-card rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{credential.text}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center space-y-4"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "🚂 Gornergrat — Vista para o Matterhorn",
                "🏨 Hotéis 4-5 estrelas",
                "🌄 Vilarejos alpinos autênticos",
                "🍽️ Gastronomia suíça",
                "🇨🇭 Guia brasileira há 14 anos"
              ].map((highlight, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {highlight}
                </span>
              ))}
            </div>
            <p className="text-lg text-muted-foreground pt-6">
              Eu pessoalmente testei cada detalhe. Eu pessoalmente acredito que vai transformar você.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
