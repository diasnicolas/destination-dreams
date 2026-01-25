import { motion } from "framer-motion";
import { Phone, Mail, Globe } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-16 md:py-24 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
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
              A Travessia dos Eleitos não é apenas uma viagem.
            </h3>
            <p className="text-xl text-primary font-display italic">
              É uma transformação pessoal.
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Você sai de São Paulo como você é. Você retorna como alguém diferente. 
            Renovado. Transformado. Você viveu experiências que poucas pessoas vivem. 
            Você esteve em lugares que poucos vão.
          </p>

          <p className="text-lg text-foreground font-semibold">
            Você é um dos <span className="text-primary">eleitos</span>.
          </p>

          {/* Signature */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-primary font-display italic text-lg mb-2">
              Bem-vindo à Travessia dos Eleitos.
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
              <p>Aussie Specialist — Governo Australiano</p>
              <p>Cadastur</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-muted-foreground">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
            >
              <Phone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </a>
            <a
              href="mailto:contato@wetraveluk.com"
              className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
            >
              <Mail className="w-4 h-4" />
              <span>contato@wetraveluk.com</span>
            </a>
            <a
              href="https://wetraveluk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
            >
              <Globe className="w-4 h-4" />
              <span>wetraveluk.com</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground pt-8">
            © 2025 WE Travel UK. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
