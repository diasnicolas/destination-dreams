import { motion } from "framer-motion";
import { Train, Ship, Mountain, Snowflake, TreePine, Building, Check } from "lucide-react";

const experiences = [
  { 
    icon: Train, 
    title: "Trem do Fim do Mundo", 
    description: "Lendária ferrovia que atravessa florestas subantárticas até o Parque Nacional Tierra del Fuego" 
  },
  { 
    icon: Ship, 
    title: "Canal Beagle & Pinguins", 
    description: "Navegação épica com avistamento de pinguins, leões marinhos e o famoso Farol Les Éclaireurs" 
  },
  { 
    icon: TreePine, 
    title: "Parque Nacional Tierra del Fuego", 
    description: "Trilhas pela Baía Lapataia, onde a Rota 3 termina — literalmente o fim do mundo" 
  },
  { 
    icon: Mountain, 
    title: "Glaciar Perito Moreno", 
    description: "60 metros de parede de gelo — uma das poucas geleiras em crescimento no planeta" 
  },
  { 
    icon: Snowflake, 
    title: "Trekking no Gelo", 
    description: "Caminhar sobre uma geleira milenar com grampões — experiência única e transformadora" 
  },
  { 
    icon: Building, 
    title: "Buenos Aires Cultural", 
    description: "Recoleta, La Boca, Tango — a sofisticação portenha como fechamento perfeito" 
  },
];

const differentials = [
  "3 noites em Ushuaia (cidade mais austral do mundo)",
  "3 noites em El Calafate (portal das geleiras)",
  "2 noites em Buenos Aires (elegância portenha)",
  "Trem do Fim do Mundo incluso",
  "Navegação Canal Beagle inclusa",
  "Parque Nacional Tierra del Fuego",
  "Glaciar Perito Moreno (passarelas)",
  "Opção de Mini Trekking no gelo",
  "Todos os transfers inclusos",
  "Guia brasileiro acompanhando",
  "Hotéis selecionados premium",
  "Grupo pequeno (15-20 pessoas)"
];

export const ExperiencesSectionUC = () => {
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
            O Que Torna Esse Roteiro <span className="text-primary">Especial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiências cuidadosamente selecionadas para você viver o melhor da Patagônia
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
                className="p-6 bg-card rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Diferenciais da <span className="text-primary">Expedição</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentials.map((diff, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: index * 0.05 }} 
                className="flex gap-3 items-start p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">{diff}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center"
        >
          <Snowflake className="w-10 h-10 text-primary mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-2">Setembro: A Época Ideal</h4>
          <p className="text-muted-foreground">
            Final do inverno patagônico — paisagens com neve, menos turistas, 
            temperaturas mais amenas e a natureza em transição para a primavera. 
            O momento perfeito para viver a Patagônia em sua essência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
