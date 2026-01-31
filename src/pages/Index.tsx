import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plane, MapPin, Phone, Mail, Globe, Anchor, Instagram, Send, Waves, Award, Users, Shield, BadgeCheck, Briefcase, Compass, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import cadasturImage from "@/assets/logoCadastur.png";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";

import logoAgencia from "@/assets/logotipo-agencia-index.png";
import sobreImage from "@/assets/reino-unido/sobre.jpeg";
import certificadoCadastur from "@/assets/docs/certificado_cadastur.pdf";
import certificadoAussie from "@/assets/docs/certificado_aussie_specialist.pdf";

// Imagens locais
import heroCruise from "@/assets/cruzeiro-01/cruzeiro.webp";
import sydneyOpera from "@/assets/cruzeiro-01/sidney.webp";
import borabora from "@/assets/cruzeiro-01/borabora.webp";
import havai from "@/assets/cruzeiro-01/havai.webp";

// Imagens Japão-China
import japaoPhoto1 from "@/assets/japao-china/photo-1493976040374-85c8e12f0c0e.jpg";
import japaoPhoto2 from "@/assets/japao-china/photo-1490806843957-31f4c9a91c65.jpg";
import japaoPhoto3 from "@/assets/japao-china/photo-1508804185872-d7badad00f7d.jpg";
import japaoPhoto4 from "@/assets/japao-china/photo-1474181487882-5abf3f0ba6c2.jpg";

// Imagens Puglia-Amalfi
import pugliaPhoto1 from "@/assets/puglia-amalfi/photo-1534308983496-4fabb1a015ee.jpg";
import pugliaPhoto2 from "@/assets/puglia-amalfi/photo-1516483638261-f4dbaf036963.jpg";
import pugliaPhoto3 from "@/assets/puglia-amalfi/alberobello-trulli.jpg";
import pugliaPhoto4 from "@/assets/puglia-amalfi/photo-1533587851505-d119e13fa0d7.jpg";

// Imagens Suíça-Trem
import suicaPhoto1 from "@/assets/suica-trem/shutterstock_476862469_11zon.webp";
import suicaPhoto2 from "@/assets/suica-trem/shutterstock_1730808289_11zon.webp";
import suicaPhoto3 from "@/assets/suica-trem/shutterstock_2357173307_11zon.webp";
import suicaPhoto4 from "@/assets/suica-trem/shutterstock_2393185093_11zon.webp";
// Imagens Reino Unido
import reinoPhoto1 from "@/assets/reino-unido/photo-1513635269975-59663e0ac1ad.jpg";
import reinoPhoto2 from "@/assets/reino-unido/photo-1486299267070-83823f5448dd.jpg";
import reinoPhoto3 from "@/assets/reino-unido/photo-1513635269975-59663e0ac1ad.jpg";
import reinoPhoto4 from "@/assets/reino-unido/photo-1513635269975-59663e0ac1ad.jpg";

// Imagens Cruzeiro Norte
import cruzeiroNortePhoto1 from "@/assets/cruzeiro-norte/photo-1531366936337-7c912a4589a7.jpg";
import cruzeiroNortePhoto2 from "@/assets/cruzeiro-norte/photo-1520483601560-389dff434fdf.jpg";
import cruzeiroNortePhoto3 from "@/assets/cruzeiro-norte/photo-1476514525535-07fb3b4ae5f1.jpg";
import cruzeiroNortePhoto4 from "@/assets/cruzeiro-norte/photo-1506377585622-bedcbb027afc.jpg";

// Imagens Ushuaia-Calafate
import ushuaiaPhoto1 from "@/assets/ushuaia-calafate/photo-1478827536114-da961b7f86d2.jpg";
import ushuaiaPhoto2 from "@/assets/ushuaia-calafate/photo-1478827536114-da961b7f86d2.jpg";
import ushuaiaPhoto3 from "@/assets/ushuaia-calafate/photo-1478827536114-da961b7f86d2.jpg";
import ushuaiaPhoto4 from "@/assets/ushuaia-calafate/photo-1589909202802-8f4aadce1849.jpg";

// Imagens Grécia
import greciaPhoto1 from "@/assets/grecia/photo-1533105079780-92b9be482077.jpg";
import greciaPhoto2 from "@/assets/grecia/photo-1570077188670-e3a8d69ac5ff.jpg";
import greciaPhoto3 from "@/assets/grecia/photo-1555993539-1732b0258235.jpg";
import greciaPhoto4 from "@/assets/grecia/photo-1613395877344-13d4a8e0d49e.jpg";

