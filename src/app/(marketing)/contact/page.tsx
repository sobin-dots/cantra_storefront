import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema } from "@/lib/schema";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata = constructMetadata({
  title: "Contact Us & Request a Demo | Cantra Care",
  description:
    "Get in touch with Cantra Care. Schedule a live demonstration of our care management, e-MAR, and rota scheduling platform.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbItems = [{ name: "Contact & Demo", url: "/contact" }];
  const orgSchema = generateOrganizationSchema();

  return (
    <div className="bg-[#EFF3F3] text-[#465C59] min-h-screen selection:bg-[#0B4F43] selection:text-[#EFF3F3]">
      <JsonLd data={orgSchema} />

      <HeroHeader />

      <div className="pt-8 md:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Breadcrumbs items={breadcrumbItems} theme="light" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-serif text-primary tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              We're here to help you transform your care management. Reach out to our team with any questions, support requests, or to schedule a personalized demonstration.
            </p>
          </div>
        </div>
      </div>

      <ContactSection />

      <SiteFooter />
    </div>
  );
}
