import { HeroSectionPA } from "@/components/puglia-amalfi/HeroSectionPA";
import { ProblemSectionPA } from "@/components/puglia-amalfi/ProblemSectionPA";
import { JourneySectionPA } from "@/components/puglia-amalfi/JourneySectionPA";
import { DetailedItineraryPA } from "@/components/puglia-amalfi/DetailedItineraryPA";
import { ExperiencesSectionPA } from "@/components/puglia-amalfi/ExperiencesSectionPA";
import { FAQSectionPA } from "@/components/puglia-amalfi/FAQSectionPA";
import { UrgencySectionPA } from "@/components/puglia-amalfi/UrgencySectionPA";
import { InclusionsSectionPA } from "@/components/puglia-amalfi/InclusionsSectionPA";
import { ContactSectionPA } from "@/components/puglia-amalfi/ContactSectionPA";
import { ConnectionSectionPA } from "@/components/puglia-amalfi/ConnectionSectionPA";
import { PhotoGalleryPA } from "@/components/puglia-amalfi/PhotoGalleryPA";
import { HotelsPhotoGalleryPA } from "@/components/puglia-amalfi/HotelsPhotoGalleryPA";
import { FooterSectionPA } from "@/components/puglia-amalfi/FooterSectionPA";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

const PugliaAmalfi = () => {
  return (
    <main className="theme-italia min-h-screen bg-background overflow-x-hidden">
      <HeroSectionPA />
      <ProblemSectionPA />
      <ConnectionSectionPA />
      <JourneySectionPA />
      <DetailedItineraryPA />
      <ExperiencesSectionPA />
      <PhotoGalleryPA />
      <HotelsPhotoGalleryPA />
      <TestimonialsSection />
      <FAQSectionPA />
      <UrgencySectionPA />
      <InclusionsSectionPA />
      <ContactSectionPA />
      <FooterSectionPA />
    </main>
  );
};

export default PugliaAmalfi;
