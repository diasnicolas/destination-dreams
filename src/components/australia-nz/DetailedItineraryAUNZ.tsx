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

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  ship: Ship,
  camera: Camera,
  mountain: Mountain
};

const phases = [
  {
    id: 1,
    title: "Sydney — A Porta de Entrada",
    subtitle: "4 Noites de Imersão na Austrália",
    color: "primary",
    days: [
      {
        day: 1,
        date: "Dia 1",
        title: "Chegada em Sydney",
        location: "Sydney, Austrália",
        highlights: [
          "Recepção VIP no aeroporto",
          "Traslado privativo para o hotel",
          "Visita à Ópera de Sydney — ícone mundial",
          "Passeio pela Harbour Bridge",
          "Jantar de boas-vindas com vista para a baía"
        ],
        accommodation: "Hotel 4-5 estrelas em Sydney",
        icon: "plane" as const
      },
      {
        day: 2,
        date: "Dia 2",
        title: "Darling Harbour e City Tour",
        location: "Sydney, Austrália",
        highlights: [
          "Exploração do Darling Harbour — água azul, barcos, vida",
          "Caminhada pelas ruas históricas de Sydney",
          "Descoberta de cafés e restaurantes locais",
          "Visita aos principais pontos turísticos",
          "Tempo para absorver o aroma da cidade"
        ],
        meals: ["Almoço em restaurante local"],
        accommodation: "Hotel 4-5 estrelas em Sydney",
        icon: "camera" as const
      },
      {
        day: 3,
        date: "Dia 3",
        title: "Bondi Beach e Pôr do Sol",
        location: "Sydney, Austrália",
        highlights: [
          "Visita à Bondi Beach — a praia mais famosa da Austrália",
          "Natação em águas cristalinas",
          "Caminhada costeira com vistas deslumbrantes",
          "Momento de relaxamento à beira-mar",
          "Assistir ao pôr do sol mais bonito de Sydney"
        ],
        accommodation: "Hotel 4-5 estrelas em Sydney",
        icon: "camera" as const
      },
      {
        day: 4,
        date: "Dia 4",
        title: "Dia Livre — Explore no Seu Ritmo",
        location: "Sydney, Austrália",
        highlights: [
          "Tempo livre para explorar Sydney no seu ritmo",
          "Descubra seus próprios lugares favoritos",
          "Opção: Visita ao Taronga Zoo",
          "Opção: Compras em áreas premium",
          "Conexão pessoal com a cidade"
        ],
        accommodation: "Hotel 4-5 estrelas em Sydney",
        icon: "hotel" as const
      }
    ]
  },
  {
    id: 2,
    title: "Cairns — A Grande Barreira",
    subtitle: "3 Noites de Magia Natural",
    color: "turquoise",
    days: [
      {
        day: 5,
        date: "Dia 5",
        title: "Chegada em Cairns",
        location: "Cairns, Austrália",
        highlights: [
          "Voo de Sydney para Cairns",
          "Traslado para o hotel",
          "Exploração da cidade de Cairns",
          "Preparação para a magia que está por vir",
          "Jantar com culinária local"
        ],
        accommodation: "Hotel 4-5 estrelas em Cairns",
        icon: "plane" as const
      },
      {
        day: 6,
        date: "Dia 6",
        title: "Sobrevoo e Snorkeling na Barreira de Corais",
        location: "Grande Barreira de Corais",
        highlights: [
          "Embarque em hidravião — experiência única",
          "Sobrevoo da Grande Barreira de Corais",
          "Vista aérea da maior estrutura viva do planeta",
          "Cores que você nunca viu antes",
          "Snorkeling em águas cristalinas",
          "Peixes coloridos e vida marinha espetacular",
          "Avistamento de golfinhos selvagens"
        ],
        meals: ["Almoço a bordo incluído"],
        accommodation: "Hotel 4-5 estrelas em Cairns",
        icon: "camera" as const
      },
      {
        day: 7,
        date: "Dia 7",
        title: "Cangurus, Coalas e Vinícola",
        location: "Cairns, Austrália",
        highlights: [
          "Interação com cangurus em habitat natural",
          "Encontro com coalas — toque, alimente, conviva",
          "Conexão com a fauna australiana autêntica",
          "Visita a vinícola local premiada",
          "Degustação de vinhos australianos",
          "Conexão com a verdadeira Austrália"
        ],
        meals: ["Almoço harmonizado na vinícola"],
        accommodation: "Hotel 4-5 estrelas em Cairns",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 3,
    title: "Melbourne — Great Ocean Road",
    subtitle: "3 Noites de Arte e Natureza",
    color: "primary",
    days: [
      {
        day: 8,
        date: "Dia 8",
        title: "Chegada em Melbourne",
        location: "Melbourne, Austrália",
        highlights: [
          "Voo de Cairns para Melbourne",
          "Traslado para o hotel",
          "Exploração da cidade — arte urbana vibrante",
          "Descoberta de cafés incríveis",
          "Melbourne é conhecida como a capital cultural da Austrália"
        ],
        accommodation: "Hotel 4-5 estrelas em Melbourne",
        icon: "plane" as const
      },
      {
        day: 9,
        date: "Dia 9",
        title: "Great Ocean Road — Os 12 Apóstolos",
        location: "Great Ocean Road, Austrália",
        highlights: [
          "Viagem cênica pela Great Ocean Road",
          "Uma das estradas mais bonitas do mundo",
          "Vista das falésias dramáticas",
          "Oceano se quebrando nas rochas",
          "Os 12 Apóstolos — formações rochosas gigantes",
          "Pôr do sol espetacular nos Apóstolos",
          "Momento de ficar sem palavras"
        ],
        meals: ["Almoço em restaurante com vista"],
        accommodation: "Hotel 4-5 estrelas em Melbourne",
        icon: "mountain" as const
      },
      {
        day: 10,
        date: "Dia 10",
        title: "Melbourne Cultural",
        location: "Melbourne, Austrália",
        highlights: [
          "Visita a museus de classe mundial",
          "Exploração dos bairros artísticos",
          "Laneways com arte de rua",
          "Tempo para compras e descobertas",
          "Conexão profunda com a cidade"
        ],
        accommodation: "Hotel 4-5 estrelas em Melbourne",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 4,
    title: "Queenstown & Hobbiton",
    subtitle: "3 Noites — Ficção Vira Realidade",
    color: "turquoise",
    days: [
      {
        day: 11,
        date: "Dia 11",
        title: "Chegada em Queenstown",
        location: "Queenstown, Nova Zelândia",
        highlights: [
          "Voo de Melbourne para Queenstown",
          "Entrada na Nova Zelândia — outro mundo",
          "Vista das montanhas majestosas",
          "Lago Wakatipu com águas cristalinas",
          "Sensação de entrar em um filme"
        ],
        accommodation: "Hotel 4-5 estrelas em Queenstown",
        icon: "plane" as const
      },
      {
        day: 12,
        date: "Dia 12",
        title: "Hobbiton e Milford Sound",
        location: "Nova Zelândia",
        highlights: [
          "Visita a Hobbiton — cenário do Senhor dos Anéis",
          "Caminhe pelas casas dos hobbits",
          "Veja o Condado com seus próprios olhos",
          "Momento de emoção — ficção vira realidade",
          "Navegação pelo Milford Sound",
          "Montanhas gigantes emergindo da água",
          "Cachoeiras caindo direto no mar"
        ],
        meals: ["Almoço no Green Dragon Inn em Hobbiton"],
        accommodation: "Hotel 4-5 estrelas em Queenstown",
        icon: "camera" as const
      },
      {
        day: 13,
        date: "Dia 13",
        title: "Aventuras Opcionais em Queenstown",
        location: "Queenstown, Nova Zelândia",
        highlights: [
          "Dia livre para atividades opcionais",
          "Opção: Bungee jumping — capital mundial da aventura",
          "Opção: Jet boat pelos rios",
          "Opção: Passeio de gôndola com vista panorâmica",
          "Opção: Relaxamento e spa",
          "Exploração livre da cidade"
        ],
        accommodation: "Hotel 4-5 estrelas em Queenstown",
        icon: "mountain" as const
      }
    ]
  },
  {
    id: 5,
    title: "Rotorua — Geotermia",
    subtitle: "2 Noites — A Terra Viva",
    color: "primary",
    days: [
      {
        day: 14,
        date: "Dia 14",
        title: "Gêiseres e Geotermia",
        location: "Rotorua, Nova Zelândia",
        highlights: [
          "Voo de Queenstown para Rotorua",
          "Visita aos gêiseres — espetáculo natural",
          "Terra fumegando sob seus pés",
          "Piscinas de lama borbulhante",
          "Geotermia em ação — a Terra é viva",
          "Experiência única no planeta"
        ],
        accommodation: "Hotel 4-5 estrelas em Rotorua",
        icon: "mountain" as const
      },
      {
        day: 15,
        date: "Dia 15",
        title: "Cultura Maori Autêntica",
        location: "Rotorua, Nova Zelândia",
        highlights: [
          "Show Maori autêntico — experiência cultural",
          "Dança tradicional Haka",
          "Música e cantos ancestrais",
          "História e tradição da Nova Zelândia",
          "Jantar Hangi — cozido na terra",
          "Conexão com um lugar sagrado"
        ],
        meals: ["Jantar tradicional Hangi incluído"],
        accommodation: "Hotel 4-5 estrelas em Rotorua",
        icon: "camera" as const
      }
    ]
  },
  {
    id: 6,
    title: "Auckland — Redescoberta",
    subtitle: "3 Noites — Transformação Completa",
    color: "turquoise",
    days: [
      {
        day: 16,
        date: "Dia 16",
        title: "Chegada em Auckland",
        location: "Auckland, Nova Zelândia",
        highlights: [
          "Voo de Rotorua para Auckland",
          "Chegada na maior cidade da Nova Zelândia",
          "Exploração do centro da cidade",
          "Visita a museus e galerias",
          "Caminhada pelas ruas vibrantes"
        ],
        accommodation: "Hotel 4-5 estrelas em Auckland",
        icon: "plane" as const
      },
      {
        day: 17,
        date: "Dia 17",
        title: "Auckland Livre",
        location: "Auckland, Nova Zelândia",
        highlights: [
          "Dia livre para exploração pessoal",
          "Compra de souvenirs especiais",
          "Despedida da Nova Zelândia",
          "Reflexão sobre tudo que viveu",
          "Tempo para absorver a transformação"
        ],
        accommodation: "Hotel 4-5 estrelas em Auckland",
        icon: "hotel" as const
      },
      {
        day: 18,
        date: "Dia 18",
        title: "Despedida e Retorno",
        location: "Auckland → Brasil",
        highlights: [
          "Último dia em Auckland",
          "Despedida com o coração cheio",
          "Check-out do hotel",
          "Traslado para o aeroporto",
          "Voo de retorno ao Brasil",
          "Você volta para casa DIFERENTE"
        ],
        icon: "plane" as const
      }
    ]
  }
];

export const DetailedItineraryAUNZ = () => {
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
            18 dias meticulosamente planejados para sua redescoberta pessoal.
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
            { icon: Clock, value: "18", label: "Dias" },
            { icon: Hotel, value: "18", label: "Noites em Hotéis" },
            { icon: Plane, value: "6", label: "Voos Internos" },
            { icon: MapPin, value: "6", label: "Cidades" }
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
