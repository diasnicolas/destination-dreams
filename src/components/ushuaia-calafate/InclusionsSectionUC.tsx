import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const included = [
  "Voos domésticos (Buenos Aires ↔ Ushuaia ↔ El Calafate)",
  "3 noites em Ushuaia - Los Ñires",
  "3 noites em El Calafate - Hotel Kosten Aike",
  "2 noites em Buenos Aires - Recoleta Grand",
  "Todos os transfers aeroporto/hotel/aeroporto",
  "Passeio Trem do Fim do Mundo",
  "Parque Nacional Tierra del Fuego",
  "Navegação Canal Beagle (pinguins e leões marinhos)",
  "Passeio ao Glaciar Perito Moreno (passarelas)",
  "City Tour Buenos Aires",
  "Café da manhã diário",
  "Guia brasileiro acompanhando toda a viagem",
  "Seguro viagem completo",
  "App exclusivo com detalhes da viagem",
  "Grupo no WhatsApp"
];

const notIncluded = [
  "Passagem aérea Brasil ↔ Buenos Aires",
  "Mini Trekking no Perito Moreno (opcional)",
  "Refeições não mencionadas",
  "Bebidas alcoólicas",
  "Show de Tango em Buenos Aires (opcional)",
  "Gorjetas (opcional)",
  "Despesas pessoais"
];

export const InclusionsSectionUC = () => {
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo pensado para você aproveitar sem preocupações
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Included */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="p-8 bg-card rounded-2xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              Incluído no Pacote
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
          
          {/* Not Included */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="p-8 bg-card rounded-2xl border border-muted"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <X className="w-6 h-6 text-muted-foreground" />
              </div>
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
            
            {/* Payment Info */}
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-bold mb-4 text-foreground">Formas de Pagamento</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Entrada de 20% + boletos sem juros
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Cartão: 12x com juros da operadora
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  À vista: 5% de desconto
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center"
        >
          <h4 className="text-xl font-bold mb-2">Mini Trekking no Perito Moreno</h4>
          <p className="text-muted-foreground">
            Experiência opcional altamente recomendada. Caminhar sobre a geleira milenar 
            é uma das experiências mais transformadoras que você pode viver. 
            Valor adicional com reserva antecipada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
