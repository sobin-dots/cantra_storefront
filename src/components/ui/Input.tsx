import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, id, ...props }, ref) => {
    const generatedId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={generatedId}
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <input
          id={generatedId}
          type={type}
          ref={ref}
          className={cn(
            "w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 transition-all duration-200",
            "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-900",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
        {helperText && !error && <p className="text-xs text-slate-400 mt-1">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
