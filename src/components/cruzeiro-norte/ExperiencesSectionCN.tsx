import { motion } from "framer-motion";
import { Sparkles, Mountain, Ship, Castle, Compass, Building, Check } from "lucide-react";

const experiences = [
  {
    icon: Sparkles,
    title: "Aurora Boreal",
    description: "Chance de ver as luzes do norte durante a navegação pelo Atlântico"
  },
  {
    icon: Mountain,
    title: "Círculo Dourado da Islândia",
    description: "Gêiseres ativos, cachoeira de Gullfoss, Parque Nacional Thingvellir"
  },
  {
    icon: Compass,
    title: "Fjords Noruegueses",
    description: "Navegação por Geirangerfjord, Sognefjord e Hardangerfjord"
  },
  {
    icon: Castle,
    title: "Castelo de Edimburgo",
    description: "Royal Mile e a história milenar da Escócia"
  },
  {
    icon: Ship,
    title: "Norwegian Star",
    description: "15 noites em cabine com varanda privada, restaurantes e spa"
  },
  {
    icon: Building,
    title: "Londres Imperial",
    description: "Big Ben, Parlamento, Westminster e a capital britânica"
  },
];

const differentials = [
  "3 noites em Londres (Park Plaza Westminster Bridge)",
  "15 noites no Norwegian Star (cabine com varanda)",
  "1 noite em Edimburgo",
  "Navegação pela Islândia (Reykjavik)",
  "Navegação pelos fjords noruegueses",
  "Tempo real em cada porto para exploração",
  "Grupo exclusivo de 15-20 pessoas",
  "Navio de ~2.000 passageiros (não massificado)",
  "Seguro viagem USD 75.000",
  "Acompanhamento pessoal de Evandro"
];

export const ExperiencesSectionCN = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-primary/5 via-background to-primary/5" id="experiences">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O Que Torna Este Cruzeiro <span className="text-primary">Especial</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não é apenas um cruzeiro. É uma expedição de luxo validada pessoalmente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Differentials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Diferenciais da Expedição
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-3 items-start p-4 bg-primary/5 rounded-lg"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">{diff}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ship Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-turquoise/10 rounded-2xl border border-primary/20 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <Ship className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">O Navio: Norwegian Star</h3>
            <p className="text-muted-foreground mb-6">
              Não é um navio de 5.000 pessoas. É um navio de ~2.000 pessoas — grande o suficiente 
              para ter todas as comodidades, pequeno o suficiente para ser pessoal.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-card rounded-lg">
                <p className="text-2xl font-bold text-primary">15</p>
                <p className="text-xs text-muted-foreground">Noites a bordo</p>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="text-2xl font-bold text-primary">Varanda</p>
                <p className="text-xs text-muted-foreground">Cabine privada</p>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground">Restaurantes</p>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="text-2xl font-bold text-primary">Spa</p>
                <p className="text-xs text-muted-foreground">& Piscinas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
