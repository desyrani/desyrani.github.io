import type { SkillAccent } from "../../types";

export const jobAccentStyles: Record<
  SkillAccent,
  { bar: string; text: string; dot: string; underline: string; hoverGlow: string }
> = {
  violet: {
    bar: "border-l-accent-violet",
    text: "text-accent-violet",
    dot: "bg-accent-violet",
    underline: "decoration-[rgba(167,139,250,0.4)]",
    hoverGlow: "hover:shadow-[0_12px_32px_-12px_rgba(167,139,250,0.45)]",
  },
  cyan: {
    bar: "border-l-accent-cyan",
    text: "text-accent-cyan",
    dot: "bg-accent-cyan",
    underline: "decoration-[rgba(34,211,238,0.4)]",
    hoverGlow: "hover:shadow-[0_12px_32px_-12px_rgba(34,211,238,0.45)]",
  },
  green: {
    bar: "border-l-accent-green",
    text: "text-accent-green",
    dot: "bg-accent-green",
    underline: "decoration-[rgba(52,211,153,0.4)]",
    hoverGlow: "hover:shadow-[0_12px_32px_-12px_rgba(52,211,153,0.45)]",
  },
  orange: {
    bar: "border-l-accent-orange",
    text: "text-accent-orange",
    dot: "bg-accent-orange",
    underline: "decoration-[rgba(251,146,60,0.4)]",
    hoverGlow: "hover:shadow-[0_12px_32px_-12px_rgba(251,146,60,0.45)]",
  },
};

export const cardHover = "transition-all duration-300 ease hover:-translate-y-1 hover:bg-surface-2";
