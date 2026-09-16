import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { FeaturesHero } from "@/components/sections/features/FeaturesHero";
import { FeaturesSolutionsGrid } from "@/components/sections/features/FeaturesSolutionsGrid";
import { FeaturesDayFlowSection } from "@/components/sections/features/FeaturesDayFlowSection";
import { FeaturesIncidentSection } from "@/components/sections/features/FeaturesIncidentSection";
import { FeaturesStructureSection } from "@/components/sections/features/FeaturesStructureSection";
import { FeaturesEvidenceSection } from "@/components/sections/features/FeaturesEvidenceSection";
import { FeaturesCtaSection } from "@/components/sections/features/FeaturesCtaSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata = constructMetadata({
  title: "Features | Cantra Care Connected Platform",
  description:
    "Explore Cantra's connected care platform. Care planning, e-MAR, staff scheduling, compliance and daily records in one place.",
  path: "/features",
});

export default function FeaturesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Features", url: "/features" },
  ]);

  return (
    <div className="bg-surface text-primary min-h-screen selection:bg-primary selection:text-surface">
      {/* Structured SEO Data (BreadcrumbList JSON-LD) */}
      <JsonLd data={breadcrumbSchema} />

      {/* Sticky Header Navigation */}
      <HeroHeader />

      {/* 1. Hero Zone */}
      <FeaturesHero />

      {/* 2. Solutions Asymmetrical Bento Grid */}
      <FeaturesSolutionsGrid />

      {/* 3. A Working Day in Flow */}
      <FeaturesDayFlowSection />

      {/* 4. Incident to Resolution Section */}
      <FeaturesIncidentSection />

      {/* 5. Home-Wide Structure Section */}
      <FeaturesStructureSection />

      {/* 6. Turn Care into Clear Evidence Timeline */}
      <FeaturesEvidenceSection />

      {/* 7. Specific Care Day CTA */}
      <FeaturesCtaSection />

      {/* 8. Site Footer */}
      <SiteFooter />
    </div>
  );
}
