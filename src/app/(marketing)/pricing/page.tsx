import { constructMetadata } from "@/lib/seo-config";
import { generateSoftwareApplicationSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PricingCards } from "@/components/sections/PricingCards";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, ShieldCheck, Check } from "lucide-react";

export const metadata = constructMetadata({
  title: "Pricing & Plans - Transparent Contractor Care SaaS",
  description:
    "Explore transparent pricing plans for Cantracare: Starter, Growth, and Enterprise tiers with zero hidden fees. Calculate your team's ROI and get started with a 14-day free trial.",
  path: "/pricing",
  keywords: [
    "contractor care software pricing",
    "warranty management SaaS cost",
    "builder dispatch software subscription",
    "field service ROI calculator",
  ],
});

export default function PricingPage() {
  const breadcrumbItems = [{ name: "Pricing", url: "/pricing" }];
  const softwareSchema = generateSoftwareApplicationSchema();

  return (
    <div className="pt-28 pb-20">
      <JsonLd data={softwareSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Pricing Cards Component */}
        <PricingCards />

        {/* ROI Calculator */}
        <RoiCalculator />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* FAQ with Schema Sync */}
        <FaqAccordion injectSchema={true} />

        {/* Bottom CTA */}
        <CtaBanner />
      </div>
    </div>
  );
}
