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
  Sparkles,
  Waves,
  Building
} from "lucide-react";
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Embarque Internacional",
    subtitle: "São Paulo → Bangkok",
    color: "primary",
    days: [
      {
        day: 1,
        date: "26 de Outubro",
        title: "Saída de São Paulo",
        location: "Guarulhos, SP",
        highlights: [
          "Embarque em São Paulo",
          "Você vai para o outro lado do mundo",
          "A transformação começa",
          "Você sabe que a vida vai mudar"
        ],
        icon: "plane" as const
      }
    ]
  },
  {
    id: 2,
    title: "Bangkok — Caos Sagrado",
    subtitle: "3 Noites no Coração da Tailândia",
    color: "turquoise",
    days: [
      {
        day: 2,
        date: "27 de Outubro",
        title: "Chegada em Bangkok",
        location: "Bangkok, Tailândia",
        highlights: [
          "Chegada em Bangkok",
          "Templos dourados te esperam",
          "O caos ordenado te abraça",
          "Você respira história"
        ],
        accommodation: "Mandarin Oriental Bangkok",
        icon: "plane" as const
      },
      {
        day: 3,
        date: "28 de Outubro",
        title: "Templos Sagrados",
        location: "Bangkok, Tailândia",
        highlights: [
          "GRAND PALACE — 200 anos de história real",
          "Templo do Buda de Esmeralda",
          "Wat Pho: Buda Reclinado de 46 metros",
          "Você sente o sagrado"
        ],
        accommodation: "Mandarin Oriental Bangkok",
        icon: "camera" as const
      },
      {
        day: 4,
        date: "29 de Outubro",
        title: "Mercados Flutuantes",
        location: "Bangkok, Tailândia",
        highlights: [
          "Mercado Flutuante — comércio sobre as águas",
          "Barcos carregados de frutas e especiarias",
          "Experiência autêntica tailandesa",
          "Gastronomia de rua incomparável"
        ],
        accommodation: "Mandarin Oriental Bangkok",
        icon: "ship" as const
      }
    ]
  },
  {
    id: 3,
    title: "Chiang Mai — Festival das Lanternas (VIP)",
    subtitle: "3 Noites de Pura Magia",
    color: "primary",
    days: [
      {
        day: 5,
        date: "30 de Outubro",
        title: "Voo para Chiang Mai",
        location: "Chiang Mai, Tailândia",
        highlights: [
          "Voo doméstico para Chiang Mai",
          "Capital cultural do norte",
          "Montanhas e templos antigos",
          "A Rosa do Norte te espera"
        ],
        accommodation: "Four Seasons Resort Chiang Mai",
        icon: "plane" as const
      },
      {
        day: 6,
        date: "31 de Outubro",
        title: "Templos e Elefantes",
        location: "Chiang Mai, Tailândia",
        highlights: [
          "Doi Suthep — templo no topo da montanha",
          "Santuário ético de elefantes",
          "Interação responsável com os animais",
          "Você aprende sobre conservação"
        ],
        accommodation: "Four Seasons Resort Chiang Mai",
        icon: "camera" as const
      },
      {
        day: 7,
        date: "1 de Novembro",
        title: "YI PENG — Festival das Lanternas (VIP)",
        location: "Chiang Mai, Tailândia",
        highlights: [
          "YI PENG — o céu se enche de lanternas",
          "Milhares de luzes flutuantes",
          "Fotógrafo PEDRO captura cada momento",
          "Você solta sua lanterna. E junto vai um pedaço da sua alma.",
          "Esse é o momento que muda tudo."
        ],
        accommodation: "Four Seasons Resort Chiang Mai",
        icon: "sparkles" as const
      }
    ]
  },
  {
    id: 4,
    title: "Krabi — Paraíso Tropical",
    subtitle: "3 Noites de Praias Cristalinas",
    color: "turquoise",
    days: [
      {
        day: 8,
        date: "2 de Novembro",
        title: "Voo para Krabi",
        location: "Krabi, Tailândia",
        highlights: [
          "Voo para Krabi",
          "Paisagem de cartão-postal",
          "Formações rochosas calcárias",
          "Praias de areia branca"
        ],
        accommodation: "Rayavadee Resort",
        icon: "plane" as const
      },
      {
        day: 9,
        date: "3 de Novembro",
        title: "Ilhas Phi Phi de Lancha Privada",
        location: "Krabi, Tailândia",
        highlights: [
          "LANCHA PRIVADA para as ilhas",
          "Maya Bay — onde 'A Praia' foi filmado",
          "Snorkeling em águas cristalinas",
          "Almoço em praia deserta"
        ],
        accommodation: "Rayavadee Resort",
        icon: "ship" as const
      },
      {
        day: 10,
        date: "4 de Novembro",
        title: "4 Ilhas de Lancha Privada",
        location: "Krabi, Tailândia",
        highlights: [
          "Tour exclusivo pelas 4 ilhas",
          "Koh Poda, Koh Tup, Koh Mor, Phra Nang",
          "Cavernas e praias secretas",
          "Pôr do sol no mar de Andaman"
        ],
        accommodation: "Rayavadee Resort",
        icon: "ship" as const
      }
    ]
  },
  {
    id: 5,
    title: "Koh Phi Phi — Ilha Paradisíaca",
    subtitle: "2 Noites no Paraíso",
    color: "primary",
    days: [
      {
        day: 11,
        date: "5 de Novembro",
        title: "Chegada em Koh Phi Phi",
        location: "Koh Phi Phi, Tailândia",
        highlights: [
          "Transferência de barco para Koh Phi Phi",
          "Resort à beira-mar",
          "Snorkeling em recifes de corais",
          "Piscinas naturais cristalinas"
        ],
        accommodation: "Zeavola Resort",
        icon: "ship" as const
      },
      {
        day: 12,
        date: "6 de Novembro",
        title: "Dia Livre em Koh Phi Phi",
        location: "Koh Phi Phi, Tailândia",
        highlights: [
          "Tempo livre para relaxar",
          "Caiaque no mar turquesa",
          "Mergulho com tubarões",
          "Pôr do sol inesquecível"
        ],
        accommodation: "Zeavola Resort",
        icon: "waves" as const
      }
    ]
  },
  {
    id: 6,
    title: "Phuket — A Pérola do Andaman",
    subtitle: "2 Noites de Luxo",
    color: "turquoise",
    days: [
      {
        day: 13,
        date: "7 de Novembro",
        title: "Transferência para Phuket",
        location: "Phuket, Tailândia",
        highlights: [
          "Barco e van para Phuket",
          "Maior ilha da Tailândia",
          "Resort de luxo à beira-mar",
          "Spa tailandês tradicional"
        ],
        accommodation: "Amanpuri Phuket",
        icon: "ship" as const
      },
      {
        day: 14,
        date: "8 de Novembro",
        title: "Experiências em Phuket",
        location: "Phuket, Tailândia",
        highlights: [
          "Big Buddha — 45 metros de altura",
          "Templo de Wat Chalong",
          "Old Town Phuket — arquitetura sino-portuguesa",
          "Jantar em beach club exclusivo"
        ],
        accommodation: "Amanpuri Phuket",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 7,
    title: "Dubai — Futuro no Deserto",
    subtitle: "4 Noites de Luxo Extremo",
    color: "primary",
    days: [
      {
        day: 15,
        date: "9 de Novembro",
        title: "Voo para Dubai",
        location: "Dubai, Emirados Árabes",
        highlights: [
          "Voo internacional para Dubai",
          "Da tradição tailandesa ao futuro árabe",
          "Chegada na cidade do amanhã",
          "Hotel com vista para o Burj Khalifa"
        ],
        accommodation: "Armani Hotel Dubai",
        icon: "plane" as const
      },
      {
        day: 16,
        date: "10 de Novembro",
        title: "Burj Khalifa e Dubai Mall",
        location: "Dubai, Emirados Árabes",
        highlights: [
          "BURJ KHALIFA — 828m, o mais alto do mundo",
          "Observatório At The Top",
          "Dubai Mall — maior shopping do mundo",
          "Fonte de Dubai ao entardecer"
        ],
        accommodation: "Armani Hotel Dubai",
        icon: "building" as const
      },
      {
        day: 17,
        date: "11 de Novembro",
        title: "Safári no Deserto",
        location: "Dubai, Emirados Árabes",
        highlights: [
          "SAFÁRI NO DESERTO em 4x4",
          "Dune bashing nas dunas douradas",
          "Jantar beduíno sob as estrelas",
          "Dança do ventre e shows tradicionais"
        ],
        accommodation: "Armani Hotel Dubai",
        icon: "camera" as const
      },
      {
        day: 18,
        date: "12 de Novembro",
        title: "Palm Jumeirah e Atlantis",
        location: "Dubai, Emirados Árabes",
        highlights: [
          "Palm Jumeirah — ilha artificial icônica",
          "Atlantis The Palm",
          "Dia de compras no Gold Souk",
          "Jantar de despedida no Pierchic"
        ],
        accommodation: "Armani Hotel Dubai",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 8,
    title: "Retorno ao Brasil",
    subtitle: "Transformado para sempre",
    color: "turquoise",
    days: [
      {
        day: 19,
        date: "13-14 de Novembro",
        title: "Retorno ao Brasil",
        location: "Dubai → São Paulo",
        highlights: [
          "Embarque em Dubai",
          "Você leva a Ásia e o Oriente no coração",
          "Chegada no Brasil",
          "Você chega TRANSFORMADO"
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
  sparkles: Sparkles,
  waves: Waves,
  building: Building
};

export const DetailedItineraryTD = () => {
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
            19 dias entre templos sagrados, praias paradisíacas e o luxo de Dubai.
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
                    <Sparkles className={`w-6 h-6 ${phase.color === "primary" ? "text-primary" : "text-turquoise"}`} />
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
            { icon: Clock, value: "19", label: "Dias" },
            { icon: MapPin, value: "7", label: "Cidades" },
            { icon: Ship, value: "3", label: "Lanchas Privadas" },
            { icon: Sparkles, value: "1", label: "Festival Único" }
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
