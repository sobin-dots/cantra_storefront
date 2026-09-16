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
      <section id="our-story" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            
            <div className="max-w-lg lg:w-1/2">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                Who we are
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-[#0A4033] mb-12">
                We make complex care work feel <span className="italic font-normal text-[#13695A]">clearer.</span>
              </h2>

              <div className="bg-[#F6F4EB] p-8 rounded-3xl border border-[#0A4033]/5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A4033]/60 mb-4 block">Our belief</span>
                <p className="text-lg font-serif text-[#0A4033] leading-relaxed">
                  "Technology should support the judgement of care professionals—not get in its way."
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 pt-4 lg:pt-12">
              <p className="text-xl text-[#0A4033] leading-relaxed mb-6 font-medium">
                Cantra Care exists to give care teams a calmer, more connected way to manage the work around care.
              </p>
              <p className="text-base text-[#0A4033]/70 leading-relaxed mb-10">
                We bring essential information into one practical view—from person-centred plans and e-MAR to staffing and reporting. The result is greater visibility for teams, without losing the human focus behind every record and decision.
              </p>

              <div className="flex gap-3 flex-wrap">
                <span className="px-4 py-2 bg-[#E7EFEA] text-[#13695A] rounded-full text-sm font-semibold border border-[#13695A]/10">Human-centred</span>
                <span className="px-4 py-2 bg-[#E7EFEA] text-[#13695A] rounded-full text-sm font-semibold border border-[#13695A]/10">Practical</span>
                <span className="px-4 py-2 bg-[#E7EFEA] text-[#13695A] rounded-full text-sm font-semibold border border-[#13695A]/10">Dependable</span>
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

      {/* OUR TEAM */}
      <section id="team" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#6FB19F] via-[#2D6656] to-[#0A4033] rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px]">
                <div className="text-center bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[32px] shadow-2xl">
                   <div className="text-7xl sm:text-8xl font-bold font-serif text-white mb-2">25</div>
                   <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Members</div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[32px] shadow-lg">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                  <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                  Created together
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#0A4033] mb-6 leading-tight">
                  A focused team with <br />
                  <span className="italic font-normal text-[#13695A]">one shared standard.</span>
                </h2>
                
                <p className="text-[#0A4033]/70 text-sm sm:text-base mb-10 max-w-lg leading-relaxed">
                  Cantra Care is created by 25 members working across product, technology, care operations and customer support. Together, we turn frontline needs into a platform that feels considered, dependable and easy to use.
                </p>

                <div className="flex gap-2 flex-wrap">
                  {["Product", "Technology", "Care insight", "Support"].map((discipline) => (
                    <span key={discipline} className="px-4 py-2 bg-[#F6F4EB] text-[#0A4033] rounded-full text-xs font-bold border border-[#0A4033]/5">
                      {discipline}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="py-24 lg:py-32 bg-[#F6F4EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2">
               <div className="aspect-[4/3] bg-white rounded-[32px] overflow-hidden border border-[#0A4033]/10 relative shadow-lg">
                 <div className="absolute inset-0 bg-[#E7EFEA] flex flex-col items-center justify-center text-center p-8">
                   <span className="text-[#0A4033]/40 font-mono text-sm mb-4">Image Placeholder</span>
                   <p className="text-[#0A4033]/60 font-serif font-bold text-2xl italic">Care stays personal</p>
                 </div>
               </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                Our purpose
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-[#0A4033] mb-8">
                More clarity for teams. <br />
                <span className="italic font-normal text-[#13695A]">More space for care.</span>
              </h2>
              <p className="text-lg text-[#0A4033]/70 leading-relaxed mb-10">
                Good care depends on people, judgement and trust. Our purpose is to remove avoidable friction around that work, helping teams spend less time chasing information and more time delivering attentive, person-centred care.
              </p>

              <ul className="space-y-4">
                {[
                  "Keep important information visible",
                  "Connect responsibilities across the team",
                  "Support thoughtful, informed decisions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#0A4033] font-medium bg-white p-4 rounded-2xl border border-[#0A4033]/5 shadow-sm">
                    <span className="w-8 h-8 rounded-full bg-[#E7EFEA] text-[#13695A] flex items-center justify-center text-xs font-bold shrink-0">0{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CLARITY IN NUMBERS */}
      <section id="results" className="py-24 lg:py-32 bg-[#0A4033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
             <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6">
                <span className="w-8 h-[1px] bg-white/30" />
                Clarity in numbers
                <span className="w-8 h-[1px] bg-white/30" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">
               Designed to make a <br />
               <span className="italic font-normal text-[#B5D5C5]">measurable difference.</span>
             </h2>
             <p className="text-white/70 text-lg">
               Cantra Care-reported outcomes.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { stat: "94%", label: "reduction in documentation time" },
               { stat: "15+", label: "hours saved per carer weekly" },
               { stat: "50%", label: "less administrative work" },
               { stat: "12k+", label: "residents served" },
             ].map((metric, i) => (
               <div key={i} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                 <div className="text-5xl lg:text-6xl font-bold font-serif text-white mb-4 tracking-tight">{metric.stat}</div>
                 <div className="text-sm text-white/70 max-w-[150px] mx-auto leading-relaxed">{metric.label}</div>
               </div>
             ))}
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
