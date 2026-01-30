import { HeroSection } from "@/components/cruzeiro-transp/HeroSection";
import { ConnectionSection } from "@/components/cruzeiro-transp/ConnectionSection";
import { JourneySection } from "@/components/cruzeiro-transp/JourneySection";
import { DetailedItinerary } from "@/components/cruzeiro-transp/DetailedItinerary";
import { ExperiencesSection } from "@/components/cruzeiro-transp/ExperiencesSection";
import { PhotoGallery } from "@/components/cruzeiro-transp/PhotoGallery";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { FAQSection } from "@/components/cruzeiro-transp/FAQSection";
import { UrgencySection } from "@/components/cruzeiro-transp/UrgencySection";
import { InclusionsSection } from "@/components/cruzeiro-transp/InclusionsSection";
import { ContactSection } from "@/components/common/ContactSection";
import { FooterSection } from "@/components/cruzeiro-transp/FooterSection";
import { HotelsPhotoGallery } from "@/components/cruzeiro-transp/HotelsPhotoGallery";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const CruzeiroTranspacifico = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <SEO {...seoData.cruzeiroTranspacifico} />
      <HeroSection />
      <ConnectionSection />
      <JourneySection />
      <DetailedItinerary />
      <ExperiencesSection />
      <PhotoGallery />
      <HotelsPhotoGallery />
      <TestimonialsSection testimonials={testimonialsData.cruzeiroTranspacifico} />
      <FAQSection />
      <UrgencySection />
      <InclusionsSection />
      <ContactSection destino="Cruzeiro Transpacífico 2027" />
      <FooterSection />
    </main>
  );
};

export default CruzeiroTranspacifico;
