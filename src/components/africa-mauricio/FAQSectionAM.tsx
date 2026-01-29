import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "Preciso de visto para entrar na África do Sul?", answer: "Não precisa de visto! Você pode entrar na África do Sul com passaporte válido por 6 meses. Nós cuidamos de tudo e vamos te orientar em cada passo." },
  { question: "Preciso de visto para Maurício?", answer: "Não precisa de visto! Você pode entrar em Maurício com passaporte válido por 60 dias. Muito fácil!" },
  { question: "Preciso de certificado da vacina contra febre amarela?", answer: "Sim, você precisa do certificado internacional da vacina contra febre amarela para a África do Sul. Não se preocupe, vamos te orientar em cada passo e te ajudar com a vacinação." },
  { question: "Teremos acompanhamento durante toda a viagem?", answer: "Sim! Você terá acompanhamento integral desde o Brasil. Antes da viagem: orientação completa. Durante a viagem: guias locais especializados, suporte 24/7, grupo no WhatsApp. Depois da viagem: fotos, vídeos, memórias." },
  { question: "Posso viajar sozinha e dividir acomodação?", answer: "Sim! Muitas mulheres viajam sozinhas conosco. Você pode dividir acomodação com outras viajantes do grupo. Você vai fazer amigos que duram a vida toda." },
  { question: "Quais são as formas de pagamento?", answer: "Oferecemos várias opções:\n\n1. Boleto: Entrada de 20% + boletos sem juros\n2. Cartão de Crédito: 12x com juros da operadora\n3. À Vista: 5% de desconto" },
];

export const FAQSectionAM = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-muted/30 to-background" id="faq">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
