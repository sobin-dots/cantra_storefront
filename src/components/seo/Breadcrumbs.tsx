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
}

export function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = showHome
    ? [{ name: "Home", url: "/" }, ...items]
    : items;

  const schemaData = generateBreadcrumbSchema(fullItems);

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Breadcrumb" className="py-3 px-1">
        <ol className="flex items-center space-x-2 text-sm text-slate-400">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-1.5 text-slate-500 shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium text-slate-200 truncate max-w-[200px] sm:max-w-none"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center hover:text-blue-400 transition-colors"
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
