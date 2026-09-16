import { JsonLd } from "@/components/seo/JsonLd";
import { generateSoftwareApplicationSchema, generateFaqSchema, defaultCantraFaqs } from "@/lib/schema";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { HeroZone } from "@/components/sections/HeroZone";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { EmarSection } from "@/components/sections/EmarSection";
import { CareSettingsSection } from "@/components/sections/CareSettingsSection";
import { WhyCantraSection } from "@/components/sections/WhyCantraSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { RolesSection } from "@/components/sections/RolesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function HomePage() {
  const softwareSchema = generateSoftwareApplicationSchema();
  const faqSchema = generateFaqSchema(defaultCantraFaqs);

  return (
    <div className="bg-[#EFF3F3] text-[#465C59] min-h-screen selection:bg-[#0B4F43] selection:text-[#EFF3F3]">
      {/* Structured SEO Data (SoftwareApplication & FAQPage JSON-LD) */}
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

      {/* Sticky Header Navigation Bar */}
      <HeroHeader />

      {/* 1. Hero Zone with Single H1, Highlights & Outcomes */}
      <HeroZone />

      {/* 2. Platform Essentials Section */}
      <PlatformSection />

      {/* 3. A Calmer Working Day Feature Section */}
      <FeatureSection />

      {/* 4. e-MAR Medication Records Section */}
      <EmarSection />

      {/* 5. Care Settings Section */}
      <CareSettingsSection />

      {/* 6. Why Cantra / Steps Dark Section */}
      <WhyCantraSection />

      {/* 7. Technology That Supports Section */}
      <SupportSection />

      {/* 8. Role-Based Access Section */}
      <RolesSection />

      {/* 9. FAQ Accordion Section */}
      <FaqSection />

      {/* 10. CTA Banner Section */}
      {/* <CtaSection /> */}



      {/* 12. Site Footer */}
      <SiteFooter />
    </div>
  );
}
