import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata = constructMetadata({
  title: "Features | Cantra Care",
  description: "Explore Cantra's connected care platform. Care planning, e-MAR, staff scheduling, compliance and daily records in one place.",
  path: "/features",
});

export default function FeaturesPage() {
  const breadcrumbItems = [{ name: "Features", url: "/features" }];

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

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#0B4F43] tracking-tight mb-6 leading-[1.12]">
                Keep your team on track. <br className="hidden md:block" />
                Run your care home <span className="italic font-normal text-[#13695A]">better, every day.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#465C59] leading-relaxed max-w-3xl mx-auto mb-10">
                Cantra brings care planning, medication, staff, incidents, compliance and daily records into one connected platform — so you spend less time chasing information and more time running your home.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0B4F43] hover:bg-[#13695A] text-white text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  Book a tailored demo <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-8 border-t border-[#465C59]/15">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0B4F43] mb-6">
                  See how Cantra fits into your day ↓
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-medium text-[#465C59]">
                  <a href="#day-flow" className="hover:text-[#0B4F43] transition-colors">01 Start informed</a>
                  <span className="hidden sm:inline text-[#465C59]/30">|</span>
                  <a href="#day-flow" className="hover:text-[#0B4F43] transition-colors">02 Keep care records up to date</a>
                  <span className="hidden sm:inline text-[#465C59]/30">|</span>
                  <a href="#day-flow" className="hover:text-[#0B4F43] transition-colors">03 Hand over with confidence</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Explore the platform */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 border-t border-[#0A4033]/10 pt-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                EXPLORE THE PLATFORM
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight">
                The solutions you need. <br />
                <span className="italic font-normal">Choose where to begin.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[#0A4033]/70 leading-relaxed text-sm lg:text-base">
              Cantra connects the important parts of your care home in one platform. Each feature has its own dedicated destination, ready to grow into a complete guide.
            </p>
          </div>

          {/* Asymmetrical Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 1: Large Left */}
            <div className="lg:col-span-5 bg-[#0A4033] rounded-[32px] p-10 lg:p-12 pb-10 text-white flex flex-col min-h-[500px] lg:min-h-[600px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              
              <div className="flex justify-between items-start relative z-10 mb-8">
                <span className="text-xs font-mono text-white/50">01</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#0A4033] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              
              {/* Edge-to-edge Image wrapper */}
              <div className="relative z-10 flex-1 -mx-10 lg:-mx-12 mb-10 overflow-hidden border-y border-white/10 bg-[#124C3F] shadow-inner">
                <img src="/images/features-page/Admin - Facility Management.png" alt="Care Management Dashboard" className="w-full h-full object-cover object-left-top opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">CORE FEATURE</div>
                <h3 className="text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">Care <br />Management</h3>
                <p className="text-white/80 leading-relaxed mb-8 max-w-sm">
                  Manage care plans, daily tasks, observations, handovers and resident information without jumping between systems.
                </p>
                <Link href="#" className="text-sm font-bold flex items-center gap-2 border-b border-white/30 pb-1 w-max hover:border-white transition-colors">
                  View feature <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Stacked Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Card 2 */}
              <div className="bg-[#E7EFEA] rounded-[32px] p-8 lg:p-10 flex flex-col sm:flex-row justify-between gap-8 group relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                <div className="flex-1 relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0A4033]/50 mb-3">CORE FEATURE</div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-serif text-[#0A4033] mb-4">e-MAR</h3>
                  <p className="text-[#0A4033]/70 leading-relaxed text-sm lg:text-base max-w-md mb-6">
                    Give your team a clear view of medication schedules, administration records and current medication information — all in one place.
                  </p>
                  <Link href="#" className="text-sm font-bold flex items-center gap-2 border-b border-[#0A4033]/20 pb-1 w-max text-[#0A4033] hover:border-[#0A4033] transition-colors">
                    View feature <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-col justify-between items-end relative z-10">
                  <span className="text-xs font-mono text-[#0A4033]/40">02</span>
                  <div className="w-10 h-10 rounded-full border border-[#0A4033]/10 flex items-center justify-center text-[#0A4033]/40 group-hover:bg-[#0A4033] group-hover:text-white transition-all hidden sm:flex">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F6F4EB] rounded-[32px] p-8 lg:p-10 flex flex-col sm:flex-row justify-between gap-8 group relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/60 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                <div className="flex-1 relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0A4033]/50 mb-3">CORE FEATURE</div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-serif text-[#0A4033] mb-4">Staff & Rota <br className="hidden sm:block" />Management</h3>
                  <p className="text-[#0A4033]/70 leading-relaxed text-sm lg:text-base max-w-md mb-6">
                    Plan shifts, manage staff availability and give your team a clear view of their responsibilities.
                  </p>
                  <Link href="#" className="text-sm font-bold flex items-center gap-2 border-b border-[#0A4033]/20 pb-1 w-max text-[#0A4033] hover:border-[#0A4033] transition-colors">
                    View feature <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-col justify-between items-end relative z-10">
                  <span className="text-xs font-mono text-[#0A4033]/40">03</span>
                  <div className="w-10 h-10 rounded-full border border-[#0A4033]/10 flex items-center justify-center text-[#0A4033]/40 group-hover:bg-[#0A4033] group-hover:text-white transition-all hidden sm:flex">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-[#E0E0E0] rounded-[32px] p-8 lg:p-10 flex flex-col sm:flex-row justify-between gap-8 group flex-1 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0A4033]/50 mb-3">CORE FEATURE</div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-serif text-[#0A4033] mb-4">Compliance & <br className="hidden sm:block" />Reports</h3>
                  <p className="text-[#0A4033]/70 leading-relaxed text-sm lg:text-base max-w-md mb-6">
                    Keep your care records, incidents, audits and reports organised so you can quickly understand what is happening and show the evidence when you need it.
                  </p>
                  <Link href="#" className="text-sm font-bold flex items-center gap-2 border-b border-[#0A4033]/20 pb-1 w-max text-[#0A4033] hover:border-[#0A4033] transition-colors">
                    View feature <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <span className="text-xs font-mono text-[#0A4033]/40">04</span>
                  <div className="w-10 h-10 rounded-full border border-[#0A4033]/10 flex items-center justify-center text-[#0A4033]/40 group-hover:bg-[#0A4033] group-hover:text-white transition-all hidden sm:flex">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: A working day in flow */}
      <section id="day-flow" className="py-24 lg:py-32 bg-[#F6F4EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 border-t border-[#0A4033]/10 pt-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                A WORKING DAY IN FLOW
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-[#0A4033]">
                Start every shift with clarity. <br />
                <span className="italic font-normal">Keep your team informed.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[#0A4033]/70 leading-relaxed text-sm lg:text-base">
              Cantra keeps information connected throughout the day — from the first shift check to the final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#0A4033]/10">
            {[
              { num: "01", eyebrow: "BEFORE THE SHIFT", title: "Know what needs attention today.", desc: "See recent changes, outstanding tasks, resident updates and important information before your team starts their shift." },
              { num: "02", eyebrow: "DURING CARE", title: "Record care as it happens.", desc: "Capture tasks, observations, medication and updates directly in Cantra, so your records stay current throughout the day." },
              { num: "03", eyebrow: "WHEN SOMETHING CHANGES", title: "Act quickly and keep everyone informed.", desc: "Record incidents and changes, assign follow-up actions and make sure the right people know what needs to happen next." },
              { num: "04", eyebrow: "AT HANDOVER", title: "Give the next shift the full picture.", desc: "Bring together the important updates, actions and changes from the day so your next team starts informed — not guessing." }
            ].map((step) => (
              <div key={step.num} className="p-8 lg:p-10 border-b border-r border-[#0A4033]/10 hover:bg-white/50 transition-colors">
                <div className="flex items-center gap-2 mb-10">
                  <span className="text-xs font-mono text-[#0A4033]/40">{step.num}</span>
                  <div className="w-1.5 h-1.5 rounded-full border border-[#0A4033]/30" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A4033]/60 mb-4 h-6">
                  {step.eyebrow}
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#0A4033] mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#0A4033]/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: From Incident to Resolutions */}
      <section className="py-24 lg:py-32 bg-[#0A4033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6">
                <span className="w-8 h-[1px] bg-white/30" />
                FROM INCIDENT TO RESOLUTIONS
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-white mb-6">
                Don't let important <br />
                <span className="italic font-normal text-[#B5D5C5]">issues get lost.</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-12 text-lg">
                When something happens in your home, Cantra helps you record it, respond to it, assign responsibility and follow it through to completion.
              </p>

              <div className="relative pl-6 border-l border-white/10 space-y-10">
                {[
                  { num: "01", title: "See what is happening", desc: "Review incidents and important events in context, instead of piecing information together from different records." },
                  { num: "02", title: "Make ownership clear", desc: "Help the team understand what happens next and who needs to take it forward." },
                  { num: "03", title: "Close the loop", desc: "Track follow-up and outcomes so important actions are completed and nothing gets forgotten." }
                ].map((item, idx) => (
                  <div key={item.num} className="relative">
                    {/* The dot on the timeline */}
                    <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-[#0A4033] border-2 border-white" />
                    <div className="flex gap-4">
                      <span className="text-xs font-mono text-white/50 mt-1">{item.num}</span>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative w-full">
               <img src="/images/features-page/Group 30.png" alt="Incident in Context" className="w-full h-auto" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: The Home Wide Picture */}
      <section className="py-24 lg:py-32 bg-[#E7EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 border-t border-[#0A4033]/10 pt-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                THE HOME-WIDE PICTURE
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-[#0A4033]">
                See the structure <br />
                <span className="italic font-normal">behind a busy home.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[#0A4033]/70 leading-relaxed text-sm lg:text-base">
              Get a clear view of your residents, rooms, units, beds and occupancy — without relying on spreadsheets or manually piecing information together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: "01", eyebrow: "SPACE AT A GLANCE", title: "Know where every bed stands.", desc: "See your occupancy and bed availability in one place, so you always have an up-to-date view of your home.", img: "/images/features-page/man-nurse-retirement-home.jpg" },
              { num: "02", eyebrow: "A FAMILIAR STRUCTURE", title: "Mirror the way your home is organised.", desc: "Set up your units, wings, rooms and beds to match your care home, making it easier for your team to find the information they need.", img: "/images/features-page/senior-woman-smiling-with-caretaker.jpeg" }
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm flex flex-col h-full group">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A4033]/60 mb-4">
                  {item.num} / {item.eyebrow}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold font-serif text-[#0A4033] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#0A4033]/70 leading-relaxed mb-10 max-w-sm">
                  {item.desc}
                </p>
                {/* Real Image */}
                <div className="mt-auto rounded-2xl w-full h-[240px] border border-[#0A4033]/10 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Turn Care Into Clear Evidence */}
      <section className="py-24 lg:py-32 bg-[#0A4033] text-white relative overflow-hidden">
        {/* Decorative sweeping curve background */}
        <div className="absolute top-0 right-0 w-[150%] h-[150%] rounded-[100%] border-[100px] border-[#105445] -translate-y-1/2 translate-x-1/4 opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-24">
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6">
              <span className="w-8 h-[1px] bg-white/30" />
              TURN CARE INTO CLEAR EVIDENCE
            </div>
            <h2 className="text-4xl lg:text-5xl lg:text-6xl font-bold font-serif leading-[1.1] mb-6">
              Good information <br />
              needs a <span className="italic font-normal text-[#B5D5C5]">path forward.</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Cantra keeps the care journey connected from the moment something is recorded to the moment it is reviewed — helping you deliver better care and stay ready for inspection.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Record", desc: "Capture what happened. Record care, observations, incidents and important changes." },
              { num: "02", title: "Understand", desc: "See the context. Bring the right resident, staff and care information together." },
              { num: "03", title: "Act", desc: "Make the next step clear. Assign actions and make sure the right people know." },
              { num: "04", title: "Review", desc: "Know what changed. Track outcomes, review your records and close the loop." }
            ].map((item, idx) => (
              <div key={item.num} className="relative pt-6">
                {/* Line connector */}
                {idx !== 0 && (
                  <div className="absolute top-1.5 left-0 w-full h-[1px] bg-white/20 -translate-x-full hidden lg:block" />
                )}
                
                <div className="text-xs font-mono text-white/40 mb-4">{item.num}</div>
                {/* Circle marker */}
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full border-2 border-white bg-[#0A4033]" />
                
                <h3 className="text-2xl font-bold font-serif mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO CTA */}
      <section className="py-24 lg:py-32 bg-[#F6F4EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-2xl rounded-bl-2xl p-12 lg:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A4033]/60 mb-6">
                <span className="w-8 h-[1px] bg-[#0A4033]/30" />
                MAKE IT SPECIFIC TO YOUR HOME
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold font-serif text-[#0A4033] leading-[1.05]">
                Bring us one <br />
                complicated <br />
                care day.
              </h2>
            </div>
            
            <div className="space-y-8 lg:pl-16 lg:border-l border-[#0A4033]/10">
              <p className="text-[#0A4033]/80 text-lg leading-relaxed">
                We'll show you how Cantra can carry the context through it—from the first update to the final handover.
              </p>
              <div>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0A4033] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#124C3F] transition-colors mb-6 shadow-md">
                  Book a tailored demo <ArrowUpRight className="w-4 h-4" />
                </Link>
                <div className="text-sm font-bold text-[#0A4033] border-b border-[#0A4033]/20 w-max pb-1">
                  +44 20 7346 0250
                </div>
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
