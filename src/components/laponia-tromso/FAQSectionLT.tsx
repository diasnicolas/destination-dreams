import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { 
    question: "Vou ver a Aurora Boreal com certeza?", 
    answer: "Não há garantia 100% — a Aurora Boreal é um fenômeno natural. Mas Março é um dos melhores meses, e você terá múltiplas tentativas em Rovaniemi e Tromsø, as melhores localizações do mundo. Se não ver, você terá histórias de ter procurado em um dos lugares mais mágicos do planeta." 
  },
  { 
    question: "Por que Março é uma boa época?", 
    answer: "Março é perfeito para o Ártico. É ainda inverno, então há neve e frio necessários para a experiência. Mas os dias estão ficando mais longos, com mais horas de escuridão ideal para ver a Aurora Boreal. É o equilíbrio perfeito entre inverno e luz." 
  },
  { 
    question: "Como é o frio? Que roupas preciso levar?", 
    answer: "Março no Ártico: dias entre -5°C e 0°C, noites entre -15°C e -10°C. Você precisa de roupas muito quentes — camadas térmicas, jaqueta impermeável, botas de neve, luvas, gorro. Enviaremos uma lista completa antes da viagem. Não se preocupe, vamos orientar tudo!" 
  },
  { 
    question: "O Hotel de Gelo é confortável?", 
    answer: "Sim! Os iglus modernos têm camas confortáveis com sacos de dormir especiais, aquecimento, e banheiros privativos próximos. Você dorme em um iglu de gelo, mas com conforto. A temperatura interna fica em torno de -5°C, mas você estará aquecido nos sacos de dormir especiais. É uma experiência única!" 
  },
  { 
    question: "Preciso de visto para Finlândia e Noruega?", 
    answer: "Brasileiros não precisam de visto para Finlândia, Estônia e Noruega (todos no Espaço Schengen). Apenas passaporte válido por pelo menos 6 meses após o retorno." 
  },
  { 
    question: "Qual é o tamanho do grupo?", 
    answer: "Máximo 15-20 pessoas. Pequeno o suficiente para ser íntimo e pessoal, grande o suficiente para compartilhar custos e fazer amizades que duram a vida toda." 
  },
  { 
    question: "Qual é o nível de atividade física?", 
    answer: "Moderado. Há caminhadas leves e atividades no frio (Safari de Huskies, Caça à Aurora), mas nada extremo. Qualquer pessoa com mobilidade razoável consegue acompanhar. As atividades são adaptadas ao grupo." 
  },
  { 
    question: "Posso viajar sozinha e dividir acomodação?", 
    answer: "Claro! Muitas pessoas viajam sozinhas conosco. Você pode dividir acomodação com outra pessoa do grupo, ou ficar em quarto individual (com custo adicional). Você escolhe!" 
  },
  { 
    question: "Qual é a companhia aérea?", 
    answer: "KLM Royal Dutch Airlines. Voos confortáveis e pontuais, com conexão em Amsterdã. Excelente serviço de bordo e boa reputação para bagagem." 
  },
  { 
    question: "Teremos acompanhamento durante toda a viagem?", 
    answer: "Sim! Você não está sozinho em nenhum momento. Guias locais experientes em cada cidade, suporte disponível 24/7, e grupo de WhatsApp para comunicação em tempo real. Você se sente seguro desde o primeiro momento." 
  },
];

export const FAQSectionLT = () => {
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo que você precisa saber sobre a aventura no Ártico
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
