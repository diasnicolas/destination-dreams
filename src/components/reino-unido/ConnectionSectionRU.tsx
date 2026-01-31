import { motion } from "framer-motion";
import { Award, MapPin, Users, Shield, Compass, Globe, Briefcase, BadgeCheck, ExternalLink } from "lucide-react";
import sobreImageRU from "@/assets/reino-unido/sobre.jpeg";
import certificadoCadastur from "@/assets/docs/certificado_cadastur.pdf";
import certificadoAussie from "@/assets/docs/certificado_aussie_specialist.pdf";

const credentials = [
  {
    icon: Award,
    text: "8 anos de vivência em Londres — conhece cada rua, cada história, cada segredo",
  },
  {
    icon: MapPin,
    text: "CEO da WE Travel UK — Empresa sediada no Reino Unido",
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
    name: "8 Anos em Londres",
    issuer: "Vivência Autêntica",
    description: "Conhecimento profundo da cultura e destinos britânicos",
  },
  {
    icon: Briefcase,
    name: "CEO, WE Travel UK",
    issuer: "Empresa Premium",
    description: "Especialista em viagens premium para brasileiros",
  },
];

export const ConnectionSectionRU = () => {
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
              {/* Main avatar image */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img 
                  src={sobreImageRU} 
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
                <span className="text-xs font-semibold text-primary">8 Anos em Londres</span>
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
                className="absolute top-1/2 -right-8 md:right-[-60px] glass-card px-4 py-2 rounded-full border border-turquoise/30 hidden md:block"
              >
                <span className="text-xs font-semibold text-turquoise">CEO WE Travel UK</span>
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
            <span className="text-turquoise font-semibold text-sm tracking-widest uppercase mb-4 block">
              Quem Guia Sua Jornada
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Sua jornada é </span>
              <span className="text-gradient-gold">orquestrada</span>
            </h2>

            <div className="space-y-4 mb-8 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Evandro Mendes</strong> não é um guia de turismo. 
                É o CEO da WE Travel UK e <strong className="text-primary">viveu 8 anos em Londres</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Ele explorou cada canto do Reino Unido. Cada castelo, cada pub histórico, cada paisagem das Highlands.
                Este roteiro foi <strong className="text-foreground">pessoalmente criado por quem conhece o país como poucos</strong>.
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
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <credential.icon className="w-4 h-4 text-turquoise" />
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">{credential.text}</span>
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => {
            const CardContent = (
              <>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground text-sm mb-1 flex items-center justify-center gap-1">
                  {cert.name}
                  {cert.href && <ExternalLink className="w-3 h-3 text-primary" />}
                </h4>
                <p className="text-xs text-primary mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground line-clamp-3">{cert.description}</p>
              </>
            );

            return cert.href ? (
              <motion.a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl p-4 text-center border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer hover:scale-105"
              >
                {CardContent}
              </motion.a>
            ) : (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl p-4 text-center border border-primary/20 hover:border-primary/40 transition-colors"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
