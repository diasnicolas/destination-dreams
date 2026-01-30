import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const included = [
  "Passagens aéreas (Turkish Airlines)",
  "Hospedagem em hotéis 4-5 estrelas",
  "Café da manhã em todos os hotéis",
  "Todos os transfers privativos",
  "Passeios inclusos em cada cidade",
  "Cruzeiro noturno pelo Rio Ill (Estrasburgo)",
  "Tour pelas vilas da Alsácia",
  "Day trip a Baden-Baden",
  "Guias locais em português",
  "Acompanhamento 24/7 desde o Brasil",
  "App exclusivo (documentos, vouchers, offline)",
  "Seguro Plus Reason (USD 75.000)",
  "Grupo no WhatsApp",
  "Live no Google Meet (tira dúvidas)"
];

const notIncluded = [
  "Refeições não mencionadas",
  "Bebidas alcoólicas",
  "Atividades opcionais",
  "Gorjetas (opcional)",
  "Despesas pessoais"
];

export const InclusionsSectionMN = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">O Que Está Incluído</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="glass-card p-8 rounded-lg border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Check className="w-8 h-8 text-green-500" />
              Incluído
            </h3>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
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
            className="glass-card p-8 rounded-lg border border-muted"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <X className="w-8 h-8 text-muted-foreground" />
              Não Incluído
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
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
