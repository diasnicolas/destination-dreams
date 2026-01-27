import { HeroSectionAUNZ } from "@/components/australia-nz/HeroSectionAUNZ";
import { ProblemSectionAUNZ } from "@/components/australia-nz/ProblemSectionAUNZ";
import { JourneySectionAUNZ } from "@/components/australia-nz/JourneySectionAUNZ";
import { ExperiencesSectionAUNZ } from "@/components/australia-nz/ExperiencesSectionAUNZ";
import { BenefitsSectionAUNZ } from "@/components/australia-nz/BenefitsSectionAUNZ";
import { ConnectionSectionAUNZ } from "@/components/australia-nz/ConnectionSectionAUNZ";
import { FAQSectionAUNZ } from "@/components/australia-nz/FAQSectionAUNZ";
import { InclusionsSectionAUNZ } from "@/components/australia-nz/InclusionsSectionAUNZ";
import { UrgencySectionAUNZ } from "@/components/australia-nz/UrgencySectionAUNZ";
import { ContactSectionAUNZ } from "@/components/australia-nz/ContactSectionAUNZ";
import { FooterSectionAUNZ } from "@/components/australia-nz/FooterSectionAUNZ";

const AustraliaNZ = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSectionAUNZ />
      <ProblemSectionAUNZ />
      <ConnectionSectionAUNZ />
      <JourneySectionAUNZ />
      <ExperiencesSectionAUNZ />
      <BenefitsSectionAUNZ />
      <FAQSectionAUNZ />
      <InclusionsSectionAUNZ />
      <UrgencySectionAUNZ />
      <ContactSectionAUNZ />
      <FooterSectionAUNZ />
    </main>
  );
};

export default AustraliaNZ;
