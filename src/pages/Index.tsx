import { HeroSection } from "@/components/landing/HeroSection";
import { ConnectionSection } from "@/components/landing/ConnectionSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { DetailedItinerary } from "@/components/landing/DetailedItinerary";
import { ExperiencesSection } from "@/components/landing/ExperiencesSection";
import { PhotoGallery } from "@/components/landing/PhotoGallery";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { UrgencySection } from "@/components/landing/UrgencySection";
import { InclusionsSection } from "@/components/landing/InclusionsSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { FooterSection } from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ConnectionSection />
      <JourneySection />
      <DetailedItinerary />
      <ExperiencesSection />
      <PhotoGallery />
      <TestimonialsSection />
      <FAQSection />
      <UrgencySection />
      <InclusionsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
