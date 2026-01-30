import { HeroSectionCH } from "@/components/china/HeroSectionCH";
import { ProblemSectionCH } from "@/components/china/ProblemSectionCH";
import { JourneySectionCH } from "@/components/china/JourneySectionCH";
import { DetailedItineraryCH } from "@/components/china/DetailedItineraryCH";
import { ExperiencesSectionCH } from "@/components/china/ExperiencesSectionCH";
import { FAQSectionCH } from "@/components/china/FAQSectionCH";
import { UrgencySectionCH } from "@/components/china/UrgencySectionCH";
import { InclusionsSectionCH } from "@/components/china/InclusionsSectionCH";
import { ContactSection } from "@/components/common/ContactSection";
import { ConnectionSectionCH } from "@/components/china/ConnectionSectionCH";
import { PhotoGalleryCH } from "@/components/china/PhotoGalleryCH";
import { HotelsPhotoGalleryCH } from "@/components/china/HotelsPhotoGalleryCH";
import { FooterSectionCH } from "@/components/china/FooterSectionCH";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const ChinaMaravilhas = () => {
  return (
    <main className="theme-china min-h-screen bg-background overflow-x-hidden">
      <SEO {...seoData.chinaMaravilhas} />
      <HeroSectionCH />
      <ConnectionSectionCH />
      <ProblemSectionCH />
      <JourneySectionCH />
      <DetailedItineraryCH />
      <ExperiencesSectionCH />
      <PhotoGalleryCH />
      <HotelsPhotoGalleryCH />
      <TestimonialsSection testimonials={testimonialsData.chinaMaravilhas} />
      <FAQSectionCH />
      <UrgencySectionCH />
      <InclusionsSectionCH />
      <ContactSection destino="China Maravilhas Culturais 2027" />
      <FooterSectionCH />
    </main>
  );
};

export default ChinaMaravilhas;
