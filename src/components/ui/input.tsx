import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  icon?: ReactNode;
};

export function Input({
  label,
  helperText,
  icon,
  className,
  id,
  ...props
}: InputProps) {
  return (
    <label className="block space-y-2" htmlFor={id}>
      {label ? (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/70">
          {label}
        </span>
      ) : null}
      <span className="relative block">
        {icon ? (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ivory/45">
            {icon}
          </span>
        ) : null}
        <input
          id={id}
          className={cn(
            "w-full rounded-lg border border-white/10 bg-ivory/[0.05] px-4 py-3 text-sm font-medium text-ivory placeholder:text-slate/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 focus:border-gold/80 focus:outline-none focus:ring-4 focus:ring-gold/20",
            Boolean(icon) && "pl-11",
            className,
          )}
          {...props}
        />
      </span>
      {helperText ? (
        <span className="block text-xs text-slate">{helperText}</span>
      ) : null}
    </label>
  );
}
