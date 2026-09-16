"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateFaqSchema } from "@/lib/schema";

export const defaultFaqItems = [

];

interface FaqAccordionProps {
  items?: { question: string; answer: string }[];
  injectSchema?: boolean;
}

export function FaqAccordion({ items = defaultFaqItems, injectSchema = true }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = generateFaqSchema(items);

  return (
    <section id="faq" className="py-24 relative bg-slate-950/40" aria-labelledby="faq-heading">
      {injectSchema && <JsonLd data={schemaData} />}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="brand" size="md">
            <HelpCircle className="w-3.5 h-3.5 mr-1 inline" />
            Frequently Asked Questions
          </Badge>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Everything You Need to Know About{" "}
            <span className="gradient-text-brand">Cantracare</span>
          </h2>
          <p className="text-slate-400 text-base">
            Got questions? We&apos;ve got answers. If you have any further questions, feel free to reach out to our team.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-100 pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-blue-600/20 text-blue-400" : ""
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