// Imagens África-Maurício
import africaPhoto1 from "@/assets/africa-mauricio/photo-1516426122078-c23e76319801.jpg";
import africaPhoto2 from "@/assets/africa-mauricio/photo-1547471080-7cc2caa01a7e.jpg";
import africaPhoto3 from "@/assets/africa-mauricio/photo-1580060839134-75a5edca2e99.jpg";
import africaPhoto4 from "@/assets/africa-mauricio/photo-1589197331516-4d84b72ebde3.jpg";

// Imagens Tailândia-Dubai
import tailandiaPhoto1 from "@/assets/tailandia-dubai/photo-1528181304800-259b08848526.jpg";
import tailandiaPhoto2 from "@/assets/tailandia-dubai/photo-1552465011-b4e21bf6e79a.jpg";
import tailandiaPhoto3 from "@/assets/tailandia-dubai/photo-1537956965359-7573183d1f57.jpg";
import tailandiaPhoto4 from "@/assets/tailandia-dubai/photo-1512453979798-5ea266f8880c.jpg";

// Imagens Mercados Natal
import mercadosPhoto1 from "@/assets/mercados-natal/colmar.jpg";
import mercadosPhoto2 from "@/assets/mercados-natal/photo-1545622783-b3e021430fee.jpg";
import mercadosPhoto3 from "@/assets/mercados-natal/photo-1482517967863-00e15c9b44be.jpg";
import mercadosPhoto4 from "@/assets/mercados-natal/photo-1543589077-47d81606c1bf.jpg";

// Imagens Austrália-NZ
import australiaPhoto1 from "@/assets/australia-nz-02/photo-1624138784614-87fd1b6528f8.jpg";
import australiaPhoto2 from "@/assets/australia-nz-02/photo-1462275646964-a0e3386b89fa.jpg";
import australiaPhoto3 from "@/assets/australia-nz-02/photo-1507699622108-4be3abd695ad.jpg";
import australiaPhoto4 from "@/assets/australia-nz-02/photo-1568430462989-44163eb1752f.jpg";

// Imagens Lapônia-Tromsø
import laponiaPhoto1 from "@/assets/laponia-tromso/photo-1531366936337-7c912a4589a7.jpg";
import laponiaPhoto2 from "@/assets/laponia-tromso/photo-1517483000871-1dbf64a6e1c6.jpg";
import laponiaPhoto3 from "@/assets/laponia-tromso/huskies.jpg";
import laponiaPhoto4 from "@/assets/laponia-tromso/photo-1507272931001-fc06c17e4f43.jpg";

// Imagens China
import chinaPhoto1 from "@/assets/china/photo-1508804185872-d7badad00f7d.jpg";
import chinaPhoto2 from "@/assets/china/photo-1547981609-4b6bfe67ca0b.jpg";
import chinaPhoto3 from "@/assets/china/photo-1545893835-abaa50cbe628.jpg";
import chinaPhoto4 from "@/assets/china/photo-1474181487882-5abf3f0ba6c2.jpg";

// Imagens Galeria de Viagens
import galeriaImg1 from "@/assets/galeria_viagens/12286D72-6DE5-453E-A706-3AF3737490D2_15_11zon.webp";
import galeriaImg2 from "@/assets/galeria_viagens/1609B1A4-9E18-4325-9084-542ACA9E538D_4_5005_c_7_11zon.webp";
import galeriaImg3 from "@/assets/galeria_viagens/4F6889AB-3EC1-4AC7-97AF-9B0BAEB0B969_8_11zon.webp";
import galeriaImg4 from "@/assets/galeria_viagens/56B38A97-407B-42DD-A85E-13446F17024F_9_11zon.webp";
import galeriaImg5 from "@/assets/galeria_viagens/6AD7F31D-ADAA-44C5-A9D8-9A8AA4E0C704_1_102_o_10_11zon.webp";
import galeriaImg6 from "@/assets/galeria_viagens/71F33D35-55D2-46F4-B9B1-B8F315336104_1_105_c_6_11zon.webp";
import galeriaImg7 from "@/assets/galeria_viagens/740B6B32-B1A4-44A5-9042-983654340F64_4_5005_c_14_11zon.webp";
import galeriaImg8 from "@/assets/galeria_viagens/7A3FD5B3-2D5D-48FA-B75C-E5403C2D095C_1_105_c_11_11zon.webp";
import galeriaImg9 from "@/assets/galeria_viagens/7D5CC16A-6D95-4F69-A0FB-AAA648DF9B65_4_5005_c_12_11zon.webp";
import galeriaImg10 from "@/assets/galeria_viagens/86EA9F8B-8FE2-4D2C-819C-1CE03D013778_1_105_c_13_11zon.webp";
import galeriaImg11 from "@/assets/galeria_viagens/D96A91AD-967C-4B55-A63A-F50AE56CD486_4_5005_c_16_11zon.webp";
import galeriaImg12 from "@/assets/galeria_viagens/F338DDA5-246F-4393-A13C-C4241B8E27DB_4_5005_c_17_11zon.webp";

