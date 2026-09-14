import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  theme?: "light" | "dark";
}

export function Breadcrumbs({ items, showHome = true, theme = "dark" }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = showHome
    ? [{ name: "Home", url: "/" }, ...items]
    : items;

  const schemaData = generateBreadcrumbSchema(fullItems);

  const textMuted = theme === "dark" ? "text-slate-400" : "text-[#465C59]/70";
  const textActive = theme === "dark" ? "text-slate-200" : "text-[#0B4F43]";
  const textHover = theme === "dark" ? "hover:text-blue-400" : "hover:text-[#13695A]";
  const iconMuted = theme === "dark" ? "text-slate-500" : "text-[#465C59]/50";

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Breadcrumb" className="py-3 px-1">
        <ol className={`flex items-center space-x-2 text-sm ${textMuted}`}>
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className={`w-4 h-4 mx-1.5 ${iconMuted} shrink-0`} aria-hidden="true" />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={`font-medium ${textActive} truncate max-w-[200px] sm:max-w-none`}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className={`flex items-center ${textHover} transition-colors`}
                  >
                    {index === 0 && showHome && (
                      <Home className="w-3.5 h-3.5 mr-1 inline shrink-0" aria-hidden="true" />
                    )}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
