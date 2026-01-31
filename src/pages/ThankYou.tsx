import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone, Mail, Instagram, Plane, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";
import { contactData } from "@/lib/contactData";
import { GoogleIcon } from "@/components/common/GoogleIcon";

import logoAgencia from "@/assets/logotipo-agencia-index.png";

const destinations = [
  { name: "Cruzeiro Transpacífico", path: "/cruzeiro-transpacifico-2027" },
  { name: "Austrália & Nova Zelândia", path: "/australia-novazelandia-2027" },
  { name: "Reino Unido", path: "/reino-unido-2026" },
  { name: "Suíça de Trem", path: "/suica-trem-2026" },
  { name: "África do Sul & Ilhas Maurício", path: "/africa-mauricio-2026" },
  { name: "China: Maravilhas Culturais", path: "/china-maravilhas-2027" },
  { name: "Japão & China", path: "/japao-china-2026" },
  { name: "Puglia & Costa Amalfitana", path: "/puglia-amalfi-2026" },
  { name: "Tailândia & Dubai", path: "/tailandia-dubai-2026" },
  { name: "Cruzeiro Norte Europeu", path: "/cruzeiro-norte-europeu-2026" },
  { name: "Ushuaia, El Calafate & Buenos Aires", path: "/ushuaia-calafate-2026" },
  { name: "Mercados de Natal", path: "/mercados-natal-2026" },
  { name: "Lapônia & Tromsø", path: "/laponia-tromso-2027" },
  { name: "Grécia Além do Óbvio", path: "/grecia-alem-do-obvio-2026" },
];

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Obrigado! | WE Travel UK"
        description="Sua mensagem foi enviada com sucesso. Em breve entraremos em contato."
      />

      {/* Header with Logo */}
      <header className="w-full py-6 bg-navy/50 backdrop-blur-sm border-b border-turquoise/20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img 
              src={logoAgencia} 
              alt="WE Travel UK" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Thank You Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-ocean-deep to-background" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />

        {/* Flying plane animation */}
        <motion.div
          className="absolute text-turquoise/20"
          animate={{
            x: ["-10%", "110%"],
            y: ["20%", "40%", "30%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Plane className="w-12 h-12 rotate-12" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-turquoise to-coral">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Obrigado pelo{" "}
              <span className="bg-gradient-to-r from-turquoise to-cyan-300 bg-clip-text text-transparent">
                contato!
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Sua mensagem foi recebida com sucesso.
              <br />
              <span className="text-turquoise">Nossa equipe entrará em contato em breve.</span>
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/20 max-w-xl mx-auto"
            >
              <p className="text-muted-foreground">
                Enquanto isso, que tal explorar outros destinos incríveis que preparamos para você?
              </p>
            </motion.div>

            {/* Back to Home Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-turquoise to-coral text-white font-semibold rounded-full hover:shadow-lg hover:shadow-turquoise/25 transition-all duration-300"
              >
                Voltar para Ínicio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Conheça outros{" "}
              <span className="text-turquoise">destinos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra experiências únicas de viagem que transformam sonhos em realidade
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.path}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.06 }}
              >
                <Link
                  to={destination.path}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-navy/50 border border-turquoise/30 rounded-full text-sm text-turquoise hover:bg-turquoise/20 hover:border-turquoise transition-all duration-300"
                >
                  <MapPin className="w-3 h-3" />
                  {destination.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-navy border-t border-turquoise/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div>
              <img 
                src={logoAgencia} 
                alt="WE Travel UK" 
                className="h-10 mb-4"
              />
              <p className="text-muted-foreground text-sm">
                Transformando sonhos em destinos desde 2018. 
                Viagens exclusivas em grupo com acompanhamento pessoal.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <div className="space-y-3">
                <a 
                  href={contactData.phone.link}
                  className="flex items-center gap-3 text-muted-foreground hover:text-turquoise transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactData.phone.display}</span>
                </a>
                <a 
                  href={contactData.email.link}
                  className="flex items-center gap-3 text-muted-foreground hover:text-turquoise transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{contactData.email.display}</span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href={contactData.social.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-turquoise hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                {contactData.social.google.link && (
                  <a
                    href={contactData.social.google.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-turquoise hover:text-white transition-all"
                  >
                    <GoogleIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-muted/20 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WE Travel UK. Todos os direitos reservados.
            </p>
          </div>

          {/* ZapTurize Link */}
          <div className="pt-6 border-t border-turquoise/10 text-center">
            <a
              href={contactData.developer.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <span>Desenvolvido por</span>
              <span className="font-medium text-foreground">{contactData.developer.name}</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default ThankYou;
