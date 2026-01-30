import { HeroSectionGR } from "@/components/grecia/HeroSectionGR";
import { ConnectionSectionGR } from "@/components/grecia/ConnectionSectionGR";
import { ProblemSectionGR } from "@/components/grecia/ProblemSectionGR";
import { JourneySectionGR } from "@/components/grecia/JourneySectionGR";
import { DetailedItineraryGR } from "@/components/grecia/DetailedItineraryGR";
import { ExperiencesSectionGR } from "@/components/grecia/ExperiencesSectionGR";
import { PhotoGalleryGR } from "@/components/grecia/PhotoGalleryGR";
import { HotelsPhotoGalleryGR } from "@/components/grecia/HotelsPhotoGalleryGR";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { FAQSectionGR } from "@/components/grecia/FAQSectionGR";
import { UrgencySectionGR } from "@/components/grecia/UrgencySectionGR";
import { InclusionsSectionGR } from "@/components/grecia/InclusionsSectionGR";
import { ContactSection } from "@/components/common/ContactSection";
import { FooterSectionGR } from "@/components/grecia/FooterSectionGR";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const GreciaAlemDoObvio = () => {
  return (
    <main className="theme-grecia min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO {...seoData.greciaAlemDoObvio} />
      <HeroSectionGR />
      <ConnectionSectionGR />
      <ProblemSectionGR />
      <JourneySectionGR />
      <DetailedItineraryGR />
      <ExperiencesSectionGR />
      <PhotoGalleryGR />
      <HotelsPhotoGalleryGR />
      <TestimonialsSection testimonials={testimonialsData.greciaAlemDoObvio} />
      <FAQSectionGR />
      <UrgencySectionGR />
      <InclusionsSectionGR />
      <ContactSection destino="Grécia Além do Óbvio - Setembro 2026" />
      <FooterSectionGR />
    </main>
  );
};

export default GreciaAlemDoObvio;
