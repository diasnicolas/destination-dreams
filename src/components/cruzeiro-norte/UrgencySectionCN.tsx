import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/common/CountdownTimer";
import { Ship, Users, Calendar, Anchor } from "lucide-react";

export const UrgencySectionCN = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("formulario");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-primary/10 via-primary/5 to-background" id="urgency">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Você Está Pronto Para Descobrir o{" "}
            <span className="text-primary">Norte da Europa</span>?
          </h2>

          {/* Countdown Timer */}
          <div className="py-6">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Embarque em 9 de Setembro de 2026
            </p>
            <CountdownTimer targetDate="2026-09-09T00:00:00" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 glass-card rounded-lg"
            >
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">21</p>
              <p className="text-xs text-muted-foreground">Dias de Viagem</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-4 glass-card rounded-lg"
            >
              <Ship className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">15</p>
              <p className="text-xs text-muted-foreground">Noites no Navio</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 glass-card rounded-lg"
            >
              <Anchor className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">4</p>
              <p className="text-xs text-muted-foreground">Países</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 glass-card rounded-lg"
            >
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">15-20</p>
              <p className="text-xs text-muted-foreground">Vagas Limitadas</p>
            </motion.div>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Esta viagem é em Setembro de 2026.</p>
            <p>O navio já está 70% reservado. As cabines com varanda estão se esgotando.</p>
            <p className="font-semibold text-foreground">
              Apenas 15-20 vagas disponíveis no nosso grupo exclusivo.
            </p>
          </div>

          <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">
              Se você espera, você perde.
            </p>
            <p className="text-muted-foreground text-sm">
              Não porque estamos criando urgência artificial, mas porque as cabines realmente 
              existem e realmente estão se esgotando.
            </p>
          </div>

          <p className="text-xl font-bold text-primary">
            Você merecia essa expedição pelo Norte.
          </p>

          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            QUERO NAVEGAR PELO NORTE - AGENDAR CONSULTA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
