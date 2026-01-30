import { motion } from "framer-motion";
import { TreePine, Church, Home, Thermometer, Mountain, Snowflake, Check } from "lucide-react";

const experiences = [
  { 
    icon: TreePine, 
    title: "Mercado de Estrasburgo", 
    description: "O mais antigo da Europa, desde 1570" 
  },
  { 
    icon: Church, 
    title: "Petite France", 
    description: "Bairro medieval com casarões enxaimel" 
  },
  { 
    icon: Home, 
    title: "Vilas de Colmar", 
    description: "Riquewihr e Eguisheim de conto de fadas" 
  },
  { 
    icon: Thermometer, 
    title: "Baden-Baden", 
    description: "Elegância termal da Floresta Negra" 
  },
  { 
    icon: Mountain, 
    title: "Montreux", 
    description: "Lago Léman e Alpes suíços" 
  },
  { 
    icon: Snowflake, 
    title: "Sils Maria", 
    description: "Magia alpina no inverno europeu" 
  },
];

const differentials = [
  "3 noites em Estrasburgo (Capital do Natal)",
  "Mercado de Natal mais antigo da Europa",
  "3 noites em Colmar (Pequena Veneza)",
  "Vilas de conto de fadas: Riquewihr e Eguisheim",
  "Day trip a Baden-Baden (Alemanha)",
  "2 noites em Montreux (Lago Léman)",
  "Fairmont Le Montreux Palace",
  "2 noites em Sils Maria (Alpes)",
  "Hotel Schweizerhof Sils Maria",
  "Todos os passeios inclusos"
];

export const ExperiencesSectionMN = () => {
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
                className="glass-card p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
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
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Diferenciais</h3>
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
      </div>
    </section>
  );
};
