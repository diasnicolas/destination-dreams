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
  Mountain
} from "lucide-react";
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "FASE 1: Embarque Internacional",
    subtitle: "São Paulo → Doha → Japão",
    color: "primary",
    days: [
      {
        day: 1,
        date: "03 de Abril",
        title: "Saída de São Paulo",
        location: "Guarulhos, SP",
        highlights: [
          "Embarque pela Qatar Airways (companhia premiada)",
          "Despedida da rotina",
          "Preparação para a transformação",
          "Você sente que sua vida está prestes a mudar"
        ],
        icon: "plane" as const
      },
      {
        day: 2,
        date: "04 de Abril",
        title: "Conexão em Doha",
        location: "Doha, Qatar",
        highlights: [
          "Chegada em Doha",
          "Descanso e recuperação do voo",
          "Tempo livre para apreciar a cidade",
          "Preparação para o Japão"
        ],
        accommodation: "Hyatt Regency Oryx Doha",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 2,
    title: "FASE 2: Kyoto — Templos Milenares",
    subtitle: "3 Noites de Espiritualidade",
    color: "turquoise",
    days: [
      {
        day: 3,
        date: "05 de Abril",
        title: "Chegada em Kyoto",
        location: "Kyoto, Japão",
        highlights: [
          "Voo Doha → Kyoto",
          "Você vê a cidade histórica",
          "Você sente que entrou em outro mundo",
          "Check-in no hotel"
        ],
        accommodation: "Hotel Anteroom Kyoto",
        icon: "plane" as const
      },
      {
        day: 4,
        date: "06 de Abril",
        title: "Templos Milenares de Kyoto",
        location: "Kyoto, Japão",
        highlights: [
          "Visita aos templos milenares",
          "Apreciação da arquitetura japonesa tradicional",
          "Conexão com a espiritualidade",
          "Imersão na cultura ancestral"
        ],
        accommodation: "Hotel Anteroom Kyoto",
        icon: "camera" as const
      },
      {
        day: 5,
        date: "07 de Abril",
        title: "Exploração de Kyoto",
        location: "Kyoto, Japão",
        highlights: [
          "Tradição japonesa em cada esquina",
          "Apreciação da beleza da cidade",
          "Cerimônias do chá tradicionais",
          "Kyoto é espiritual"
        ],
        accommodation: "Hotel Anteroom Kyoto",
        icon: "camera" as const
      },
      {
        day: 6,
        date: "08 de Abril",
        title: "Tempo Livre em Kyoto",
        location: "Kyoto, Japão",
        highlights: [
          "Descubra seus próprios lugares",
          "Aprecie a magia no seu ritmo",
          "Preparação para Nagoya"
        ],
        accommodation: "Hotel Anteroom Kyoto",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 3,
    title: "FASE 3: Nagoya — Modernidade",
    subtitle: "1 Noite de Transição",
    color: "primary",
    days: [
      {
        day: 6,
        date: "08 de Abril (tarde)",
        title: "Chegada em Nagoya",
        location: "Nagoya, Japão",
        highlights: [
          "Viagem de trem para Nagoya",
          "Apreciação da modernidade japonesa",
          "O Japão é diverso"
        ],
        accommodation: "Nikko Style Nagoya",
        icon: "train" as const
      },
      {
        day: 7,
        date: "09 de Abril",
        title: "Exploração de Nagoya",
        location: "Nagoya, Japão",
        highlights: [
          "Tempo livre para explorar",
          "Preparação para Toyama",
          "Transição para as montanhas"
        ],
        accommodation: "Nikko Style Nagoya",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 4,
    title: "FASE 4: Toyama — Montanhas",
    subtitle: "3 Noites na Natureza Selvagem",
    color: "turquoise",
    days: [
      {
        day: 7,
        date: "09 de Abril (tarde)",
        title: "Chegada em Toyama",
        location: "Toyama, Japão",
        highlights: [
          "Viagem de trem panorâmico para Toyama",
          "Vista das montanhas japonesas",
          "Natureza selvagem te recebe"
        ],
        accommodation: "Crowne Plaza ANA Toyama",
        icon: "train" as const
      },
      {
        day: 8,
        date: "10 de Abril",
        title: "Exploração das Montanhas",
        location: "Toyama, Japão",
        highlights: [
          "Beleza natural incomparável",
          "Conexão profunda com a natureza",
          "As montanhas são mágicas",
          "Trilhas e mirantes panorâmicos"
        ],
        accommodation: "Crowne Plaza ANA Toyama",
        icon: "mountain" as const
      },
      {
        day: 9,
        date: "11 de Abril",
        title: "Tempo Livre em Toyama",
        location: "Toyama, Japão",
        highlights: [
          "Descanso nas montanhas",
          "Preparação para Fujikawaguchiko",
          "Aprecie a tranquilidade"
        ],
        accommodation: "Crowne Plaza ANA Toyama",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 5,
    title: "FASE 5: Fujikawaguchiko — Monte Fuji",
    subtitle: "1 Noite Sagrada",
    color: "primary",
    days: [
      {
        day: 10,
        date: "12 de Abril",
        title: "Chegada ao Monte Fuji",
        location: "Fujikawaguchiko, Japão",
        highlights: [
          "Viagem para Fujikawaguchiko",
          "Primeira visão do MONTE FUJI",
          "Você fica sem palavras",
          "O Monte Fuji é sagrado"
        ],
        accommodation: "La Vista Fuji Kawaguchiko",
        icon: "mountain" as const
      },
      {
        day: 11,
        date: "13 de Abril",
        title: "Contemplação do Monte Fuji",
        location: "Fujikawaguchiko, Japão",
        highlights: [
          "Nascer do sol com vista para o Fuji",
          "Momento espiritual único",
          "Beleza que transcende palavras",
          "Preparação para Tóquio"
        ],
        accommodation: "La Vista Fuji Kawaguchiko",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 6,
    title: "FASE 6: Tóquio — Energia Vibrante",
    subtitle: "3 Noites na Metrópole",
    color: "turquoise",
    days: [
      {
        day: 11,
        date: "13 de Abril (tarde)",
        title: "Chegada em Tóquio",
        location: "Tóquio, Japão",
        highlights: [
          "Viagem para Tóquio",
          "Energia da maior metrópole do mundo",
          "Modernidade japonesa em cada esquina"
        ],
        accommodation: "Hotel Metropolitan Tokyo Ikebukuro",
        icon: "train" as const
      },
      {
        day: 12,
        date: "14 de Abril",
        title: "Exploração de Tóquio",
        location: "Tóquio, Japão",
        highlights: [
          "Arranha-céus futuristas",
          "Tecnologia de ponta",
          "Shibuya Crossing — cruzamento mais movimentado do mundo",
          "Cultura pop japonesa"
        ],
        accommodation: "Hotel Metropolitan Tokyo Ikebukuro",
        icon: "camera" as const
      },
      {
        day: 13,
        date: "15 de Abril",
        title: "Tempo Livre em Tóquio",
        location: "Tóquio, Japão",
        highlights: [
          "Descubra seus próprios lugares",
          "Aprecie a vida urbana vibrante",
          "Tóquio é inesquecível",
          "Preparação para a China"
        ],
        accommodation: "Hotel Metropolitan Tokyo Ikebukuro",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 7,
    title: "FASE 7: Hangzhou — História e Jardins",
    subtitle: "3 Noites de Tradição Chinesa",
    color: "primary",
    days: [
      {
        day: 14,
        date: "16 de Abril",
        title: "Voo para Hangzhou",
        location: "Tóquio → Hangzhou, China",
        highlights: [
          "Voo do Japão para a China",
          "Entrada em outro mundo milenar",
          "Você sente a história chinesa"
        ],
        accommodation: "Xinqiao Hotel Hangzhou",
        icon: "plane" as const
      },
      {
        day: 15,
        date: "17 de Abril",
        title: "Jardins de Hangzhou",
        location: "Hangzhou, China",
        highlights: [
          "Visita aos jardins tradicionais",
          "Beleza que inspira poetas há séculos",
          "Conexão com a tradição chinesa",
          "West Lake — lago mais famoso da China"
        ],
        accommodation: "Xinqiao Hotel Hangzhou",
        icon: "camera" as const
      },
      {
        day: 16,
        date: "18 de Abril",
        title: "Tempo Livre em Hangzhou",
        location: "Hangzhou, China",
        highlights: [
          "Descubra a cidade no seu ritmo",
          "Aprecie a magia",
          "Hangzhou é encantadora",
          "Preparação para Xangai"
        ],
        accommodation: "Xinqiao Hotel Hangzhou",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 8,
    title: "FASE 8: Xangai — Modernidade",
    subtitle: "3 Noites no Futuro",
    color: "turquoise",
    days: [
      {
        day: 17,
        date: "19 de Abril",
        title: "Chegada em Xangai",
        location: "Hangzhou → Xangai, China",
        highlights: [
          "Viagem de trem rápido para Xangai",
          "Modernidade chinesa impressionante",
          "Mundo futurista te recebe"
        ],
        accommodation: "Metropark Jichen Hotel Shanghai",
        icon: "train" as const
      },
      {
        day: 18,
        date: "20 de Abril",
        title: "Exploração de Xangai",
        location: "Xangai, China",
        highlights: [
          "Arranha-céus futuristas",
          "The Bund — orla histórica",
          "Tecnologia e tradição lado a lado",
          "Xangai é o futuro"
        ],
        accommodation: "Metropark Jichen Hotel Shanghai",
        icon: "camera" as const
      },
      {
        day: 19,
        date: "21 de Abril",
        title: "Tempo Livre em Xangai",
        location: "Xangai, China",
        highlights: [
          "Descubra seus próprios lugares",
          "Aprecie a vida urbana",
          "Conexão com a inovação",
          "Preparação para o retorno"
        ],
        accommodation: "Metropark Jichen Hotel Shanghai",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 9,
    title: "FASE 9: Retorno ao Brasil",
    subtitle: "Transformado para sempre",
    color: "primary",
    days: [
      {
        day: 20,
        date: "22 de Abril",
        title: "Retorno ao Brasil",
        location: "Xangai → Doha → São Paulo",
        highlights: [
          "Voo de retorno ao Brasil",
          "Chegada em São Paulo",
          "Você volta para casa TRANSFORMADO",
          "Dois mundos vividos em uma única jornada"
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
  mountain: Mountain
};

export const DetailedItineraryJC = () => {
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
            20 dias entre dois mundos. Japão e China em uma única jornada transformadora.
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
            { icon: Clock, value: "20", label: "Dias" },
            { icon: MapPin, value: "7", label: "Cidades" },
            { icon: Plane, value: "2", label: "Países" },
            { icon: Mountain, value: "1", label: "Monte Fuji" }
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
