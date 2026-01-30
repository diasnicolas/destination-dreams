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
    question: "Por que setembro é o melhor mês para visitar a Grécia?",
    answer: "Setembro é considerado o mês perfeito para visitar a Grécia. O verão intenso já passou, mas o clima ainda é maravilhoso, com temperaturas agradáveis entre 24°C e 28°C. As multidões de turistas diminuem significativamente, os preços são mais acessíveis e o mar ainda está quente o suficiente para banho. É a combinação ideal de clima, tranquilidade e experiência autêntica.",
  },
  {
    question: "Brasileiros precisam de visto para entrar na Grécia?",
    answer: "Não! Brasileiros não precisam de visto para turismo na Grécia. Como membro da União Europeia e do Espaço Schengen, a Grécia permite que brasileiros permaneçam por até 90 dias sem visto. Você precisa apenas de passaporte válido por pelo menos 6 meses após a data de retorno, seguro viagem obrigatório e comprovação de hospedagem.",
  },
  {
    question: "Como funciona a logística entre as ilhas?",
    answer: "Nós cuidamos de toda a logística! A viagem inclui voos domésticos e transfers entre as ilhas. Você não precisa se preocupar com ferries lotados ou conexões complicadas. Tudo é organizado para maximizar seu tempo em cada destino: Atenas → Zakynthos → Cephalonia → Mykonos → Santorini. Cada ilha é uma experiência única.",
  },
  {
    question: "O que esperar da culinária grega?",
    answer: "A culinária grega é uma festa para os sentidos! Prepare-se para provar moussaka autêntica, gyros frescos, salada grega com feta local, souvlaki grelhado na hora, frutos do mar fresquíssimos do Mediterrâneo, e muito azeite de oliva. Não esqueça do tzatziki e das sobremesas como baklava. Cada ilha tem suas especialidades locais que você vai adorar descobrir.",
  },
  {
    question: "Como é o clima em setembro nas ilhas gregas?",
    answer: "Setembro oferece o clima ideal: dias ensolarados com temperaturas entre 24°C e 28°C, noites agradáveis por volta de 20°C, e o mar ainda está com temperatura perfeita para banho (cerca de 24°C). Há pouca chance de chuva e o vento Meltemi (típico do verão) já está mais ameno. É literalmente o tempo perfeito para explorar templos, praias e vilas.",
  },
  {
    question: "Preciso de preparo físico para as atividades?",
    answer: "O roteiro é acessível para a maioria das pessoas. Algumas atividades envolvem caminhadas leves em sítios arqueológicos e vilas com escadarias (como em Santorini). O passeio de barco às Blue Caves e Navagio Beach não exige esforço físico. Se você consegue caminhar por 30-40 minutos com pausas, você consegue aproveitar 100% da viagem. Informamos sempre o nível de cada atividade com antecedência.",
  },
  {
    question: "Posso estender a viagem ou chegar antes?",
    answer: "Sim! Muitos viajantes aproveitam para estender a experiência. Podemos ajudar a organizar dias extras em Atenas antes do grupo, ou em Santorini após o término. Também oferecemos extensões para outras ilhas gregas ou até mesmo para outros destinos europeus. Consulte-nos sobre as possibilidades.",
  },
  {
    question: "O que acontece se eu perder um voo ou conexão?",
    answer: "Você tem seguro viagem completo Plus Reason (USD 75.000) que cobre imprevistos. Além disso, nosso acompanhamento 24/7 garante que você tenha suporte imediato em português para resolver qualquer situação. Trabalhamos com companhias aéreas confiáveis e margens de conexão seguras para minimizar riscos.",
  },
];

export const FAQSectionGR = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-navy to-ocean-deep relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent" />
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre a Grécia Além do Óbvio
          </p>
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
                className="glass-card rounded-xl px-6 border border-primary/20 data-[state=open]:border-primary/40 hover:border-primary/30 transition-colors"
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
