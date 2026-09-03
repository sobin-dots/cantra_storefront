"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";

export function RoiCalculator() {
  const [contractorsCount, setContractorsCount] = useState<number>(35);
  const [monthlyTickets, setMonthlyTickets] = useState<number>(150);

  // ROI Calculations based on industry benchmarks:
  // - Traditional manual cost per ticket: ~$85 (labor, phone calls, dispatch delay, duplicate claims)
  // - Cantracare automated cost per ticket: ~$18
  // - Manual hours spent per ticket: ~2.5 hrs vs Cantracare: 0.4 hrs
  const manualAnnualCost = monthlyTickets * 12 * 85;
  const cantracareAnnualCost = monthlyTickets * 12 * 18 + (contractorsCount * 25 * 12);
  const estimatedSavings = Math.max(0, manualAnnualCost - cantracareAnnualCost);
  const monthlyHoursSaved = Math.round(monthlyTickets * 2.1);
  const roiPercentage = Math.round((estimatedSavings / (cantracareAnnualCost || 1)) * 100);

  return (
    <section id="roi-calculator" className="py-20 relative" aria-labelledby="roi-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="emerald" size="md">
            <Calculator className="w-3.5 h-3.5 mr-1 inline" />
            Interactive Value Calculator
          </Badge>

          <h2 id="roi-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Calculate Your Organization&apos;s{" "}
            <span className="gradient-text-emerald">Annual ROI</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            See how much time and money Cantracare saves your operations team compared to manual spreadsheets and phone-based dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Controls Column */}
          <Card variant="glass" className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-slate-900/50">
            {/* Slider 1: Active Subcontractors */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="contractor-slider" className="font-semibold text-slate-200">
                  Active Contractors / Subcontractors
                </label>
                <span className="font-mono text-base font-bold text-blue-400">
                  {contractorsCount} Trade Teams
                </span>
              </div>
              <input
                id="contractor-slider"
                type="range"
                min="5"
                max="250"
                step="5"
                value={contractorsCount}
                onChange={(e) => setContractorsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>5 teams</span>
                <span>125 teams</span>
                <span>250+ teams</span>
              </div>
            </div>

            {/* Slider 2: Monthly Tickets */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="ticket-slider" className="font-semibold text-slate-200">
                  Monthly Warranty & Service Work Orders
                </label>
                <span className="font-mono text-base font-bold text-emerald-400">
                  {monthlyTickets} Claims / mo
                </span>
              </div>
              <input
                id="ticket-slider"
                type="range"
                min="20"
                max="1000"
                step="10"
                value={monthlyTickets}
                onChange={(e) => setMonthlyTickets(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>20 tickets</span>
                <span>500 tickets</span>
                <span>1,000+ tickets</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Methodology:</p>
              <p>
                Calculations based on independent construction research: average $85/ticket manual processing cost (dispatch lag, repeat visits, phone coordination) reduced to $18/ticket with Cantracare automation.
              </p>
            </div>
          </Card>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 space-y-4">
            <Card variant="glow" className="p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-slate-950 border-blue-500/30 text-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Estimated Annual Net Savings
              </span>

              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-mono">
                {formatCurrency(estimatedSavings)}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-left">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Time Saved</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono mt-1">
                    {monthlyHoursSaved} hrs
                  </div>
                  <div className="text-[10px] text-slate-500">per month</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Projected ROI</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-400 font-mono mt-1">
                    {roiPercentage}%
                  </div>
                  <div className="text-[10px] text-slate-500">first-year return</div>
                </div>
              </div>

              <Button
                variant="glow"
                size="md"
                href="/contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Claim Your Custom ROI Audit
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
