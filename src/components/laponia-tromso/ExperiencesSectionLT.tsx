import { motion } from "framer-motion";
import { Sparkles, Snowflake, Dog, Gift, Building2, Waves, Check } from "lucide-react";

const experiences = [
  { 
    icon: Sparkles, 
    title: "Aurora Boreal", 
    description: "Múltiplas caças à aurora em Rovaniemi e Tromsø" 
  },
  { 
    icon: Snowflake, 
    title: "Hotel de Gelo", 
    description: "Uma noite mágica dormindo em um iglu" 
  },
  { 
    icon: Dog, 
    title: "Safari de Huskies", 
    description: "Trenó puxado por huskies siberianos no Ártico" 
  },
  { 
    icon: Gift, 
    title: "Vila do Papai Noel", 
    description: "Cruzar o Círculo Polar Ártico em Rovaniemi" 
  },
  { 
    icon: Building2, 
    title: "Helsinque & Tallinn", 
    description: "Capitais nórdicas e cidade medieval UNESCO" 
  },
  { 
    icon: Waves, 
    title: "Fiordes de Tromsø", 
    description: "Navegação pelos fiordes árticos noruegueses" 
  },
];

const differentials = [
  "3 noites em Helsinque (capital finlandesa)",
  "Bate-volta de ferry para Tallinn (Estônia)",
  "5 noites em Rovaniemi (coração da Lapônia)",
  "1 noite no Hotel de Gelo (experiência única)",
  "3 noites em Tromsø (capital da Aurora Boreal)",
  "Safari de Huskies no Ártico",
  "Visita à Vila do Papai Noel",
  "Cruzar o Círculo Polar Ártico",
  "Múltiplas tentativas de ver Aurora Boreal",
  "Passeio pelos Fiordes Árticos",
  "Teleférico Fjellheisen em Tromsø",
  "Voos KLM inclusos"
];

export const ExperiencesSectionLT = () => {
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
            Experiências Que <span className="text-primary">Definem Vidas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não há "visita rápida de 2 horas". Cada experiência recebe o tempo que merece.
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
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Diferenciais da Viagem</h3>
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

        {/* Special Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-12 glass-card p-8 rounded-xl border border-primary/30 text-center"
        >
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-4">Aurora Boreal: A Dança das Luzes</h4>
          <p className="text-muted-foreground">
            Março é o mês perfeito para ver a Aurora Boreal. Os dias estão ficando mais longos, 
            mas ainda há escuridão suficiente para presenciar o espetáculo das luzes. 
            Você terá <strong className="text-primary">múltiplas tentativas</strong> em Rovaniemi 
            e Tromsø — as melhores localizações do mundo para esse fenômeno.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
