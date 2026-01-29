import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const included = [
  "Voos internacionais (Brasil > Reino Unido > Brasil)",
  "Voos internos (se necessário)",
  "Hospedagens nos melhores hotéis 4 estrelas",
  "Todos os transfers privados (inclusos)",
  "Passeios exclusivos para nosso grupo",
  "Todos os ingressos",
  "Pequeno almoço em todos os hotéis",
  "Refeições selecionadas",
  "Guia bilíngue especializado",
  "Historiadora Susana em Edinburgh",
  "Acompanhamento Evandro desde o Brasil (24/7)",
  "Seguro Plus Reason (18 motivos, cobertura USD 75.000)",
  "Bagagem incluída",
  "App exclusivo com todos os detalhes da viagem",
  "Documentos e vouchers no app",
  "Dia a dia da viagem no app",
  "Grupo no WhatsApp para interação",
  "Live no Google Meet com receptivo",
];

const notIncluded = [
  "Bebidas alcoólicas (exceto em refeições selecionadas)",
  "Atividades opcionais",
  "Gorjetas (opcional)",
  "Despesas pessoais",
];

export const InclusionsSectionRU = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-muted/30 to-background" id="inclusions">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O Que Está Incluído
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo pensado para sua tranquilidade
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-card rounded-lg border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Check className="w-8 h-8 text-green-500" />
              O Que Está Incluído
            </h3>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-card rounded-lg border border-muted"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <X className="w-8 h-8 text-muted-foreground" />
              O Que Não Está Incluído
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-bold mb-4">Formas de Pagamento</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Entrada de 20% + boletos sem juros</li>
                <li>✓ Cartão: 12x com juros da operadora</li>
                <li>✓ À vista: 5% de desconto</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
