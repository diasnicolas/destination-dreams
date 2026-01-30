import { motion } from "framer-motion";
import { Phone, Mail, Globe, Anchor, Instagram } from "lucide-react";
import cadasturImage from "@/assets/logoCadastur.png";

export const FooterSectionMN = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-16 md:py-24 w-full bg-gradient-to-b from-navy to-ocean-deep border-t border-turquoise/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl" />
      </div>

      {/* Floating anchor */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-20 text-turquoise/10"
      >
        <Anchor className="w-24 h-24" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          {/* Closing Message */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Os Mercados de Natal não são apenas uma viagem.
            </h3>
            <p className="text-xl text-primary font-display italic">
              É uma volta à magia da infância.
            </p>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Você sai de São Paulo como você é. Você retorna como alguém diferente. 
              <strong className="text-foreground"> Renovado. Transformado.</strong>
            </p>
            <p>
              Você viveu experiências que poucas pessoas vivem. 
              Você caminhou pelo mercado de Natal mais antigo da Europa em Estrasburgo.
              Você se encantou pelas vilas de conto de fadas de Colmar.
              Você viu os Alpes suíços cobertos de neve em Montreux e Sils Maria.
            </p>
            <p>
              E essa é uma honra que você carregará para o resto de sua vida.
            </p>
          </div>

          <p className="text-lg text-foreground font-semibold">
            Você é um dos <span className="text-primary">eleitos</span>.
          </p>

          {/* Signature */}
          <div className="pt-8 border-t border-turquoise/20">
            <p className="text-primary font-display italic text-lg mb-2">
              Bem-vindo à magia do Natal Europeu.
            </p>
            <p className="text-foreground font-medium mb-1">
              Sua jornada começa agora.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              —
            </p>
            <p className="font-display text-xl font-bold text-foreground mt-2">
              Evandro Mendes
            </p>
            <div className="text-sm text-muted-foreground space-y-1 mt-2">
              <p>CEO, WE Travel UK</p>
              <p>Aussie Travel Specialist — Certificado pelo Governo Australiano</p>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center px-4 py-2 shadow-sm">
                  <div className="w-24 h-10 flex items-center justify-center">
                    <img 
                      src={cadasturImage} 
                      alt="Logo CADASTUR" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <span className="text-foreground text-sm md:text-base">45.759.934/0001-40</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-muted-foreground">
            <a
              href="tel:+5513982263757"
              className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
            >
              <Phone className="w-4 h-4" />
              <span>(13) 98226-3757</span>
            </a>
            <a
              href="mailto:contato@wetraveluk.com"
              className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
            >
              <Mail className="w-4 h-4" />
              <span>contato@wetraveluk.com.br</span>
            </a>
            <a
              href="https://instagram.com/wetravel_uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
            >
              <Instagram className="w-4 h-4" />
              <span>@wetravel_uk</span>
            </a>
            <a
              href="https://wetraveluk.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
            >
              <Globe className="w-4 h-4" />
              <span>wetraveluk.com.br</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground pt-8">
            © {currentYear} WE Travel UK. Todos os direitos reservados.
          </p>

          {/* ZapTurize Link */}
          <div className="pt-6 border-t border-turquoise/10">
            <a
              href="https://zapturize.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors animated-underline"
            >
              <span>Desenvolvido por</span>
              <span className="font-medium text-foreground">ZapTurize</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
