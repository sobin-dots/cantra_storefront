import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStorySection } from "@/components/sections/about/AboutStorySection";
import { AboutWhyUsSection } from "@/components/sections/about/AboutWhyUsSection";
import { AboutHowWeBuildSection } from "@/components/sections/about/AboutHowWeBuildSection";
import { AboutMetricsSection } from "@/components/sections/about/AboutMetricsSection";
import { AboutPurposeSection } from "@/components/sections/about/AboutPurposeSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata = constructMetadata({
  title: "About Cantra Care | Clearer care, connected teams",
  description:
    "Discover Cantra Care's purpose, approach, team and measurable impact for frontline care homes.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <div className="bg-surface text-primary min-h-screen selection:bg-primary selection:text-surface">
      {/* Structured SEO Data (BreadcrumbList JSON-LD) */}
      <JsonLd data={breadcrumbSchema} />

      {/* Sticky Header Navigation Bar */}
      <HeroHeader />

      {/* 1. Hero Zone with Single H1, Breadcrumbs & Subtitle */}
      <AboutHero />

      {/* 2. Who We Are / Our Story Dual-Panel Section */}
      <AboutStorySection />

      {/* 3. Why Choose Us Principles Dark Section */}
      <AboutWhyUsSection />

      {/* 4. How We Build Process Section */}
      <AboutHowWeBuildSection />

      {/* 5. Clarity in Numbers Outcomes Section */}
      <AboutMetricsSection />

      {/* 6. Our Purpose Showcase Section */}
      <AboutPurposeSection />

      {/* 7. Site Footer */}
      <SiteFooter />
    </div>
  );
}
