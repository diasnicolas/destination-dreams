import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { 
    question: "Como é o clima na Patagônia em setembro?", 
    answer: "Setembro marca o final do inverno e início da primavera na Patagônia. As temperaturas variam entre -2°C a 10°C. É uma época mágica, com paisagens ainda nevadas, menos turistas e preços mais acessíveis. É importante levar roupas adequadas para o frio." 
  },
  { 
    question: "Que tipo de roupa devo levar?", 
    answer: "Recomendamos o sistema de camadas:\n\n• Primeira camada: roupa térmica (segunda pele)\n• Segunda camada: fleece ou softshell\n• Terceira camada: casaco impermeável e corta-vento\n• Luvas, gorro, cachecol\n• Calçado impermeável e confortável para caminhadas\n• Óculos de sol (o reflexo do gelo é intenso)" 
  },
  { 
    question: "Preciso ter preparo físico especial?", 
    answer: "Os passeios principais não exigem preparo físico especial. As passarelas do Perito Moreno são acessíveis. Para o Mini Trekking opcional sobre a geleira, é necessário ter condições físicas moderadas e não ter problemas nos joelhos." 
  },
  { 
    question: "O Mini Trekking no Perito Moreno é obrigatório?", 
    answer: "Não. O Mini Trekking é uma experiência opcional com custo adicional. Quem não quiser fazer pode aproveitar mais tempo nas passarelas contemplando a geleira. Porém, recomendamos fortemente — é uma experiência única na vida." 
  },
  { 
    question: "Teremos acompanhamento durante toda a viagem?", 
    answer: "Sim! Você terá acompanhamento integral desde o Brasil. Antes: orientação completa sobre o que levar. Durante: guia brasileiro acompanhando, suporte 24/7, grupo no WhatsApp. Depois: fotos, vídeos e memórias compartilhadas." 
  },
  { 
    question: "Posso viajar sozinha(o) e dividir acomodação?", 
    answer: "Sim! Muitas pessoas viajam sozinhas conosco. Você pode dividir acomodação com outro viajante do mesmo gênero. É uma ótima forma de fazer novas amizades que duram a vida toda." 
  },
  { 
    question: "Quais são as formas de pagamento?", 
    answer: "Oferecemos várias opções:\n\n1. Boleto: Entrada de 20% + boletos sem juros\n2. Cartão de Crédito: 12x com juros da operadora\n3. À Vista: 5% de desconto\n\nEntre em contato para saber valores atualizados." 
  },
  { 
    question: "A viagem é segura?", 
    answer: "Sim! A Argentina é um destino seguro para turistas brasileiros. Além disso, você terá guia brasileiro acompanhando, suporte 24/7, seguro viagem completo e todos os traslados privados inclusos." 
  },
  { 
    question: "Quantas pessoas vão no grupo?", 
    answer: "Nossos grupos são pequenos e exclusivos: entre 15 e 20 pessoas no máximo. Isso garante uma experiência mais personalizada, com atenção individual e flexibilidade no roteiro." 
  },
  { 
    question: "Por que setembro é uma boa época?", 
    answer: "Setembro é ideal porque:\n\n• Final do inverno com paisagens nevadas\n• Menos turistas que na alta temporada\n• Preços mais acessíveis\n• Clima já começando a aquecer\n• Experiência mais autêntica e intimista" 
  }
];

export const FAQSectionUC = () => {
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber antes de embarcar para o Fim do Mundo
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
                <AccordionTrigger className="text-left hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale diretamente conosco!
          </p>
          <a 
            href="#contact"
            className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
          >
            Entrar em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
};
