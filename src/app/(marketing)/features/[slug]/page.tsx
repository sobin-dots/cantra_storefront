import React from "react";
import { notFound } from "next/navigation";
import { featuresData } from "@/data/features";
import { constructMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { FeatureDetailHero } from "@/components/sections/features/detail/FeatureDetailHero";
import { FeatureClearerWaySection } from "@/components/sections/features/detail/FeatureClearerWaySection";
import { FeatureHowItWorksSection } from "@/components/sections/features/detail/FeatureHowItWorksSection";
import { FeatureWhyChooseSection } from "@/components/sections/features/detail/FeatureWhyChooseSection";
import { FeatureFaqSection } from "@/components/sections/features/detail/FeatureFaqSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export function generateStaticParams() {
  return Object.keys(featuresData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const data = featuresData[resolvedParams.slug];
  if (!data) return notFound();

  return constructMetadata({
    title: `${data.hero.title} | Cantra Care Features`,
    description: data.hero.description,
    path: `/features/${resolvedParams.slug}`,
  });
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const data = featuresData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Features", url: "/features" },
    {
      name: data.slug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      url: `/features/${data.slug}`,
    },
  ]);

  return (
    <div className="bg-surface text-primary min-h-screen selection:bg-primary selection:text-surface">
      {/* Structured SEO Data (BreadcrumbList JSON-LD) */}
      <JsonLd data={breadcrumbSchema} />

      {/* Sticky Header Navigation */}
      <HeroHeader />

      {/* 1. Feature Hero */}
      <FeatureDetailHero data={data} />

      {/* 2. Clearer Way to Work Section */}
      <FeatureClearerWaySection data={data} />

      {/* 3. How It Works Process Section */}
      <FeatureHowItWorksSection data={data} />

      {/* 4. Why Choose Section */}
      <FeatureWhyChooseSection data={data} />

      {/* 5. FAQ Accordion Section */}
      <FeatureFaqSection data={data} />

      {/* 6. Site Footer */}
      <SiteFooter />
    </div>
  );
}
