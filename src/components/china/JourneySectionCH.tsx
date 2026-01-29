import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { number: "01", title: "DUBAI", subtitle: "2 Noites", description: "Conexão em Dubai. Você visita os arranha-céus. Você explora o luxo. Você vive a modernidade do Oriente Médio. Parada estratégica antes da China.", hotel: "Hotel 4-5 estrelas", highlights: ["Burj Khalifa", "Dubai Mall", "Modernidade"] },
  { number: "02", title: "BEIJING", subtitle: "4 Noites", description: "Você chega em Beijing. Você visita a Cidade Proibida (residência de 24 imperadores). Você caminha pela Grande Muralha da China. Você visita o Templo do Céu. Você explora a Praça Tiananmen. 5.000 anos de história.", hotel: "Hotel 4-5 estrelas central", highlights: ["Cidade Proibida", "Grande Muralha", "Praça Tiananmen", "Templo do Céu"] },
  { number: "03", title: "XIAN", subtitle: "2 Noites", description: "Você viaja para Xian em trem-bala. Você visita os Guerreiros de Terracota (8.000 soldados milenares). Você explora as muralhas da cidade. Você visita o bairro muçulmano. Gastronomia local autêntica.", hotel: "Hotel 4-5 estrelas", highlights: ["Guerreiros de Terracota", "Muralhas", "Bairro Muçulmano"] },
  { number: "04", title: "CHENGDU", subtitle: "2 Noites", description: "Você viaja para Chengdu. Você visita o Centro de Conservação de Pandas. Você vê pandas gigantes no seu habitat. Você explora a cultura local. Gastronomia picante de Sichuan.", hotel: "Hotel 4-5 estrelas", highlights: ["Pandas Gigantes", "Gastronomia Sichuan", "Cultura local"] },
  { number: "05", title: "CHONGQING & LESHAN", subtitle: "2 Noites", description: "Você viaja para Chongqing. Você visita o Buda Gigante de Leshan (71 metros de altura). Você embarca no cruzeiro pelo Rio Yangtze. Paisagens espetaculares. Gargantas do Yangtze.", hotel: "Cruzeiro Rio Yangtze", highlights: ["Buda Gigante", "Cruzeiro Yangtze", "Gargantas"] },
  { number: "06", title: "ZHANGJIAJIE", subtitle: "3 Noites", description: "Você visita Zhangjiajie. O 'Parque de Avatar'. Montanhas flutuantes. Paisagens de outro mundo. Elevador de vidro mais alto do mundo. Ponte de vidro mais longa do mundo. Experiência única.", hotel: "Hotel 4-5 estrelas", highlights: ["Montanhas Avatar", "Elevador de Vidro", "Ponte de Vidro"] },
  { number: "07", title: "SHANGHAI", subtitle: "3 Noites", description: "Você viaja para Shanghai. Você visita o Bund (cartão postal). Você explora Pudong (arranha-céus). Você passeia pelo Jardim Yuyuan. Você vive a China moderna. Fusão de passado e futuro.", hotel: "Hotel 4-5 estrelas centro", highlights: ["Bund", "Pudong", "Jardim Yuyuan", "China Moderna"] },
];

export const JourneySectionCH = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-primary/5 to-background" id="journey">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Jornada <span className="text-primary">(19 Dias)</span></h2>
          <p className="text-xl text-muted-foreground">12 a 30 de Outubro de 2026</p>
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
                    <p className="text-sm text-muted-foreground mb-2">Hospedagem:</p>
                    <p className="font-medium mb-6">{act.hotel}</p>
                    <div className="flex flex-wrap gap-2">{act.highlights.map((h, i) => (<span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">{h}</span>))}</div>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}><div className="text-muted-foreground leading-relaxed whitespace-pre-line">{act.description}</div></div>
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
