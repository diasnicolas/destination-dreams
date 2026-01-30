import { HeroSectionTD } from "@/components/tailandia-dubai/HeroSectionTD";
import { ProblemSectionTD } from "@/components/tailandia-dubai/ProblemSectionTD";
import { JourneySectionTD } from "@/components/tailandia-dubai/JourneySectionTD";
import { DetailedItineraryTD } from "@/components/tailandia-dubai/DetailedItineraryTD";
import { ExperiencesSectionTD } from "@/components/tailandia-dubai/ExperiencesSectionTD";
import { FAQSectionTD } from "@/components/tailandia-dubai/FAQSectionTD";
import { UrgencySectionTD } from "@/components/tailandia-dubai/UrgencySectionTD";
import { InclusionsSectionTD } from "@/components/tailandia-dubai/InclusionsSectionTD";
import { ContactSection } from "@/components/common/ContactSection";
import { ConnectionSectionTD } from "@/components/tailandia-dubai/ConnectionSectionTD";
import { PhotoGalleryTD } from "@/components/tailandia-dubai/PhotoGalleryTD";
import { HotelsPhotoGalleryTD } from "@/components/tailandia-dubai/HotelsPhotoGalleryTD";
import { FooterSectionTD } from "@/components/tailandia-dubai/FooterSectionTD";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const TailandiaDubai = () => {
  return (
    <main className="theme-tailandia min-h-screen bg-background overflow-x-hidden">
      <SEO {...seoData.tailandiaDubai} />
      <HeroSectionTD />
      <ConnectionSectionTD />
      <ProblemSectionTD />
      <JourneySectionTD />
      <DetailedItineraryTD />
      <ExperiencesSectionTD />
      <PhotoGalleryTD />
      <HotelsPhotoGalleryTD />
      <TestimonialsSection testimonials={testimonialsData.tailandiaDubai} />
      <FAQSectionTD />
      <UrgencySectionTD />
      <InclusionsSectionTD />
      <ContactSection destino="Tailândia & Dubai" />
      <FooterSectionTD />
    </main>
  );
};

export default TailandiaDubai;
