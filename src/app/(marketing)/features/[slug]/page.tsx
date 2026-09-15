import { notFound } from "next/navigation";
import { featuresData } from "@/data/features";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo-config";
import React from "react";

export function generateStaticParams() {
  return Object.keys(featuresData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = featuresData[resolvedParams.slug];
  if (!data) return notFound();

  return constructMetadata({
    title: `${data.hero.title} | Cantra Care`,
    description: data.hero.description,
    path: `/features/${resolvedParams.slug}`,
  });
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = featuresData[resolvedParams.slug];
  
  if (!data) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Features", url: "/features" },
    { name: data.slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()), url: `/features/${data.slug}` }
  ];

  return (
    <div className="bg-white text-[#0A4033] min-h-screen font-sans selection:bg-[#0A4033] selection:text-white">
      
      {/* Contact-Style Header Wrapper */}
      <div className="bg-[#EFF3F3] text-[#465C59]">
        <HeroHeader />

        <div className="pt-8 md:pt-16 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <Breadcrumbs items={breadcrumbItems} theme="light" />
              </div>

              <div className="flex justify-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 bg-[#0A4033]/5 px-3 py-1 rounded-full border border-[#0A4033]/10">
                  {data.hero.eyebrow}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#0B4F43] tracking-tight mb-6 leading-[1.12]">
                {data.hero.title.split(' ').slice(0, -2).join(' ')} <br className="hidden md:block" />
                <span className="italic font-normal text-[#13695A]">{data.hero.title.split(' ').slice(-2).join(' ')}</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#465C59] leading-relaxed max-w-3xl mx-auto mb-10">
                {data.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0B4F43] hover:bg-[#13695A] text-white text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  Book a tailored demo <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="#overview"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-[#0B4F43] border border-[#0B4F43]/20 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Explore feature ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Visual Placeholders */}
      <section className="py-12 bg-[#EFF3F3] border-b border-[#0A4033]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#E7EFEA] rounded-3xl aspect-[21/9] sm:aspect-[21/9] w-full flex items-center justify-center border border-[#0A4033]/10 shadow-xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0A4033]/5 to-transparent"></div>
             <p className="text-[#0A4033]/40 font-mono text-sm">Main Feature Interface Screenshot</p>
           </div>
        </div>
      </section>

      {/* SECTION: A CLEARER WAY TO WORK */}
      <section id="overview" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 border-t border-[#0A4033]/10 pt-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                {data.clearerWay.eyebrow}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight">
                {data.clearerWay.title.split(' ').slice(0, 3).join(' ')} <br />
                <span className="italic font-normal">{data.clearerWay.title.split(' ').slice(3).join(' ')}</span>
              </h2>
            </div>
            <p className="max-w-sm text-[#0A4033]/70 leading-relaxed text-sm lg:text-base">
              {data.clearerWay.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.clearerWay.benefits.map((benefit, i) => (
              <div key={i} className="bg-[#F6F4EB] rounded-3xl p-8 lg:p-10 border border-[#0A4033]/5">
                <h3 className="text-2xl font-bold font-serif text-[#0A4033] mb-4">{benefit.title}</h3>
                <p className="text-[#0A4033]/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS */}
      <section className="py-24 lg:py-32 bg-[#0A4033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 border-t border-white/20 pt-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6">
                <span className="w-8 h-[1px] bg-white/30" />
                {data.howItWorks.eyebrow}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight">
                {data.howItWorks.title}
              </h2>
            </div>
            <p className="max-w-sm text-white/70 leading-relaxed text-sm lg:text-base">
              {data.howItWorks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/20">
            {data.howItWorks.steps.map((step, i) => (
              <div key={i} className="p-8 lg:p-10 border-b border-r border-white/20">
                <div className="flex items-center gap-2 mb-10">
                  <span className="text-xs font-mono text-white/40">0{i + 1}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B5D5C5]" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHY CHOOSE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
             <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                {data.whyChoose.eyebrow}
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#0A4033] mb-6">
               {data.whyChoose.title}
             </h2>
             <p className="text-[#0A4033]/70 text-lg">
               {data.whyChoose.description}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.whyChoose.reasons.map((reason, i) => (
              <div key={i} className="bg-[#E7EFEA] rounded-3xl p-8 relative overflow-hidden group">
                <span className="absolute -top-4 -right-4 text-8xl font-serif text-white/30 font-bold opacity-50 select-none group-hover:scale-110 transition-transform">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-serif text-[#0A4033] mb-4">{reason.title}</h3>
                  <p className="text-[#0A4033]/70 text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Heading & Graphic */}
            <div className="lg:pr-8">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#0A4033] mb-6 leading-tight">
                {data.faq.title.split(' ').slice(0, 3).join(' ')} <br />
                <span className="italic font-normal">{data.faq.title.split(' ').slice(3).join(' ')}</span>
              </h2>
              <p className="text-[#0A4033]/70 text-lg mb-16 max-w-sm">
                {data.faq.description}
              </p>

              {/* Big Question Mark Graphic */}
              <div className="relative w-28 h-28 ml-2">
                <div className="absolute inset-0 bg-[#E7EFEA] rounded-full translate-x-4 translate-y-4" />
                <div className="absolute inset-0 bg-[#0A4033] rounded-full flex items-center justify-center text-white text-6xl font-serif">
                  ?
                </div>
              </div>
            </div>

            {/* Right Column: Accordion */}
            <div className="flex flex-col pt-4">
              <div className="border-t border-[#0A4033]/10">
                {data.faq.questions.map((q, i) => (
                  <details key={i} className="group border-b border-[#0A4033]/10 py-6 transition-all cursor-pointer">
                    <summary className="flex justify-between items-center font-bold font-serif text-lg lg:text-xl text-[#0A4033] list-none [&::-webkit-details-marker]:hidden">
                      {q.question}
                      <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-[#E7EFEA] text-[#0A4033] flex items-center justify-center group-open:bg-[#0A4033] group-open:text-white transition-colors">
                        <svg className="w-4 h-4 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        <svg className="w-4 h-4 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                      </span>
                    </summary>
                    <p className="text-[#0A4033]/70 mt-4 leading-relaxed text-sm pr-12">
                      {q.answer}
                    </p>
                  </details>
                ))}
              </div>

              {/* Still have a question block */}
              <div className="mt-8 bg-[#F6F4EB] rounded-xl p-5 px-6 flex justify-between items-center border border-[#0A4033]/5">
                <span className="text-sm font-bold text-[#0A4033]/70">Still have a question?</span>
                <Link href="/contact" className="text-xs font-bold text-[#0A4033] flex items-center gap-1 hover:opacity-70 transition-opacity uppercase tracking-wider">
                  Talk to our team <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER AREA */}
      <div className="bg-[#0A4033]">
        <SiteFooter />
      </div>
      
    </div>
  );
}
