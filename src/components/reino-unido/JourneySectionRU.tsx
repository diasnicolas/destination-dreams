import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const acts = [
  {
    number: "01",
    title: "LONDON - A PORTA DE ENTRADA",
    subtitle: "6 Noites",
    description: `Você chega em London e é recebido pelo nosso acompanhamento.

Hotel: Park Plaza Westminster Bridge London (ao lado do Big Ben)

Você abre a janela e lá está: London. Real. Você vê o Big Ben. Você vê o Palácio de Westminster. Você sente que sua jornada começou.

Você explora o coração de London. Abadia de Westminster. Ponte de London. Rio Tâmisa. Você vê o Museu Britânico com artefatos de civilizações antigas. Você tem tempo livre para descobrir seus próprios lugares.

E você sente que chegou a um lugar especial.`,
    hotel: "Park Plaza Westminster Bridge",
    highlights: ["Big Ben", "Palácio de Westminster", "Museu Britânico", "Abadia de Westminster"],
  },
  {
    number: "02",
    title: "DURHAM",
    subtitle: "1 Noite",
    description: `Você viaja para Durham.

Hotel: Radisson Blu Hotel Durham

Você chega em Durham. Você vê a Catedral. Você vê as ruas medievais. Você vê a história viva.

Você explora a Catedral de Durham. Você caminha pelos mesmos caminhos que peregrinos caminharam há séculos. Você vê a arquitetura gótica. Você vê a beleza medieval.

E você chora. Porque naquele momento, você entende que a história é real.`,
    hotel: "Radisson Blu Durham",
    highlights: ["Catedral de Durham", "Ruas medievais", "Arquitetura gótica"],
  },
  {
    number: "03",
    title: "EDINBURGH - MAGIA E HISTÓRIA",
    subtitle: "3 Noites",
    description: `Você viaja para Edinburgh.

Hotel: Apex City of Edinburgh Hotel
Guia: Susana (historiadora)

Você chega em Edinburgh. Você vê o Castelo. Você vê as montanhas. Você vê a Escócia. Você sente que entrou em outro mundo.

Você explora o Castelo de Edinburgh com a historiadora Susana. Ela conhece cada pedra. Ela conhece cada história. Ela te leva para lugares que poucos turistas vão.

E você entende que você é bravo. Que você é capaz.`,
    hotel: "Apex City of Edinburgh",
    highlights: ["Castelo de Edinburgh", "Historiadora Susana", "Ruas históricas", "Museus"],
  },
  {
    number: "04",
    title: "INVERNESS - HIGHLANDS",
    subtitle: "2 Noites",
    description: `Você viaja para Inverness.

Hotel: River Ness Hotel (Radisson Individuals)

Você chega em Inverness. Você vê as Highlands. Você vê a paisagem selvagem. Você vê a beleza bruta da Escócia.

Você explora as Highlands. Você vê Loch Ness. Você vê castelos antigos. Você vê a natureza em sua forma mais pura.

E você entende que a natureza é poderosa.`,
    hotel: "River Ness Hotel",
    highlights: ["Highlands", "Loch Ness", "Castelos antigos", "Natureza selvagem"],
  },
  {
    number: "05",
    title: "LIVERPOOL",
    subtitle: "1 Noite",
    description: `Você viaja para Liverpool.

Hotel: Hotel Indigo Liverpool

Você chega em Liverpool. Você vê a história da música. Você vê a história do comércio. Você vê uma cidade que respirou história.

Você explora Liverpool. Você visita os locais históricos. Você entende que essa cidade foi importante para o mundo.

E você entende que você também é importante.`,
    hotel: "Hotel Indigo Liverpool",
    highlights: ["História da música", "Locais históricos", "The Beatles"],
  },
  {
    number: "06",
    title: "BATH",
    subtitle: "2 Noites",
    description: `Você viaja para Bath.

Hotel: Lansdown Grove Hotel

Você chega em Bath. Você vê a arquitetura georgiana. Você vê as ruínas romanas. Você vê a história preservada.

Você explora Bath. Você visita o Banho Romano. Você caminha pelas ruas. Você relaxa na cidade. Você se conecta com a história.

E você entende que você merecia esse descanso.`,
    hotel: "Lansdown Grove Hotel",
    highlights: ["Banho Romano", "Arquitetura georgiana", "Ruínas romanas"],
  },
];

export const JourneySectionRU = () => {
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
            A Jornada <span className="text-primary">(15 Dias)</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            6 cidades icônicas que vão transformar sua perspectiva
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
                    <MapPin className="w-8 h-8 text-primary mb-4" />
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
            Você retorna para London. Você tem tempo para últimas compras. Você se despede do Reino Unido.
            Você embarca para o Brasil.
          </p>
          <p className="text-xl font-semibold text-primary mt-4">
            E você volta para casa transformado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
