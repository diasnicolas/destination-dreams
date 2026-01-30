import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/common/CountdownTimer";
import { Snowflake, Users, Calendar } from "lucide-react";

export const UrgencySectionUC = () => {
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
            Você Está Pronto Para Ir Ao <span className="text-primary">Fim do Mundo</span>?
          </h2>
          
          {/* Countdown Timer */}
          <div className="py-6">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Embarque em 4 de Setembro de 2026
            </p>
            <CountdownTimer targetDate="2026-09-04T00:00:00" />
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-card rounded-xl border border-primary/20"
            >
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">9 Dias Intensos</h3>
              <p className="text-sm text-muted-foreground">
                4 a 12 de Setembro de 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-card rounded-xl border border-primary/20"
            >
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Grupo Exclusivo</h3>
              <p className="text-sm text-muted-foreground">
                Máximo 15-20 pessoas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-card rounded-xl border border-primary/20"
            >
              <Snowflake className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Época Ideal</h3>
              <p className="text-sm text-muted-foreground">
                Final do inverno patagônico
              </p>
            </motion.div>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Essa oportunidade não vai durar para sempre.</p>
            <p className="font-semibold text-foreground">As vagas são limitadas e o grupo é pequeno.</p>
          </div>
          
          <div className="py-4">
            <p className="text-xl font-bold text-primary mb-2">
              Ushuaia • El Calafate • Buenos Aires
            </p>
            <p className="text-muted-foreground">
              3 destinos icônicos. 1 jornada transformadora.
            </p>
          </div>

          <p className="text-xl font-bold text-primary">
            Você merecia essa aventura.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact} 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            QUERO IR AO FIM DO MUNDO - AGENDAR CONSULTA
          </Button>

          <p className="text-sm text-muted-foreground">
            Clique acima para agendar uma conversa sem compromisso
          </p>
        </motion.div>
      </div>
    </section>
  );
};
