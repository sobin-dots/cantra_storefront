import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "emerald" | "amber" | "purple" | "neutral" | "glow";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "brand",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    neutral: "bg-slate-800 text-slate-300 border-slate-700",
    glow: "bg-blue-950/60 text-blue-300 border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
  };

  const dotColor = {
    brand: "bg-blue-400 animate-pulse",
    emerald: "bg-emerald-400 animate-pulse",
    amber: "bg-amber-400",
    purple: "bg-purple-400",
    neutral: "bg-slate-400",
    glow: "bg-blue-400 animate-ping",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium",
    md: "text-xs px-3 py-1 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border tracking-wide select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColor[variant])} />
      )}
      {children}
    </span>
  );
}
