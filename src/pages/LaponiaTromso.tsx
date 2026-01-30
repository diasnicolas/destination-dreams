import { HeroSectionLT } from "@/components/laponia-tromso/HeroSectionLT";
import { ConnectionSectionLT } from "@/components/laponia-tromso/ConnectionSectionLT";
import { ProblemSectionLT } from "@/components/laponia-tromso/ProblemSectionLT";
import { JourneySectionLT } from "@/components/laponia-tromso/JourneySectionLT";
import { DetailedItineraryLT } from "@/components/laponia-tromso/DetailedItineraryLT";
import { ExperiencesSectionLT } from "@/components/laponia-tromso/ExperiencesSectionLT";
import { PhotoGalleryLT } from "@/components/laponia-tromso/PhotoGalleryLT";
import { HotelsPhotoGalleryLT } from "@/components/laponia-tromso/HotelsPhotoGalleryLT";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { FAQSectionLT } from "@/components/laponia-tromso/FAQSectionLT";
import { UrgencySectionLT } from "@/components/laponia-tromso/UrgencySectionLT";
import { InclusionsSectionLT } from "@/components/laponia-tromso/InclusionsSectionLT";
import { ContactSection } from "@/components/common/ContactSection";
import { FooterSectionLT } from "@/components/laponia-tromso/FooterSectionLT";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const LaponiaTromso = () => {
  return (
    <main className="theme-laponia min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO {...seoData.laponiaTromso} />
      <HeroSectionLT />
      <ConnectionSectionLT />
      <ProblemSectionLT />
      <JourneySectionLT />
      <DetailedItineraryLT />
      <ExperiencesSectionLT />
      <PhotoGalleryLT />
      <HotelsPhotoGalleryLT />
      <TestimonialsSection testimonials={testimonialsData.laponiaTromso} />
      <FAQSectionLT />
      <UrgencySectionLT />
      <InclusionsSectionLT />
      <ContactSection destino="Lapônia, Finlândia & Tromsø - Março 2027" />
      <FooterSectionLT />
    </main>
  );
};

export default LaponiaTromso;
