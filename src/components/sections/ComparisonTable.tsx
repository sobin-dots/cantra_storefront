import React from "react";
import { Check, X, Shield, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ComparisonTable() {
  const comparisonRows = [
    {
      capability: "Autonomous Subcontractor Dispatch",
      cantracare: true,
      spreadsheets: false,
      legacyCrm: "Manual Assignment",
      desc: "AI assigns top-rated contractor by location & trade score in <30 sec.",
    },
    {
      capability: "1-2-10 Year Warranty Policy Engine",
      cantracare: true,
      spreadsheets: false,
      legacyCrm: false,
      desc: "Automatically determines builder vs manufacturer vs owner liability.",
    },
    {
      capability: "Live Homeowner SMS & ETA Tracking",
      cantracare: true,
      spreadsheets: false,
      legacyCrm: "Add-on fee",
      desc: "Uber-style live contractor tracking and instant digital signature sign-off.",
    },
    {
      capability: "Automated Insurance (COI) Gatekeeper",
      cantracare: true,
      spreadsheets: false,
      legacyCrm: false,
      desc: "Blocks dispatch to subcontractors with expired policies or licenses.",
    },
    {
      capability: "Geotagged & Timestamped Photo Proof",
      cantracare: true,
      spreadsheets: false,
      legacyCrm: "Partial",
      desc: "Bank-grade proof of completion to defend against liability claims.",
    },
    {
      capability: "Multi-Trade Sequential Scheduling",
      cantracare: true,
      spreadsheets: false,
      legacyCrm: false,
      desc: "Schedules trades in required order with zero overlapping visits.",
    },
  ];

  return (
    <section className="py-20 bg-slate-950/60 border-t border-slate-800/80" aria-labelledby="comparison-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="brand" size="md">
            Why Cantracare
          </Badge>
          <h2 id="comparison-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How Cantracare Compares to{" "}
            <span className="gradient-text-brand">Legacy Methods</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Compare modern automated care operations against outdated spreadsheets and generic ticket trackers.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left border-collapse" aria-label="Feature Comparison">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80 text-xs uppercase tracking-wider text-slate-400">
                <th scope="col" className="p-5 font-semibold">Capability</th>
                <th scope="col" className="p-5 font-semibold text-blue-400 bg-blue-950/30 border-x border-blue-500/20">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Cantracare OS</span>
                  </div>
                </th>
                <th scope="col" className="p-5 font-semibold text-slate-400">Spreadsheets & Email</th>
                <th scope="col" className="p-5 font-semibold text-slate-400">Generic Help Desk CRM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-5">
                    <p className="font-bold text-white">{row.capability}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{row.desc}</p>
                  </td>

                  {/* Cantracare */}
                  <td className="p-5 bg-blue-950/20 border-x border-blue-500/20 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  </td>

                  {/* Spreadsheets */}
                  <td className="p-5 text-center text-slate-500">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 text-slate-500">
                      <X className="w-4 h-4" />
                    </div>
                  </td>

                  {/* Generic CRM */}
                  <td className="p-5 text-center text-slate-400 text-xs font-medium">
                    {row.legacyCrm === true ? (
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    ) : row.legacyCrm === false ? (
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 text-slate-500">
                        <X className="w-4 h-4" />
                      </div>
                    ) : (
                      <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                        {row.legacyCrm}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
