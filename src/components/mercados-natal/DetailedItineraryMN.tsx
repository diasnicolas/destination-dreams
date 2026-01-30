import { motion } from "framer-motion";
import { 
  Plane, 
  Hotel, 
  MapPin, 
  Camera, 
  Utensils, 
  ChevronDown,
  ChevronUp,
  Train,
  Wine,
  Snowflake
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
  icon: "plane" | "hotel" | "camera" | "train" | "wine" | "snowflake";
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
    title: "FASE 1: Embarque Internacional",
    subtitle: "São Paulo → Estrasburgo",
    color: "primary",
    days: [
      {
        day: 1,
        date: "Dezembro 2026",
        title: "Partida do Brasil",
        location: "Guarulhos, SP",
        highlights: [
          "Encontro com o grupo no Aeroporto Internacional de Guarulhos",
          "Encontro com viajantes de outros estados",
          "Embarque em voo da Turkish Airlines",
          "Noite a bordo"
        ],
        icon: "plane"
      },
      {
        day: 2,
        date: "Dezembro 2026",
        title: "Chegada em Estrasburgo",
        location: "Estrasburgo, França",
        highlights: [
          "Chegada ao Aeroporto",
          "Recepção por guia local em português",
          "Traslado ao hotel",
          "Check-in no Sofitel Strasbourg Grande Ile",
          "Tempo livre para descanso",
          "Primeira caminhada pelo centro histórico iluminado"
        ],
        accommodation: "Sofitel Strasbourg Grande Ile",
        icon: "hotel"
      }
    ]
  },
  {
    id: 2,
    title: "FASE 2: A Capital do Natal",
    subtitle: "3 Noites em Estrasburgo",
    color: "primary",
    days: [
      {
        day: 3,
        date: "Dezembro 2026",
        title: "Mercado de Natal de Estrasburgo",
        location: "Estrasburgo, França",
        highlights: [
          "Visita ao Marché de Noël — o mais antigo da Europa (desde 1570)",
          "Catedral de Estrasburgo — patrimônio UNESCO",
          "Praça da Catedral com a Grande Árvore de Natal",
          "Degustação de vin chaud (vinho quente) e bredele (biscoitos)",
          "Compras de artesanato natalino"
        ],
        meals: ["Café da manhã", "Almoço em winstub tradicional"],
        accommodation: "Sofitel Strasbourg Grande Ile",
        icon: "camera"
      },
      {
        day: 4,
        date: "Dezembro 2026",
        title: "Petite France & Cruzeiro Noturno",
        location: "Estrasburgo, França",
        highlights: [
          "Bairro Petite France — casarões medievais enxaimel",
          "Passeio pelas ruelas decoradas",
          "Pontes Cobertas e Barragem Vauban",
          "Degustação de vinhos alsacianos",
          "Cruzeiro noturno pelo Rio Ill — cidade iluminada"
        ],
        meals: ["Café da manhã", "Degustação de vinhos"],
        accommodation: "Sofitel Strasbourg Grande Ile",
        icon: "wine"
      },
      {
        day: 5,
        date: "Dezembro 2026",
        title: "Dia Livre ou Passeios Opcionais",
        location: "Estrasburgo, França",
        highlights: [
          "Manhã livre para explorar os mercados",
          "Opcional: Tour pelos vilarejos da Alsácia",
          "Opcional: Visita a vinícolas locais",
          "Último passeio pelos mercados de Estrasburgo",
          "Preparação para viagem a Colmar"
        ],
        meals: ["Café da manhã"],
        accommodation: "Sofitel Strasbourg Grande Ile",
        icon: "camera"
      }
    ]
  },
  {
    id: 3,
    title: "FASE 3: Vilas de Conto de Fadas",
    subtitle: "3 Noites em Colmar + Baden-Baden",
    color: "primary",
    days: [
      {
        day: 6,
        date: "Dezembro 2026",
        title: "Viagem para Colmar",
        location: "Colmar, França",
        highlights: [
          "Traslado de Estrasburgo para Colmar",
          "Check-in no La Maison des Têtes",
          "Passeio pela Pequena Veneza de Colmar",
          "Casinhas coloridas refletidas nos canais",
          "Mercados de Natal de Colmar"
        ],
        meals: ["Café da manhã"],
        accommodation: "La Maison des Têtes",
        icon: "hotel"
      },
      {
        day: 7,
        date: "Dezembro 2026",
        title: "Riquewihr & Eguisheim",
        location: "Região da Alsácia, França",
        highlights: [
          "Tour pelas vilas mais bonitas da Alsácia",
          "Riquewihr — vila medieval preservada",
          "Eguisheim — eleita vila mais bonita da França",
          "Mercados de Natal em ambiente de conto de fadas",
          "Degustação de vinhos locais"
        ],
        meals: ["Café da manhã", "Almoço em vila típica"],
        accommodation: "La Maison des Têtes",
        icon: "camera"
      },
      {
        day: 8,
        date: "Dezembro 2026",
        title: "Baden-Baden (Alemanha)",
        location: "Baden-Baden, Alemanha",
        highlights: [
          "Day trip a Baden-Baden na Floresta Negra",
          "Mercados de Natal refinados alemães",
          "Arquitetura histórica barroca",
          "Fontes termais naturais",
          "Atmosfera sofisticada e natalina",
          "Retorno a Colmar"
        ],
        meals: ["Café da manhã"],
        accommodation: "La Maison des Têtes",
        icon: "train"
      },
      {
        day: 9,
        date: "Dezembro 2026",
        title: "Último dia em Colmar",
        location: "Colmar, França",
        highlights: [
          "Manhã livre para últimas compras",
          "Passeio de barco pelos canais (opcional)",
          "Museu Unterlinden (opcional)",
          "Despedida da Alsácia",
          "Viagem para a Suíça"
        ],
        meals: ["Café da manhã"],
        accommodation: "La Maison des Têtes",
        icon: "camera"
      }
    ]
  },
  {
    id: 4,
    title: "FASE 4: Alpes Suíços",
    subtitle: "2 Noites em Montreux",
    color: "primary",
    days: [
      {
        day: 10,
        date: "Dezembro 2026",
        title: "Chegada em Montreux",
        location: "Montreux, Suíça",
        highlights: [
          "Viagem panorâmica para a Suíça",
          "Chegada em Montreux às margens do Lago Léman",
          "Check-in no Fairmont Le Montreux Palace",
          "Passeio pelo calçadão do lago",
          "Mercado de Natal de Montreux"
        ],
        meals: ["Café da manhã"],
        accommodation: "Fairmont Le Montreux Palace",
        icon: "hotel"
      },
      {
        day: 11,
        date: "Dezembro 2026",
        title: "Montreux & Região",
        location: "Montreux, Suíça",
        highlights: [
          "Vista dos Alpes nevados",
          "Château de Chillon (opcional)",
          "Degustação de fondue suíço",
          "Mercados de Natal suíços",
          "Chocolate suíço artesanal"
        ],
        meals: ["Café da manhã", "Jantar fondue"],
        accommodation: "Fairmont Le Montreux Palace",
        icon: "snowflake"
      }
    ]
  },
  {
    id: 5,
    title: "FASE 5: Montanhas Mágicas",
    subtitle: "2 Noites em Sils Maria",
    color: "primary",
    days: [
      {
        day: 12,
        date: "Dezembro 2026",
        title: "Viagem para Sils Maria",
        location: "Sils Maria, Suíça",
        highlights: [
          "Viagem pelos Alpes suíços",
          "Paisagens de montanha espetaculares",
          "Check-in no Hotel Schweizerhof Sils Maria",
          "Passeio pela vila alpina",
          "Inverno europeu de verdade"
        ],
        meals: ["Café da manhã"],
        accommodation: "Hotel Schweizerhof Sils Maria",
        icon: "snowflake"
      },
      {
        day: 13,
        date: "Dezembro 2026",
        title: "Dia nos Alpes & Retorno",
        location: "Sils Maria → Brasil",
        highlights: [
          "Último café da manhã com vista para os Alpes",
          "Tempo livre na montanha",
          "Transfer para aeroporto",
          "Voo de retorno ao Brasil",
          "Chegada ao Brasil com a magia do Natal no coração"
        ],
        meals: ["Café da manhã"],
        icon: "plane"
      }
    ]
  }
];

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  camera: Camera,
  train: Train,
  wine: Wine,
  snowflake: Snowflake
};

