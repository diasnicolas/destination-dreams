import { motion } from "framer-motion";
import { Sparkles, Globe, Camera, Users, Shield, Leaf, Star } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Redescoberta Pessoal",
    description: "Você vai se redescobrir. Vai entender quem você realmente é. Vai voltar para casa com uma perspectiva diferente.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Experiências Raras",
    description: "Você vai voar em um hidravião sobre a Grande Barreira. Vai mergulhar em águas cristalinas. Vai visitar Hobbiton. Experiências que poucas pessoas vivem.",
    color: "turquoise",
  },
  {
    icon: Camera,
    title: "Memórias Eternas",
    description: "Você vai tirar fotos que vai mostrar para seus netos. Vai ter histórias que vai contar para sempre. Memórias que vão durar a vida toda.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Conexões Genuínas",
    description: "Você vai conhecer pessoas que pensam como você. Vai fazer amigos que vão durar a vida toda. Laços que transcendem a viagem.",
    color: "turquoise",
  },
  {
    icon: Shield,
    title: "Confiança e Segurança",
    description: "Você não vai estar sozinho em nenhum momento. Guia especializado. Acompanhamento integral desde o Brasil. Viaje com segurança.",
    color: "primary",
  },
  {
    icon: Leaf,
    title: "Paz e Serenidade",
    description: "Você vai desconectar da rotina. Relaxar em lugares paradisíacos. Encontrar paz interior. Voltar para casa renovado.",
    color: "turquoise",
  },
  {
    icon: Star,
    title: "Uma Vida Diferente",
    description: "Você vai voltar para casa diferente. Ver o mundo com novos olhos. Viver uma vida mais plena. Entender que você merecia isso.",
    color: "primary",
  },
];

export const BenefitsSectionAUNZ = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-navy to-ocean-deep relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/10 to-transparent" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">O Que Você Vai </span>
            <span className="text-gradient-gold">Ganhar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Essa não é apenas uma viagem. É uma transformação.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-6 border transition-colors ${
                benefit.color === "primary" 
                  ? "border-primary/20 hover:border-primary/40" 
                  : "border-turquoise/20 hover:border-turquoise/40"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                benefit.color === "primary" 
                  ? "bg-primary/10" 
                  : "bg-turquoise/10"
              }`}>
                <benefit.icon className={`w-7 h-7 ${
                  benefit.color === "primary" 
                    ? "text-primary" 
                    : "text-turquoise"
                }`} />
              </div>
              
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
