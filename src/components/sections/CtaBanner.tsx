import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden" aria-label="Call to Action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-blue-900/50 via-indigo-900/40 to-purple-950/60 border border-blue-500/30 backdrop-blur-2xl shadow-2xl overflow-hidden text-center space-y-8">
          {/* Ambient Glow in Box */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center">
            <Badge variant="glow" size="md" className="py-1 px-4">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-blue-400 inline" />
              Transform Your Field Care Operations Today
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Cut Warranty Costs by 60% and Delight Your Clients?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking builders and contractor networks using Cantracare to automate claims, dispatch, and SLA guarantees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="glow"
              size="lg"
              href="/contact"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-2xl shadow-blue-500/40"
            >
              Request Custom Product Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/pricing"
              className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
            >
              View Transparent Pricing
            </Button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              14-Day Free Pilot
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Dedicated Onboarding Specialist
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              SOC2 Certified & HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
