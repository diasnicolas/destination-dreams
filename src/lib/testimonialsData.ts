// Dados de depoimentos para todas as páginas
import { VideoTestimonial } from "@/components/common/TestimonialsSection";

// Thumbnails dos depoimentos
import depoimento01 from "@/assets/testemunhos/depoimento_1.png";
import depoimento02 from "@/assets/testemunhos/depoimento_2.png";
import depoimento03 from "@/assets/testemunhos/depoimento_3.png";
import depoimento04 from "@/assets/testemunhos/depoimento_4.png";
import depoimento05 from "@/assets/testemunhos/depoimento_5.png";
import depoimento06 from "@/assets/testemunhos/depoimento_6.png";

// Depoimentos padrão - usados em todas as páginas
const defaultTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    youtubeId: "0lphLG7-ljU",
    thumbnail: depoimento01,
    rating: 5,
  },
  {
    id: 2,
    youtubeId: "ArgJp6Zft30",
    thumbnail: depoimento02,
    rating: 5,
  },
  {
    id: 3,
    youtubeId: "qaIySahsDSQ",
    thumbnail: depoimento03,
    rating: 5,
  },
  {
    id: 4,
    youtubeId: "OXwZkAs3m-4",
    thumbnail: depoimento04,
    rating: 5,
  },
  {
    id: 5,
    youtubeId: "Er_kV1dgZ6o",
    thumbnail: depoimento05,
    rating: 5,
  },
  {
    id: 6,
    youtubeId: "O3JMXM1DpTA",
    thumbnail: depoimento06,
    rating: 5,
  }
];

// Dados de depoimentos por página - por enquanto todos usam o padrão
export const testimonialsData = {
  africaMauricio: defaultTestimonials,
  australiaNZ: defaultTestimonials,
  chinaMaravilhas: defaultTestimonials,
  cruzeiroNorte: defaultTestimonials,
  cruzeiroTranspacifico: defaultTestimonials,
  greciaAlemDoObvio: defaultTestimonials,
  japaoChina: defaultTestimonials,
  laponiaTromso: defaultTestimonials,
  mercadosNatal: defaultTestimonials,
  pugliaAmalfi: defaultTestimonials,
  reinoUnido: defaultTestimonials,
  suicaTrem: defaultTestimonials,
  tailandiaDubai: defaultTestimonials,
  ushuaiaCalafate: defaultTestimonials,
};
