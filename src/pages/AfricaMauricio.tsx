import { HeroSectionAM } from "@/components/africa-mauricio/HeroSectionAM";
import { ProblemSectionAM } from "@/components/africa-mauricio/ProblemSectionAM";
import { JourneySectionAM } from "@/components/africa-mauricio/JourneySectionAM";
import { DetailedItineraryAM } from "@/components/africa-mauricio/DetailedItineraryAM";
import { ExperiencesSectionAM } from "@/components/africa-mauricio/ExperiencesSectionAM";
import { FAQSectionAM } from "@/components/africa-mauricio/FAQSectionAM";
import { UrgencySectionAM } from "@/components/africa-mauricio/UrgencySectionAM";
import { InclusionsSectionAM } from "@/components/africa-mauricio/InclusionsSectionAM";
import { ContactSectionAM } from "@/components/africa-mauricio/ContactSectionAM";
import { ConnectionSectionAM } from "@/components/africa-mauricio/ConnectionSectionAM";
import { PhotoGalleryAM } from "@/components/africa-mauricio/PhotoGalleryAM";
import { HotelsPhotoGalleryAM } from "@/components/africa-mauricio/HotelsPhotoGalleryAM";
import { FooterSectionAM } from "@/components/africa-mauricio/FooterSectionAM";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

const AfricaMauricio = () => {
  return (
    <main className="theme-africa min-h-screen bg-background overflow-x-hidden">
      <HeroSectionAM />
      <ProblemSectionAM />
      <ConnectionSectionAM />
      <JourneySectionAM />
      <DetailedItineraryAM />
      <ExperiencesSectionAM />
      <PhotoGalleryAM />
      <HotelsPhotoGalleryAM />
      <TestimonialsSection />
      <FAQSectionAM />
      <UrgencySectionAM />
      <InclusionsSectionAM />
      <ContactSectionAM />
      <FooterSectionAM />
    </main>
  );
};

export default AfricaMauricio;
