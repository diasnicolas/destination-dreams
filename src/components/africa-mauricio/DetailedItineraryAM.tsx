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
    subtitle: "São Paulo → Johannesburg",
    color: "primary",
    days: [
      {
        day: 1,
        date: "01 de Outubro",
        title: "Saída de São Paulo",
        location: "Guarulhos, SP",
        highlights: [
          "Embarque pela LATAM em Guarulhos",
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
    title: "Johannesburg — Porta de Entrada",
    subtitle: "2 Noites de Imersão",
    color: "turquoise",
    days: [
      {
        day: 2,
        date: "02 de Outubro",
        title: "Chegada em Johannesburg",
        location: "Johannesburg, África do Sul",
        highlights: [
          "Recepção em português",
          "Traslado privativo para o hotel",
          "Tempo para descanso e recuperação do fuso horário",
          "Você sente que a África é especial"
        ],
        accommodation: "Radisson Blu Gautrain Hotel",
        icon: "hotel" as const
      },
      {
        day: 3,
        date: "03 de Outubro",
        title: "Exploração de Johannesburg",
        location: "Johannesburg, África do Sul",
        highlights: [
          "City tour pela vibrante cidade africana",
          "Conexão com a cultura local",
          "Descoberta da história sul-africana",
          "Preparação para o safári"
        ],
        accommodation: "Radisson Blu Gautrain Hotel",
        icon: "camera" as const
      },
      {
        day: 4,
        date: "04 de Outubro",
        title: "Tempo Livre em Johannesburg",
        location: "Johannesburg, África do Sul",
        highlights: [
          "Manhã livre para exploração pessoal",
          "Aprecie a cidade no seu ritmo",
          "Preparação para o voo privado ao Kruger",
          "Expectativa para o safári africano"
        ],
        accommodation: "Radisson Blu Gautrain Hotel",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 3,
    title: "Kruger — Safári Africano",
    subtitle: "3 Noites com os Big Five",
    color: "primary",
    days: [
      {
        day: 4,
        date: "04 de Outubro (tarde)",
        title: "Chegada ao Kruger + Primeiro Safári",
        location: "Kruger National Park",
        highlights: [
          "Voo privado Johannesburg → Kruger (não van de 7h!)",
          "Aeroporto a apenas 15 minutos do lodge",
          "Você vê a savana africana",
          "PRIMEIRO SAFÁRI à tarde em jipe aberto",
          "Avistamento de zebras, girafas, antílopes",
          "Você sente a emoção do safári"
        ],
        meals: ["Jantar no lodge"],
        accommodation: "Phelwana Game Lodge (com piscina no quarto)",
        icon: "camera" as const
      },
      {
        day: 5,
        date: "05 de Outubro",
        title: "Segundo Safári — Big Five",
        location: "Kruger National Park",
        highlights: [
          "Safári ao amanhecer em jipe aberto",
          "Avistamento de leões, leopardos, rinocerontes",
          "Você vê os Big Five na natureza selvagem",
          "Você fica sem palavras",
          "Tarde: relaxe na piscina do seu quarto",
          "Jantar especial no lodge"
        ],
        meals: ["Café da manhã", "Almoço", "Jantar"],
        accommodation: "Phelwana Game Lodge",
        icon: "camera" as const
      },
      {
        day: 6,
        date: "06 de Outubro",
        title: "Terceiro Safári + Jessica a Hipopótamo",
        location: "Kruger National Park",
        highlights: [
          "Safári matinal em jipe aberto",
          "Avistamento de elefantes, búfalos, hipopótamos",
          "Interação com Jessica a Hipopótamo — momento inesquecível!",
          "Tarde: relaxe na piscina privativa",
          "Jantar de despedida no Kruger"
        ],
        meals: ["Café da manhã", "Almoço", "Jantar"],
        accommodation: "Phelwana Game Lodge",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 4,
    title: "Cape Town — Elegância Africana",
    subtitle: "4 Noites de Descobertas",
    color: "turquoise",
    days: [
      {
        day: 7,
        date: "07 de Outubro",
        title: "Chegada em Cape Town",
        location: "Cape Town, África do Sul",
        highlights: [
          "Voo direto de Kruger → Cape Town",
          "Vista da Table Mountain ao chegar",
          "Exploração do Waterfront",
          "Você sente que entrou em uma cidade elegante"
        ],
        accommodation: "Radisson Collection Hotel, Waterfront Cape Town",
        icon: "plane" as const
      },
      {
        day: 8,
        date: "08 de Outubro",
        title: "Table Mountain",
        location: "Cape Town, África do Sul",
        highlights: [
          "Subida à Table Mountain de teleférico",
          "Vistas espetaculares de 360°",
          "Conexão com a beleza da natureza",
          "Fotos icônicas no topo"
        ],
        accommodation: "Radisson Collection Hotel, Waterfront Cape Town",
        icon: "camera" as const
      },
      {
        day: 9,
        date: "09 de Outubro",
        title: "Waterfront e Cultura",
        location: "Cape Town, África do Sul",
        highlights: [
          "Exploração do Victoria & Alfred Waterfront",
          "Visita a museus locais",
          "Gastronomia sul-africana",
          "Conexão com a cultura local"
        ],
        accommodation: "Radisson Collection Hotel, Waterfront Cape Town",
        icon: "camera" as const
      },
      {
        day: 10,
        date: "10 de Outubro",
        title: "Dia Livre em Cape Town",
        location: "Cape Town, África do Sul",
        highlights: [
          "Tempo livre para exploração pessoal",
          "Descubra seus próprios lugares",
          "Aprecie a elegância da cidade",
          "Preparação para Stellenbosch"
        ],
        accommodation: "Radisson Collection Hotel, Waterfront Cape Town",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 5,
    title: "Stellenbosch — Vinícolas",
    subtitle: "1 Noite de Charme",
    color: "primary",
    days: [
      {
        day: 11,
        date: "11 de Outubro",
        title: "Chegada em Stellenbosch",
        location: "Stellenbosch, África do Sul",
        highlights: [
          "Traslado para a região vinícola",
          "Vista das vinícolas sul-africanas",
          "Charme especial da região",
          "Degustação de vinhos locais"
        ],
        accommodation: "Val de Vine Guest House",
        icon: "camera" as const
      },
      {
        day: 12,
        date: "12 de Outubro",
        title: "Tour pelas Vinícolas",
        location: "Stellenbosch, África do Sul",
        highlights: [
          "Visita às melhores vinícolas da região",
          "Degustação de vinhos premiados",
          "Gastronomia harmonizada",
          "Conexão com a tradição vinícola sul-africana"
        ],
        meals: ["Almoço harmonizado com vinhos"],
        accommodation: "Val de Vine Guest House",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 6,
    title: "Ilhas Maurício — Paraíso All Inclusive",
    subtitle: "4 Noites no Paraíso",
    color: "turquoise",
    days: [
      {
        day: 12,
        date: "12 de Outubro (tarde)",
        title: "Chegada em Maurício",
        location: "Ilhas Maurício",
        highlights: [
          "Voo para as Ilhas Maurício",
          "Praias paradisíacas te recebem",
          "Águas cristalinas",
          "Você sente que entrou em um paraíso"
        ],
        accommodation: "Ambre Resort (All Inclusive)",
        icon: "plane" as const
      },
      {
        day: 13,
        date: "13 de Outubro",
        title: "Praias e Snorkeling",
        location: "Ilhas Maurício",
        highlights: [
          "Relaxe na praia paradisíaca",
          "Natação nas águas cristalinas",
          "Snorkeling com peixes coloridos",
          "Conexão com a natureza marinha"
        ],
        meals: ["All Inclusive"],
        accommodation: "Ambre Resort",
        icon: "camera" as const
      },
      {
        day: 14,
        date: "14 de Outubro",
        title: "Exploração da Ilha",
        location: "Ilhas Maurício",
        highlights: [
          "Tour pela ilha de Maurício",
          "Pontos turísticos principais",
          "Beleza natural incomparável",
          "Diversão garantida"
        ],
        meals: ["All Inclusive"],
        accommodation: "Ambre Resort",
        icon: "camera" as const
      },
      {
        day: 15,
        date: "15 de Outubro",
        title: "Dia Livre no Resort",
        location: "Ilhas Maurício",
        highlights: [
          "Tempo livre no resort all inclusive",
          "Relaxe na tranquilidade",
          "Desconecte da rotina",
          "Aproveite cada momento do paraíso"
        ],
        meals: ["All Inclusive"],
        accommodation: "Ambre Resort",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 7,
    title: "Retorno ao Brasil",
    subtitle: "Transformado para sempre",
    color: "primary",
    days: [
      {
        day: 16,
        date: "16 de Outubro",
        title: "Retorno ao Brasil",
        location: "Maurício → São Paulo",
        highlights: [
          "Despedida do paraíso",
          "Voo de retorno ao Brasil",
          "Chegada em São Paulo",
          "Você volta para casa TRANSFORMADO"
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

export const DetailedItineraryAM = () => {
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
            16 dias meticulosamente planejados. Safári, vinícolas e praias paradisíacas.
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
            { icon: Camera, value: "3", label: "Safáris Inclusos" },
            { icon: Hotel, value: "5", label: "Cidades" },
            { icon: MapPin, value: "2", label: "Países" }
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
