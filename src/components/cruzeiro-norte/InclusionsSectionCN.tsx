import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const included = [
  "Voos internacionais (São Paulo → Londres → Edimburgo → São Paulo)",
  "3 noites em hotel 4 estrelas em Londres (Park Plaza Westminster Bridge)",
  "15 noites em cruzeiro Norwegian Star (cabine com varanda privada)",
  "1 noite em hotel em Edimburgo",
  "Café da manhã em todos os hotéis e no navio",
  "Traslados privados em Londres e Edimburgo",
  "Acesso a todos os restaurantes e bares do navio",
  "Shows e entretenimento no navio",
  "Acesso ao spa e piscinas do navio",
  "Guia local em cada porto (opcional)",
  "Acesso ao App Exclusivo com informações em tempo real",
  "Seguro Plus Reason (cobertura USD 75.000)",
  "Grupo WhatsApp privado com todos os participantes",
  "Sessões Google Meet ao vivo (preparação + debriefing)"
];

const notIncluded = [
  "Excursões opcionais em cada porto",
  "Refeições adicionais fora do navio",
  "Atividades premium no navio (spa adicional, etc.)",
  "Despesas pessoais",
  "Gorjetas (opcional)"
];

export const InclusionsSectionCN = () => {
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma experiência completa, do embarque ao retorno
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-card rounded-lg border border-primary/20"
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

          {/* Not Included */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-card rounded-lg border border-muted"
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

            {/* Payment Info */}
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-bold mb-4">Formas de Pagamento</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ À vista: 5% de desconto</li>
                <li>✓ 3x: sem juros</li>
                <li>✓ 6x: com juros (consultar)</li>
                <li>✓ Entrada + parcelas: consultar condições</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Visa Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20 max-w-4xl mx-auto text-center"
        >
          <h4 className="font-bold text-lg mb-2">Sobre Vistos</h4>
          <p className="text-muted-foreground">
            Brasileiros <strong className="text-foreground">não precisam de visto</strong> para Islândia, 
            Noruega, Escócia e Reino Unido. Apenas passaporte válido por 6 meses.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
