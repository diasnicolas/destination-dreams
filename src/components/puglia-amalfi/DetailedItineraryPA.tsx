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
  ChevronUp
} from "lucide-react";
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Embarque Internacional",
    subtitle: "São Paulo → Bari",
    color: "primary",
    days: [
      {
        day: 1,
        date: "01 de Junho",
        title: "Embarque em Guarulhos",
        location: "Guarulhos, SP",
        highlights: [
          "Embarque em Guarulhos",
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
    title: "Bari — Porta de Entrada",
    subtitle: "1 Noite de Chegada",
    color: "turquoise",
    days: [
      {
        day: 2,
        date: "02 de Junho",
        title: "Chegada em Bari",
        location: "Bari, Itália",
        highlights: [
          "Chegada em Bari",
          "Basílica de San Nicola",
          "Descanso após o voo",
          "Preparação para a jornada pela Puglia"
        ],
        accommodation: "Jr Hotels Oriente Bari",
        icon: "plane" as const
      }
    ]
  },
  {
    id: 3,
    title: "Polignano a Mare — Praias Selvagens",
    subtitle: "4 Noites de Beleza",
    color: "primary",
    days: [
      {
        day: 3,
        date: "03 de Junho",
        title: "Chegada em Polignano a Mare",
        location: "Polignano a Mare, Itália",
        highlights: [
          "Traslado para Polignano a Mare",
          "Falésias brancas sobre o mar Adriático",
          "Praias selvagens e cristalinas",
          "Puglia é mágica"
        ],
        accommodation: "Hotel Covo dei Saraceni",
        icon: "hotel" as const
      },
      {
        day: 4,
        date: "04 de Junho",
        title: "Alberobello — Trulli UNESCO",
        location: "Alberobello, Itália",
        highlights: [
          "Visita a ALBEROBELLO — Patrimônio UNESCO",
          "Os famosos Trulli — casas cônicas únicas no mundo",
          "Arquitetura que parece de conto de fadas",
          "Compras de artesanato local"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel Covo dei Saraceni",
        icon: "camera" as const
      },
      {
        day: 5,
        date: "05 de Junho",
        title: "Matera — Cavernas Históricas",
        location: "Matera, Itália",
        highlights: [
          "Visita a MATERA — cidade das cavernas",
          "Os Sassi di Matera — habitações escavadas na rocha",
          "Patrimônio UNESCO desde 1993",
          "Cenário de filmes como 'A Paixão de Cristo'"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel Covo dei Saraceni",
        icon: "camera" as const
      },
      {
        day: 6,
        date: "06 de Junho",
        title: "Dia Livre em Polignano",
        location: "Polignano a Mare, Itália",
        highlights: [
          "Manhã livre para explorar",
          "Praias paradisíacas",
          "Gastronomia local autêntica",
          "Pôr do sol nas falésias"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel Covo dei Saraceni",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 4,
    title: "Lecce — Florença do Sul",
    subtitle: "2 Noites de Barroco",
    color: "turquoise",
    days: [
      {
        day: 7,
        date: "07 de Junho",
        title: "Chegada em Lecce",
        location: "Lecce, Itália",
        highlights: [
          "Traslado para Lecce",
          "A 'Florença do Sul'",
          "Arquitetura barroca deslumbrante",
          "Lecce é especial"
        ],
        accommodation: "Patria Palace Hotel",
        icon: "hotel" as const
      },
      {
        day: 8,
        date: "08 de Junho",
        title: "Exploração de Lecce",
        location: "Lecce, Itália",
        highlights: [
          "Catedral de Lecce — obra-prima do barroco",
          "Piazza del Duomo",
          "Anfiteatro Romano",
          "Gastronomia salentina autêntica"
        ],
        meals: ["Café da manhã"],
        accommodation: "Patria Palace Hotel",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 5,
    title: "Costa Amalfitana — Sorrento",
    subtitle: "6 Noites no Paraíso Italiano",
    color: "primary",
    days: [
      {
        day: 9,
        date: "09 de Junho",
        title: "Chegada em Sorrento",
        location: "Sorrento, Itália",
        highlights: [
          "Traslado para a Costa Amalfitana",
          "Check-in em Sorrento",
          "Vista para o Golfo de Nápoles",
          "Piazza Tasso — coração da cidade"
        ],
        accommodation: "Grand Hotel Europa Palace",
        icon: "hotel" as const
      },
      {
        day: 10,
        date: "10 de Junho",
        title: "Positano — Casas Coloridas",
        location: "Positano, Itália",
        highlights: [
          "Visita a POSITANO",
          "Casas coloridas em cascata até o mar",
          "A vila mais fotogênica da Itália",
          "Praias de pedras cristalinas"
        ],
        meals: ["Café da manhã"],
        accommodation: "Grand Hotel Europa Palace",
        icon: "camera" as const
      },
      {
        day: 11,
        date: "11 de Junho",
        title: "Amalfi — Catedral Medieval",
        location: "Amalfi, Itália",
        highlights: [
          "Visita a AMALFI",
          "Catedral de Santo André",
          "Cidade que deu nome à costa",
          "História das repúblicas marítimas"
        ],
        meals: ["Café da manhã"],
        accommodation: "Grand Hotel Europa Palace",
        icon: "camera" as const
      },
      {
        day: 12,
        date: "12 de Junho",
        title: "Ravello — Jardins Suspensos",
        location: "Ravello, Itália",
        highlights: [
          "Visita a RAVELLO",
          "Villa Rufolo — jardins com vista para o mar",
          "Villa Cimbrone — terraço do infinito",
          "A cidade da música"
        ],
        meals: ["Café da manhã"],
        accommodation: "Grand Hotel Europa Palace",
        icon: "camera" as const
      },
      {
        day: 13,
        date: "13 de Junho",
        title: "Capri — Gruta Azul",
        location: "Capri, Itália",
        highlights: [
          "Travessia de barco para CAPRI",
          "GRUTA AZUL — fenômeno natural único",
          "Faraglioni — rochas icônicas",
          "Piazzetta — praça mais famosa do mundo",
          "Compras em lojas de luxo"
        ],
        meals: ["Café da manhã"],
        accommodation: "Grand Hotel Europa Palace",
        icon: "ship" as const
      },
      {
        day: 14,
        date: "14 de Junho",
        title: "Dia Livre na Costa",
        location: "Sorrento, Itália",
        highlights: [
          "Tempo livre para exploração pessoal",
          "Descubra seus próprios lugares",
          "Última noite na Costa Amalfitana",
          "Jantar de despedida da região"
        ],
        meals: ["Café da manhã"],
        accommodation: "Grand Hotel Europa Palace",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 6,
    title: "Roma e Retorno",
    subtitle: "Cidade Eterna",
    color: "turquoise",
    days: [
      {
        day: 15,
        date: "15 de Junho",
        title: "Viagem para Roma",
        location: "Sorrento → Roma",
        highlights: [
          "Traslado para Roma",
          "Aprecie a Cidade Eterna",
          "Tempo para exploração",
          "Preparação para o retorno"
        ],
        icon: "hotel" as const
      },
      {
        day: 16,
        date: "16 de Junho",
        title: "Retorno ao Brasil",
        location: "Roma → Guarulhos",
        highlights: [
          "Voo de retorno ao Brasil",
          "Chegada em Guarulhos",
          "Você volta para casa TRANSFORMADO",
          "A Itália dos sonhos ficará para sempre em você"
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
  camera: Camera
};

export const DetailedItineraryPA = () => {
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
            16 dias descobrindo a Itália autêntica. Puglia e Costa Amalfitana como você nunca viu.
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
                    <Camera className={`w-6 h-6 ${phase.color === "primary" ? "text-primary" : "text-turquoise"}`} />
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

                            {/* Meals */}
                            {day.meals && day.meals.length > 0 && (
                              <div className="flex items-start gap-2 text-sm mb-2">
                                <Utensils className="w-4 h-4 text-primary mt-0.5" />
                                <div className="text-muted-foreground">
                                  {day.meals.join(" | ")}
                                </div>
                              </div>
                            )}

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
            { icon: Clock, value: "16", label: "Dias" },
            { icon: MapPin, value: "9", label: "Cidades" },
            { icon: Hotel, value: "14", label: "Noites" },
            { icon: Ship, value: "1", label: "Travessia p/ Capri" }
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
