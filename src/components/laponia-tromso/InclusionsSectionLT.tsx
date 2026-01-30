import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const included = [
  "Voos internacionais KLM (São Paulo-Amsterdã-Helsinque / Tromsø-Amsterdã-São Paulo)",
  "Voo doméstico Helsinque-Rovaniemi",
  "Voo regional Rovaniemi-Tromsø",
  "Ferry Helsinque-Tallinn (bate e volta)",
  "15 noites em hotéis 4-5 estrelas",
  "1 noite no Hotel de Gelo (experiência única)",
  "Café da manhã em todos os hotéis",
  "Todos os transfers privativos",
  "City tour em Helsinque",
  "Passeio em Tallinn (cidade medieval)",
  "Safari de Huskies na Lapônia",
  "Visita à Vila do Papai Noel",
  "Cruzamento do Círculo Polar Ártico",
  "Múltiplas caças à Aurora Boreal (Rovaniemi + Tromsø)",
  "Passeio pelos Fiordes Árticos",
  "Teleférico Fjellheisen em Tromsø",
  "Guias locais em cada cidade",
  "App exclusivo (documentos, vouchers, offline)",
  "Seguro Plus Reason (USD 75.000)",
  "Grupo no WhatsApp",
  "Sessões Google Meet (preparação pré-viagem)"
];

const notIncluded = [
  "Refeições não mencionadas (almoços e jantares)",
  "Bebidas alcoólicas",
  "Atividades opcionais adicionais",
  "Gorjetas (opcional)",
  "Despesas pessoais",
  "Roupas para frio extremo (orientamos o que levar)"
];

export const InclusionsSectionLT = () => {
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo pensado para você viver a magia do Ártico sem preocupações
          </p>
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

            <div className="mt-6 p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <h4 className="font-bold mb-2 text-blue-400">💡 Dica Importante</h4>
              <p className="text-sm text-muted-foreground">
                O clima em Março no Ártico é frio: -15°C a 0°C. Enviaremos uma lista completa 
                de roupas e equipamentos recomendados antes da viagem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
