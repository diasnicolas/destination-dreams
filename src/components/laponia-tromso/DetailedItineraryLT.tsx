import { motion } from "framer-motion";
import { 
  Plane, 
  Hotel, 
  MapPin, 
  Camera, 
  ChevronDown,
  ChevronUp,
  Ship,
  Snowflake,
  Star
} from "lucide-react";
import { useState } from "react";

interface DayHighlight {
  day: number;
  date: string;
  title: string;
  location: string;
  highlights: string[];
  meals?: string[];
  accommodation?: string;
  icon: "plane" | "hotel" | "camera" | "ship" | "snowflake" | "star";
}

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  days: DayHighlight[];
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Embarque Internacional",
    subtitle: "São Paulo → Helsinque",
    color: "primary",
    days: [
      {
        day: 1,
        date: "1 de Março 2027",
        title: "Partida do Brasil",
        location: "Guarulhos, SP",
        highlights: [
          "Encontro com o grupo no Aeroporto Internacional de Guarulhos",
          "Embarque em voo da KLM",
          "Voo: São Paulo (GRU) → Amsterdã (AMS)",
          "Noite a bordo"
        ],
        icon: "plane"
      },
      {
        day: 2,
        date: "2 de Março 2027",
        title: "Conexão em Amsterdã & Chegada a Helsinque",
        location: "Helsinque, Finlândia",
        highlights: [
          "Conexão em Amsterdã",
          "Voo: Amsterdã (AMS) → Helsinque (HEL)",
          "Chegada à capital finlandesa",
          "Traslado privativo ao hotel",
          "Dia livre para descanso e adaptação ao fuso horário"
        ],
        accommodation: "Hotel em Helsinque",
        icon: "hotel"
      }
    ]
  },
  {
    id: 2,
    title: "Helsinque & Tallinn",
    subtitle: "3 Noites em Helsinque + Bate-volta Estônia",
    color: "primary",
    days: [
      {
        day: 3,
        date: "3 de Março 2027",
        title: "City Tour Helsinque",
        location: "Helsinque, Finlândia",
        highlights: [
          "Praça do Senado e Catedral de Helsinque — arquitetura neoclássica",
          "Orla e Market Square — vida local finlandesa",
          "Igreja Temppeliaukio (Igreja na Rocha) — igreja construída dentro de uma rocha",
          "Tarde livre para caminhadas, cafés ou compras"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Helsinque",
        icon: "camera"
      },
      {
        day: 4,
        date: "4 de Março 2027",
        title: "Bate-volta a Tallinn",
        location: "Tallinn, Estônia",
        highlights: [
          "Traslado ao porto e embarque em ferry para Tallinn",
          "Travessia marítima: Helsinque ⇄ Tallinn (aprox. 2 horas)",
          "Cidade Velha (Old Town) — patrimônio UNESCO",
          "Ruas de pedra, casarões coloridos, atmosfera medieval",
          "Muralhas e mirantes de Toompea",
          "Retorno de ferry a Helsinque"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Helsinque",
        icon: "ship"
      },
      {
        day: 5,
        date: "5 de Março 2027",
        title: "Helsinque → Rovaniemi",
        location: "Rovaniemi, Finlândia",
        highlights: [
          "Traslado ao aeroporto de Helsinque",
          "Voo doméstico: Helsinque (HEL) → Rovaniemi (RVN)",
          "Chegada à Lapônia",
          "Traslado privativo ao hotel",
          "Você vê a neve. Você sente o frio ártico."
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Rovaniemi",
        icon: "plane"
      }
    ]
  },
  {
    id: 3,
    title: "A Lapônia Mágica",
    subtitle: "5 Noites em Rovaniemi + 1 Noite no Hotel Iglu",
    color: "primary",
    days: [
      {
        day: 6,
        date: "6 de Março 2027",
        title: "Experiência Ártica Diurna",
        location: "Rovaniemi, Finlândia",
        highlights: [
          "Primeira experiência na neve — atividades típicas do inverno ártico",
          "Explorar a paisagem coberta de neve",
          "Aprender sobre a vida ártica",
          "Tarde livre para descanso e sauna"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Rovaniemi",
        icon: "snowflake"
      },
      {
        day: 7,
        date: "7 de Março 2027",
        title: "Safari de Huskies",
        location: "Rovaniemi, Finlândia",
        highlights: [
          "Briefing com os treinadores",
          "Conhecer os huskies siberianos — cães criados para o Ártico",
          "Você senta no trenó. Os huskies começam a correr.",
          "Você sente o vento ártico. Você sente a liberdade.",
          "Retorno ao hotel e dia livre"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Rovaniemi",
        icon: "star"
      },
      {
        day: 8,
        date: "8 de Março 2027",
        title: "Santa Claus Village",
        location: "Rovaniemi, Finlândia",
        highlights: [
          "Visita à famosa Vila do Papai Noel",
          "Cruzar o Círculo Polar Ártico — você está no topo do mundo",
          "Encontro com o Papai Noel",
          "Tempo para fotos, compras e contemplação",
          "Tarde livre"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Rovaniemi",
        icon: "star"
      },
      {
        day: 9,
        date: "9 de Março 2027",
        title: "Caça à Aurora Boreal",
        location: "Rovaniemi, Finlândia",
        highlights: [
          "Dia livre para descanso",
          "À noite: saída para Caça à Aurora Boreal",
          "Transfer privativo com equipe especializada",
          "Busca pelas melhores condições de céu",
          "Luzes verdes, roxas, azuis dançando no céu"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Rovaniemi",
        icon: "star"
      },
      {
        day: 10,
        date: "10 de Março 2027",
        title: "Noite no Hotel Iglu",
        location: "Levi, Finlândia",
        highlights: [
          "Transfer terrestre: Rovaniemi → Levi (aprox. 2h30)",
          "Check-in no Hotel Iglu — experiência única",
          "Você entra em um iglu construído de gelo",
          "Fim de tarde livre para contemplação",
          "Possibilidade de ver Aurora Boreal do iglu"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel Iglu em Levi",
        icon: "snowflake"
      },
      {
        day: 11,
        date: "11 de Março 2027",
        title: "Levi → Rovaniemi",
        location: "Rovaniemi, Finlândia",
        highlights: [
          "Café da manhã no Hotel Iglu",
          "Transfer terrestre: Levi → Rovaniemi",
          "Tarde livre para descanso ou compras finais",
          "Última noite na Lapônia finlandesa"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Rovaniemi",
        icon: "hotel"
      }
    ]
  },
  {
    id: 4,
    title: "Tromsø - Capital da Aurora",
    subtitle: "3 Noites em Tromsø, Noruega",
    color: "primary",
    days: [
      {
        day: 12,
        date: "12 de Março 2027",
        title: "Rovaniemi → Tromsø",
        location: "Tromsø, Noruega",
        highlights: [
          "Traslado ao aeroporto",
          "Voo internacional regional: Rovaniemi (RVN) → Tromsø (TOS)",
          "Chegada à Noruega — Capital da Aurora Boreal",
          "Traslado privativo ao hotel e check-in",
          "Tempo livre para explorar a cidade"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Tromsø",
        icon: "plane"
      },
      {
        day: 13,
        date: "13 de Março 2027",
        title: "Fiordes Árticos + Aurora Boreal",
        location: "Tromsø, Noruega",
        highlights: [
          "Passeio panorâmico pelos fiordes árticos",
          "Paisagens de mar, montanhas cobertas de neve",
          "Vilarejos que parecem saídos de um conto de fadas",
          "À noite: nova Caça à Aurora Boreal",
          "Estratégia ativa de deslocamento"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Tromsø",
        icon: "star"
      },
      {
        day: 14,
        date: "14 de Março 2027",
        title: "City Tour & Fjellheisen",
        location: "Tromsø, Noruega",
        highlights: [
          "Explorar o centro de Tromsø — ruas charmosas, cafés aconchegantes",
          "Lojinhas com souvenirs do Ártico",
          "Teleférico Fjellheisen (conforme condições climáticas)",
          "Vista panorâmica do Ártico se estendendo até o horizonte",
          "Noite livre ou última tentativa de Aurora Boreal"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel em Tromsø",
        icon: "camera"
      }
    ]
  },
  {
    id: 5,
    title: "Retorno ao Brasil",
    subtitle: "Tromsø → São Paulo",
    color: "primary",
    days: [
      {
        day: 15,
        date: "15 de Março 2027",
        title: "Tromsø → Brasil",
        location: "Em trânsito",
        highlights: [
          "Traslado ao aeroporto",
          "Voo internacional KLM: Tromsø → Amsterdã → São Paulo (GRU)",
          "Noite a bordo",
          "Você reflete sobre tudo que viveu"
        ],
        meals: ["Café da manhã"],
        icon: "plane"
      },
      {
        day: 16,
        date: "16 de Março 2027",
        title: "Chegada ao Brasil",
        location: "São Paulo, Brasil",
        highlights: [
          "Chegada ao Brasil",
          "Encerramento da viagem",
          "Você volta diferente. Porque você foi ao Ártico."
        ],
        icon: "plane"
      }
    ]
  }
];

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  camera: Camera,
  ship: Ship,
  snowflake: Snowflake,
  star: Star
};

export const DetailedItineraryLT = () => {
  const [expandedPhases, setExpandedPhases] = useState<number[]>([1]);

  const togglePhase = (phaseId: number) => {
    setExpandedPhases(prev => 
      prev.includes(phaseId) 
        ? prev.filter(id => id !== phaseId)
        : [...prev, phaseId]
    );
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-background via-muted/30 to-background" id="itinerary">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Roteiro <span className="text-primary">Dia a Dia</span>
          </h2>
          <p className="text-xl text-muted-foreground">16 Dias • 15 Noites • 3 Países</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {phases.map((phase) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl border border-primary/20 overflow-hidden"
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                  <p className="text-sm text-primary">{phase.subtitle}</p>
                </div>
                {expandedPhases.includes(phase.id) ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary" />
                )}
              </button>

              {/* Phase Content */}
              {expandedPhases.includes(phase.id) && (
                <div className="px-6 pb-6 space-y-4">
                  {phase.days.map((day) => {
                    const IconComponent = iconMap[day.icon];
                    return (
                      <div 
                        key={day.day} 
                        className="p-4 bg-background/50 rounded-lg border border-primary/10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-semibold text-primary uppercase">
                                Dia {day.day}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {day.date}
                              </span>
                            </div>
                            <h4 className="font-bold text-foreground mb-1">{day.title}</h4>
                            <p className="text-sm text-primary mb-3 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {day.location}
                            </p>
                            <ul className="space-y-1">
                              {day.highlights.map((highlight, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                            {day.accommodation && (
                              <p className="text-xs text-primary mt-3 font-medium">
                                🏨 {day.accommodation}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
