import { HeroSectionRU } from "@/components/reino-unido/HeroSectionRU";
import { ProblemSectionRU } from "@/components/reino-unido/ProblemSectionRU";
import { JourneySectionRU } from "@/components/reino-unido/JourneySectionRU";
import { DetailedItineraryRU } from "@/components/reino-unido/DetailedItineraryRU";
import { ExperiencesSectionRU } from "@/components/reino-unido/ExperiencesSectionRU";
import { FAQSectionRU } from "@/components/reino-unido/FAQSectionRU";
import { UrgencySectionRU } from "@/components/reino-unido/UrgencySectionRU";
import { InclusionsSectionRU } from "@/components/reino-unido/InclusionsSectionRU";
import { ContactSection } from "@/components/common/ContactSection";
import { ConnectionSectionRU } from "@/components/reino-unido/ConnectionSectionRU";
import { GuidesSectionRU } from "@/components/reino-unido/GuidesSectionRU";
import { PhotoGalleryRU } from "@/components/reino-unido/PhotoGalleryRU";
import { HotelsPhotoGalleryRU } from "@/components/reino-unido/HotelsPhotoGalleryRU";
import { FooterSectionRU } from "@/components/reino-unido/FooterSectionRU";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const ReinoUnido = () => {
  return (
    <main className="theme-uk min-h-screen bg-background overflow-x-hidden">
      <SEO {...seoData.reinoUnido} />
      <HeroSectionRU />
      <ConnectionSectionRU />
      <GuidesSectionRU />
      <ProblemSectionRU />
      <JourneySectionRU />
      <DetailedItineraryRU />
      <ExperiencesSectionRU />
      <PhotoGalleryRU />
      <HotelsPhotoGalleryRU />
      <TestimonialsSection testimonials={testimonialsData.reinoUnido} />
      <FAQSectionRU />
      <UrgencySectionRU />
      <InclusionsSectionRU />
      <ContactSection destino="Reino Unido" />
      <FooterSectionRU />
    </main>
  );
};

export default ReinoUnido;