// Array de imagens da galeria
const galeriaViagens = [
  { src: galeriaImg1, alt: "Experiência de viagem 1" },
  { src: galeriaImg2, alt: "Experiência de viagem 2" },
  { src: galeriaImg3, alt: "Experiência de viagem 3" },
  { src: galeriaImg4, alt: "Experiência de viagem 4" },
  { src: galeriaImg5, alt: "Experiência de viagem 5" },
  { src: galeriaImg6, alt: "Experiência de viagem 6" },
  { src: galeriaImg7, alt: "Experiência de viagem 7" },
  { src: galeriaImg8, alt: "Experiência de viagem 8" },
  { src: galeriaImg9, alt: "Experiência de viagem 9" },
  { src: galeriaImg10, alt: "Experiência de viagem 10" },
  { src: galeriaImg11, alt: "Experiência de viagem 11" },
  { src: galeriaImg12, alt: "Experiência de viagem 12" },
];

// Dados dos destinos
const destinations = [
  // Abril de 2026
  {
    id: "japao-china",
    title: "Japão & China",
    subtitle: "Kyoto → Tóquio → Beijing → Xangai",
    period: "Abril de 2026",
    path: "/japao-china-2026",
    //path:"/",
    images: [
      { src: japaoPhoto1, alt: "Templo em Kyoto" },
      { src: japaoPhoto2, alt: "Monte Fuji" },
      { src: japaoPhoto3, alt: "Grande Muralha da China" },
      { src: japaoPhoto4, alt: "Shanghai" }
    ]
  },
  // Junho de 2026
  {
    id: "puglia-amalfi",
    title: "Puglia & Costa Amalfitana",
    subtitle: "Alberobello → Polignano → Positano → Amalfi",
    period: "Junho de 2026",
    path: "/puglia-amalfi-2026",
    //path: "/",
    images: [
      { src: pugliaPhoto1, alt: "Costa Amalfitana" },
      { src: pugliaPhoto2, alt: "Positano" },
      { src: pugliaPhoto3, alt: "Alberobello Trulli" },
      { src: pugliaPhoto4, alt: "Polignano a Mare" }
    ]
  },
  // Julho de 2026
  {
    id: "suica-trem",
    title: "Suíça de Trem",
    subtitle: "Zermatt → Interlaken → Lucerna → Zurique",
    period: "Julho de 2026",
    path: "/suica-trem-2026",
    images: [
      { src: suicaPhoto1, alt: "Matterhorn" },
      { src: suicaPhoto2, alt: "Trem nos Alpes" },
      { src: suicaPhoto3, alt: "Alpes Suíços" },
      { src: suicaPhoto4, alt: "Lucerna" }
    ]
  },
  // Agosto de 2026
  {
    id: "reino-unido",
    title: "Reino Unido",
    subtitle: "Londres → Highlands → Edimburgo",
    period: "Agosto de 2026",
    path: "/reino-unido-2026",
    images: [
      { src: reinoPhoto1, alt: "Big Ben Londres" },
      { src: reinoPhoto2, alt: "Tower Bridge" },
      { src: reinoPhoto3, alt: "Castelo de Edinburgh" },
      { src: reinoPhoto4, alt: "Highlands Escócia" }
    ]
  },
  // Setembro de 2026
  {
    id: "cruzeiro-norte",
    title: "Cruzeiro Norte Europeu",
    subtitle: "Londres → Islândia → Noruega → Escócia",
    period: "Setembro de 2026",
    //path: "/cruzeiro-norte-europeu-2026",
    path: "/",
    images: [
      { src: cruzeiroNortePhoto1, alt: "Aurora Boreal na Islândia" },
      { src: cruzeiroNortePhoto2, alt: "Fjords Noruegueses" },
      { src: cruzeiroNortePhoto3, alt: "Cruzeiro pelo Atlântico" },
      { src: cruzeiroNortePhoto4, alt: "Castelo de Edimburgo" }
    ]
  },
  {
    id: "ushuaia-calafate",
    title: "Ushuaia, El Calafate & Buenos Aires",
    subtitle: "Ushuaia → El Calafate → Buenos Aires",
    period: "Setembro de 2026",
    //path: "/ushuaia-calafate-2026",
    path: "/",
    images: [
      { src: ushuaiaPhoto1, alt: "Glaciar Perito Moreno" },
      { src: ushuaiaPhoto2, alt: "Paisagem Patagônia" },
      { src: ushuaiaPhoto3, alt: "Pinguins na Patagônia" },
      { src: ushuaiaPhoto4, alt: "Ushuaia Fim do Mundo" }
    ]
  },
  {
    id: "grecia",
    title: "Grécia Além do Óbvio",
    subtitle: "Atenas → Zakynthos → Santorini → Mykonos",
    period: "Setembro de 2026",
    //path: "/grecia-alem-do-obvio-2026",
    path: "/",
    images: [
      { src: greciaPhoto1, alt: "Santorini ao pôr do sol" },
      { src: greciaPhoto2, alt: "Navagio Beach em Zakynthos" },
      { src: greciaPhoto3, alt: "Moinhos de Mykonos" },
      { src: greciaPhoto4, alt: "Acrópole de Atenas" }
    ]
  },
  // Outubro de 2026
  {
    id: "africa-mauricio",
    title: "África do Sul & Ilhas Maurício",
    subtitle: "Cape Town → Safári → Ilhas Maurício",
    period: "Outubro de 2026",
    path: "/africa-mauricio-2026",
    //path: "/",
    images: [
      { src: africaPhoto1, alt: "Leão no Safári" },
      { src: africaPhoto2, alt: "Elefantes na África" },
      { src: africaPhoto3, alt: "Cape Town Table Mountain" },
      { src: africaPhoto4, alt: "Ilhas Maurício" }
    ]
  },
  // Novembro de 2026
  {
    id: "tailandia-dubai",
    title: "Tailândia & Dubai",
    subtitle: "Bangkok → Chiang Mai → Krabi → Dubai",
    period: "Novembro de 2026",
    path: "/tailandia-dubai-2026",
    //path: "/",
    images: [
      { src: tailandiaPhoto1, alt: "Festival das Lanternas" },
      { src: tailandiaPhoto2, alt: "Templos Bangkok" },
      { src: tailandiaPhoto3, alt: "Praias Tailândia" },
      { src: tailandiaPhoto4, alt: "Dubai Skyline" }
    ]
  },
  // Dezembro de 2026
  {
    id: "mercados-natal",
    title: "Mercados de Natal",
    subtitle: "Alsácia → Suíça → Colmar → Estrasburgo",
    period: "Dezembro de 2026",
    //path: "/mercados-natal-2026",
    path: "/",
    images: [
      { src: mercadosPhoto1, alt: "Mercado de Natal em Estrasburgo" },
      { src: mercadosPhoto2, alt: "Colmar no Natal" },
      { src: mercadosPhoto3, alt: "Alpes Suíços Nevados" },
      { src: mercadosPhoto4, alt: "Decorações de Natal" }
    ]
  },
  // Fevereiro de 2027
  {
    id: "australia-nz",
    title: "Austrália & Nova Zelândia",
    subtitle: "Sydney → Cairns → Melbourne → Queenstown → Auckland",
    period: "Fevereiro de 2027",
    path: "/australia-novazelandia-2027",
    images: [
      { src: australiaPhoto1, alt: "Sydney Opera House" },
      { src: australiaPhoto2, alt: "Cangurus na Natureza" },
      { src: australiaPhoto3, alt: "Nova Zelândia - Queenstown" },
      { src: australiaPhoto4, alt: "Golfinhos" }
    ]
  },
  // Março de 2027
  {
    id: "cruzeiro-transpacifico",
    title: "Cruzeiro Transpacífico 2027",
    subtitle: "Sydney → Polinésia → Havaí → Los Angeles",
    period: "Março de 2027",
    path: "/cruzeiro-transpacifico-2027",
    images: [
      { src: heroCruise, alt: "Cruzeiro Anthem Oh the seas" },
      { src: sydneyOpera, alt: "Sydney" },
      { src: borabora, alt: "Bora Bora" },
      { src: havai, alt: "Havaí" }
    ]
  },
  {
    id: "laponia-tromso",
    title: "Lapônia & Tromsø",
    subtitle: "Finlândia → Noruega → Aurora Boreal",
    period: "Março de 2027",
    //path: "/laponia-tromso-2027",
    path: "/",
    images: [
      { src: laponiaPhoto1, alt: "Aurora Boreal na Lapônia" },
      { src: laponiaPhoto2, alt: "Huskies Siberianos no Ártico" },
      { src: laponiaPhoto3, alt: "Hotel de Gelo na Lapônia" },
      { src: laponiaPhoto4, alt: "Paisagem Ártica Nevada" }
    ]
  },
  // Outubro de 2027
  {
    id: "china-maravilhas",
    title: "China: Maravilhas Culturais",
    subtitle: "Beijing → Xi'an → Hangzhou → Xangai",
    period: "Outubro de 2027",
    path: "/china-maravilhas-2027",
    //path: "/",
    images: [
      { src: chinaPhoto1, alt: "Grande Muralha da China" },
      { src: chinaPhoto2, alt: "Cidade Proibida" },
      { src: chinaPhoto3, alt: "Guerreiros de Terracota" },
      { src: chinaPhoto4, alt: "Shanghai Skyline" }
    ]
  }
];

