import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { number: "01", title: "JOHANNESBURG", subtitle: "2 Noites", description: "Você chega em Johannesburg. Você é recebido em português. Você tem traslado privativo. Você descansa. Você recupera o fuso horário. Você explora a vibrante cidade africana.", hotel: "Radisson Blu Gautrain Hotel", highlights: ["Recepção em português", "Traslado privativo", "Cultura local"] },
  { number: "02", title: "KRUGER - SAFÁRI AFRICANO", subtitle: "3 Noites", description: "Você viaja para Kruger em VOO PRIVADO (não van de 7 horas). O aeroporto fica a 15 minutos do lodge. Você faz 3 SAFÁRIS (manhã e tarde). Você vê os Big Five: Leão, Leopardo, Rinoceronte, Elefante, Búfalo. Você interage com Jessica a Hipopótamo. Piscina em cada quarto. Jantares todas as noites.", hotel: "Phelwana Game Lodge", highlights: ["Voo privado", "3 Safáris", "Big Five", "Piscina no quarto", "Jessica Hipopótamo"] },
  { number: "03", title: "CAPE TOWN", subtitle: "4 Noites", description: "Você viaja para Cape Town em voo direto de Kruger. Você visita Table Mountain com vistas espetaculares. Você explora o Waterfront. Você visita museus. Você come comida local. Você se conecta com a elegância africana.", hotel: "Radisson Collection Hotel, Waterfront", highlights: ["Table Mountain", "Waterfront", "Elegância africana", "Museus"] },
  { number: "04", title: "STELLENBOSCH - VINÍCOLAS", subtitle: "1 Noite", description: "Você viaja para Stellenbosch. Você vê as vinícolas. Você visita as vinícolas. Você prova vinhos locais. Você aprecia a gastronomia. Charme especial da região.", hotel: "Val de Vine Guest House", highlights: ["Vinícolas", "Degustação", "Gastronomia"] },
  { number: "05", title: "MAURÍCIO - PARAÍSO ALL INCLUSIVE", subtitle: "4 Noites", description: "Você viaja para as Ilhas Maurício. Você vê praias paradisíacas. Você vê águas cristalinas. Você relaxa na praia. Você faz snorkeling. Você explora a ilha. ALL INCLUSIVE.", hotel: "Ambre Resort (All Inclusive)", highlights: ["All Inclusive", "Praias paradisíacas", "Águas cristalinas", "Snorkeling"] },
];

export const JourneySectionAM = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-primary/5 to-background" id="journey">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Jornada <span className="text-primary">(16 Dias)</span></h2>
          <p className="text-xl text-muted-foreground">Da savana africana ao paraíso de Maurício</p>
        </motion.div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {acts.map((act, index) => (
            <motion.div key={act.number} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 border border-primary/20">
                  <div className="absolute top-4 right-4"><span className="text-5xl font-bold text-primary/20">{act.number}</span></div>
                  <div className="relative z-10">
                    <MapPin className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{act.title}</h3>
                    <p className="text-primary font-semibold mb-4">{act.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-2">Hotel:</p>
                    <p className="font-medium mb-6">{act.hotel}</p>
                    <div className="flex flex-wrap gap-2">
                      {act.highlights.map((h, i) => (<span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">{h}</span>))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{act.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Retorno</h3>
          <p className="text-lg text-muted-foreground">Você viaja de volta para o Brasil.</p>
          <p className="text-xl font-semibold text-primary mt-4">E você volta para casa transformado.</p>
        </motion.div>
      </div>
    </section>
  );
};
