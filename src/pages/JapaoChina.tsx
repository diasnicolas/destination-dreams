import { HeroSectionJC } from "@/components/japao-china/HeroSectionJC";
import { ProblemSectionJC } from "@/components/japao-china/ProblemSectionJC";
import { JourneySectionJC } from "@/components/japao-china/JourneySectionJC";
import { DetailedItineraryJC } from "@/components/japao-china/DetailedItineraryJC";
import { ExperiencesSectionJC } from "@/components/japao-china/ExperiencesSectionJC";
import { FAQSectionJC } from "@/components/japao-china/FAQSectionJC";
import { UrgencySectionJC } from "@/components/japao-china/UrgencySectionJC";
import { InclusionsSectionJC } from "@/components/japao-china/InclusionsSectionJC";
import { ContactSectionJC } from "@/components/japao-china/ContactSectionJC";
import { ConnectionSectionJC } from "@/components/japao-china/ConnectionSectionJC";
import { PhotoGalleryJC } from "@/components/japao-china/PhotoGalleryJC";
import { HotelsPhotoGalleryJC } from "@/components/japao-china/HotelsPhotoGalleryJC";
import { FooterSectionJC } from "@/components/japao-china/FooterSectionJC";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

const JapaoChina = () => {
  return (
    <main className="theme-japao min-h-screen bg-background overflow-x-hidden">
      <HeroSectionJC />
      <ProblemSectionJC />
      <ConnectionSectionJC />
      <JourneySectionJC />
      <DetailedItineraryJC />
      <ExperiencesSectionJC />
      <PhotoGalleryJC />
      <HotelsPhotoGalleryJC />
      <TestimonialsSection />
      <FAQSectionJC />
      <UrgencySectionJC />
      <InclusionsSectionJC />
      <ContactSectionJC />
      <FooterSectionJC />
    </main>
  );
};

export default JapaoChina;
