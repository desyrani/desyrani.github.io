import type { ReactNode } from "react";

interface CardProps {
  accentClassName?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Generic details-container card (`.details-container.color-container`).
 * Left accent border color is passed per-section via accentClassName
 * (e.g. "border-l-accent-cyan") to match the original per-section rotation.
 */
export default function Card({ accentClassName = "", children, className = "" }: CardProps) {
  return (
    <div
      className={`p-6 flex-1 bg-surface rounded-2xl border border-border border-l-[3px] text-center transition-transform duration-250 ease hover:-translate-y-[3px] hover:border-border-strong ${accentClassName} ${className}`}
    >
      {children}
    </div>
  );
}
