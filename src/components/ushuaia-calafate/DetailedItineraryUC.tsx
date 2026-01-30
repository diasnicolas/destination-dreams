import { motion } from "framer-motion";
import { 
  Plane, 
  Hotel, 
  Ship, 
  MapPin, 
  Camera, 
  Train,
  Mountain,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "FASE 1: Embarque e Ushuaia",
    subtitle: "Brasil → Ushuaia (Fim do Mundo)",
    color: "primary",
    days: [
      {
        day: 1,
        date: "4 de Setembro",
        title: "Partida do Brasil",
        location: "Brasil → Ushuaia",
        highlights: [
          "Encontro com o grupo no aeroporto",
          "Voo com destino a Buenos Aires",
          "Conexão para Ushuaia",
          "Chegada na cidade mais austral do mundo",
          "Traslado ao hotel Los Ñires",
          "Noite livre para explorar a cidade"
        ],
        accommodation: "Los Ñires Ushuaia",
        icon: "plane" as const
      },
      {
        day: 2,
        date: "5 de Setembro",
        title: "Trem do Fim do Mundo & Parque Nacional",
        location: "Ushuaia, Argentina",
        highlights: [
          "Café da manhã no hotel",
          "Embarque no lendário Trem do Fim do Mundo",
          "Atravessamos florestas subantárticas e rios",
          "Chegada ao Parque Nacional Tierra del Fuego",
          "Trilhas pela Baía Lapataia (fim da Rota 3)",
          "Paisagens de tirar o fôlego",
          "Retorno ao hotel"
        ],
        meals: ["Café da manhã"],
        accommodation: "Los Ñires Ushuaia",
        icon: "train" as const
      },
      {
        day: 3,
        date: "6 de Setembro",
        title: "Navegação Canal Beagle",
        location: "Ushuaia, Argentina",
        highlights: [
          "Café da manhã no hotel",
          "Embarque para navegação pelo Canal Beagle",
          "Avistamento de colônias de pinguins",
          "Observação de leões marinhos",
          "Farol Les Éclaireurs (cartão postal)",
          "Paisagens dramáticas entre montanhas e mar",
          "Tarde livre em Ushuaia",
          "Jantar opcional em restaurante local"
        ],
        meals: ["Café da manhã"],
        accommodation: "Los Ñires Ushuaia",
        icon: "ship" as const
      },
      {
        day: 4,
        date: "7 de Setembro",
        title: "Ushuaia → El Calafate",
        location: "Ushuaia → El Calafate",
        highlights: [
          "Café da manhã no hotel",
          "Manhã livre para compras ou passeio",
          "Traslado ao aeroporto de Ushuaia",
          "Voo para El Calafate",
          "Chegada ao portal das geleiras",
          "Traslado ao Hotel Kosten Aike",
          "Noite em El Calafate"
        ],
        accommodation: "Hotel Kosten Aike",
        icon: "plane" as const
      }
    ]
  },
  {
    id: 2,
    title: "FASE 2: El Calafate e as Geleiras",
    subtitle: "O Espetáculo do Perito Moreno",
    color: "turquoise",
    days: [
      {
        day: 5,
        date: "8 de Setembro",
        title: "Perito Moreno - O Grande Encontro",
        location: "El Calafate, Argentina",
        highlights: [
          "Café da manhã no hotel",
          "Saída para o Parque Nacional Los Glaciares",
          "Chegada ao Glaciar Perito Moreno",
          "60 metros de parede de gelo à sua frente",
          "Caminhada pelas passarelas panorâmicas",
          "Observação dos desprendimentos de gelo",
          "O som do gelo quebrando é inesquecível",
          "Retorno a El Calafate"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel Kosten Aike",
        icon: "mountain" as const
      },
      {
        day: 6,
        date: "9 de Setembro",
        title: "Trekking no Gelo (Opcional) ou Exploração",
        location: "El Calafate, Argentina",
        highlights: [
          "Café da manhã no hotel",
          "Opção 1: Mini Trekking no Perito Moreno",
          "Caminhar sobre a geleira milenar",
          "Equipamentos fornecidos (grampões)",
          "Opção 2: Navegação pelo Lago Argentino",
          "Exploração de outras geleiras",
          "Tarde livre para relaxar",
          "Jantar de despedida da Patagônia"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel Kosten Aike",
        icon: "camera" as const
      },
      {
        day: 7,
        date: "10 de Setembro",
        title: "El Calafate → Buenos Aires",
        location: "El Calafate → Buenos Aires",
        highlights: [
          "Café da manhã no hotel",
          "Manhã livre em El Calafate",
          "Última oportunidade para fotos",
          "Traslado ao aeroporto",
          "Voo para Buenos Aires",
          "Chegada na capital argentina",
          "Traslado ao Recoleta Grand",
          "Noite livre na cidade"
        ],
        accommodation: "Recoleta Grand",
        icon: "plane" as const
      }
    ]
  },
  {
    id: 3,
    title: "FASE 3: Buenos Aires e Retorno",
    subtitle: "A Elegância Portenha",
    color: "primary",
    days: [
      {
        day: 8,
        date: "11 de Setembro",
        title: "Buenos Aires - City Tour",
        location: "Buenos Aires, Argentina",
        highlights: [
          "Café da manhã no hotel",
          "Passeio pelo bairro da Recoleta",
          "Cemitério da Recoleta (Evita Perón)",
          "Avenida 9 de Julio e Obelisco",
          "Casa Rosada e Plaza de Mayo",
          "Bairro colorido de La Boca",
          "Caminito - arte e tango nas ruas",
          "Jantar com show de tango (opcional)"
        ],
        meals: ["Café da manhã"],
        accommodation: "Recoleta Grand",
        icon: "camera" as const
      },
      {
        day: 9,
        date: "12 de Setembro",
        title: "Retorno ao Brasil",
        location: "Buenos Aires → Brasil",
        highlights: [
          "Café da manhã no hotel",
          "Manhã livre para compras",
          "Últimos momentos em Buenos Aires",
          "Traslado ao aeroporto",
          "Voo de retorno ao Brasil",
          "Chegada ao Brasil",
          "Fim de uma jornada transformadora"
        ],
        meals: ["Café da manhã"],
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
  mountain: Mountain,
  mappin: MapPin
};

export const DetailedItineraryUC = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Roteiro <span className="text-primary">Dia a Dia</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada momento planejado para você viver o extraordinário
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {phases.map((phase) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-primary/20 rounded-2xl overflow-hidden bg-card"
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.id)}
                className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-primary/10 to-transparent hover:from-primary/20 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-primary">{phase.subtitle}</p>
                </div>
                {expandedPhase === phase.id ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary" />
                )}
              </button>

              {/* Phase Content */}
              {expandedPhase === phase.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-6"
                >
                  {phase.days.map((day) => {
                    const Icon = iconMap[day.icon];
                    return (
                      <div
                        key={day.day}
                        className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
                      >
                        {/* Day indicator */}
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">
                            {day.day}
                          </span>
                        </div>

                        <div className="ml-4">
                          {/* Day header */}
                          <div className="flex items-start gap-3 mb-3">
                            <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-foreground">
                                Dia {day.day}: {day.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {day.date} • {day.location}
                              </p>
                            </div>
                          </div>

                          {/* Highlights */}
                          <ul className="space-y-2 ml-8">
                            {day.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>

                          {/* Meals & Accommodation */}
                          <div className="flex flex-wrap gap-4 mt-4 ml-8">
                            {day.meals && (
                              <div className="text-xs bg-primary/10 px-3 py-1 rounded-full text-primary">
                                🍽️ {day.meals.join(", ")}
                              </div>
                            )}
                            {day.accommodation && (
                              <div className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                                🏨 {day.accommodation}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