// Credenciais do CEO
const credentials = [
  {
    icon: Award,
    text: "8 anos de vivência em Londres — conhece cada rua, cada história, cada segredo",
  },
  {
    icon: MapPin,
    text: "CEO da WE Travel UK — Empresa sediada no Reino Unido",
  },
  {
    icon: Users,
    text: "Acompanhamento pessoal do embarque ao retorno — não delega, não terceiriza",
  },
  {
    icon: Shield,
    text: "Histórico de grupos bem-sucedidos — viajantes satisfeitos e transformados",
  },
];

// Certificações
const certifications = [
  {
    icon: Award,
    name: "Aussie Travel Specialist",
    issuer: "Governo Australiano",
    description: "Certificação oficial para especialistas em turismo australiano",
    href: certificadoAussie,
  },
  {
    icon: BadgeCheck,
    name: "Cadastur",
    issuer: "Ministério do Turismo (Brasil)",
    description: "Cadastro oficial de profissionais de turismo",
    href: certificadoCadastur,
  },
  {
    icon: Globe,
    name: "8 Anos em Londres",
    issuer: "Vivência Autêntica",
    description: "Conhecimento profundo da cultura e destinos europeus",
  },
  {
    icon: Briefcase,
    name: "CEO, WE Travel UK",
    issuer: "Empresa Premium",
    description: "Especialista em viagens premium para brasileiros",
  },
];

