import { HeroSectionST } from "@/components/suica-trem/HeroSectionST";
import { ProblemSectionST } from "@/components/suica-trem/ProblemSectionST";
import { JourneySectionST } from "@/components/suica-trem/JourneySectionST";
import { DetailedItineraryST } from "@/components/suica-trem/DetailedItineraryST";
import { ExperiencesSectionST } from "@/components/suica-trem/ExperiencesSectionST";
import { FAQSectionST } from "@/components/suica-trem/FAQSectionST";
import { UrgencySectionST } from "@/components/suica-trem/UrgencySectionST";
import { InclusionsSectionST } from "@/components/suica-trem/InclusionsSectionST";
import { ContactSection } from "@/components/common/ContactSection";
import { ConnectionSectionST } from "@/components/suica-trem/ConnectionSectionST";
import { PhotoGalleryST } from "@/components/suica-trem/PhotoGalleryST";
import { HotelsPhotoGalleryST } from "@/components/suica-trem/HotelsPhotoGalleryST";
import { FooterSectionST } from "@/components/suica-trem/FooterSectionST";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const SuicaTrem = () => {
  return (
    <main className="theme-suica min-h-screen bg-background overflow-x-hidden">
      <SEO {...seoData.suicaTrem} />
      <HeroSectionST />
      <ConnectionSectionST />
      <ProblemSectionST />
      <JourneySectionST />
      <DetailedItineraryST />
      <ExperiencesSectionST />
      <PhotoGalleryST />
      <HotelsPhotoGalleryST />
      <TestimonialsSection testimonials={testimonialsData.suicaTrem} />
      <FAQSectionST />
      <UrgencySectionST />
      <InclusionsSectionST />
      <ContactSection destino="Suíça de Trem" />
      <FooterSectionST />
    </main>
  );
};

export default SuicaTrem;
