import { constructMetadata } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "About Cantra Care | Clearer care, connected teams",
  description: "Discover Cantra Care's purpose, approach, 25-member team and measurable impact.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbItems = [{ name: "About", url: "/about" }];

  return (
    <div className="bg-white text-[#0A4033] min-h-screen font-sans selection:bg-[#0A4033] selection:text-white">
      
      {/* HEADER SECTION */}
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
                  About Cantra Care
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#0B4F43] tracking-tight mb-6 leading-[1.12]">
                Technology that keeps <br className="hidden md:block" />
                <span className="italic font-normal text-[#13695A]">care human.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#465C59] leading-relaxed max-w-3xl mx-auto mb-10">
                Cantra Care brings daily care, medication records, staffing and reporting into one clear platform—giving care teams more time and attention for the people who matter most.
              </p>

              <div className="flex justify-center">
                <a
                  href="#our-story"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-[#0B4F43] border border-[#0B4F43]/20 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  Discover our story ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE / OUR STORY */}
      <section id="our-story" className="py-24 lg:py-32 bg-[#EFF3F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                Who we are
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-[1.15] text-[#0A4033]">
                We make complex <br className="hidden sm:block" />
                care work feel <span className="italic font-normal text-[#13695A]">clearer.</span>
              </h2>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/40 pb-2">
              01 / Our story
            </div>
          </div>

          <div className="flex flex-col lg:flex-row rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-[#0A4033]/5">
            {/* Left Dark Green Panel */}
            <div className="w-full lg:w-2/5 bg-[#0A4033] p-10 sm:p-14 lg:p-16 relative flex flex-col justify-start min-h-[400px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-16 block relative z-10">
                Our belief
              </span>
              <p className="text-2xl sm:text-3xl lg:text-[32px] font-serif text-white leading-[1.3] relative z-10 pr-4">
                Technology should support the judgement of care professionals—not get in its way.
              </p>
              {/* Giant quote mark watermark */}
              <div className="absolute bottom-4 right-8 text-[200px] font-serif text-white/[0.04] leading-[0.5] select-none">
                “
              </div>
            </div>

            {/* Right White Panel */}
            <div className="w-full lg:w-3/5 bg-white p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
              <p className="text-2xl sm:text-3xl font-serif text-[#0A4033] leading-[1.3] mb-8 lg:mb-10">
                Cantra Care exists to give care teams a calmer, more connected way to manage the work around care.
              </p>
              <p className="text-sm sm:text-base text-[#0A4033]/70 leading-relaxed mb-12">
                We bring essential information into one practical view—from person-centred plans and e-MAR to staffing and reporting. The result is greater visibility for teams, without losing the human focus behind every record and decision.
              </p>

              <div className="border-t border-[#0A4033]/10 pt-8 mt-auto flex gap-3 flex-wrap">
                {["Human-centred", "Practical", "Dependable"].map((badge) => (
                  <span key={badge} className="px-5 py-2.5 bg-transparent text-[#0A4033]/70 rounded-full text-[11px] font-bold border border-[#0A4033]/15 tracking-wide">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24 lg:py-32 bg-[#0A4033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 border-t border-white/20 pt-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6">
                <span className="w-8 h-[1px] bg-white/30" />
                Why choose us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight">
                Designed around care. <br />
                <span className="italic font-normal text-[#B5D5C5]">Defined by clarity.</span>
              </h2>
            </div>
            <p className="max-w-sm text-white/70 leading-relaxed text-sm lg:text-base">
              Cantra Care is shaped around how teams really work—with changing priorities, shared responsibilities and no room for unnecessary complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Person-centred by design", desc: "Every workflow begins with the person receiving care, helping teams keep individual needs and preferences visible." },
              { title: "Clarity for frontline teams", desc: "Practical screens, focused information and role-based views help everyone understand what matters next." },
              { title: "Confidence through connection", desc: "Care, medication, staffing and reporting sit together, reducing the gaps created by disconnected systems." },
            ].map((principle, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 flex flex-col">
                <span className="text-sm font-bold font-serif text-white/40 mb-12 block">0{i + 1}</span>
                <div className="mt-auto">
                  <h3 className="text-xl font-bold font-serif text-white mb-4">{principle.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE BUILD */}
      <section id="how-we-build" className="py-24 lg:py-32 bg-[#F6F4EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                How we build
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-[#0A4033] mb-6">
                Care insight, shaped into <br />
                <span className="italic font-normal text-[#13695A]">better technology.</span>
              </h2>
              <p className="text-lg text-[#0A4033]/70 leading-relaxed max-w-lg">
                Our product thinking starts with people, not features. We use a continuous learning approach to turn frontline understanding into thoughtful, useful improvements.
              </p>
            </div>
            
            <div className="lg:w-1/2 flex items-center">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0A4033]/5 shadow-sm w-full">
                <h4 className="text-sm font-bold text-[#0A4033] mb-2 uppercase tracking-wider">Always evolving</h4>
                <p className="text-[#0A4033]/70 text-sm leading-relaxed">
                  Built with curiosity, care and a clear reason for every decision.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Listen closely", desc: "We begin with the pressures, priorities and practical needs experienced by care teams." },
              { title: "Shape thoughtfully", desc: "We translate those insights into focused workflows with a clear purpose behind every detail." },
              { title: "Validate carefully", desc: "Ideas are reviewed against real working patterns before they become part of the platform." },
              { title: "Improve continuously", desc: "Learning continues after release, helping the product evolve with the people who use it." },
            ].map((stage, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#0A4033]/5 shadow-sm relative overflow-hidden group">
                <span className="absolute -top-4 -right-4 text-8xl font-serif text-[#E7EFEA] font-bold opacity-50 select-none group-hover:scale-110 transition-transform">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-serif text-[#0A4033] mb-4 mt-8">{stage.title}</h3>
                  <p className="text-sm text-[#0A4033]/70 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CLARITY IN NUMBERS (Moved here and redesigned) */}
      <section id="results" className="py-24 lg:py-32 bg-[#0A4033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-20 lg:mb-28">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B5D5C5]/80 mb-8">
                <span className="w-8 h-[1px] bg-[#B5D5C5]/40" />
                Clarity in numbers
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.1]">
                Designed to make a <br className="hidden sm:block" />
                <span className="italic font-normal text-[#B5D5C5]">measurable difference.</span>
              </h2>
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 lg:pb-4">
              Cantra Care-reported outcomes.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16">
            {[
              { stat: "94%", label: "reduction in documentation time" },
              { stat: "15+", label: "hours saved per carer weekly" },
              { stat: "50%", label: "less administrative work" },
              { stat: "12k+", label: "residents served" },
            ].map((metric, i) => (
              <div key={i} className="flex flex-col lg:border-r border-[#B5D5C5]/20 lg:px-12 first:pl-0 last:border-r-0">
                <div className="text-6xl lg:text-7xl font-bold font-serif text-[#B5D5C5] mb-6 tracking-tight leading-none">{metric.stat}</div>
                <div className="text-[11px] sm:text-xs text-white/80 max-w-[140px] leading-relaxed">{metric.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2 relative lg:pr-8">
               {/* Image Container */}
               <div className="relative z-10">
                 <div className="aspect-[4/5] sm:aspect-square w-full overflow-hidden shadow-lg">
                   <img 
                     src="/images/care-community.webp" 
                     alt="Care community" 
                     className="w-full h-full object-cover"
                   />
                 </div>
                 {/* Floating Badge */}
                 <div className="absolute bottom-6 right-0 sm:-right-4 lg:-right-8 z-20 bg-[#D4E9C1] text-[#0A4033] px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-md border border-[#0A4033]/5">
                   Care stays personal
                 </div>
               </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                Our purpose
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-[1.1] text-[#0A4033] mb-6">
                More clarity for <br className="hidden sm:block" />
                teams. <span className="italic font-normal text-[#13695A]">More <br className="hidden sm:block" />
                space for care.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#0A4033]/70 leading-relaxed mb-10 max-w-lg">
                Good care depends on people, judgement and trust. Our purpose is to remove avoidable friction around that work, helping teams spend less time chasing information and more time delivering attentive, person-centred care.
              </p>

              <ul className="flex flex-col w-full border-t border-[#0A4033]/10 max-w-lg">
                {[
                  "Keep important information visible",
                  "Connect responsibilities across the team",
                  "Support thoughtful, informed decisions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 py-5 border-b border-[#0A4033]/10 group">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#0A4033]/30">0{i + 1}</span>
                    <span className="text-[#0A4033]/90 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
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
