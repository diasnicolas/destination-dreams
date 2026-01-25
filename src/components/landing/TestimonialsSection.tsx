import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "Viajei para mais de 40 países. Mas essa jornada foi diferente. A expertise de Evandro transformou a forma como vejo a Austrália. Ele não é um guia turístico. Ele é um especialista que conhece cada detalhe.",
    author: "Empresário, 58 anos",
    detail: "Mais de 40 países visitados",
  },
  {
    rating: 5,
    quote: "Evandro cuidou de cada detalhe. Os momentos em Moorea foram os mais bonitos da nossa vida. 35 anos de casamento e essa viagem renovou nossa relação. Voltamos transformados.",
    author: "Casal aposentado",
    detail: "62 e 60 anos",
  },
  {
    rating: 5,
    quote: "Já estive em mais de 50 países. Essa jornada superou todas as expectativas. Estar com os cangurus em Jervis Bay foi mágico. Cada momento foi pensado para criar memórias inesquecíveis.",
    author: "Executiva, 55 anos",
    detail: "Mais de 50 países visitados",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 section-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-turquoise/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">Histórias</span>
            <span className="text-foreground"> de quem já atendeu ao chamado</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-display">
                "
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="testimonial-quote text-foreground text-lg mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-6">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
