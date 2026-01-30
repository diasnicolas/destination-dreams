import { HeroSectionJC } from "@/components/japao-china/HeroSectionJC";
import { ProblemSectionJC } from "@/components/japao-china/ProblemSectionJC";
import { JourneySectionJC } from "@/components/japao-china/JourneySectionJC";
import { DetailedItineraryJC } from "@/components/japao-china/DetailedItineraryJC";
import { ExperiencesSectionJC } from "@/components/japao-china/ExperiencesSectionJC";
import { FAQSectionJC } from "@/components/japao-china/FAQSectionJC";
import { UrgencySectionJC } from "@/components/japao-china/UrgencySectionJC";
import { InclusionsSectionJC } from "@/components/japao-china/InclusionsSectionJC";
import { ContactSection } from "@/components/common/ContactSection";
import { ConnectionSectionJC } from "@/components/japao-china/ConnectionSectionJC";
import { PhotoGalleryJC } from "@/components/japao-china/PhotoGalleryJC";
import { HotelsPhotoGalleryJC } from "@/components/japao-china/HotelsPhotoGalleryJC";
import { FooterSectionJC } from "@/components/japao-china/FooterSectionJC";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const JapaoChina = () => {
  return (
    <main className="theme-japao min-h-screen bg-background overflow-x-hidden">
      <SEO {...seoData.japaoChina} />
      <HeroSectionJC />
      <ConnectionSectionJC />
      <ProblemSectionJC />
      <JourneySectionJC />
      <DetailedItineraryJC />
      <ExperiencesSectionJC />
      <PhotoGalleryJC />
      <HotelsPhotoGalleryJC />
      <TestimonialsSection testimonials={testimonialsData.japaoChina} />
      <FAQSectionJC />
      <UrgencySectionJC />
      <InclusionsSectionJC />
      <ContactSection destino="Japão & China" />
      <FooterSectionJC />
    </main>
  );
};

export default JapaoChina;
