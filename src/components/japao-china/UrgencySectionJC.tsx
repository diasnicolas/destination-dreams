import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/common/CountdownTimer";

export const UrgencySectionJC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("formulario");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-primary/10 via-primary/5 to-background" id="urgency">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Você Está Pronto Para Viver A <span className="text-primary">Magia Do Oriente</span>?</h2>
          
          {/* Countdown Timer */}
          <div className="py-6">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Embarque em 03 de Abril de 2027
            </p>
            <CountdownTimer targetDate="2027-04-03T00:00:00" />
          </div>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Essa oportunidade não vai durar para sempre.</p>
            <p className="font-semibold text-foreground">As vagas são limitadas.</p>
          </div>
          <p className="text-xl font-bold text-primary">Você merecia essa transformação.</p>
          <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">QUERO VIVER O ORIENTE - AGENDAR CONSULTA</Button>
        </motion.div>
      </div>
    </section>
  );
};
