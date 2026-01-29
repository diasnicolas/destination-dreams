import { HeroSectionCH } from "@/components/china/HeroSectionCH";
import { ProblemSectionCH } from "@/components/china/ProblemSectionCH";
import { JourneySectionCH } from "@/components/china/JourneySectionCH";
import { DetailedItineraryCH } from "@/components/china/DetailedItineraryCH";
import { ExperiencesSectionCH } from "@/components/china/ExperiencesSectionCH";
import { FAQSectionCH } from "@/components/china/FAQSectionCH";
import { UrgencySectionCH } from "@/components/china/UrgencySectionCH";
import { InclusionsSectionCH } from "@/components/china/InclusionsSectionCH";
import { ContactSectionCH } from "@/components/china/ContactSectionCH";
import { ConnectionSectionCH } from "@/components/china/ConnectionSectionCH";
import { PhotoGalleryCH } from "@/components/china/PhotoGalleryCH";
import { HotelsPhotoGalleryCH } from "@/components/china/HotelsPhotoGalleryCH";
import { FooterSectionCH } from "@/components/china/FooterSectionCH";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

const ChinaMaravilhas = () => {
  return (
    <main className="theme-china min-h-screen bg-background overflow-x-hidden">
      <HeroSectionCH />
      <ProblemSectionCH />
      <ConnectionSectionCH />
      <JourneySectionCH />
      <DetailedItineraryCH />
      <ExperiencesSectionCH />
      <PhotoGalleryCH />
      <HotelsPhotoGalleryCH />
      <TestimonialsSection />
      <FAQSectionCH />
      <UrgencySectionCH />
      <InclusionsSectionCH />
      <ContactSectionCH />
      <FooterSectionCH />
    </main>
  );
};

export default ChinaMaravilhas;
