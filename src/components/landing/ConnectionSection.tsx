import { motion } from "framer-motion";
import { Award, MapPin, Users, Shield, Compass } from "lucide-react";

const credentials = [
  {
    icon: Award,
    text: "Especialista certificado em turismo australiano",
  },
  {
    icon: MapPin,
    text: "3 anos de vivência em Sydney",
  },
  {
    icon: Users,
    text: "Acompanhamento pessoal do embarque ao retorno",
  },
  {
    icon: Shield,
    text: "Histórico de grupos bem-sucedidos",
  },
];

export const ConnectionSection = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-ocean-medium to-ocean-deep relative overflow-hidden">
      {/* Decorative ocean elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-turquoise/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-turquoise/10 to-transparent" />

      {/* Floating compass */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-20 text-turquoise/10 hidden lg:block"
      >
        <Compass className="w-24 h-24" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main avatar placeholder */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-ocean-medium to-navy-light flex items-center justify-center border-4 border-primary/30 shadow-glow">
                <span className="font-display text-6xl md:text-7xl text-primary font-bold">EM</span>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 md:top-4 md:right-0 glass-card px-4 py-2 rounded-full border border-primary/30"
              >
                <span className="text-xs font-semibold text-primary">Aussie Specialist</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 md:bottom-4 md:left-0 glass-card px-4 py-2 rounded-full border border-primary/30"
              >
                <span className="text-xs font-semibold text-primary">Cadastur</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Sua jornada é </span>
              <span className="text-gradient-gold">orquestrada</span>
            </h2>

            <div className="space-y-4 mb-8 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Evandro Mendes</strong> não é um guia turístico. 
                É o CEO da WE Travel UK e um <strong className="text-primary">Aussie Specialist certificado</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Viveu <strong className="text-foreground">3 anos em Sydney</strong>. 
                Conhece cada rua, cada história, cada segredo. 
                E <strong className="text-primary">acompanha pessoalmente</strong>.
              </p>
            </div>

            {/* Credentials List */}
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-4 h-4 text-turquoise" />
                  </div>
                  <span className="text-foreground">{credential.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
