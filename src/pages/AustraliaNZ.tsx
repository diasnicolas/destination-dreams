import { HeroSectionAUNZ } from "@/components/australia-nz/HeroSectionAUNZ";
import { ProblemSectionAUNZ } from "@/components/australia-nz/ProblemSectionAUNZ";
import { JourneySectionAUNZ } from "@/components/australia-nz/JourneySectionAUNZ";
import { DetailedItineraryAUNZ } from "@/components/australia-nz/DetailedItineraryAUNZ";
import { ExperiencesSectionAUNZ } from "@/components/australia-nz/ExperiencesSectionAUNZ";
import { BenefitsSectionAUNZ } from "@/components/australia-nz/BenefitsSectionAUNZ";
import { FAQSectionAUNZ } from "@/components/australia-nz/FAQSectionAUNZ";
import { InclusionsSectionAUNZ } from "@/components/australia-nz/InclusionsSectionAUNZ";
import { UrgencySectionAUNZ } from "@/components/australia-nz/UrgencySectionAUNZ";
import { ContactSection } from "@/components/common/ContactSection";
import { ConnectionSectionAUNZ } from "@/components/australia-nz/ConnectionSectionAUNZ";
import { PhotoGalleryAUNZ } from "@/components/australia-nz/PhotoGalleryAUNZ";
import { HotelsPhotoGalleryAUNZ } from "@/components/australia-nz/HotelsPhotoGalleryAUNZ";
import { FooterSectionAUNZ } from "@/components/australia-nz/FooterSectionAUNZ";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const AustraliaNZ = () => {
  return (
    <main className="theme-australia min-h-screen bg-background overflow-x-hidden">
      <SEO {...seoData.australiaNZ} />
      <HeroSectionAUNZ />
      <ConnectionSectionAUNZ />
      <ProblemSectionAUNZ />
      <JourneySectionAUNZ />
      <DetailedItineraryAUNZ />
      <ExperiencesSectionAUNZ />
      <PhotoGalleryAUNZ />
      <HotelsPhotoGalleryAUNZ />
      <TestimonialsSection testimonials={testimonialsData.australiaNZ} />
      <BenefitsSectionAUNZ />
      <FAQSectionAUNZ />
      <InclusionsSectionAUNZ />
      <UrgencySectionAUNZ />
      <ContactSection destino="Austrália & Nova Zelândia 2027" />
      <FooterSectionAUNZ />
    </main>
  );
};

export default AustraliaNZ;
