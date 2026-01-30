import { HeroSectionPA } from "@/components/puglia-amalfi/HeroSectionPA";
import { ProblemSectionPA } from "@/components/puglia-amalfi/ProblemSectionPA";
import { JourneySectionPA } from "@/components/puglia-amalfi/JourneySectionPA";
import { DetailedItineraryPA } from "@/components/puglia-amalfi/DetailedItineraryPA";
import { ExperiencesSectionPA } from "@/components/puglia-amalfi/ExperiencesSectionPA";
import { FAQSectionPA } from "@/components/puglia-amalfi/FAQSectionPA";
import { UrgencySectionPA } from "@/components/puglia-amalfi/UrgencySectionPA";
import { InclusionsSectionPA } from "@/components/puglia-amalfi/InclusionsSectionPA";
import { ContactSection } from "@/components/common/ContactSection";
import { ConnectionSectionPA } from "@/components/puglia-amalfi/ConnectionSectionPA";
import { PhotoGalleryPA } from "@/components/puglia-amalfi/PhotoGalleryPA";
import { HotelsPhotoGalleryPA } from "@/components/puglia-amalfi/HotelsPhotoGalleryPA";
import { FooterSectionPA } from "@/components/puglia-amalfi/FooterSectionPA";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const PugliaAmalfi = () => {
  return (
    <main className="theme-italia min-h-screen bg-background overflow-x-hidden">
      <SEO {...seoData.pugliaAmalfi} />
      <HeroSectionPA />
      <ConnectionSectionPA />
      <ProblemSectionPA />
      <JourneySectionPA />
      <DetailedItineraryPA />
      <ExperiencesSectionPA />
      <PhotoGalleryPA />
      <HotelsPhotoGalleryPA />
      <TestimonialsSection testimonials={testimonialsData.pugliaAmalfi} />
      <FAQSectionPA />
      <UrgencySectionPA />
      <InclusionsSectionPA />
      <ContactSection destino="Puglia & Costa Amalfitana" />
      <FooterSectionPA />
    </main>
  );
};

export default PugliaAmalfi;
