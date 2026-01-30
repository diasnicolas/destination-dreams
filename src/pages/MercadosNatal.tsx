import { HeroSectionMN } from "@/components/mercados-natal/HeroSectionMN";
import { ConnectionSectionMN } from "@/components/mercados-natal/ConnectionSectionMN";
import { ProblemSectionMN } from "@/components/mercados-natal/ProblemSectionMN";
import { JourneySectionMN } from "@/components/mercados-natal/JourneySectionMN";
import { DetailedItineraryMN } from "@/components/mercados-natal/DetailedItineraryMN";
import { ExperiencesSectionMN } from "@/components/mercados-natal/ExperiencesSectionMN";
import { PhotoGalleryMN } from "@/components/mercados-natal/PhotoGalleryMN";
import { HotelsPhotoGalleryMN } from "@/components/mercados-natal/HotelsPhotoGalleryMN";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { FAQSectionMN } from "@/components/mercados-natal/FAQSectionMN";
import { UrgencySectionMN } from "@/components/mercados-natal/UrgencySectionMN";
import { InclusionsSectionMN } from "@/components/mercados-natal/InclusionsSectionMN";
import { ContactSection } from "@/components/common/ContactSection";
import { FooterSectionMN } from "@/components/mercados-natal/FooterSectionMN";
import { SEO } from "@/components/SEO";
import { seoData } from "@/lib/seoData";
import { testimonialsData } from "@/lib/testimonialsData";

const MercadosNatal = () => {
  return (
    <main className="theme-natal min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO {...seoData.mercadosNatal} />
      <HeroSectionMN />
      <ConnectionSectionMN />
      <ProblemSectionMN />
      <JourneySectionMN />
      <DetailedItineraryMN />
      <ExperiencesSectionMN />
      <PhotoGalleryMN />
      <HotelsPhotoGalleryMN />
      <TestimonialsSection testimonials={testimonialsData.mercadosNatal} />
      <FAQSectionMN />
      <UrgencySectionMN />
      <InclusionsSectionMN />
      <ContactSection destino="Mercados de Natal - Dezembro 2026" />
      <FooterSectionMN />
    </main>
  );
};

export default MercadosNatal;
