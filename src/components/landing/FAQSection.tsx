import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como sei que minha segurança está garantida?",
    answer: "Você viaja com um especialista certificado que conhece cada detalhe da rota. Você tem seguro de viagem Plus Reason com USD 75.000 de cobertura. Você está em um cruzeiro de classe mundial com padrões de segurança internacionais. Evandro está com você 24/7 para qualquer necessidade.",
  },
  {
    question: "Como funciona a logística? Preciso me preocupar com voos, hotéis, traslados?",
    answer: "Tudo está incluído. Seus voos internacionais saem de São Paulo. Seus hotéis 4-5 estrelas estão reservados. Seus traslados são privativos. Você só precisa fazer as malas e aparecer. Nós cuidamos de todo o resto.",
  },
  {
    question: "Sou mais velho. Consigo acompanhar o ritmo?",
    answer: "O ritmo é seu. Há atividades para todos os níveis. Você pode participar de tudo ou escolher o que prefere. Evandro adapta a programação às suas necessidades. O importante é você aproveitar cada momento no seu próprio ritmo.",
  },
  {
    question: "Não falo inglês. Como vou me comunicar?",
    answer: "Evandro fala português. Ele é seu intérprete. Ele cuida de todas as comunicações com hotéis, restaurantes, e qualquer situação que surgir. Você nunca ficará sozinho ou sem entender o que está acontecendo.",
  },
  {
    question: "Qual é o preço? Vale a pena?",
    answer: "O preço é alto porque a qualidade é alta. Mas não é apenas sobre dinheiro. É sobre memórias que você carregará para o resto de sua vida. É sobre experiências que transformam quem você é. Entre em contato para uma consulta privada e discutiremos os detalhes do investimento.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-navy to-ocean-deep relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/5 to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Perguntas que você </span>
            <span className="text-gradient-gold">pode estar fazendo</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border border-turquoise/20 data-[state=open]:border-primary/40 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
