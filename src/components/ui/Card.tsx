import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glow" | "subtle" | "dark";
  hover?: boolean;
}

export function Card({
  className,
  variant = "glass",
  hover = true,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    glass: "glass-panel text-slate-100",
    glow: "glass-panel-glow text-slate-100",
    subtle: "bg-slate-900/50 border border-slate-800/80 text-slate-100",
    dark: "bg-slate-950 border border-slate-800 text-slate-100",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 relative overflow-hidden transition-all duration-300",
        variantStyles[variant],
        hover && "glass-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
