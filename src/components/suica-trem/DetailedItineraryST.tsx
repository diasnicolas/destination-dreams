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
    subtitle: "São Paulo → Zurique",
    color: "primary",
    days: [
      {
        day: 1,
        date: "24 de Maio",
        title: "Saída de São Paulo",
        location: "Guarulhos, SP",
        highlights: [
          "Embarque em São Paulo",
          "Você vai acordar na Suíça",
          "A transformação começa no aeroporto",
          "O mundo vai se abrir para você"
        ],
        icon: "plane" as const
      }
    ]
  },
  {
    id: 2,
    title: "FASE 2: Lucerna — A Suíça de Conto",
    subtitle: "3 Noites às Margens do Lago",
    color: "turquoise",
    days: [
      {
        day: 2,
        date: "25 de Maio",
        title: "Chegada em Lucerna",
        location: "Lucerna, Suíça",
        highlights: [
          "Chegada em Zurique e transferência para Lucerna",
          "Lago dos Quatro Cantões — a Suíça começa",
          "Ponte da Capela: símbolo de séculos de história",
          "Você está em Lucerna. E você sabe: sua vida vai mudar."
        ],
        accommodation: "Hotel Schweizerhof Luzern",
        icon: "plane" as const
      },
      {
        day: 3,
        date: "26 de Maio",
        title: "Monte Pilatus",
        location: "Lucerna, Suíça",
        highlights: [
          "MONTE PILATUS — a mais íngreme ferrovia de cremalheira do mundo",
          "Subida em teleférico e descida de trem",
          "Vista 360° dos Alpes Suíços",
          "Você chega no topo do mundo. Silêncio absoluto."
        ],
        accommodation: "Hotel Schweizerhof Luzern",
        icon: "mountain" as const
      },
      {
        day: 4,
        date: "27 de Maio",
        title: "Dia Livre em Lucerna",
        location: "Lucerna, Suíça",
        highlights: [
          "Tempo livre para explorar",
          "Passeio de barco pelo lago",
          "Cidade velha medieval",
          "Compras de chocolates e relógios suíços"
        ],
        accommodation: "Hotel Schweizerhof Luzern",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 3,
    title: "FASE 3: Interlaken — Coração dos Alpes",
    subtitle: "3 Noites Entre Dois Lagos",
    color: "primary",
    days: [
      {
        day: 5,
        date: "28 de Maio",
        title: "Trem Panorâmico para Interlaken",
        location: "Interlaken, Suíça",
        highlights: [
          "Golden Pass Line — uma das mais belas rotas de trem do mundo",
          "Interlaken entre os lagos Thun e Brienz",
          "Alpes em todas as direções",
          "Você chora. Porque a beleza é demais."
        ],
        accommodation: "Victoria Jungfrau Grand Hotel & Spa",
        icon: "train" as const
      },
      {
        day: 6,
        date: "29 de Maio",
        title: "Jungfraujoch — Top of Europe",
        location: "Interlaken, Suíça",
        highlights: [
          "JUNGFRAUJOCH — 3.454m: o topo da Europa",
          "Trem de cremalheira mais alto da Europa",
          "Palácio de Gelo esculpido no glaciar",
          "Você está no topo da Europa. Você vai se sentir livre."
        ],
        accommodation: "Victoria Jungfrau Grand Hotel & Spa",
        icon: "mountain" as const
      },
      {
        day: 7,
        date: "30 de Maio",
        title: "Lauterbrunnen e Grindelwald",
        location: "Interlaken, Suíça",
        highlights: [
          "Vale das 72 cachoeiras — Lauterbrunnen",
          "Grindelwald: vilarejo alpino autêntico",
          "Paisagens que inspiraram Tolkien",
          "Você entende que a Suíça é real"
        ],
        accommodation: "Victoria Jungfrau Grand Hotel & Spa",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 4,
    title: "FASE 4: Zermatt — O Matterhorn",
    subtitle: "2 Noites Frente ao Ícone",
    color: "turquoise",
    days: [
      {
        day: 8,
        date: "31 de Maio",
        title: "Chegada em Zermatt",
        location: "Zermatt, Suíça",
        highlights: [
          "Viagem de trem panorâmico para Zermatt",
          "Cidade sem carros — apenas elétricos",
          "MATTERHORN: o pico mais famoso do mundo",
          "Você vê o Matterhorn. E você chora."
        ],
        accommodation: "Grand Hotel Zermatterhof",
        icon: "train" as const
      },
      {
        day: 9,
        date: "1 de Junho",
        title: "Gornergrat — Face a Face com o Matterhorn",
        location: "Zermatt, Suíça",
        highlights: [
          "GORNERGRAT — 3.089m via trem de cremalheira",
          "Vista para 29 picos acima de 4.000m",
          "Geleira de Gorner",
          "Você nunca vai esquecer este momento"
        ],
        accommodation: "Grand Hotel Zermatterhof",
        icon: "mountain" as const
      }
    ]
  },
  {
    id: 5,
    title: "FASE 5: Glacier Express",
    subtitle: "O Trem Mais Lento do Mundo",
    color: "primary",
    days: [
      {
        day: 10,
        date: "2 de Junho",
        title: "Glacier Express para St. Moritz",
        location: "Zermatt → St. Moritz",
        highlights: [
          "GLACIER EXPRESS — 8 horas pelos Alpes",
          "291 pontes, 91 túneis",
          "Paisagens impossíveis de descrever",
          "Você vai entender que a Suíça é o paraíso na Terra"
        ],
        accommodation: "Badrutt's Palace Hotel",
        icon: "train" as const
      }
    ]
  },
  {
    id: 6,
    title: "FASE 6: St. Moritz — Elegância Alpina",
    subtitle: "1 Noite no Resort dos Famosos",
    color: "turquoise",
    days: [
      {
        day: 11,
        date: "3 de Junho",
        title: "Exploração de St. Moritz",
        location: "St. Moritz, Suíça",
        highlights: [
          "St. Moritz — berço do turismo de inverno",
          "Lago congelado azul turquesa",
          "Arquitetura Belle Époque",
          "Elegância em cada esquina"
        ],
        accommodation: "Badrutt's Palace Hotel",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 7,
    title: "FASE 7: Zurique — Metrópole Suíça",
    subtitle: "2 Noites de Despedida",
    color: "primary",
    days: [
      {
        day: 12,
        date: "4 de Junho",
        title: "Chegada em Zurique",
        location: "Zurique, Suíça",
        highlights: [
          "Trem panorâmico para Zurique",
          "Centro financeiro mundial",
          "Cidade antiga às margens do rio Limmat",
          "O moderno e o histórico em harmonia"
        ],
        accommodation: "Baur au Lac",
        icon: "train" as const
      },
      {
        day: 13,
        date: "5 de Junho",
        title: "Último Dia em Zurique",
        location: "Zurique, Suíça",
        highlights: [
          "Bahnhofstrasse — uma das ruas mais caras do mundo",
          "Grossmünster e Fraumünster",
          "Tempo livre para compras finais",
          "Despedida da Suíça"
        ],
        accommodation: "Baur au Lac",
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
        day: 14,
        date: "6-7 de Junho",
        title: "Retorno ao Brasil",
        location: "Zurique → São Paulo",
        highlights: [
          "Embarque em Zurique",
          "Você leva a Suíça no coração",
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
  train: Train,
  mountain: Mountain
};

export const DetailedItineraryST = () => {
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
            14 dias de trens panorâmicos e vistas alpinas de tirar o fôlego.
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
                    <Train className={`w-6 h-6 ${phase.color === "primary" ? "text-primary" : "text-turquoise"}`} />
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
            { icon: Clock, value: "14", label: "Dias" },
            { icon: MapPin, value: "5", label: "Cidades" },
            { icon: Train, value: "4", label: "Trens Panorâmicos" },
            { icon: Mountain, value: "3", label: "Picos Alpinos" }
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
