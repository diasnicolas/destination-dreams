import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é o melhor mês para este cruzeiro?",
    answer: "Setembro é perfeito. O verão ainda está presente, mas o outono já começou. Os dias ainda são longos, mas há menos turistas. É o equilíbrio perfeito entre clima agradável e menor lotação."
  },
  {
    question: "Preciso de visto para Islândia, Noruega, Escócia e Reino Unido?",
    answer: "Não! Brasileiros não precisam de visto para nenhum destes países (Espaço Schengen + Reino Unido). Apenas passaporte válido por 6 meses é necessário."
  },
  {
    question: "Qual é o tamanho do grupo?",
    answer: "Máximo 15-20 pessoas. Pequeno o suficiente para ser pessoal, grande o suficiente para compartilhar custos e criar uma comunidade de viajantes."
  },
  {
    question: "Como é a comida no navio?",
    answer: "Excelente. O Norwegian Star tem múltiplos restaurantes, desde casual até sofisticado. Você pode comer onde quiser, quando quiser. Há opções para todas as dietas e preferências."
  },
  {
    question: "Qual é o nível de atividade física necessário?",
    answer: "Baixo a moderado. Você pode caminhar em cada porto, mas não há nada obrigatório. Se preferir, pode ficar no navio o dia todo relaxando. A viagem se adapta ao seu ritmo."
  },
  {
    question: "O navio é muito grande?",
    answer: "O Norwegian Star tem cerca de 2.000 passageiros. É grande o suficiente para ter todas as comodidades (restaurantes, teatro, spa, piscinas), mas pequeno o suficiente para ser pessoal. Você não se sentirá como um número."
  },
  {
    question: "Há chance de ver a Aurora Boreal?",
    answer: "Setembro ainda não é a melhor época para Aurora Boreal (que é mais comum de outubro a março), mas há chances durante a navegação pelo Atlântico Norte, especialmente nas noites mais claras."
  },
  {
    question: "Posso levar meu cônjuge/família?",
    answer: "Sim! Grupos familiares e casais são bem-vindos. Fale conosco sobre cabines adicionais e configurações específicas."
  },
  {
    question: "Há tempo livre para explorar por conta própria?",
    answer: "Sim, bastante. Você tem tempo real em cada porto para explorar por conta própria. Não são apenas 2 horas apressadas. E quando estiver no navio, você pode fazer o que quiser."
  },
  {
    question: "Qual é a política de cancelamento?",
    answer: "Cancelamento até 90 dias antes: reembolso total. De 60-90 dias: 75% reembolsável. De 30-60 dias: 50% reembolsável. Com menos de 30 dias: sem reembolso (mas você pode transferir para outra pessoa)."
  },
  {
    question: "Teremos acompanhamento durante toda a viagem?",
    answer: "Sim! Você terá acompanhamento integral desde o Brasil. Antes: orientação completa e sessões de preparação. Durante: guias locais, suporte 24/7, grupo no WhatsApp. Depois: fotos, vídeos, sessão de debriefing."
  },
  {
    question: "Como é o clima em setembro no Norte da Europa?",
    answer: "Em setembro, as temperaturas variam entre 8°C e 15°C. É fresco mas agradável, perfeito para explorar. Recomendamos roupas em camadas e um casaco impermeável."
  }
];

export const FAQSectionCN = () => {
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre esta expedição pelo Norte da Europa
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
