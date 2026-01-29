import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de visto para entrar na Suíça?",
    answer: "Não precisa de visto! Você precisa de ETIAS (European Travel Information and Authorization System). Mas não se preocupe. É muito simples. Você preenche eletronicamente e é aprovado em poucos dias. Nós cuidamos de tudo. Vamos te orientar em cada passo. E vamos garantir que você consiga o ETIAS sem problemas.",
  },
  {
    question: "Teremos acompanhamento durante toda a viagem?",
    answer: "Sim! Você terá acompanhamento integral desde o Brasil. Antes da viagem: orientação completa. Durante a viagem: guia brasileira especializada acompanha durante TODO o roteiro, suporte 24/7, grupo no WhatsApp. Depois da viagem: fotos, vídeos, memórias. Você nunca estará sozinho.",
  },
  {
    question: "Posso viajar sozinha e dividir acomodação com desconhecidos?",
    answer: "Sim! Muitas mulheres viajam sozinhas conosco. Você pode dividir acomodação com outras viajantes do grupo. Você vai fazer amigos que duram a vida toda. E você terá total segurança com nosso acompanhamento.",
  },
  {
    question: "Vocês já fizeram esse roteiro em grupo antes?",
    answer: "Sim! Esse roteiro foi criado e testado pessoalmente pela nossa guia brasileira. Ela viveu 14 anos na Suíça e conhece cada detalhe. Já levamos centenas de pessoas para a Suíça. Todos voltam transformados.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Oferecemos várias opções:\n\n1. Boleto: Entrada de 20% + boletos sem juros (a serem quitados até 30 dias antes do embarque)\n\n2. Cartão de Crédito: 12x com juros da operadora\n\n3. À Vista: 5% de desconto\n\nVocê escolhe a forma que melhor se encaixa no seu orçamento.",
  },
  {
    question: "Qual é a companhia aérea?",
    answer: "Vamos usar a Swiss International Air Lines (LX). Companhia reconhecida mundialmente pela pontualidade, excelência no serviço e alto padrão de conforto. Voos diretos. Conforto e segurança garantidos. Os voos estão inclusos no pacote.",
  },
  {
    question: "Os trens estão inclusos no pacote?",
    answer: "Sim! Todos os trens estão inclusos. Monte Pilatus, Jungfraujoch, Glacier Express, Gornergrat. Tudo está incluído. Você não tem nenhuma surpresa. Tudo está organizado.",
  },
];

export const FAQSectionST = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre a jornada
          </p>
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