export const DetailedItineraryMN = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-muted/30 via-background to-muted/30" id="itinerary">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Roteiro </span>
            <span className="text-gradient-gold">Detalhado</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            13 dias de magia pelos Mercados de Natal da Europa
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {phases.map((phase) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl overflow-hidden border border-primary/20"
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.id)}
                className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-primary/10 to-transparent hover:from-primary/20 transition-colors"
              >
                <div className="text-left">
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
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
                  className="p-6 pt-0"
                >
                  <div className="space-y-6">
                    {phase.days.map((day, dayIndex) => {
                      const Icon = iconMap[day.icon];
                      return (
                        <div
                          key={dayIndex}
                          className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0"
                        >
                          {/* Day marker */}
                          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <Icon className="w-3 h-3 text-primary-foreground" />
                          </div>

                          <div className="space-y-3">
                            <div>
                              <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                                Dia {day.day} • {day.date}
                              </span>
                              <h4 className="font-display text-lg font-bold text-foreground">
                                {day.title}
                              </h4>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="w-3 h-3" />
                                {day.location}
                              </div>
                            </div>

                            <ul className="space-y-1">
                              {day.highlights.map((highlight, hIndex) => (
                                <li
                                  key={hIndex}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="text-primary">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>

                            {day.meals && (
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Utensils className="w-3 h-3 text-primary" />
                                {day.meals.join(" • ")}
                              </div>
                            )}

                            {day.accommodation && (
                              <div className="flex items-center gap-2 text-xs">
                                <Hotel className="w-3 h-3 text-primary" />
                                <span className="text-primary font-medium">
                                  {day.accommodation}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
