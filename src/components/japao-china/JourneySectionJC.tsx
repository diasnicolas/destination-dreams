import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  { number: "01", title: "DOHA", subtitle: "Conexão", description: "Você embarca com Qatar Airways. Conexão em Doha. Uma das melhores companhias aéreas do mundo. Conforto desde o primeiro momento.", hotel: "Conexão", highlights: ["Qatar Airways", "Conforto"] },
  { number: "02", title: "KYOTO", subtitle: "4 Noites", description: "Você chega em Kyoto. A antiga capital do Japão. Você visita templos milenares. Você caminha pelos jardins zen. Você vive a tradição japonesa. Fushimi Inari. Kinkaku-ji. Gion.", hotel: "Hotel 4-5 estrelas central", highlights: ["Templos", "Jardins Zen", "Fushimi Inari", "Gion"] },
  { number: "03", title: "NAGOYA", subtitle: "2 Noites", description: "Você viaja para Nagoya em trem-bala. Você visita o Castelo de Nagoya. Você explora a cidade. Cultura samurai. Gastronomia local autêntica.", hotel: "Hotel 4-5 estrelas", highlights: ["Castelo de Nagoya", "Cultura Samurai", "Trem-bala"] },
  { number: "04", title: "TOYAMA - ALPES JAPONESES", subtitle: "2 Noites", description: "Você viaja para Toyama. Você vê os Alpes Japoneses. Você visita Kenrokuen (um dos 3 jardins mais bonitos do Japão). Paisagens de tirar o fôlego. Natureza intocada.", hotel: "Hotel 4-5 estrelas", highlights: ["Alpes Japoneses", "Kenrokuen", "Natureza"] },
  { number: "05", title: "FUJIKAWAGUCHIKO - MONTE FUJI", subtitle: "2 Noites", description: "Você viaja para Fujikawaguchiko. Você tem VISTA PARA O MONTE FUJI. Você acorda com o Fuji. Você dorme com o Fuji. Experiência única. Lago Kawaguchiko.", hotel: "Ryokan tradicional com vista", highlights: ["Monte Fuji", "Ryokan", "Lago Kawaguchiko"] },
  { number: "06", title: "TOKYO", subtitle: "4 Noites", description: "Você viaja para Tokyo. A maior metrópole do mundo. Você visita Shibuya Crossing. Você explora Shinjuku. Você vive Akihabara. Você prova sushi no Tsukiji. Tradição e modernidade.", hotel: "Hotel 4-5 estrelas central", highlights: ["Shibuya", "Shinjuku", "Akihabara", "Tsukiji"] },
  { number: "07", title: "HANGZHOU - WEST LAKE", subtitle: "2 Noites", description: "Você voa para a China. Você chega em Hangzhou. Você visita o West Lake (Patrimônio UNESCO). Paisagens que inspiraram poetas por séculos. Tranquilidade absoluta.", hotel: "Hotel 4-5 estrelas", highlights: ["West Lake", "UNESCO", "Tranquilidade"] },
  { number: "08", title: "SHANGHAI", subtitle: "3 Noites", description: "Você viaja para Shanghai. O futuro da China. Você visita o Bund. Você explora Pudong. Você vive a China moderna. Jardim Yuyuan. Torre de TV Oriental Pearl.", hotel: "Hotel 4-5 estrelas centro", highlights: ["Bund", "Pudong", "Jardim Yuyuan"] },
];

export const JourneySectionJC = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-primary/5 to-background" id="journey">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Jornada <span className="text-primary">(20 Dias)</span></h2>
          <p className="text-xl text-muted-foreground">Do Japão tradicional à China moderna</p>
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
          <p className="text-lg text-muted-foreground">Você viaja de volta para o Brasil via Doha.</p>
          <p className="text-xl font-semibold text-primary mt-4">E você volta para casa transformado.</p>
        </motion.div>
      </div>
    </section>
  );
};
