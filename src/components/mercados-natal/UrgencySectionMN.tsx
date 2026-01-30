import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/common/CountdownTimer";

export const UrgencySectionMN = () => {
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
            Você Está Pronto Para Reviver a <span className="text-primary">Magia do Natal</span>?
          </h2>
          
          {/* Countdown Timer */}
          <div className="py-6">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Embarque em Dezembro de 2026
            </p>
            <CountdownTimer targetDate="2026-12-01T00:00:00" />
          </div>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Esta viagem não é para todos.</p>
            <p className="font-semibold text-foreground">É para quem acredita que experiências transformam vidas.</p>
            <p>É para quem quer reviver aquela magia da infância.</p>
            <p className="text-xl font-bold text-primary">13 dias de pura magia • Dezembro 2026</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-primary/20 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Vagas limitadas. Grupo reduzido. Experiência exclusiva.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Não deixe para depois. Seu lugar está aqui.
            </p>
          </div>
          
          <p className="text-xl font-bold text-primary">Você merece essa magia.</p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact} 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            QUERO REVIVER A MAGIA - AGENDAR CONSULTA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
