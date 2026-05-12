import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "dark" | "accent";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const tones = {
    default: "border-[var(--line)] bg-white text-[var(--muted)]",
    dark: "border-white/15 bg-white/10 text-white/80",
    accent: "border-[#b6ded7] bg-[#e7f3f1] text-[var(--accent-strong)]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
