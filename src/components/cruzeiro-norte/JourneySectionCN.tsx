import { motion } from "framer-motion";
import { MapPin, Plane, Ship, Castle } from "lucide-react";

const acts = [
  {
    number: "01",
    title: "A DESCOBERTA",
    subtitle: "Londres + Embarque",
    description: "Você chega em Londres. Você descansa, se acostuma com o fuso horário, se prepara mentalmente para o que vem. Três noites para imersão na capital britânica. Você está a poucos passos do Big Ben, do Parlamento, da ponte de Westminster. E então... você embarca no Norwegian Star.",
    hotel: "Park Plaza Westminster Bridge",
    nights: "3 Noites",
    highlights: ["Big Ben & Parlamento", "Imersão Britânica", "Preparação para o Cruzeiro"],
    icon: Plane
  },
  {
    number: "02",
    title: "A TRANSFORMAÇÃO",
    subtitle: "Islândia, Noruega & Escócia",
    description: "Você acorda a cada dia em um lugar diferente. Reykjavik — um mundo que parece alienígena. Os fjords noruegueses — montanhas cobertas de neve, cascatas caindo direto para o mar. Edimburgo — uma cidade que parece saída de um conto de fadas. Cada lugar mais extraordinário que o anterior.",
    hotel: "Norwegian Star",
    nights: "15 Noites",
    highlights: ["Gêiseres da Islândia", "Fjords Noruegueses", "Castelos da Escócia"],
    icon: Ship
  },
  {
    number: "03",
    title: "O RETORNO",
    subtitle: "Edimburgo + Volta",
    description: "Você desembarca em Edimburgo para uma última noite em terra. Você caminha pelo Royal Mile, visita o Castelo de Edimburgo, prova whisky escocês autêntico. E então... você volta para casa. Mas você volta diferente. Porque você viu o Norte.",
    hotel: "Hotel em Edimburgo",
    nights: "1 Noite",
    highlights: ["Castelo de Edimburgo", "Royal Mile", "Whisky Escocês"],
    icon: Castle
  },
];

export const JourneySectionCN = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-primary/5 to-background" id="journey">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A Jornada em <span className="text-primary">3 Atos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            21 dias que vão transformar sua visão do mundo
          </p>
        </motion.div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {acts.map((act, index) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 border border-primary/20">
                    <div className="absolute top-4 right-4">
                      <span className="text-5xl font-bold text-primary/20">{act.number}</span>
                    </div>
                    <div className="relative z-10">
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{act.title}</h3>
                      <p className="text-primary font-semibold mb-4">{act.subtitle}</p>
                      <div className="flex items-center gap-4 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Hospedagem:</p>
                          <p className="font-medium">{act.hotel}</p>
                        </div>
                        <div className="h-8 w-px bg-primary/20" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duração:</p>
                          <p className="font-medium text-primary">{act.nights}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {act.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {act.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">A Sequência Perfeita</h3>
          <p className="text-lg text-muted-foreground mb-4">
            Londres → Atlântico Norte → Islândia → Noruega → Escócia → Edimburgo
          </p>
          <p className="text-xl font-semibold text-primary">
            Não é aleatório. É arquiteturado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
