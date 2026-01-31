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
  Train
} from "lucide-react";
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Embarque Internacional",
    subtitle: "São Paulo → Dubai → Beijing",
    color: "primary",
    days: [
      {
        day: 1,
        date: "12 de Outubro",
        title: "Partida do Brasil",
        location: "Guarulhos, SP",
        highlights: [
          "Encontro com o grupo no Aeroporto Internacional de Guarulhos",
          "Encontro com viajantes de outros estados",
          "Embarque em voo da Emirates Airlines com destino a Dubai",
          "Noite a bordo"
        ],
        icon: "plane" as const
      },
      {
        day: 2,
        date: "13 de Outubro",
        title: "Conexão em Dubai",
        location: "Dubai, Emirados Árabes",
        highlights: [
          "Chegada ao Aeroporto Internacional de Dubai (22h35)",
          "Traslado ao hotel",
          "Descanso e preparação para a China"
        ],
        accommodation: "Hotel em Dubai",
        icon: "hotel" as const
      },
      {
        day: 3,
        date: "14 de Outubro",
        title: "Exploração de Dubai",
        location: "Dubai, Emirados Árabes",
        highlights: [
          "Visita ao Bairro Bastakiya — casas tradicionais e torres eólicas",
          "Dubai Creek — travessia em táxi aquático tradicional (Abra)",
          "Souks de ouro e especiarias",
          "Sheikh Zayed Road — Burj Khalifa, palácios dos xeques",
          "Cruzeiro Dhow com jantar de comida árabe"
        ],
        meals: ["Café da manhã", "Jantar no Dhow"],
        accommodation: "Hotel em Dubai",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 2,
    title: "Beijing — História Imperial",
    subtitle: "3 Noites na Capital Milenar",
    color: "turquoise",
    days: [
      {
        day: 4,
        date: "15 de Outubro",
        title: "Chegada em Beijing",
        location: "Beijing, China",
        highlights: [
          "Voo Emirates Dubai → Beijing",
          "Chegada à noite ao Aeroporto Internacional de Pequim",
          "Recepção por guia local",
          "Traslado ao hotel para check-in"
        ],
        accommodation: "Beijing Xinqiao Hotel",
        icon: "plane" as const
      },
      {
        day: 5,
        date: "16 de Outubro",
        title: "Praça Tiananmen e Cidade Proibida",
        location: "Beijing, China",
        highlights: [
          "Visita à Praça Tiananmen",
          "Cidade Proibida — onde imperadores governaram de 1420 a 1924",
          "Você caminha nos salões onde decisões que mudaram o mundo foram tomadas",
          "Palácio de Verão — jardim imperial mais famoso da China",
          "Passeio opcional: Artes marciais da China"
        ],
        meals: ["Café da manhã", "Almoço em restaurante local"],
        accommodation: "Beijing Xinqiao Hotel",
        icon: "camera" as const
      },
      {
        day: 6,
        date: "17 de Outubro",
        title: "Templo do Céu e Grande Muralha",
        location: "Beijing, China",
        highlights: [
          "Visita ao Templo do Céu — arquitetura emblemática de Beijing",
          "GRANDE MURALHA — seção Mutianyu",
          "Teleférico circular até a muralha",
          "Você toca a muralha construída há séculos",
          "Entenda a escala da ambição humana",
          "Tempo livre para compras"
        ],
        meals: ["Café da manhã", "Almoço em restaurante local"],
        accommodation: "Beijing Xinqiao Hotel",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 3,
    title: "Xian — Guerreiros de Terracota",
    subtitle: "2 Noites na Cidade Antiga",
    color: "primary",
    days: [
      {
        day: 7,
        date: "18 de Outubro",
        title: "Viagem para Xian",
        location: "Beijing → Xian",
        highlights: [
          "Traslado para estação de trem",
          "Viagem de trem de alta velocidade até Xian",
          "Check-in no hotel",
          "Visita ao Bairro Muçulmano e Grande Mesquita",
          "Passeio opcional: Teatro 'Nos Caminhos da Seda'"
        ],
        accommodation: "Mercure Downtown Xian",
        icon: "train" as const
      },
      {
        day: 8,
        date: "19 de Outubro",
        title: "Museu dos Guerreiros de Terracota",
        location: "Xian, China",
        highlights: [
          "GUERREIROS DE TERRACOTA — oitavo milagre do mundo",
          "8.000 guerreiros únicos construídos há 2.200 anos",
          "Você fica em silêncio. Você caminha entre os guerreiros",
          "Pagode do Pequeno Ganso Selvagem",
          "Passeio opcional: Passeio noturno pela cidade"
        ],
        meals: ["Café da manhã", "Almoço em restaurante local"],
        accommodation: "Mercure Downtown Xian",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 4,
    title: "Chengdu — Pandas Gigantes",
    subtitle: "3 Noites com os Pandas",
    color: "turquoise",
    days: [
      {
        day: 9,
        date: "20 de Outubro",
        title: "Viagem para Chengdu",
        location: "Xian → Chengdu",
        highlights: [
          "Traslado para estação ferroviária",
          "Viagem em trem de alta velocidade",
          "Check-in no hotel",
          "Passeio livre pela cidade"
        ],
        accommodation: "Dorsett Hotel Chengdu",
        icon: "train" as const
      },
      {
        day: 10,
        date: "21 de Outubro",
        title: "Base de Pesquisa de Pandas Gigantes",
        location: "Chengdu, China",
        highlights: [
          "BASE DE PANDAS GIGANTES — maior base do mundo",
          "Você vê pandas gigantes de perto",
          "Aprenda sobre os esforços de conservação",
          "Entenda a fragilidade da natureza",
          "Parque do Povo, Vale Largo e Estreito"
        ],
        meals: ["Café da manhã", "Almoço em restaurante local"],
        accommodation: "Dorsett Hotel Chengdu",
        icon: "camera" as const
      },
      {
        day: 11,
        date: "22 de Outubro",
        title: "Buda Gigante de Leshan",
        location: "Leshan, China",
        highlights: [
          "BUDA GIGANTE DE LESHAN — maior Buda esculpido do mundo",
          "Estátua esculpida em uma montanha há séculos",
          "Cruzeiro pelo Rio Leshan",
          "Contemple a dedicação, a fé, a visão que criou isso",
          "Retorno a Chengdu"
        ],
        meals: ["Café da manhã", "Almoço em restaurante local"],
        accommodation: "Dorsett Hotel Chengdu",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 5,
    title: "Chongqing — Cidade dos Dois Rios",
    subtitle: "2 Noites de Imersão",
    color: "primary",
    days: [
      {
        day: 12,
        date: "23 de Outubro",
        title: "Viagem para Chongqing",
        location: "Chengdu → Chongqing",
        highlights: [
          "Traslado para estação ferroviária",
          "Viagem de trem até Chongqing",
          "Mirante do VLT Liziba",
          "Torre Kui Xing e Rua Pedonal Jiangbei",
          "Passeio noturno por Hongyadong — a 'Caverna Vermelha'"
        ],
        accommodation: "Holiday Inn & Suites Chongqing",
        icon: "train" as const
      },
      {
        day: 13,
        date: "24 de Outubro",
        title: "Exploração de Chongqing",
        location: "Chongqing, China",
        highlights: [
          "Cidade Antiga de Ciqikou — bairro histórico",
          "Plataforma 'Olho nas Nuvens' — vista aérea da cidade",
          "Teleférico do Rio Yangtze",
          "Rua Nanbin e Rua Antiga Xiahaoli",
          "Vista Noturna dos Dois Rios em Danzishi"
        ],
        meals: ["Café da manhã"],
        accommodation: "Holiday Inn & Suites Chongqing",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 6,
    title: "Zhangjiajie — O Parque Avatar",
    subtitle: "2 Noites em Outro Planeta",
    color: "turquoise",
    days: [
      {
        day: 14,
        date: "25 de Outubro",
        title: "Chegada em Zhangjiajie",
        location: "Chongqing → Zhangjiajie",
        highlights: [
          "Traslado para estação ferroviária",
          "Viagem de trem até Zhangjiajie",
          "Famosa por formações únicas de arenito e quartzito",
          "Paisagens que inspiraram o filme Avatar",
          "Você entende imediatamente por que Avatar foi filmado aqui"
        ],
        accommodation: "Sunshine Resort Zhangjiajie",
        icon: "train" as const
      },
      {
        day: 15,
        date: "26 de Outubro",
        title: "Parque Florestal Nacional de Zhangjiajie",
        location: "Zhangjiajie, China",
        highlights: [
          "Passeio de dia inteiro pelo PARQUE AVATAR",
          "Monte Tianzi — montanhas que parecem vir de um sonho",
          "Parque Nacional de Yuanjiajie",
          "Elevador Bailong — sobe 326 metros em uma montanha",
          "Ponte de Vidro do Grande Cânion",
          "Você está em outro planeta"
        ],
        meals: ["Café da manhã"],
        accommodation: "Sunshine Resort Zhangjiajie",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 7,
    title: "Shanghai — O Futuro",
    subtitle: "3 Noites na Metrópole",
    color: "primary",
    days: [
      {
        day: 16,
        date: "27 de Outubro",
        title: "Montanha Tianmen e Voo para Shanghai",
        location: "Zhangjiajie → Shanghai",
        highlights: [
          "Visita à Montanha Tianmen — 'Portão do Paraíso'",
          "Traslado para o aeroporto",
          "Voo Zhangjiajie → Shanghai",
          "Check-in no hotel"
        ],
        accommodation: "Golden Tulip Bund Shanghai",
        icon: "plane" as const
      },
      {
        day: 17,
        date: "28 de Outubro",
        title: "Shanghai Clássica",
        location: "Shanghai, China",
        highlights: [
          "Yu Garden — jardim tradicional chinês",
          "Bund — orla famosa com edifícios históricos e modernos",
          "Nanjing Road — rua de compras mais famosa da China",
          "Templo do Buda de Jade",
          "Concessão Francesa — história colonial de Shanghai"
        ],
        meals: ["Café da manhã", "Almoço em restaurante local"],
        accommodation: "Golden Tulip Bund Shanghai",
        icon: "camera" as const
      },
      {
        day: 18,
        date: "29 de Outubro",
        title: "Zhujiajiao — Cidade Aquática",
        location: "Shanghai, China",
        highlights: [
          "Excursão à cidade aquática de Zhujiajiao",
          "Canais, pontes e arquitetura tradicional",
          "Cidade que parece saída de um conto de fadas",
          "Jantar de despedida — reflexão sobre tudo que viveu"
        ],
        meals: ["Café da manhã", "Jantar de despedida"],
        accommodation: "Golden Tulip Bund Shanghai",
        icon: "camera" as const
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
        date: "30 de Outubro",
        title: "Retorno ao Brasil",
        location: "Shanghai → Dubai → São Paulo",
        highlights: [
          "Dia livre para compras e organização",
          "Traslado ao aeroporto",
          "Retorno ao Brasil via Dubai",
          "Você volta diferente. Porque você foi à China."
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
  train: Train
};

export const DetailedItineraryCH = () => {
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
            19 dias explorando as maravilhas culturais da China. Cada momento pensado para você.
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
            { icon: Clock, value: "19", label: "Dias" },
            { icon: Hotel, value: "18", label: "Noites" },
            { icon: MapPin, value: "6", label: "Cidades" },
            { icon: Train, value: "4", label: "Viagens de Trem" }
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
