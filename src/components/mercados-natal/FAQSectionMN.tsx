import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { 
    question: "Preciso de visto para entrar na França e Suíça?", 
    answer: "Não! Brasileiros não precisam de visto para França e Suíça (até 90 dias). Você só precisa de um passaporte válido por pelo menos 6 meses. Muito fácil!" 
  },
  { 
    question: "Como é o clima em dezembro?", 
    answer: "Dezembro é inverno na Europa. Espere temperaturas entre -5°C e 5°C. Nos Alpes pode ser ainda mais frio. Mas é justamente isso que torna os mercados de Natal tão mágicos! A neve, o frio, o vinho quente... Vamos orientar você sobre o que levar." 
  },
  { 
    question: "Os mercados de Natal estarão abertos?", 
    answer: "Sim! Os mercados de Natal na Alsácia e Suíça funcionam de final de novembro até final de dezembro. O roteiro foi planejado para coincidir com o auge da temporada natalina." 
  },
  { 
    question: "Teremos acompanhamento durante toda a viagem?", 
    answer: "Sim! Você não está sozinho em nenhum momento. Guias locais em português acompanham todo o roteiro. Suporte disponível 24/7. Você se sente seguro desde o primeiro momento." 
  },
  { 
    question: "Posso viajar sozinha e dividir acomodação?", 
    answer: "Claro! Muitas mulheres viajam sozinhas conosco. Você pode dividir acomodação com outra pessoa do grupo, ou ficar em quarto individual (com custo adicional). Você escolhe!" 
  },
  { 
    question: "Quais são as formas de pagamento?", 
    answer: "Oferecemos várias opções:\n\n1. Boleto: Entrada de 20% + boletos sem juros (até 30 dias antes do embarque)\n2. Cartão de Crédito: 12x com juros da operadora\n3. À Vista: 5% de desconto" 
  },
  { 
    question: "Qual é a companhia aérea?", 
    answer: "Turkish Airlines. Voos confortáveis e pontuais, com excelente serviço de bordo." 
  },
  { 
    question: "Qual é o tamanho do grupo?", 
    answer: "Grupo reduzido entre 15 a 20 hóspedes. Pequeno o suficiente para ser íntimo, grande o suficiente para fazer amizades que duram a vida toda." 
  },
];

export const FAQSectionMN = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-muted/30 to-background" id="faq">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-primary/20 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">
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
