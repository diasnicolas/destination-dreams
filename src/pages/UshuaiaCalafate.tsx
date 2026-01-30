import { HeroSectionUC } from "@/components/ushuaia-calafate/HeroSectionUC";
import { ConnectionSectionUC } from "@/components/ushuaia-calafate/ConnectionSectionUC";
import { ProblemSectionUC } from "@/components/ushuaia-calafate/ProblemSectionUC";
import { JourneySectionUC } from "@/components/ushuaia-calafate/JourneySectionUC";
import { DetailedItineraryUC } from "@/components/ushuaia-calafate/DetailedItineraryUC";
import { ExperiencesSectionUC } from "@/components/ushuaia-calafate/ExperiencesSectionUC";
import { PhotoGalleryUC } from "@/components/ushuaia-calafate/PhotoGalleryUC";
import { HotelsPhotoGalleryUC } from "@/components/ushuaia-calafate/HotelsPhotoGalleryUC";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { FAQSectionUC } from "@/components/ushuaia-calafate/FAQSectionUC";
import { UrgencySectionUC } from "@/components/ushuaia-calafate/UrgencySectionUC";
import { InclusionsSectionUC } from "@/components/ushuaia-calafate/InclusionsSectionUC";
import { ContactSection } from "@/components/common/ContactSection";
import { FooterSectionUC } from "@/components/ushuaia-calafate/FooterSectionUC";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const UshuaiaCalafate = () => {
  return (
    <main className="theme-patagonia min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO {...seoData.ushuaiaCalafate} />
      <HeroSectionUC />
      <ConnectionSectionUC />
      <ProblemSectionUC />
      <JourneySectionUC />
      <DetailedItineraryUC />
      <ExperiencesSectionUC />
      <PhotoGalleryUC />
      <HotelsPhotoGalleryUC />
      <TestimonialsSection testimonials={testimonialsData.ushuaiaCalafate} />
      <FAQSectionUC />
      <UrgencySectionUC />
      <InclusionsSectionUC />
      <ContactSection destino="Ushuaia & El Calafate + Buenos Aires - Setembro 2026" />
      <FooterSectionUC />
    </main>
  );
};

export default UshuaiaCalafate;
