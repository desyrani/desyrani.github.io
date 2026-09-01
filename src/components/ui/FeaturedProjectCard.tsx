import type { FeaturedProject, SkillAccent } from "../../types";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  onOpenEvidence: (label: string) => void;
}

const badgeStyles: Record<SkillAccent, string> = {
  violet: "bg-[rgba(139,92,246,0.15)] text-accent-violet border-[rgba(139,92,246,0.3)]",
  cyan: "bg-[rgba(6,182,212,0.12)] text-accent-cyan border-[rgba(6,182,212,0.3)]",
  orange: "bg-[rgba(251,146,60,0.12)] text-accent-orange border-[rgba(251,146,60,0.3)]",
  green: "bg-[rgba(52,211,153,0.12)] text-accent-green border-[rgba(52,211,153,0.3)]",
};

const statColor: Record<SkillAccent, string> = {
  violet: "text-accent-violet",
  cyan: "text-accent-cyan",
  orange: "text-accent-orange",
  green: "text-accent-green",
};

export default function FeaturedProjectCard({ project, onOpenEvidence }: FeaturedProjectCardProps) {
  return (
    <div className="p-6 bg-surface rounded-2xl border border-border border-l-[3px] border-l-accent-violet text-left">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold text-text">{project.title}</h3>
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border whitespace-nowrap ${badgeStyles[project.badgeAccent]}`}>
          {project.badge}
        </span>
      </div>
      <div className="text-sm text-text-faint mt-1 mb-4">{project.meta}</div>
      <p className="text-text-dim leading-[1.65] mb-5">{project.description}</p>

      <div
        className={`grid gap-2.5 mb-5 ${
          project.tiles.length === 1
            ? "grid-cols-1"
            : project.tiles.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : project.tiles.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {project.tiles.map((tile) => (
          <button
            key={tile.caption}
            type="button"
            onClick={() => onOpenEvidence(tile.caption)}
            className="group text-left aspect-video sm:aspect-[4/3] bg-[#0d0d12] border border-border rounded-xl p-3 flex flex-col justify-between overflow-hidden transition-colors duration-200 ease hover:border-border-strong cursor-pointer"
          >
            <span className="self-start text-[11px] font-medium px-2 py-0.5 rounded-md bg-surface-2 border border-border text-text-muted">
              {tile.chip}
            </span>
            <div className="flex-1 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-faint/60">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <span className="text-xs text-text-dim leading-snug">{tile.caption}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-text-dim border border-border rounded-md px-2.5 py-1 font-mono">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <div className={`font-display font-bold text-base ${statColor[project.badgeAccent]}`}>{stat.label}</div>
            <div className="text-xs text-text-faint mt-0.5">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}