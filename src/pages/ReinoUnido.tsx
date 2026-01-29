import { HeroSectionRU } from "@/components/reino-unido/HeroSectionRU";
import { ProblemSectionRU } from "@/components/reino-unido/ProblemSectionRU";
import { JourneySectionRU } from "@/components/reino-unido/JourneySectionRU";
import { DetailedItineraryRU } from "@/components/reino-unido/DetailedItineraryRU";
import { ExperiencesSectionRU } from "@/components/reino-unido/ExperiencesSectionRU";
import { FAQSectionRU } from "@/components/reino-unido/FAQSectionRU";
import { UrgencySectionRU } from "@/components/reino-unido/UrgencySectionRU";
import { InclusionsSectionRU } from "@/components/reino-unido/InclusionsSectionRU";
import { ContactSectionRU } from "@/components/reino-unido/ContactSectionRU";
import { ConnectionSectionRU } from "@/components/reino-unido/ConnectionSectionRU";
import { PhotoGalleryRU } from "@/components/reino-unido/PhotoGalleryRU";
import { HotelsPhotoGalleryRU } from "@/components/reino-unido/HotelsPhotoGalleryRU";
import { FooterSectionRU } from "@/components/reino-unido/FooterSectionRU";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

const ReinoUnido = () => {
  return (
    <main className="theme-uk min-h-screen bg-background overflow-x-hidden">
      <HeroSectionRU />
      <ProblemSectionRU />
      <ConnectionSectionRU />
      <JourneySectionRU />
      <DetailedItineraryRU />
      <ExperiencesSectionRU />
      <PhotoGalleryRU />
      <HotelsPhotoGalleryRU />
      <TestimonialsSection />
      <FAQSectionRU />
      <UrgencySectionRU />
      <InclusionsSectionRU />
      <ContactSectionRU />
      <FooterSectionRU />
    </main>
  );
};

export default ReinoUnido;
