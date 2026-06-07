import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-3 text-gold no-underline transition hover:text-[#f2ca50]",
        className,
      )}
      aria-label="SYIE home"
    >
      <span className="flex size-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-heading text-xl font-bold shadow-[0_0_28px_rgba(212,175,55,0.16)]">
        S
      </span>
      <span className="font-heading text-3xl font-bold tracking-[-0.04em]">SYIE</span>
    </Link>
  );
}
