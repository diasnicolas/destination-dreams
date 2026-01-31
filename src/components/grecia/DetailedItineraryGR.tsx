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
  Mountain,
  Waves
} from "lucide-react";
import { useState } from "react";

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  ship: Ship,
  camera: Camera,
  mountain: Mountain,
  waves: Waves
};

const phases = [
  {
    id: 1,
    title: "Partida & Atenas",
    subtitle: "A Jornada Começa na Capital da Civilização",
    color: "primary",
    days: [
      {
        day: 1,
        date: "14 de Setembro",
        title: "Partida do Brasil",
        location: "Brasil → Europa",
        highlights: [
          "Embarque no Brasil com destino à Grécia",
          "Voo internacional com conexão na Europa",
          "Início da sua jornada de redescoberta",
          "A aventura pelas ilhas gregas está prestes a começar"
        ],
        icon: "plane" as const
      },
      {
        day: 2,
        date: "15 de Setembro",
        title: "Chegada em Atenas",
        location: "Atenas, Grécia",
        highlights: [
          "Chegada ao Aeroporto Internacional de Atenas",
          "Recepção VIP e traslado privativo",
          "Check-in no The Pinnacle Athens",
          "Tarde livre para descanso e aclimatação",
          "Jantar de boas-vindas com vista para a cidade"
        ],
        accommodation: "The Pinnacle Athens",
        icon: "plane" as const
      }
    ]
  },
  {
    id: 2,
    title: "Atenas — Berço da Civilização",
    subtitle: "2 Noites de Imersão Histórica",
    color: "turquoise",
    days: [
      {
        day: 3,
        date: "16 de Setembro",
        title: "Acrópole & Atenas Antiga",
        location: "Atenas, Grécia",
        highlights: [
          "Visita guiada à Acrópole ao amanhecer",
          "Partenon — obra-prima da arquitetura grega",
          "Teatro de Dionísio — berço do teatro ocidental",
          "Museu da Acrópole — tesouros da antiguidade",
          "Almoço em taverna tradicional",
          "Passeio pelo bairro histórico de Plaka"
        ],
        meals: ["Almoço em taverna tradicional"],
        accommodation: "The Pinnacle Athens",
        icon: "camera" as const
      },
      {
        day: 4,
        date: "17 de Setembro",
        title: "Atenas Moderna & Partida",
        location: "Atenas → Zakynthos",
        highlights: [
          "Manhã livre para explorar Atenas",
          "Praça Syntagma e troca da guarda",
          "Mercado Central de Atenas",
          "Traslado para o aeroporto",
          "Voo para Zakynthos — a ilha das tartarugas"
        ],
        accommodation: "Contessina Hotel (Zakynthos)",
        icon: "plane" as const
      }
    ]
  },
  {
    id: 3,
    title: "Zakynthos — Paraíso Escondido",
    subtitle: "3 Noites na Ilha das Águas Cristalinas",
    color: "primary",
    days: [
      {
        day: 5,
        date: "18 de Setembro",
        title: "Navagio Beach — A Praia do Naufrágio",
        location: "Zakynthos, Grécia",
        highlights: [
          "Passeio de barco até Navagio Beach",
          "A praia mais fotografada do mundo",
          "Navio naufragado encalhado na areia branca",
          "Águas turquesa cercadas por falésias",
          "Tempo para natação e fotos inesquecíveis",
          "Mirante com vista panorâmica da praia"
        ],
        meals: ["Almoço a bordo"],
        accommodation: "Contessina Hotel",
        icon: "ship" as const
      },
      {
        day: 6,
        date: "19 de Setembro",
        title: "Blue Caves — Grutas Azuis",
        location: "Zakynthos, Grécia",
        highlights: [
          "Expedição às famosas Blue Caves",
          "Grutas esculpidas pelo mar ao longo de milênios",
          "Luz refletida cria um azul sobrenatural",
          "Mergulho nas águas cristalinas",
          "Tarde em praia secreta conhecida apenas por locais",
          "Pôr do sol em taverna à beira-mar"
        ],
        meals: ["Jantar em taverna à beira-mar"],
        accommodation: "Contessina Hotel",
        icon: "waves" as const
      },
      {
        day: 7,
        date: "20 de Setembro",
        title: "Zakynthos Livre & Partida",
        location: "Zakynthos → Cefalônia",
        highlights: [
          "Manhã livre na ilha",
          "Opção: Observação de tartarugas marinhas",
          "Exploração da cidade de Zakynthos",
          "Ferry para Cefalônia — ilha vizinha",
          "Chegada e check-in em Cefalônia"
        ],
        accommodation: "Petani Bay Hotel (Cefalônia)",
        icon: "ship" as const
      }
    ]
  },
  {
    id: 4,
    title: "Cefalônia — A Ilha Secreta",
    subtitle: "3 Noites de Natureza Intocada",
    color: "turquoise",
    days: [
      {
        day: 8,
        date: "21 de Setembro",
        title: "Caverna de Melissani",
        location: "Cefalônia, Grécia",
        highlights: [
          "Visita à mágica Caverna de Melissani",
          "Lago subterrâneo com águas azul-turquesa",
          "Passeio de barco dentro da caverna",
          "Luz do sol penetrando pelo teto aberto",
          "Experiência mística e inesquecível",
          "Caverna de Drogarati — estalactites milenares"
        ],
        accommodation: "Petani Bay Hotel",
        icon: "mountain" as const
      },
      {
        day: 9,
        date: "22 de Setembro",
        title: "Petani Beach & Praias Secretas",
        location: "Cefalônia, Grécia",
        highlights: [
          "Dia nas mais belas praias de Cefalônia",
          "Petani Beach — areia branca e águas cristalinas",
          "Myrtos Beach — considerada uma das melhores da Grécia",
          "Almoço em vila de pescadores tradicional",
          "Tempo para relaxar e absorver a paisagem",
          "Jantar com frutos do mar frescos"
        ],
        meals: ["Almoço em vila de pescadores", "Jantar com frutos do mar"],
        accommodation: "Petani Bay Hotel",
        icon: "waves" as const
      },
      {
        day: 10,
        date: "23 de Setembro",
        title: "Cefalônia → Mykonos",
        location: "Cefalônia → Mykonos",
        highlights: [
          "Manhã livre em Cefalônia",
          "Traslado para o aeroporto",
          "Voo para Mykonos — a ilha cosmopolita",
          "Chegada na ilha mais famosa das Cíclades",
          "Check-in no Tropicana Hotel Mykonos",
          "Jantar de boas-vindas em Mykonos"
        ],
        accommodation: "Tropicana Hotel Mykonos",
        icon: "plane" as const
      }
    ]
  },
  {
    id: 5,
    title: "Mykonos — Glamour & Tradição",
    subtitle: "3 Noites na Ilha dos Ventos",
    color: "primary",
    days: [
      {
        day: 11,
        date: "24 de Setembro",
        title: "Mykonos Old Town",
        location: "Mykonos, Grécia",
        highlights: [
          "Passeio pela encantadora Chora (Old Town)",
          "Os icônicos moinhos de vento de Mykonos",
          "Little Venice — casas à beira d'água",
          "Igreja de Panagia Paraportiani",
          "Ruelas de paralelepípedos brancos",
          "Almoço em restaurante com vista para o mar"
        ],
        meals: ["Almoço com vista para o mar"],
        accommodation: "Tropicana Hotel Mykonos",
        icon: "camera" as const
      },
      {
        day: 12,
        date: "25 de Setembro",
        title: "Praias de Mykonos",
        location: "Mykonos, Grécia",
        highlights: [
          "Dia nas famosas praias de Mykonos",
          "Paradise Beach — energia e música",
          "Super Paradise — atmosfera vibrante",
          "Opção: Praia tranquila de Agios Sostis",
          "Esportes aquáticos opcionais",
          "Noite livre para explorar a vida noturna"
        ],
        accommodation: "Tropicana Hotel Mykonos",
        icon: "waves" as const
      },
      {
        day: 13,
        date: "26 de Setembro",
        title: "Mykonos → Santorini",
        location: "Mykonos → Santorini",
        highlights: [
          "Manhã livre em Mykonos",
          "Últimas compras e fotos",
          "Ferry de alta velocidade para Santorini",
          "Chegada na ilha mais romântica da Grécia",
          "Check-in no Desiterra Luxury Suites",
          "Primeiro pôr do sol em Santorini"
        ],
        accommodation: "Desiterra Luxury Suites",
        icon: "ship" as const
      }
    ]
  },
  {
    id: 6,
    title: "Santorini — O Grande Final",
    subtitle: "3 Noites no Paraíso Vulcânico",
    color: "turquoise",
    days: [
      {
        day: 14,
        date: "27 de Setembro",
        title: "Oia & Pôr do Sol Lendário",
        location: "Santorini, Grécia",
        highlights: [
          "Exploração da vila de Oia",
          "Casas caiadas e cúpulas azuis icônicas",
          "Vista para a caldeira vulcânica",
          "Lojas de artesanato e joias gregas",
          "Posicionamento para o pôr do sol mais famoso do mundo",
          "Jantar romântico com vista para o mar Egeu"
        ],
        meals: ["Jantar romântico em Oia"],
        accommodation: "Desiterra Luxury Suites",
        icon: "camera" as const
      },
      {
        day: 15,
        date: "28 de Setembro",
        title: "Ilhas Vulcânicas & Vinícolas",
        location: "Santorini, Grécia",
        highlights: [
          "Cruzeiro até as ilhas vulcânicas",
          "Caminhada até a cratera ativa",
          "Banho nas águas termais naturais",
          "Visita a vinícola tradicional de Santorini",
          "Degustação de vinhos Assyrtiko",
          "Última noite em Santorini — jantar de despedida"
        ],
        meals: ["Almoço a bordo", "Jantar de despedida"],
        accommodation: "Desiterra Luxury Suites",
        icon: "ship" as const
      },
      {
        day: 16,
        date: "29 de Setembro",
        title: "Despedida & Retorno",
        location: "Santorini → Brasil",
        highlights: [
          "Último amanhecer em Santorini",
          "Check-out do hotel",
          "Tempo livre para últimas fotos",
          "Traslado para o aeroporto",
          "Voo de retorno ao Brasil",
          "Você volta para casa TRANSFORMADO"
        ],
        icon: "plane" as const
      }
    ]
  }
];

export const DetailedItineraryGR = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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
            16 dias de imersão nas ilhas gregas mais extraordinárias.
            <br />
            <span className="text-primary font-semibold">14 a 29 de Setembro de 2026</span>
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
              className="glass-card rounded-2xl overflow-hidden border border-primary/20"
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
                    <MapPin className={`w-6 h-6 ${phase.color === "primary" ? "text-primary" : "text-turquoise"}`} />
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
            { icon: Hotel, value: "14", label: "Noites em Hotéis" },
            { icon: MapPin, value: "5", label: "Ilhas Gregas" },
            { icon: Ship, value: "3", label: "Travessias de Ferry" }
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-4 text-center border border-primary/20">
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
