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
    question: "Isso é muito caro. Não consigo pagar.",
    answer: "Entendo sua preocupação. Por isso oferecemos pagamento facilitado. Você pode parcelar em até 12x sem juros. Além disso, essa é uma experiência que você vai contar para o resto da vida. O investimento vale cada centavo.",
  },
  {
    question: "Tenho medo de viajar para tão longe.",
    answer: "Você não vai estar sozinho. Você vai ter acompanhamento integral desde o Brasil. Você vai ter um guia especializado. Você vai viajar com segurança e confiança.",
  },
  {
    question: "Não tenho tempo para 18 dias.",
    answer: "Você merecia tirar esse tempo. Essa é uma oportunidade rara. Você pode negociar com seu trabalho. Você pode tirar férias. Você merecia fazer isso por você.",
  },
  {
    question: "Tenho medo de não gostar.",
    answer: "Se você não gostar, devolvemos seu dinheiro. Nós garantimos sua satisfação. Mas acredito que você vai amar.",
  },
  {
    question: "Qual é a melhor época para ir?",
    answer: "A melhor época é entre setembro e maio. Mas você pode ir em qualquer época. Cada estação tem sua beleza.",
  },
  {
    question: "Preciso ter experiência em viagens internacionais?",
    answer: "Não. Você pode nunca ter viajado para o exterior. Nós cuidamos de tudo. Visto, passaporte, voos, hospedagens. Você só precisa aparecer.",
  },
  {
    question: "Posso levar minha família?",
    answer: "Sim! Temos roteiros para famílias. Temos roteiros para casais. Temos roteiros para grupos de amigos. Você escolhe.",
  },
  {
    question: "E se eu tiver uma emergência durante a viagem?",
    answer: "Você tem seguro viagem completo. Você tem acompanhamento 24/7. Você tem suporte em português. Você está seguro.",
  },
];

export const FAQSectionAUNZ = () => {
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
            <span className="text-foreground">Perguntas </span>
            <span className="text-gradient-gold">Frequentes</span>
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
