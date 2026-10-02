import type { SkillCategory } from "../../types";

const accentTextClass: Record<SkillCategory["accent"], string> = {
  violet: "text-accent-violet",
  cyan: "text-accent-cyan",
  orange: "text-accent-orange",
  green: "text-accent-green",
};

const accentDotClass: Record<SkillCategory["accent"], string> = {
  violet: "bg-accent-violet",
  cyan: "bg-accent-cyan",
  orange: "bg-accent-orange",
  green: "bg-accent-green",
};

export default function SkillCategoryCard({ title, accent, items }: SkillCategory) {
  return (
    <div className="bg-surface border border-border rounded-[0.85rem] p-5 text-left transition-transform duration-250 ease hover:-translate-y-[3px] hover:border-border-strong">
      <h3
        className={`font-display text-[0.8rem] font-bold tracking-[0.08em] uppercase mb-[0.9rem] ${accentTextClass[accent]}`}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-[0.55rem]">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2 text-[0.85rem] text-text-muted">
            <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${accentDotClass[accent]}`} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
