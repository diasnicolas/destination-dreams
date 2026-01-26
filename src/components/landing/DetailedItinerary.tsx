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

interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  location: string;
  highlights: string[];
  meals?: string[];
  accommodation?: string;
  icon: "plane" | "hotel" | "ship" | "camera";
}

const phases = [
  {
    id: 1,
    title: "FASE 1: Embarque Internacional",
    subtitle: "São Paulo → Santiago → Sydney",
    color: "primary",
    days: [
      {
        day: 1,
        date: "8 de Abril",
        title: "Saída de São Paulo",
        location: "Guarulhos, SP",
        highlights: [
          "Voo LATAM LA 753 (GRU → SCL) às 20h10",
          "Duração: 4h 20min",
          "Chegada em Santiago às 23h30",
          "Bagagem: 2 malas de até 23kg + bagagem de mão"
        ],
        meals: ["Refeição incluída no voo"],
        icon: "plane" as const
      },
      {
        day: 2,
        date: "9 de Abril",
        title: "Conexão em Santiago e Voo para Sydney",
        location: "Santiago → Sydney",
        highlights: [
          "Conexão de 6h 30min no aeroporto",
          "Voo LATAM LA 809 (SCL → SYD) às 6h00",
          "Duração: 15h 15min",
          "Cruzamento da Linha Internacional de Data",
          "Chegada em Sydney: 6h50 (10 de abril)"
        ],
        meals: ["Café da manhã no aeroporto", "Refeições no voo"],
        icon: "plane" as const
      }
    ]
  },
  {
    id: 2,
    title: "FASE 2: Sydney — A Austrália Autêntica",
    subtitle: "4 Noites de Imersão",
    color: "turquoise",
    days: [
      {
        day: 3,
        date: "10 de Abril",
        title: "Chegada em Sydney",
        location: "Sydney, Austrália",
        highlights: [
          "Recepção VIP no aeroporto",
          "Traslado privativo para o hotel",
          "Welcome drink no hotel",
          "Tarde livre para descanso (recuperação de jet lag)",
          "Jantar de boas-vindas com Evandro e o grupo"
        ],
        accommodation: "Shangri-La Sydney ou similar (4-5 estrelas)",
        icon: "hotel" as const
      },
      {
        day: 4,
        date: "11 de Abril",
        title: "City Tour Exclusivo em Sydney",
        location: "Sydney, Austrália",
        highlights: [
          "Opera House: visita interior e exterior (9h30-10h30)",
          "Harbour Bridge: observação e histórias (10h45-11h30)",
          "The Rocks: bairro histórico, galerias e lojas (11h45-12h30)",
          "Royal Botanic Garden: caminhada e plantas nativas (13h45-15h00)",
          "Bondi Beach: praia famosa e pôr do sol (15h15-17h00)"
        ],
        meals: ["Almoço em restaurante em The Rocks"],
        accommodation: "Shangri-La Sydney",
        icon: "camera" as const
      },
      {
        day: 5,
        date: "12 de Abril",
        title: "Dia Livre — Escolha Sua Aventura",
        location: "Sydney, Austrália",
        highlights: [
          "Opção 1: Blue Mountains — caminhadas, cachoeiras, mirantes (10h)",
          "Opção 2: Gastronomia Local — mercados, aulas de culinária",
          "Opção 3: Exploração Independente — praias, museus, compras",
          "Recomendação: Descanse para recuperação de jet lag"
        ],
        accommodation: "Shangri-La Sydney",
        icon: "hotel" as const
      },
      {
        day: 6,
        date: "13 de Abril",
        title: "Jervis Bay: Cangurus, Golfinhos e Vinícola",
        location: "Jervis Bay, Austrália",
        highlights: [
          "Traslado cênico para Jervis Bay (7h00-9h00)",
          "Cangurus em habitat natural em Jervis Bay (9h30-11h00)",
          "Avistamento de golfinhos em barco privativo (11h15-12h00)",
          "Almoço harmonizado na Crooked River Estate (12h30-14h30)",
          "Exploração da praia e paisagens (14h45-17h00)"
        ],
        meals: ["Menu: queijos locais, cordeiro grelhado, mousse de chocolate", "Vinhos australianos harmonizados"],
        accommodation: "Shangri-La Sydney",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 3,
    title: "FASE 3: Cruzeiro Transpacífico",
    subtitle: "16 Noites no Anthem of the Seas",
    color: "primary",
    days: [
      {
        day: 7,
        date: "14 de Abril",
        title: "Embarque no Cruzeiro",
        location: "Circular Quay, Sydney",
        highlights: [
          "Último passeio e compras em Sydney pela manhã",
          "Check-in no navio às 16h00",
          "Recepção a bordo e alocação de cabine",
          "Partida do navio às 16h30",
          "Observação da baía ao pôr do sol",
          "Jantar de gala de boas-vindas"
        ],
        accommodation: "Anthem of the Seas (Royal Caribbean)",
        icon: "ship" as const
      },
      {
        day: 8,
        date: "15-16 de Abril",
        title: "Dias em Alto-Mar",
        location: "Oceano Pacífico",
        highlights: [
          "Atividades a bordo: spas, piscinas, academias",
          "Restaurantes de classe mundial",
          "Shows de Broadway",
          "Aulas de culinária e workshops",
          "Entretenimento noturno"
        ],
        icon: "ship" as const
      },
      {
        day: 10,
        date: "17 de Abril",
        title: "Bay of Islands, Nova Zelândia",
        location: "Nova Zelândia",
        highlights: [
          "Desembarque às 10h30",
          "Caminhadas e paisagens espetaculares",
          "História e cultura Maori",
          "Almoço em restaurante local",
          "Reembarque às 20h00"
        ],
        icon: "camera" as const
      },
      {
        day: 12,
        date: "19 de Abril",
        title: "Cruzamento da Linha Internacional de Data",
        location: "Oceano Pacífico",
        highlights: [
          "Navegação tranquila",
          "Celebração especial a bordo",
          "Momento único de reflexão",
          "Atividades de relaxamento"
        ],
        icon: "ship" as const
      },
      {
        day: 15,
        date: "22 de Abril",
        title: "Papeete, Taiti — Polinésia Francesa",
        location: "Polinésia Francesa",
        highlights: [
          "Desembarque às 7h00",
          "Exploração da cidade e mercado local",
          "Praias de areia branca",
          "Reembarque às 20h00"
        ],
        icon: "camera" as const
      },
      {
        day: 16,
        date: "23 de Abril",
        title: "Moorea — Paraíso Polinésio",
        location: "Polinésia Francesa",
        highlights: [
          "Desembarque às 7h00",
          "Snorkel em águas cristalinas",
          "Praias paradisíacas",
          "Almoço em bungalow à beira-mar",
          "Paisagens de tirar o fôlego",
          "Reembarque às 17h00"
        ],
        icon: "camera" as const
      },
      {
        day: 17,
        date: "24 de Abril",
        title: "Raiatea — Coração da Polinésia",
        location: "Polinésia Francesa",
        highlights: [
          "Desembarque às 7h00",
          "Exploração da ilha sagrada",
          "História polinésia",
          "Almoço em restaurante local",
          "Reembarque às 17h00"
        ],
        icon: "camera" as const
      }
    ]
  },
  {
    id: 4,
    title: "FASE 4: Honolulu — O Glamour Havaiano",
    subtitle: "3 Noites de Experiências Exclusivas",
    color: "turquoise",
    days: [
      {
        day: 24,
        date: "29 de Abril",
        title: "Chegada em Honolulu",
        location: "Honolulu, Havaí",
        highlights: [
          "Desembarque do cruzeiro às 17h00",
          "Traslado privativo para o hotel",
          "Check-in e welcome drink",
          "Jantar à beira-mar com culinária havaiana"
        ],
        accommodation: "Halekulani ou similar (5 estrelas)",
        icon: "hotel" as const
      },
      {
        day: 25,
        date: "30 de Abril",
        title: "Experiências Exclusivas em Honolulu",
        location: "Honolulu, Havaí",
        highlights: [
          "Iolani Palace: palácio real do Havaí (9h30-11h00)",
          "Honolulu Museum of Art (11h15-12h30)",
          "Almoço em restaurante premiado local",
          "Opção 1: Manoa Falls Trail — cachoeira de 64m",
          "Opção 2: Kailua Beach — praia isolada e relaxamento"
        ],
        icon: "camera" as const
      },
      {
        day: 26,
        date: "1º de Maio",
        title: "Praia e Relaxamento",
        location: "Honolulu, Havaí",
        highlights: [
          "Manhã livre: Waikiki Beach",
          "Natação e relaxamento",
          "Almoço à beira-mar com peixe fresco",
          "Tarde: spa no hotel ou exploração livre",
          "Jantar de despedida no La Mer at Halekulani"
        ],
        meals: ["Menu: Foie Gras, peixe do dia, Chocolate Decadence", "Vinho premium"],
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 5,
    title: "FASE 5: Los Angeles — O Brilho de Hollywood",
    subtitle: "3 Noites de Glamour",
    color: "primary",
    days: [
      {
        day: 27,
        date: "1º de Maio",
        title: "Voo para Los Angeles",
        location: "Honolulu → Los Angeles",
        highlights: [
          "Checkout do hotel às 18h00",
          "Voo às 20h00 (Hawaiian Airlines)",
          "Duração: 5h 30min",
          "Chegada em LA às 22h30 (mesmo dia)",
          "Traslado e check-in no hotel"
        ],
        accommodation: "The Beverly Hills Hotel ou similar (5 estrelas)",
        icon: "plane" as const
      },
      {
        day: 28,
        date: "2 de Maio",
        title: "Hollywood e Glamour",
        location: "Los Angeles, CA",
        highlights: [
          "Hollywood Walk of Fame (9h30-10h30)",
          "TCL Chinese Theatre: pegadas de celebridades (10h45-11h30)",
          "Dolby Theatre: palco do Oscar (11h45-12h30)",
          "Rodeo Drive, Beverly Hills (13h45-16h00)",
          "Beverly Hills Mansion Tour (16h00-17h00)"
        ],
        meals: ["Almoço em restaurante sofisticado com vista para Hollywood"],
        icon: "camera" as const
      },
      {
        day: 29,
        date: "3 de Maio",
        title: "Praias e Pôr do Sol",
        location: "Los Angeles, CA",
        highlights: [
          "Santa Monica Beach ou Malibu Beach",
          "Almoço no The Lobster: lagosta grelhada",
          "Compras em Santa Monica",
          "Sunset Cliffs: pôr do sol espetacular",
          "Jantar de despedida no Nobu Malibu ou Mastro's"
        ],
        meals: ["Menu: ostras, lagosta, cheesecake", "Menu final: Foie Gras, Wagyu Beef, Chocolate Decadence"],
        icon: "camera" as const
      },
      {
        day: 30,
        date: "4-5 de Maio",
        title: "Retorno ao Brasil",
        location: "Los Angeles → São Paulo",
        highlights: [
          "Checkout às 10h00",
          "Voo LATAM LA 800 (LAX → SCL) às 13h00",
          "Duração: 9h 30min",
          "Chegada em Santiago: 6h00 (5 de maio)",
          "Conexão LATAM LA 8097 (SCL → GRU) às 9h00",
          "Chegada em São Paulo: 13h20 — Transformado."
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

export const DetailedItinerary = () => {
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
            27 dias meticulosamente planejados. Cada momento pensado para você.
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
                    <Ship className={`w-6 h-6 ${phase.color === "primary" ? "text-primary" : "text-turquoise"}`} />
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
            { icon: Clock, value: "27", label: "Dias" },
            { icon: Hotel, value: "10", label: "Noites em Hotéis 5★" },
            { icon: Ship, value: "16", label: "Noites no Cruzeiro" },
            { icon: MapPin, value: "4", label: "Países" }
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
