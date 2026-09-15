import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HeroHeader } from "@/components/sections/hero/HeroHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Features | Cantra Care",
  description: "Explore Cantra's connected care platform. Care planning, e-MAR, staff scheduling, compliance and daily records in one place.",
  path: "/features",
});

export default function FeaturesPage() {
  const breadcrumbItems = [{ name: "Features", url: "/features" }];

  return (
    <div className="bg-[#EFF3F3] text-[#465C59] min-h-screen selection:bg-[#0B4F43] selection:text-[#EFF3F3]">
      <HeroHeader />

      {/* HEADER SECTION (Like Contact Us) */}
      <div className="pt-8 md:pt-16 pb-12 sm:pb-20">
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
                Book a tailored demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-8 border-t border-[#465C59]/15">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0B4F43] mb-6">
                See how Cantra fits into your day ↓
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-medium text-[#465C59]">
                <span>01 Start informed</span>
                <span className="hidden sm:inline text-[#465C59]/30">|</span>
                <span>02 Keep care records up to date</span>
                <span className="hidden sm:inline text-[#465C59]/30">|</span>
                <span>03 Hand over with confidence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Explore the platform */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#465C59]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0B4F43] tracking-tight mb-4">
              Explore the <span className="italic font-normal">platform</span>
            </h2>
            <p className="text-lg font-medium text-[#0B4F43]">The solutions you need to run better care.</p>
            <p className="text-[#465C59] mt-2">Cantra connects the important parts of your care home in one platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { num: "01", title: "Care Management", desc: "Manage care plans, daily tasks, observations, handovers and resident information without jumping between systems." },
              { num: "02", title: "e-MAR", desc: "Give your team a clear view of medication schedules, administration records and current medication information — all in one place." },
              { num: "03", title: "Staff & Rota Management", desc: "Plan shifts, manage staff availability and give your team a clear view of their responsibilities." },
              { num: "04", title: "Compliance & Reports", desc: "Keep your care records, incidents, audits and reports organised so you can quickly understand what is happening and show the evidence when you need it." }
            ].map((item) => (
              <div key={item.num} className="group p-8 sm:p-10 rounded-[32px] bg-[#EFF3F3] border border-[#465C59]/10 hover:border-[#0B4F43]/30 transition-all duration-300">
                <span className="text-xs font-bold font-mono text-[#13695A] mb-4 block">{item.num} /</span>
                <h3 className="text-2xl font-bold font-serif text-[#0B4F43] mb-3">{item.title}</h3>
                <p className="text-[#465C59] leading-relaxed mb-8">{item.desc}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0B4F43] group-hover:text-[#13695A] transition-colors">
                  View feature <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: A Working Day In Flow */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0B4F43] tracking-tight mb-4">
              A Working Day In <span className="italic font-normal">Flow</span>
            </h2>
            <p className="text-lg font-medium text-[#0B4F43]">Start every shift with clarity. Keep your team informed.</p>
            <p className="text-[#465C59] mt-2">Cantra keeps information connected throughout the day — from the first shift check to the final handover.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", phase: "Before the shift", title: "Know what needs attention today.", desc: "See recent changes, outstanding tasks, resident updates and important information before your team starts their shift." },
              { num: "02", phase: "During care", title: "Record care as it happens.", desc: "Capture tasks, observations, medication and updates directly in Cantra, so your records stay current throughout the day." },
              { num: "03", phase: "When something changes", title: "Act quickly and keep everyone informed.", desc: "Record incidents and changes, assign follow-up actions and make sure the right people know what needs to happen next." },
              { num: "04", phase: "At handover", title: "Give the next shift the full picture.", desc: "Bring together the important updates, actions and changes from the day so your next team starts informed — not guessing." }
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#13695A] mb-3">{step.num} / {step.phase}</div>
                <h3 className="text-xl font-bold font-serif text-[#0B4F43] mb-3">{step.title}</h3>
                <p className="text-sm text-[#465C59] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: From Incident to Resolutions */}
      <section className="py-20 lg:py-28 bg-[#0B4F43] text-[#EFF3F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight leading-[1.12] text-white">
                From Incident to <br /><span className="italic font-normal text-[#EFF3F3]/80">Resolutions</span>
              </h2>
              <p className="text-lg font-medium text-white">Don't let important issues get lost.</p>
              <p className="text-[#EFF3F3]/80 leading-relaxed">
                When something happens in your home, Cantra helps you record it, respond to it, assign responsibility and follow it through to completion.
              </p>
            </div>
            
            <div className="lg:col-span-7 space-y-4">
              {[
                { num: "01", title: "See what is happening", desc: "Review incidents and important events in context, instead of piecing information together from different records." },
                { num: "02", title: "Make ownership clear", desc: "Help the team understand what happens next and who needs to take it forward." },
                { num: "03", title: "Close the loop", desc: "Track follow-up and outcomes so important actions are completed and nothing gets forgotten." }
              ].map((item) => (
                <div key={item.num} className="p-6 sm:p-8 rounded-[24px] bg-white/5 border border-white/10 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-serif italic text-xl">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-[#EFF3F3]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: The Home Wide Picture */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0B4F43] tracking-tight mb-4">
              The Home Wide <span className="italic font-normal">Picture</span>
            </h2>
            <p className="text-lg font-medium text-[#0B4F43]">Know What’s Happening Across Your Home</p>
            <p className="text-[#465C59] mt-2">Get a clear view of your residents, rooms, units, beds and occupancy — without relying on spreadsheets or manually piecing information together.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "Space at a glance", subtitle: "Know which beds are available.", desc: "See your occupancy and bed availability in one place, so you always have an up-to-date view of your home." },
              { num: "02", title: "A familiar structure", subtitle: "Manage your home the way it is organised.", desc: "Set up your units, wings, rooms and beds to match your care home, making it easier for your team to find the information they need." }
            ].map((item) => (
              <div key={item.num} className="bg-white p-8 sm:p-12 rounded-[32px] border border-[#465C59]/15 shadow-sm text-center">
                <div className="text-xs font-bold uppercase tracking-widest text-[#13695A] mb-4">{item.num} / {item.title}</div>
                <h3 className="text-2xl font-bold font-serif text-[#0B4F43] mb-4">{item.subtitle}</h3>
                <p className="text-[#465C59] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Turn Care Into Clear Evidence */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#465C59]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0B4F43] tracking-tight mb-4">
              Turn Care Into Clear <span className="italic font-normal">Evidence</span>
            </h2>
            <p className="text-lg font-medium text-[#0B4F43]">From recording care to proving it happened.</p>
            <p className="text-[#465C59] mt-2 max-w-2xl">Cantra keeps the care journey connected from the moment something is recorded to the moment it is reviewed — helping you deliver better care and stay ready for inspection.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { num: "01", title: "Record", subtitle: "Capture what happened.", desc: "Record care, observations, incidents and important changes as they happen." },
              { num: "02", title: "Understand", subtitle: "See the context.", desc: "Bring the right resident, staff and care information together." },
              { num: "03", title: "Act", subtitle: "Make the next step clear.", desc: "Assign actions and make sure the right people know what needs to happen." },
              { num: "04", title: "Review", subtitle: "Know what changed.", desc: "Track outcomes, review your records and close the loop." }
            ].map((item) => (
              <div key={item.num} className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#EFF3F3] flex items-center justify-center border border-[#465C59]/15 text-[#0B4F43] font-serif font-bold italic">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B4F43]">{item.title}</h3>
                <div>
                  <p className="font-semibold text-[#13695A] text-sm mb-1">{item.subtitle}</p>
                  <p className="text-sm text-[#465C59] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO CTA / FINAL CTA */}
      <section className="py-20 lg:py-28 bg-[#EFF3F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="bg-[#0B4F43] rounded-[40px] p-10 sm:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mb-4 relative z-10">
              Show us how your care home <span className="italic font-normal">works.</span>
            </h2>
            <p className="text-[#EFF3F3]/80 leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
              Bring us one of your most complicated care days. We'll show you how Cantra can help you manage it — from the first update to the final handover.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0B4F43] hover:bg-[#EFF3F3] text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                Book a tailored demo <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-sm font-medium text-white/80 space-y-1">
                <a href="mailto:sales@cantra.com" className="block hover:text-white transition-colors">sales@cantra.com</a>
                <a href="tel:+442073460250" className="block hover:text-white transition-colors">+44 20 7346 0250</a>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B4F43] tracking-tight mb-4">
              Spend less time chasing information. <br className="hidden sm:block" />
              <span className="italic font-normal">Spend more time running better care.</span>
            </h2>
            <p className="text-[#465C59] max-w-2xl mx-auto mb-8">
              Cantra gives your care team one connected place to manage everyday care, staff, medication and compliance.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B4F43] hover:bg-[#13695A] text-white text-sm font-semibold transition-all duration-200 shadow-md"
            >
              Book a tailored demo <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="mt-16 pt-8 border-t border-[#465C59]/15 text-sm text-[#465C59]">
              <p className="font-bold text-[#0B4F43] mb-2">One connected care platform, made for the people who keep care moving.</p>
              <p>Residential · Nursing · Mental health care</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
