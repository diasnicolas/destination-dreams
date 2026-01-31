import { motion } from "framer-motion";
import { Award, MapPin, Users, Shield, Compass, Globe, Briefcase, BadgeCheck, ExternalLink } from "lucide-react";
import donoImage from "@/assets/dono.webp";
import certificadoCadastur from "@/assets/docs/certificado_cadastur.pdf";
import certificadoAussie from "@/assets/docs/certificado_aussie_specialist.pdf";

const credentials = [
  {
    icon: Award,
    text: "Especialista em Europa — Conhecimento profundo dos mercados de Natal europeus",
  },
  {
    icon: MapPin,
    text: "Roteiros testados pessoalmente — Cada mercado, cada hotel, cada detalhe foi vivenciado",
  },
  {
    icon: Users,
    text: "Acompanhamento pessoal do embarque ao retorno — não delega, não terceiriza",
  },
  {
    icon: Shield,
    text: "Histórico de grupos bem-sucedidos — viajantes satisfeitos e encantados",
  },
];

const certifications = [
  {
    icon: Award,
    name: "Especialista em Europa",
    issuer: "",
    description: "",
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

export const ConnectionSectionMN = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/10 to-transparent" />

      {/* Floating compass */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-20 text-primary/10 hidden lg:block"
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
                <span className="text-xs font-semibold text-primary">Especialista em Europa</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 md:bottom-4 md:left-0 glass-card px-4 py-2 rounded-full border border-primary/30"
              >
                <span className="text-xs font-semibold text-primary">Cadastur</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 -right-8 md:right-[-60px] glass-card px-4 py-2 rounded-full border border-primary/30 hidden md:block"
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
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Quem Guia Sua Jornada
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Sua magia é </span>
              <span className="text-gradient-gold">orquestrada</span>
            </h2>

            <div className="space-y-4 mb-8 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Evandro Mendes</strong> não é um guia de turismo. 
                É o CEO da WE Travel UK e um <strong className="text-primary">especialista em viagens premium</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Este roteiro pelos Mercados de Natal foi <strong className="text-foreground">pessoalmente criado e testado</strong>.
                Cada mercado, cada vila, cada experiência foi vivenciada antes de ser oferecida a você.
              </p>
              <p className="text-lg leading-relaxed">
                Ele acompanha <strong className="text-primary">pessoalmente</strong> cada grupo.
                Ele não delega. Ele não terceiriza. Ele está com você.
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
                  className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <credential.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{credential.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h3 className="text-center text-xl font-display font-bold mb-8 text-foreground">
            Certificações & Credenciais
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => {
              const CardContent = (
                <>
                  <cert.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-foreground mb-1 flex items-center justify-center gap-1">
                    {cert.name}
                    {cert.href && <ExternalLink className="w-3 h-3 text-primary" />}
                  </h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </>
              );

              return cert.href ? (
                <motion.a
                  key={cert.name}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 rounded-lg text-center border border-primary/20 cursor-pointer hover:scale-105 transition-transform"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 rounded-lg text-center border border-primary/20"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