// Connection Section Component
const ConnectionSection = () => {
  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-ocean-medium to-ocean-deep relative overflow-hidden">
      {/* Decorative ocean elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-turquoise/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-turquoise/10 to-transparent" />

      {/* Floating compass */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-20 text-turquoise/10 hidden lg:block"
      >
        <Compass className="w-24 h-24" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main avatar image */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-turquoise/30 shadow-lg shadow-turquoise/20">
                <img 
                  src={sobreImage} 
                  alt="Evandro Mendes" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 md:top-4 md:right-0 bg-navy/80 backdrop-blur-sm px-4 py-2 rounded-full border border-turquoise/30"
              >
                <span className="text-xs font-semibold text-turquoise">8 Anos em Londres</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 md:bottom-4 md:left-0 bg-navy/80 backdrop-blur-sm px-4 py-2 rounded-full border border-turquoise/30"
              >
                <span className="text-xs font-semibold text-turquoise">Cadastur</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 -right-8 md:right-[-60px] bg-navy/80 backdrop-blur-sm px-4 py-2 rounded-full border border-turquoise/30 hidden md:block"
              >
                <span className="text-xs font-semibold text-turquoise">CEO WE Travel UK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-turquoise font-semibold text-sm tracking-widest uppercase mb-4 block">
              Quem Guia Sua Jornada
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Sua jornada é </span>
              <span className="bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent">orquestrada</span>
            </h2>

            <div className="space-y-4 mb-8 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Evandro Mendes</strong> não é um guia de turismo. 
                É o CEO da WE Travel UK e <strong className="text-turquoise">viveu 8 anos em Londres</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Ele explorou cada canto do mundo. Cada destino, cada experiência, cada detalhe.
                Seus roteiros foram <strong className="text-foreground">pessoalmente criados por quem conhece o que há de melhor</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Ele acompanha <strong className="text-turquoise">pessoalmente</strong> cada grupo.
                Ele não delega. Ele não terceiriza. Ele está com você.
              </p>
            </div>

            {/* Credentials List */}
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <credential.icon className="w-4 h-4 text-turquoise" />
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">{credential.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => {
            const CardContent = (
              <>
                <div className="w-12 h-12 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-3">
                  <cert.icon className="w-6 h-6 text-turquoise" />
                </div>
                <h4 className="font-display font-bold text-foreground text-sm mb-1 flex items-center justify-center gap-1">
                  {cert.name}
                  {cert.href && <ExternalLink className="w-3 h-3 text-turquoise" />}
                </h4>
                <p className="text-xs text-turquoise mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground line-clamp-3">{cert.description}</p>
              </>
            );

            return cert.href ? (
              <motion.a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-navy/50 backdrop-blur-sm rounded-xl p-4 text-center border border-turquoise/20 hover:border-turquoise/40 transition-colors cursor-pointer hover:scale-105"
              >
                {CardContent}
              </motion.a>
            ) : (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-navy/50 backdrop-blur-sm rounded-xl p-4 text-center border border-turquoise/20 hover:border-turquoise/40 transition-colors"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Type for destinations
type Destination = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  path: string;
  images: { src: string; alt: string }[];
};

// Photo Gallery Section Component
const PhotoGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-navy via-ocean-deep to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent">Galeria</span>
            <span className="text-foreground"> de Experiências</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Momentos únicos capturados em nossos destinos ao redor do mundo
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galeriaViagens.map((image, index) => (
              <motion.div
                key={`gallery-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image)}
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                  index % 4 === 0 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index % 4 === 0 ? 'h-[400px] md:h-[500px]' : 'h-[200px] md:h-[240px]'
                  }`}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            >
              <span className="text-white text-2xl font-light">×</span>
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Componente de Card de Destino com Slider
const DestinationCard = ({ destination }: { destination: typeof destinations[0] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destination.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [destination.images.length]);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
  };

  return (
    <Link to={destination.path}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="group relative bg-navy/50 rounded-2xl overflow-hidden border border-turquoise/20 hover:border-turquoise/50 transition-all duration-300 shadow-lg hover:shadow-turquoise/20"
      >
        {/* Image Slider */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={destination.images[currentIndex].src}
              alt={destination.images[currentIndex].alt}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 rounded-full bg-navy/70 text-white hover:bg-turquoise/80 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 rounded-full bg-navy/70 text-white hover:bg-turquoise/80 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {destination.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-turquoise w-6" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Map Pin Icon */}
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full bg-turquoise/90 text-white shadow-lg"
            >
              <MapPin className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-turquoise transition-colors mb-2">
            {destination.title}
          </h3>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <Plane className="w-4 h-4 text-turquoise" />
            {destination.subtitle}
          </p>
          <p className="text-turquoise/80 text-sm font-medium mt-2">
            📅 {destination.period}
          </p>
          
          {/* CTA */}
          <div className="mt-4 flex items-center gap-2 text-turquoise text-sm font-medium">
            <span>Explorar destino</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Função para capturar parâmetros UTM da URL
const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_source: urlParams.get("utm_source") || undefined,
    utm_medium: urlParams.get("utm_medium") || undefined,
    utm_campaign: urlParams.get("utm_campaign") || undefined,
    utm_content: urlParams.get("utm_content") || undefined,
    utm_term: urlParams.get("utm_term") || undefined,
    referrer: document.referrer || undefined
  };
};

// Remove propriedades undefined do objeto
const cleanObject = (obj: Record<string, unknown>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined && value !== null && value !== "")
  );
};

// Contact Form Section Component
const ContactFormSection = ({ destinations }: { destinations: Array<{ id: string; title: string; subtitle: string; path: string; images: { src: string; alt: string; }[] }> }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    interest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string | undefined>>({});

  // Captura os parâmetros UTM quando o componente monta
  useEffect(() => {
    setUtmParams(getUtmParams());
  }, []);

  const parseTravelersValue = (value: string) => {
    if (value === "4+") return 4;
    return parseInt(value, 10) || 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.travelers) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar os parâmetros UTM limpos (sem valores undefined/null/vazios)
      const cleanedUtmParams = cleanObject(utmParams);

      const requestBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        travelers: parseTravelersValue(formData.travelers),
        destiny: formData.interest || "A definir",
        utm_params: Object.keys(cleanedUtmParams).length > 0 ? cleanedUtmParams : undefined
      };

      console.log("Enviando dados:", requestBody); // Para debug

      const response = await fetch("https://wetraveluk.com.br/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer kRPXbr9REX04TIHDj7xj6v8TmJugoeFOyvFwwJ2oxfwy6u6COXiybV94plWK4gUbJjEE1AyCJK8mUTrFxpcU7ZkoyVm9f05SSg6ghy2fmmKI5",
          "origin": "https://wetraveluk.com.br"
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      
      if (data.success || response.ok) {
        toast.success("Sua solicitação foi enviada! Em breve entraremos em contato.");
        setFormData({ name: "", email: "", phone: "", travelers: "", interest: "" });
      } else {
        toast.error("Houve um problema ao enviar sua solicitação. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-ocean-medium to-ocean-deep relative overflow-hidden border-t border-turquoise/20">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/10 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-turquoise/10 rounded-full blur-3xl" />
      </div>

      {/* Floating waves */}
      <motion.div
        animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-turquoise/10"
      >
        <Waves className="w-32 h-32" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-turquoise/10 mb-6">
              <Send className="w-7 h-7 text-turquoise" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Não sabe qual destino </span>
              <span className="bg-gradient-to-r from-turquoise via-coral to-turquoise bg-clip-text text-transparent">escolher?</span>
            </h2>
            <p className="text-turquoise text-lg">
              Preencha o formulário abaixo e um de nossos consultores entrará em contato em até 24 horas
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-navy/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 space-y-6 border border-turquoise/20"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-navy/50 border border-turquoise/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors"
                disabled={isSubmitting}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-navy/50 border border-turquoise/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors"
                disabled={isSubmitting}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Telefone (WhatsApp) *
              </label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-navy/50 border border-turquoise/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors"
                disabled={isSubmitting}
              />
            </div>

            {/* Number of Travelers */}
            <div>
              <label htmlFor="travelers" className="block text-sm font-medium text-foreground mb-2">
                Quantidade de Viajantes *
              </label>
              <select
                id="travelers"
                required
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                className="w-full px-4 py-3 bg-navy/50 border border-turquoise/30 rounded-lg text-foreground focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors"
                disabled={isSubmitting}
              >
                <option value="">Quantas pessoas viajam?</option>
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4+">4 ou mais pessoas</option>
              </select>
            </div>

            {/* Interest / Destination */}
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                Qual destino te interessa?
              </label>
              <select
                id="interest"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-3 bg-navy/50 border border-turquoise/30 rounded-lg text-foreground focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors"
                disabled={isSubmitting}
              >
                <option value="">Selecione um destino (opcional)</option>
                <option value="Cruzeiro Transpacífico 2027">Cruzeiro Transpacífico 2027</option>
                <option value="Austrália & Nova Zelândia">Austrália & Nova Zelândia</option>
                <option value="Cruzeiro Norte Europeu">Cruzeiro Norte Europeu</option>
                <option value="Japão & China">Japão & China</option>
                <option value="Reino Unido">Reino Unido</option>
                <option value="Suíça de Trem">Suíça de Trem</option>
                <option value="África do Sul & Ilhas Maurício">África do Sul & Ilhas Maurício</option>
                <option value="China: Maravilhas Culturais">China: Maravilhas Culturais</option>
                <option value="Puglia & Costa Amalfitana">Puglia & Costa Amalfitana</option>
                <option value="Tailândia & Dubai">Tailândia & Dubai</option>
                <option value="Ushuaia, El Calafate & Buenos Aires">Ushuaia, El Calafate & Buenos Aires</option>
                <option value="Mercados de Natal">Mercados de Natal</option>
                <option value="Lapônia & Tromsø">Lapônia & Tromsø</option>
                <option value="Grécia Além do Óbvio">Grécia Além do Óbvio</option>
                <option value="Ainda não sei">Ainda não sei</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-turquoise to-coral text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-turquoise/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Quero saber mais
                </>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground text-center">
              Suas informações estão seguras. Nunca compartilhamos seus dados com terceiros.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gradient-to-b from-navy via-ocean-deep to-navy overflow-x-hidden">
      <SEO {...seoData.index} />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Stars */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          {/* Decorative circles */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-turquoise/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
        </div>

        {/* Flying Plane */}
        <motion.div
          className="absolute text-turquoise/20"
          animate={{
            x: ["-10%", "110%"],
            y: ["30%", "50%", "40%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Plane className="w-12 h-12 rotate-12" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center px-6 py-3 bg-navy/50 backdrop-blur-sm rounded-full border border-turquoise/30">
                {/* Substitua "Logo" pela imagem do logotipo quando disponível */}
                {/* Exemplo: <img src={logoImage} alt="WE Travel UK" className="h-10 md:h-12 w-auto" /> */}
                <img 
                  src={logoAgencia} 
                  alt="WE Travel UK" 
                  className="h-10 md:h-12 w-auto"
                  onError={(e) => {
                    // Fallback para texto caso a imagem não carregue
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<span class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-turquoise"><circle cx="12" cy="5" r="3"/><line x1="12" x2="12" y1="22" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg><span class="font-display text-xl font-bold text-foreground">WE Travel UK</span></span>';
                  }}
                />
              </div>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Transforme seus{" "}
              <span className="bg-gradient-to-r from-turquoise via-coral to-turquoise bg-clip-text text-transparent">
                sonhos
              </span>
              <br />
              em destinos
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Viagens exclusivas em grupo com acompanhamento pessoal.
              <br />
              <span className="text-turquoise">Escolha seu próximo destino.</span>
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <div>
                <p className="text-3xl font-display font-bold text-turquoise">{destinations.length}</p>
                <p className="text-sm text-muted-foreground">Destinos</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-coral">5+</p>
                <p className="text-sm text-muted-foreground">Continentes</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-turquoise">100%</p>
                <p className="text-sm text-muted-foreground">Personalizado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-turquoise/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-turquoise rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Connection Section - Sobre */}
      <ConnectionSection />

      {/* Destinations Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-turquoise">Destinos</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada viagem é única. Escolha o destino que mais combina com você e embarque em uma experiência transformadora.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallerySection />

      {/* Contact Form Section */}
      <ContactFormSection destinations={destinations} />

      {/* Footer */}
      <footer className="py-16 md:py-24 w-full bg-gradient-to-b from-navy to-ocean-deep border-t border-turquoise/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl" />
        </div>

        {/* Floating anchor */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-20 text-turquoise/10"
        >
          <Anchor className="w-24 h-24" />
        </motion.div>

        <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            {/* Brand */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <Anchor className="w-8 h-8 text-turquoise" />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  WE Travel UK
                </h3>
              </div>
              <p className="text-xl text-primary font-display italic">
                Transformando sonhos em destinos inesquecíveis.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-8 border-t border-turquoise/20">
              <p className="font-display text-xl font-bold text-foreground mt-2">
                Evandro Mendes
              </p>
              <div className="text-sm text-muted-foreground space-y-1 mt-2">
                <p>CEO, WE Travel UK</p>
                <p>Aussie Travel Specialist — Certificado pelo Governo Australiano</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="flex items-center px-4 py-2 shadow-sm">
                    <div className="w-24 h-10 flex items-center justify-center">
                      <img 
                        src={cadasturImage} 
                        alt="Logo CADASTUR" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-foreground text-sm md:text-base">45.759.934/0001-40</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 pt-8 text-muted-foreground">
              <a
                href="tel:+5513982263757"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(13) 98226-3757</span>
              </a>
              <a
                href="mailto:contato@wetraveluk.com.br"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contato@wetraveluk.com.br</span>
              </a>
              <a
                href="https://instagram.com/wetravel_uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@wetravel_uk</span>
              </a>
              <a
                href="https://wetraveluk.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>wetraveluk.com.br</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground pt-8">
              © {currentYear} WE Travel UK. Todos os direitos reservados.
            </p>

            {/* ZapTurize Link */}
            <div className="pt-6 border-t border-turquoise/10">
              <a
                href="https://zapturize.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <span>Desenvolvido por</span>
                <span className="font-medium text-foreground">ZapTurize</span>
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
