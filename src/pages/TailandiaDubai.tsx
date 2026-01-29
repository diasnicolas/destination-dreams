import { HeroSectionTD } from "@/components/tailandia-dubai/HeroSectionTD";
import { ProblemSectionTD } from "@/components/tailandia-dubai/ProblemSectionTD";
import { JourneySectionTD } from "@/components/tailandia-dubai/JourneySectionTD";
import { DetailedItineraryTD } from "@/components/tailandia-dubai/DetailedItineraryTD";
import { ExperiencesSectionTD } from "@/components/tailandia-dubai/ExperiencesSectionTD";
import { FAQSectionTD } from "@/components/tailandia-dubai/FAQSectionTD";
import { UrgencySectionTD } from "@/components/tailandia-dubai/UrgencySectionTD";
import { InclusionsSectionTD } from "@/components/tailandia-dubai/InclusionsSectionTD";
import { ContactSectionTD } from "@/components/tailandia-dubai/ContactSectionTD";
import { ConnectionSectionTD } from "@/components/tailandia-dubai/ConnectionSectionTD";
import { PhotoGalleryTD } from "@/components/tailandia-dubai/PhotoGalleryTD";
import { HotelsPhotoGalleryTD } from "@/components/tailandia-dubai/HotelsPhotoGalleryTD";
import { FooterSectionTD } from "@/components/tailandia-dubai/FooterSectionTD";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

const TailandiaDubai = () => {
  return (
    <main className="theme-tailandia min-h-screen bg-background overflow-x-hidden">
      <HeroSectionTD />
      <ProblemSectionTD />
      <ConnectionSectionTD />
      <JourneySectionTD />
      <DetailedItineraryTD />
      <ExperiencesSectionTD />
      <PhotoGalleryTD />
      <HotelsPhotoGalleryTD />
      <TestimonialsSection />
      <FAQSectionTD />
      <UrgencySectionTD />
      <InclusionsSectionTD />
      <ContactSectionTD />
      <FooterSectionTD />
    </main>
  );
};

export default TailandiaDubai;
