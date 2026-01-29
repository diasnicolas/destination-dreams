import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/landing/CountdownTimer";

export const UrgencySectionST = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
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
            Você Está Pronto Para Viajar Nos <span className="text-primary">Trens Mais Lindos Do Mundo</span>?
          </h2>

          {/* Countdown Timer */}
          <div className="py-6">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Embarque em 15 de Setembro de 2026
            </p>
            <CountdownTimer targetDate="2026-09-15T00:00:00" />
          </div>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Essa oportunidade não vai durar para sempre.</p>
            <p className="font-semibold text-foreground">As vagas são limitadas.</p>
            <p>Cada dia que passa, mais pessoas confirmam.</p>
          </div>

          <div className="space-y-4 text-xl">
            <p className="font-semibold text-foreground">Você quer estar nessa jornada?</p>
            <p className="font-semibold text-foreground">Você quer viajar nos trens mais lindos do mundo?</p>
            <p className="font-bold text-primary text-2xl">Você quer voltar para casa diferente?</p>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-6">Próximos Passos</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              {[
                "1. Clique no botão abaixo",
                "2. Preencha o formulário",
                "3. Agende uma consulta comigo",
                "4. Vamos conversar sobre seus sonhos",
                "5. Você recebe uma proposta personalizada",
                "6. Você confirma sua vaga",
                "7. Você começa a contar os dias"
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-primary/20">
                  <span className="text-primary font-bold">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <p className="text-lg">Não deixe para depois.</p>
            <p className="text-lg font-semibold">As vagas estão se preenchendo rapidamente.</p>
            <p className="text-lg">E quando elas acabarem, você vai se arrepender de não ter agido agora.</p>
            <p className="text-xl font-bold text-primary pt-4">Você merecia essa transformação.</p>
          </div>

          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            QUERO VIAJAR NOS TRENS MAIS LINDOS - AGENDAR CONSULTA
          </Button>

          <div className="text-sm text-muted-foreground space-y-2 pt-8">
            <p>P.S. — Essa é a sua chance. Não deixe passar.</p>
            <p>P.P.S. — Você merecia isso.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
