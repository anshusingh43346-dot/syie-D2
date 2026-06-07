import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeTone = "gold" | "purple" | "slate";

const tones: Record<BadgeTone, string> = {
  gold: "border-gold/25 bg-gold/10 text-gold shadow-[0_0_18px_rgba(212,175,55,0.14)]",
  purple:
    "border-purple/25 bg-purple/10 text-[#cabeff] shadow-[0_0_18px_rgba(124,92,255,0.16)]",
  slate: "border-slate/25 bg-slate/10 text-ivory/70",
};

export function Badge({
  className,
  tone = "gold",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
