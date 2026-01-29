import { HeroSectionAUNZ } from "@/components/australia-nz/HeroSectionAUNZ";
import { ProblemSectionAUNZ } from "@/components/australia-nz/ProblemSectionAUNZ";
import { JourneySectionAUNZ } from "@/components/australia-nz/JourneySectionAUNZ";
import { DetailedItineraryAUNZ } from "@/components/australia-nz/DetailedItineraryAUNZ";
import { ExperiencesSectionAUNZ } from "@/components/australia-nz/ExperiencesSectionAUNZ";
import { BenefitsSectionAUNZ } from "@/components/australia-nz/BenefitsSectionAUNZ";
import { FAQSectionAUNZ } from "@/components/australia-nz/FAQSectionAUNZ";
import { InclusionsSectionAUNZ } from "@/components/australia-nz/InclusionsSectionAUNZ";
import { UrgencySectionAUNZ } from "@/components/australia-nz/UrgencySectionAUNZ";
import { ContactSectionAUNZ } from "@/components/australia-nz/ContactSectionAUNZ";
import { ConnectionSectionAUNZ } from "@/components/australia-nz/ConnectionSectionAUNZ";
import { PhotoGalleryAUNZ } from "@/components/australia-nz/PhotoGalleryAUNZ";
import { HotelsPhotoGalleryAUNZ } from "@/components/australia-nz/HotelsPhotoGalleryAUNZ";
import { FooterSectionAUNZ } from "@/components/australia-nz/FooterSectionAUNZ";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

const AustraliaNZ = () => {
  return (
    <main className="theme-australia min-h-screen bg-background overflow-x-hidden">
      <HeroSectionAUNZ />
      <ProblemSectionAUNZ />
      <ConnectionSectionAUNZ />
      <JourneySectionAUNZ />
      <DetailedItineraryAUNZ />
      <ExperiencesSectionAUNZ />
      <PhotoGalleryAUNZ />
      <HotelsPhotoGalleryAUNZ />
      <TestimonialsSection />
      <BenefitsSectionAUNZ />
      <FAQSectionAUNZ />
      <InclusionsSectionAUNZ />
      <UrgencySectionAUNZ />
      <ContactSectionAUNZ />
      <FooterSectionAUNZ />
    </main>
  );
};

export default AustraliaNZ;
