import { motion } from "framer-motion";
import { MapPin, Train } from "lucide-react";

const acts = [
  {
    number: "01",
    title: "LUCERNA - A PORTA DE ENTRADA",
    subtitle: "3 Noites",
    description: `Você chega em Zurique e é recebido pelo nosso acompanhamento.
Transfer privado para Lucerna (49 minutos).

Hotel: Hotel Continental Park Luzern (à beira do lago)

Você chega em Lucerna. Você vê o Lago Lucerna. Você vê as montanhas refletidas nas águas. Você sente que entrou em um cartão-postal vivo.

Você faz um city tour guiado. Você visita a Ponte da Capela (ponte de madeira coberta mais antiga da Europa). Você vê o Monumento do Leão. Você caminha pelas ruas medievais.

E você sente que chegou a um lugar especial.`,
    hotel: "Hotel Continental Park Luzern",
    highlights: ["Lago Lucerna", "Ponte da Capela", "Monumento do Leão", "City tour guiado"],
  },
  {
    number: "02",
    title: "INTERLAKEN - TOPO DA EUROPA",
    subtitle: "3 Noites",
    description: `Você viaja de trem para Interlaken.

Hotel: Hotel Interlaken

Você chega em Interlaken. Você vê as montanhas cobertas de neve. Você vê os lagos cristalinos. Você sente que entrou em outro mundo.

Você viaja no trem para Jungfraujoch - Topo da Europa (3.454m). Você vê as montanhas gigantes. Você vê o Topo da Europa. Você vê a vista mais bonita dos Alpes.

E você fica sem palavras.`,
    hotel: "Hotel Interlaken",
    highlights: ["Jungfraujoch 3.454m", "Topo da Europa", "Lagos cristalinos", "Montanhas cobertas de neve"],
  },
  {
    number: "03",
    title: "ZERMATT - MATTERHORN",
    subtitle: "2 Noites",
    description: `Você viaja de trem para Zermatt.

Hotel: Schweizerhof Zermatt

Você chega em Zermatt. Você vê o Matterhorn. Você vê a montanha mais icônica dos Alpes. Você vê o vilagem alpino. Você sente que entrou em um sonho.

Você viaja no trem Gornergrat. Você sobe para 3.089m. Você vê 29 picos acima de 4.000m. Você vê o Matterhorn de perto.

E você entende que a natureza é poderosa.`,
    hotel: "Schweizerhof Zermatt",
    highlights: ["Matterhorn", "Trem Gornergrat 3.089m", "29 picos acima 4.000m", "Vilagem alpino"],
  },
  {
    number: "04",
    title: "ST. MORITZ - GLACIER EXPRESS",
    subtitle: "1 Noite",
    description: `Você viaja no Glacier Express - o trem mais lendário do mundo.

Hotel: Hotel Steffani

Você viaja no Glacier Express de Zermatt para St. Moritz. Você vê as paisagens mais bonitas dos Alpes. Você vê vilarejos alpinos. Você vê montanhas gigantes.

E você entende que a jornada é parte da magia.`,
    hotel: "Hotel Steffani",
    highlights: ["Glacier Express", "Paisagens dos Alpes", "Vilarejos alpinos", "Trem lendário"],
  },
  {
    number: "05",
    title: "ZURIQUE - ELEGÂNCIA SUÍÇA",
    subtitle: "2 Noites",
    description: `Você viaja de trem para Zurique.

Hotel: Central Plaza Hotel Zurich

Você chega em Zurique. Você vê a cidade mais organizada e agradável da Europa. Você visita a Bahnhofstrasse (rua comercial mais importante). Você vê a elegância suíça.

Você tem tempo livre em Zurique. Você visita a Fábrica de Chocolate Lindt. Você compra souvenirs. Você se despede da Suíça.

E você entende que você merecia essa transformação.`,
    hotel: "Central Plaza Hotel Zurich",
    highlights: ["Bahnhofstrasse", "Fábrica Lindt", "Elegância suíça", "Tempo livre"],
  },
];

export const JourneySectionST = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-primary/5 to-background" id="journey">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A Jornada <span className="text-primary">(14 Dias)</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            5 cidades nos Alpes que vão transformar sua perspectiva
          </p>
        </motion.div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {acts.map((act, index) => (
            <motion.div
              key={act.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 border border-primary/20">
                  <div className="absolute top-4 right-4">
                    <span className="text-5xl font-bold text-primary/20">
                      {act.number}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <Train className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {act.title}
                    </h3>
                    <p className="text-primary font-semibold mb-4">{act.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-2">Hotel:</p>
                    <p className="font-medium mb-6">{act.hotel}</p>
                    <div className="flex flex-wrap gap-2">
                      {act.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {act.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Retorno</h3>
          <p className="text-lg text-muted-foreground">
            Você viaja de trem para o aeroporto de Zurique. Você embarca para o Brasil.
          </p>
          <p className="text-xl font-semibold text-primary mt-4">
            E você volta para casa transformado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
