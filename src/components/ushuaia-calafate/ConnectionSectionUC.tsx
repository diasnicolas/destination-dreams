import { motion } from "framer-motion";
import { Award, MapPin, Users, Shield, Compass, Globe, Briefcase, BadgeCheck, ExternalLink } from "lucide-react";
import donoImage from "@/assets/dono.webp";
import certificadoCadastur from "@/assets/docs/certificado_cadastur.pdf";
import certificadoAussie from "@/assets/docs/certificado_aussie_specialist.pdf";

const credentials = [
  {
    icon: Award,
    text: "Especialista em destinos extremos — Conhecimento profundo da Patagônia Argentina",
  },
  {
    icon: MapPin,
    text: "Roteiros testados pessoalmente — Cada detalhe foi vivenciado antes de ser oferecido",
  },
  {
    icon: Users,
    text: "Acompanhamento pessoal do embarque ao retorno — não delega, não terceiriza",
  },
  {
    icon: Shield,
    text: "Histórico de grupos bem-sucedidos — viajantes satisfeitos e transformados",
  },
];

const certifications = [
  {
    icon: Award,
    name: "Aussie Travel Specialist",
    issuer: "Governo Australiano",
    description: "Certificação oficial para especialistas em turismo australiano",
    href: certificadoAussie,
  },
  {
    icon: BadgeCheck,
    name: "Cadastur",
    issuer: "Ministério do Turismo (Brasil)",
    description: "Cadastro oficial de profissionais de turismo",
    href: certificadoCadastur,
  },
  {
    icon: Globe,
    name: "Experiência Internacional",
    issuer: "Vivência Autêntica",
    description: "Anos de experiência em viagens premium pelo mundo",
  },
  {
    icon: Briefcase,
    name: "CEO, WE Travel UK",
    issuer: "Empresa Premium",
    description: "Especialista em viagens premium para brasileiros",
  },
];

export const ConnectionSectionUC = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-ocean-medium to-ocean-deep relative overflow-hidden">
      {/* Decorative elements */}
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
              {/* Main avatar image */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img 
                  src={donoImage} 
                  alt="Evandro Mendes" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 md:top-4 md:right-0 glass-card px-4 py-2 rounded-full border border-primary/30"
              >
                <span className="text-xs font-semibold text-primary">Aussie Travel Specialist</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 md:bottom-4 md:left-0 glass-card px-4 py-2 rounded-full border border-primary/30"
              >
                <span className="text-xs font-semibold text-primary">CEO WE Travel UK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Quem é </span>
                <span className="text-gradient-gold">Evandro Mendes</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Evandro Mendes vive de um sonho que é levar pessoas ao <strong className="text-foreground">Fim do Mundo</strong>. 
                Especialista em viagens exclusivas, ele não terceiriza. Ele não delega. 
                Ele <strong className="text-foreground">caminha ao seu lado</strong> desde o embarque no Brasil 
                até o último brinde em Buenos Aires.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <credential.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{credential.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {certifications.map((cert, index) => {
                const CardContent = (
                  <>
                    <cert.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm text-foreground flex items-center justify-center gap-1">
                      {cert.name}
                      {cert.href && <ExternalLink className="w-3 h-3 text-primary" />}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </>
                );

                return cert.href ? (
                  <motion.a
                    key={index}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-4 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    {CardContent}
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-4 rounded-lg text-center"
                  >
                    {CardContent}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
