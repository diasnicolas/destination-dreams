import { motion } from "framer-motion";
import { Award, MapPin, Shield, Compass } from "lucide-react";

const credentials = [
  {
    icon: Award,
    text: "Hotel ao lado do Big Ben — Acordar com vista para o símbolo de Londres (6 noites)",
  },
  {
    icon: MapPin,
    text: "Historiadora Susana em Edinburgh — Expertise local em cada detalhe",
  },
  {
    icon: Shield,
    text: "Castelo de Edinburgh — Explorar a fortaleza mais icônica da Escócia",
  },
  {
    icon: Compass,
    text: "Highlands de Inverness — Paisagens selvagens e lendárias",
  },
];

export const ConnectionSectionRU = () => {
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
            Apresento: Reino Unido - Segredos Reais e Encantos Eternos
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
          <p>Eu passei <span className="font-bold text-primary">8 ANOS</span> em Londres.</p>
          <p>Eu explorei cada canto dessa cidade.</p>
          <p>Eu criei experiências que você <span className="font-bold">NÃO VAI ENCONTRAR</span> em outro roteiro.</p>
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
                "Liverpool — A cidade da música",
                "Bath — Cidades romanas",
                "Palácio de Westminster",
                "Trem panorâmico",
                "Museus e Galerias"
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
