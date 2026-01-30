import { HeroSectionCN } from "@/components/cruzeiro-norte/HeroSectionCN";
import { ConnectionSectionCN } from "@/components/cruzeiro-norte/ConnectionSectionCN";
import { ProblemSectionCN } from "@/components/cruzeiro-norte/ProblemSectionCN";
import { JourneySectionCN } from "@/components/cruzeiro-norte/JourneySectionCN";
import { DetailedItineraryCN } from "@/components/cruzeiro-norte/DetailedItineraryCN";
import { ExperiencesSectionCN } from "@/components/cruzeiro-norte/ExperiencesSectionCN";
import { PhotoGalleryCN } from "@/components/cruzeiro-norte/PhotoGalleryCN";
import { HotelsPhotoGalleryCN } from "@/components/cruzeiro-norte/HotelsPhotoGalleryCN";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { FAQSectionCN } from "@/components/cruzeiro-norte/FAQSectionCN";
import { UrgencySectionCN } from "@/components/cruzeiro-norte/UrgencySectionCN";
import { InclusionsSectionCN } from "@/components/cruzeiro-norte/InclusionsSectionCN";
import { ContactSection } from "@/components/common/ContactSection";
import { FooterSectionCN } from "@/components/cruzeiro-norte/FooterSectionCN";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const CruzeiroNorte = () => {
  return (
    <main className="theme-cruzeiro min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO {...seoData.cruzeiroNorte} />
      <HeroSectionCN />
      <ConnectionSectionCN />
      <ProblemSectionCN />
      <JourneySectionCN />
      <DetailedItineraryCN />
      <ExperiencesSectionCN />
      <PhotoGalleryCN />
      <HotelsPhotoGalleryCN />
      <TestimonialsSection testimonials={testimonialsData.cruzeiroNorte} />
      <FAQSectionCN />
      <UrgencySectionCN />
      <InclusionsSectionCN />
      <ContactSection destino="Cruzeiro Islândia, Noruega, Escócia & Reino Unido - Setembro 2026" />
      <FooterSectionCN />
    </main>
  );
};

export default CruzeiroNorte;
