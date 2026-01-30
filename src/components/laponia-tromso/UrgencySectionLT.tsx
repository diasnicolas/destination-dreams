import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/common/CountdownTimer";

export const UrgencySectionLT = () => {
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
            Você Está Pronto Para Ver a <span className="text-primary">Aurora Boreal</span>?
          </h2>
          
          {/* Countdown Timer */}
          <div className="py-6">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Embarque em 1º de Março de 2027
            </p>
            <CountdownTimer targetDate="2027-03-01T00:00:00" />
          </div>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Esta viagem não é para todos.</p>
            <p className="font-semibold text-foreground">É para quem quer ver a dança das luzes no céu ártico.</p>
            <p>É para quem acredita que experiências transformam vidas.</p>
            <p className="text-xl font-bold text-primary">16 dias de magia • Março 2027</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-primary/20 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">Apenas 15-20 vagas disponíveis.</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Os hotéis já estão 60% reservados. O Hotel de Gelo já está 70% reservado. 
              Os voos KLM já estão sendo bloqueados.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Se você espera, você perde. Não porque estamos criando urgência artificial, 
              mas porque os assentos realmente existem e realmente estão se esgotando.
            </p>
          </div>
          
          <p className="text-xl font-bold text-primary">Você vai para o Ártico. Você volta transformado.</p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact} 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            QUERO VER A AURORA BOREAL - RESERVAR AGORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
