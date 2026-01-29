import { HeroSectionST } from "@/components/suica-trem/HeroSectionST";
import { ProblemSectionST } from "@/components/suica-trem/ProblemSectionST";
import { JourneySectionST } from "@/components/suica-trem/JourneySectionST";
import { DetailedItineraryST } from "@/components/suica-trem/DetailedItineraryST";
import { ExperiencesSectionST } from "@/components/suica-trem/ExperiencesSectionST";
import { FAQSectionST } from "@/components/suica-trem/FAQSectionST";
import { UrgencySectionST } from "@/components/suica-trem/UrgencySectionST";
import { InclusionsSectionST } from "@/components/suica-trem/InclusionsSectionST";
import { ContactSectionST } from "@/components/suica-trem/ContactSectionST";
import { ConnectionSectionST } from "@/components/suica-trem/ConnectionSectionST";
import { PhotoGalleryST } from "@/components/suica-trem/PhotoGalleryST";
import { HotelsPhotoGalleryST } from "@/components/suica-trem/HotelsPhotoGalleryST";
import { FooterSectionST } from "@/components/suica-trem/FooterSectionST";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

const SuicaTrem = () => {
  return (
    <main className="theme-suica min-h-screen bg-background overflow-x-hidden">
      <HeroSectionST />
      <ProblemSectionST />
      <ConnectionSectionST />
      <JourneySectionST />
      <DetailedItineraryST />
      <ExperiencesSectionST />
      <PhotoGalleryST />
      <HotelsPhotoGalleryST />
      <TestimonialsSection />
      <FAQSectionST />
      <UrgencySectionST />
      <InclusionsSectionST />
      <ContactSectionST />
      <FooterSectionST />
    </main>
  );
};

export default SuicaTrem;
