import React from "react";
import { Star, ShieldCheck, Building2, HardHat, Home, Award } from "lucide-react";

export function SocialProof() {
  const logos = [
    { name: "Apex Builders Group", icon: Building2 },
    { name: "Vanguard Contractor Care", icon: HardHat },
    { name: "Cascade Living Communities", icon: Home },
    { name: "Terraform Development", icon: Building2 },
    { name: "Summit Crest Homes", icon: Award },
    { name: "Pinnacle Field Services", icon: ShieldCheck },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/60 relative" aria-label="Social Proof and Trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating summary bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" aria-hidden="true" />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-white">4.9 / 5 Star Rating</p>
              <p className="text-xs text-slate-400">Based on 350+ enterprise reviews across G2 & Capterra</p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-center sm:text-left">
            <div>
              <p className="text-2xl font-extrabold text-white font-mono">$42M+</p>
              <p className="text-xs text-slate-400">Warranty Costs Saved</p>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <p className="text-2xl font-extrabold text-blue-400 font-mono">1.2M+</p>
              <p className="text-xs text-slate-400">Work Orders Resolved</p>
            </div>
            <div className="w-px h-8 bg-slate-800 hidden sm:block" />
            <div className="hidden sm:block">
              <p className="text-2xl font-extrabold text-emerald-400 font-mono">99.4%</p>
              <p className="text-xs text-slate-400">On-Time SLA Guarantee</p>
            </div>
          </div>
        </div>

        {/* Enterprise Logos Grid */}
        <div className="pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Trusted by premier homebuilders, general contractors, & asset managers
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-75 hover:opacity-100 transition-opacity">
            {logos.map((logo) => {
              const Icon = logo.icon;
              return (
                <div
                  key={logo.name}
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors p-2 text-xs font-semibold"
                >
                  <Icon className="w-5 h-5 text-blue-500/80 shrink-0" />
                  <span>{logo.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
