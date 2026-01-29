import { motion } from "framer-motion";
import { 
  Plane, 
  Hotel, 
  Ship, 
  MapPin, 
  Camera, 
  Utensils, 
  Clock,
  ChevronDown,
  ChevronUp,
  Train,
  Castle
} from "lucide-react";
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "FASE 1: Embarque Internacional",
    subtitle: "São Paulo → Londres",
    color: "primary",
    days: [
      {
        day: 1,
        date: "13 de Maio",
        title: "Saída de São Paulo",
        location: "Guarulhos, SP",
        highlights: [
          "Embarque em São Paulo",
          "Despedida da rotina",
          "Preparação para a transformação",
          "Você sente que sua vida está prestes a mudar"
        ],
        icon: "plane" as const
      }
    ]
  },
  {
    id: 2,
    title: "FASE 2: London — Coração do Reino",
    subtitle: "6 Noites ao Lado do Big Ben",
    color: "turquoise",
    days: [
      {
        day: 2,
        date: "14 de Maio",
        title: "Chegada em London",
        location: "London, Inglaterra",
        highlights: [
          "Chegada no hotel ao lado do Big Ben",
          "Você abre a janela. E lá está: London. Real.",
          "Vista para o Palácio de Westminster",
          "Sua jornada começou"
        ],
        accommodation: "Park Plaza Westminster Bridge London",
        icon: "plane" as const
      },
      {
        day: 3,
        date: "15 de Maio",
        title: "Coração de London",
        location: "London, Inglaterra",
        highlights: [
          "Abadia de Westminster",
          "Caminhada pela Ponte de London",
          "Rio Tâmisa — história em cada curva",
          "Você sente a história em cada pedra"
        ],
        accommodation: "Park Plaza Westminster Bridge London",
        icon: "camera" as const
      },
      {
        day: 4,
        date: "16 de Maio",
        title: "Museu Britânico",
        location: "London, Inglaterra",
        highlights: [
          "MUSEU BRITÂNICO — artefatos de civilizações antigas",
          "A história do mundo em um só lugar",
          "Você entende que você é pequeno. Mas você está vivo.",
          "Coleções egípcias, gregas e romanas"
        ],
        accommodation: "Park Plaza Westminster Bridge London",
        icon: "camera" as const
      },
      {
        day: 5,
        date: "17 de Maio",
        title: "Tempo Livre em London",
        location: "London, Inglaterra",
        highlights: [
          "Explore London no seu ritmo",
          "Descubra seus próprios lugares",
          "Conecte-se com a cidade",
          "Compras em Oxford Street ou Harrods"
        ],
        accommodation: "Park Plaza Westminster Bridge London",
        icon: "hotel" as const
      },
      {
        day: 6,
        date: "18 de Maio",
        title: "Palácio de Westminster",
        location: "London, Inglaterra",
        highlights: [
          "Visita ao PALÁCIO DE WESTMINSTER",
          "Coração político do Reino Unido",
          "Câmara dos Lordes e Câmara dos Comuns",
          "Você sente a importância do lugar"
        ],
        accommodation: "Park Plaza Westminster Bridge London",
        icon: "castle" as const
      },
      {
        day: 7,
        date: "19 de Maio",
        title: "Último Dia em London",
        location: "London, Inglaterra",
        highlights: [
          "Tempo livre para últimas experiências",
          "Compras de souvenirs",
          "Despedida da cidade",
          "Você já sente que vai voltar"
        ],
        accommodation: "Park Plaza Westminster Bridge London",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 3,
    title: "FASE 3: Durham — História Medieval",
    subtitle: "1 Noite na Catedral",
    color: "primary",
    days: [
      {
        day: 8,
        date: "20 de Maio",
        title: "Viagem para Durham",
        location: "Durham, Inglaterra",
        highlights: [
          "Viagem de trem panorâmico para Durham",
          "Catedral de Durham — arquitetura gótica",
          "Ruas medievais intactas",
          "Você caminha pelos mesmos caminhos que peregrinos caminharam há séculos",
          "E você chora. Porque a história é real."
        ],
        accommodation: "Radisson Blu Hotel Durham",
        icon: "train" as const
      }
    ]
  },
  {
    id: 4,
    title: "FASE 4: Edinburgh — Magia Escocesa",
    subtitle: "3 Noites com a Historiadora Susana",
    color: "turquoise",
    days: [
      {
        day: 9,
        date: "21 de Maio",
        title: "Chegada em Edinburgh",
        location: "Edinburgh, Escócia",
        highlights: [
          "Viagem de trem para Edinburgh",
          "Vista do Castelo de Edinburgh",
          "Montanhas escocesas ao fundo",
          "Você sente que entrou em outro mundo"
        ],
        accommodation: "Apex City of Edinburgh Hotel",
        icon: "train" as const
      },
      {
        day: 10,
        date: "22 de Maio",
        title: "Castelo de Edinburgh com Susana",
        location: "Edinburgh, Escócia",
        highlights: [
          "CASTELO DE EDINBURGH com a historiadora Susana",
          "Ela conhece cada pedra, cada história",
          "Lugares que poucos turistas vão",
          "Você entende que a história tem alma"
        ],
        accommodation: "Apex City of Edinburgh Hotel",
        icon: "castle" as const
      },
      {
        day: 11,
        date: "23 de Maio",
        title: "Edinburgh com Susana",
        location: "Edinburgh, Escócia",
        highlights: [
          "Exploração guiada por Susana",
          "Museus e galerias históricas",
          "Ruas históricas da Old Town",
          "A Escócia é magia"
        ],
        accommodation: "Apex City of Edinburgh Hotel",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 5,
    title: "FASE 5: Inverness — Highlands",
    subtitle: "2 Noites na Paisagem Selvagem",
    color: "primary",
    days: [
      {
        day: 12,
        date: "24 de Maio",
        title: "Chegada em Inverness",
        location: "Inverness, Escócia",
        highlights: [
          "Viagem para Inverness",
          "Highlands — paisagem selvagem",
          "Beleza bruta da Escócia",
          "Você entende que a natureza é poderosa"
        ],
        accommodation: "River Ness Hotel (Radisson Individuals)",
        icon: "train" as const
      },
      {
        day: 13,
        date: "25 de Maio",
        title: "Exploração das Highlands",
        location: "Inverness, Escócia",
        highlights: [
          "LOCH NESS — o lago lendário",
          "Castelos antigos em ruínas",
          "Natureza em sua forma mais pura",
          "Paisagens que ficam para sempre na memória"
        ],
        accommodation: "River Ness Hotel",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 6,
    title: "FASE 6: Liverpool — Cidade da Música",
    subtitle: "1 Noite de História",
    color: "turquoise",
    days: [
      {
        day: 14,
        date: "26 de Maio",
        title: "Chegada em Liverpool",
        location: "Liverpool, Inglaterra",
        highlights: [
          "Viagem de trem para Liverpool",
          "Cidade dos Beatles e da música",
          "História do comércio marítimo",
          "Uma cidade que respirou história",
          "Você entende que você também é importante"
        ],
        accommodation: "Hotel Indigo Liverpool",
        icon: "train" as const
      }
    ]
  },
  {
    id: 7,
    title: "FASE 7: Bath — Cidade Romana",
    subtitle: "2 Noites de Elegância",
    color: "primary",
    days: [
      {
        day: 15,
        date: "27 de Maio",
        title: "Chegada em Bath",
        location: "Bath, Inglaterra",
        highlights: [
          "Viagem para Bath",
          "Arquitetura georgiana impecável",
          "Ruínas romanas preservadas",
          "História que você pode tocar"
        ],
        accommodation: "Lansdown Grove Hotel",
        icon: "train" as const
      },
      {
        day: 16,
        date: "28 de Maio",
        title: "Banho Romano e Exploração",
        location: "Bath, Inglaterra",
        highlights: [
          "BANHO ROMANO — complexo termal de 2.000 anos",
          "Caminhada pelas ruas georgianas",
          "Royal Crescent e Circus",
          "Relaxe na cidade. Você merecia esse descanso."
        ],
        accommodation: "Lansdown Grove Hotel",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 8,
    title: "FASE 8: Retorno ao Brasil",
    subtitle: "Transformado para sempre",
    color: "turquoise",
    days: [
      {
        day: 17,
        date: "28-29 de Maio",
        title: "Retorno ao Brasil",
        location: "Bath → London → São Paulo",
        highlights: [
          "Retorno para London",
          "Tempo para últimas compras",
          "Despedida do Reino Unido",
          "Embarque para o Brasil",
          "Você chega em São Paulo TRANSFORMADO"
        ],
        icon: "plane" as const
      }
    ]
  }
];

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  ship: Ship,
  camera: Camera,
  train: Train,
  castle: Castle
};

export const DetailedItineraryRU = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/10 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Itinerário </span>
            <span className="text-gradient-gold">Dia a Dia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            15 dias pelos segredos reais e encantos eternos do Reino Unido.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-4">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-turquoise/20"
            >
              {/* Phase Header - Clickable */}
              <button
                onClick={() => togglePhase(phase.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    phase.color === "primary" ? "bg-primary/20" : "bg-turquoise/20"
                  }`}>
                    <Castle className={`w-6 h-6 ${phase.color === "primary" ? "text-primary" : "text-turquoise"}`} />
                  </div>
                  <div className="text-left">
                    <h3 className={`font-display text-lg md:text-xl font-bold ${
                      phase.color === "primary" ? "text-primary" : "text-turquoise"
                    }`}>
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{phase.subtitle}</p>
                  </div>
                </div>
                {expandedPhase === phase.id ? (
                  <ChevronUp className="w-6 h-6 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                )}
              </button>

              {/* Phase Content - Expandable */}
              {expandedPhase === phase.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="border-l-2 border-primary/30 ml-6 pl-6 space-y-6">
                    {phase.days.map((day, dayIndex) => {
                      const Icon = iconMap[day.icon];
                      return (
                        <motion.div
                          key={dayIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: dayIndex * 0.05 }}
                          className="relative"
                        >
                          {/* Day marker */}
                          <div className="absolute -left-9 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                          
                          {/* Day content */}
                          <div className="glass-card rounded-xl p-4 border border-border/30">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                    Dia {day.day}
                                  </span>
                                  <span className="text-xs text-muted-foreground">•</span>
                                  <span className="text-xs text-muted-foreground">{day.date}</span>
                                </div>
                                <h4 className="font-display font-bold text-foreground mt-1">
                                  {day.title}
                                </h4>
                                <p className="text-sm text-turquoise flex items-center gap-1 mt-1">
                                  <MapPin className="w-3 h-3" />
                                  {day.location}
                                </p>
                              </div>
                            </div>

                            {/* Highlights */}
                            <ul className="space-y-1.5 mb-3">
                              {day.highlights.map((highlight, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>

                            {/* Accommodation */}
                            {day.accommodation && (
                              <div className="flex items-center gap-2 text-sm">
                                <Hotel className="w-4 h-4 text-primary" />
                                <span className="text-muted-foreground">{day.accommodation}</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: Clock, value: "15", label: "Dias" },
            { icon: MapPin, value: "6", label: "Cidades" },
            { icon: Hotel, value: "6", label: "Noites em London" },
            { icon: Castle, value: "3", label: "Castelos" }
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-4 text-center border border-turquoise/20">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
