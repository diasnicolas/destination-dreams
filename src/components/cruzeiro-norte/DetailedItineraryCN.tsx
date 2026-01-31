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
  Mountain
} from "lucide-react";
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Londres — Imersão Britânica",
    subtitle: "Park Plaza Westminster Bridge | 3 Noites",
    color: "primary",
    days: [
      {
        day: 1,
        date: "9 de Setembro",
        title: "Chegada em Londres",
        location: "Londres, Reino Unido",
        highlights: [
          "Chegada ao Aeroporto de Londres (Heathrow/Gatwick)",
          "Traslado privativo para o hotel",
          "Você está a poucos passos do Big Ben e do Parlamento",
          "Check-in e descanso para recuperação do fuso horário"
        ],
        accommodation: "Park Plaza Westminster Bridge",
        icon: "plane" as const
      },
      {
        day: 2,
        date: "10 de Setembro",
        title: "Exploração de Londres",
        location: "Londres, Reino Unido",
        highlights: [
          "Dia livre para exploração da capital britânica",
          "Opções: Museus, mercados, teatros, cafés",
          "Westminster Abbey, Tower of London, Buckingham Palace",
          "Você é um viajante, não um turista"
        ],
        meals: ["Café da manhã no hotel"],
        accommodation: "Park Plaza Westminster Bridge",
        icon: "camera" as const
      },
      {
        day: 3,
        date: "11 de Setembro",
        title: "Último Dia em Londres + Embarque",
        location: "Londres → Southampton",
        highlights: [
          "Manhã livre em Londres",
          "Compras finais e preparação para embarque",
          "Traslado para Southampton",
          "Embarque no Norwegian Star",
          "Jantar de boas-vindas a bordo"
        ],
        meals: ["Café da manhã", "Jantar no navio"],
        accommodation: "Norwegian Star",
        icon: "ship" as const
      }
    ]
  },
  {
    id: 2,
    title: "No Mar — Atlântico Norte",
    subtitle: "Norwegian Star | Navegação",
    color: "turquoise",
    days: [
      {
        day: "3-4",
        date: "11-12 de Setembro",
        title: "Navegação pelo Atlântico",
        location: "Mar do Norte",
        highlights: [
          "Você se acostuma com o navio",
          "Explore os restaurantes, o teatro, o spa",
          "Conheça outros viajantes do grupo",
          "Você começa a relaxar de verdade"
        ],
        meals: ["Todas as refeições incluídas"],
        accommodation: "Norwegian Star - Cabine com Varanda",
        icon: "ship" as const
      }
    ]
  },
  {
    id: 3,
    title: "Islândia — Terra de Gelo e Fogo",
    subtitle: "Reykjavik | 1-2 Dias",
    color: "primary",
    days: [
      {
        day: "4-5",
        date: "12-13 de Setembro",
        title: "Reykjavik, Islândia",
        location: "Reykjavik, Islândia",
        highlights: [
          "Desembarque em um país que parece outro planeta",
          "OPÇÃO 1: Círculo Dourado — Gêiseres, Gullfoss, Thingvellir",
          "OPÇÃO 2: Exploração de Reykjavik — capital mais setentrional do mundo",
          "OPÇÃO 3: Banho em lagoa geotérmica ou observação de baleias",
          "Você verá a força bruta da natureza"
        ],
        meals: ["Café da manhã no navio"],
        accommodation: "Norwegian Star",
        icon: "mountain" as const
      }
    ]
  },
  {
    id: 4,
    title: "Noruega — Os Fjords",
    subtitle: "Navegação pelos Fjords | 7 Dias",
    color: "turquoise",
    days: [
      {
        day: "5-8",
        date: "13-16 de Setembro",
        title: "Geirangerfjord",
        location: "Geirangerfjord, Noruega",
        highlights: [
          "Navegação pelo fjord mais famoso da Noruega",
          "Montanhas cobertas de neve",
          "Cascatas que caem direto para o mar",
          "Aldeias que parecem saídas de um conto de fadas"
        ],
        accommodation: "Norwegian Star",
        icon: "mountain" as const
      },
      {
        day: "8-10",
        date: "16-18 de Setembro",
        title: "Sognefjord",
        location: "Sognefjord, Noruega",
        highlights: [
          "O maior fjord da Noruega",
          "Você verá geleiras milenares",
          "Você entenderá a escala real da natureza",
          "Possibilidade de desembarque em aldeias locais"
        ],
        meals: ["Todas as refeições no navio"],
        accommodation: "Norwegian Star",
        icon: "mountain" as const
      },
      {
        day: "10-12",
        date: "18-20 de Setembro",
        title: "Hardangerfjord",
        location: "Hardangerfjord, Noruega",
        highlights: [
          "Desembarque e caminhada em vilas locais",
          "Frutos do mar fresco norueguês",
          "Paisagens que você nunca vai esquecer",
          "Cada dia é um novo fjord, cada fjord mais bonito"
        ],
        accommodation: "Norwegian Star",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 5,
    title: "Escócia — Terra dos Castelos",
    subtitle: "Edimburgo e Costa Escocesa | 3 Dias",
    color: "primary",
    days: [
      {
        day: "12-15",
        date: "20-23 de Setembro",
        title: "Escócia",
        location: "Edimburgo e região, Escócia",
        highlights: [
          "Desembarque em Edimburgo",
          "Castelo de Edimburgo — símbolo de uma nação",
          "Royal Mile — a rua mais famosa da Escócia",
          "Visita a destilaria de whisky escocês",
          "Tempo livre para exploração"
        ],
        meals: ["Café da manhã no navio"],
        accommodation: "Norwegian Star",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 6,
    title: "Retorno pelo Atlântico",
    subtitle: "Navegação Final | 3 Dias",
    color: "turquoise",
    days: [
      {
        day: "15-18",
        date: "23-26 de Setembro",
        title: "Navegação Final",
        location: "Atlântico Norte",
        highlights: [
          "Últimos dias no navio",
          "Reflexão sobre tudo que você viu",
          "Shows no teatro, jantares sofisticados",
          "Despedida dos novos amigos",
          "Preparação para o retorno"
        ],
        meals: ["Todas as refeições incluídas"],
        accommodation: "Norwegian Star",
        icon: "ship" as const
      }
    ]
  },
  {
    id: 7,
    title: "Edimburgo — Última Noite",
    subtitle: "Pernoite em Terra | 1 Noite",
    color: "primary",
    days: [
      {
        day: "18-19",
        date: "26-27 de Setembro",
        title: "Última Noite em Edimburgo",
        location: "Edimburgo, Escócia",
        highlights: [
          "Desembarque do Norwegian Star",
          "Traslado para hotel em Edimburgo",
          "Última noite em uma das cidades mais bonitas do mundo",
          "Jantar de despedida (opcional)",
          "Exploração livre ou descanso"
        ],
        accommodation: "Hotel em Edimburgo",
        icon: "hotel" as const
      },
      {
        day: "19-21",
        date: "27-29 de Setembro",
        title: "Retorno ao Brasil",
        location: "Edimburgo → São Paulo",
        highlights: [
          "Café da manhã no hotel",
          "Traslado para aeroporto",
          "Voo Edimburgo → Londres → São Paulo",
          "Você volta diferente. Porque você viu o Norte."
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
  mountain: Mountain,
};

export const DetailedItineraryCN = () => {
  const [expandedPhases, setExpandedPhases] = useState<number[]>([1]);

  const togglePhase = (phaseId: number) => {
    setExpandedPhases((prev) =>
      prev.includes(phaseId)
        ? prev.filter((id) => id !== phaseId)
        : [...prev, phaseId]
    );
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-muted/20 to-background" id="itinerary">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Itinerário </span>
            <span className="text-gradient-gold">Detalhado</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            21 dias de descobertas, divididos em 7 fases de experiências únicas
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {phases.map((phase, phaseIndex) => {
            const isExpanded = expandedPhases.includes(phase.id);
            
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
                className="rounded-xl overflow-hidden border border-primary/20 bg-card"
              >
                {/* Phase Header */}
                <button
                  onClick={() => togglePhase(phase.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      phase.color === "primary" ? "bg-primary/20" : "bg-turquoise/20"
                    }`}>
                      <span className={`font-bold ${
                        phase.color === "primary" ? "text-primary" : "text-turquoise"
                      }`}>
                        {phase.id}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {/* Phase Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-4">
                    {phase.days.map((day, dayIndex) => {
                      const Icon = iconMap[day.icon];
                      
                      return (
                        <motion.div
                          key={dayIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: dayIndex * 0.1 }}
                          className="p-4 rounded-lg bg-muted/30 border border-primary/10"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                  Dia {day.day}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {day.date}
                                </span>
                              </div>
                              <h4 className="font-display font-semibold text-foreground mb-1">
                                {day.title}
                              </h4>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                                <MapPin className="w-3 h-3" />
                                {day.location}
                              </div>
                              
                              <ul className="space-y-1 mb-3">
                                {day.highlights.map((highlight, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>

                              <div className="flex flex-wrap gap-4 text-xs">
                                {day.meals && (
                                  <div className="flex items-center gap-1 text-muted-foreground">
                                    <Utensils className="w-3 h-3" />
                                    {day.meals.join(", ")}
                                  </div>
                                )}
                                {day.accommodation && (
                                  <div className="flex items-center gap-1 text-muted-foreground">
                                    <Hotel className="w-3 h-3" />
                                    {day.accommodation}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Expand All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button
            onClick={() => {
              if (expandedPhases.length === phases.length) {
                setExpandedPhases([]);
              } else {
                setExpandedPhases(phases.map((p) => p.id));
              }
            }}
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            {expandedPhases.length === phases.length
              ? "Recolher todas as fases"
              : "Expandir todas as fases"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
