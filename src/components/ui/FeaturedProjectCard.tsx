import { useRef } from "react";
import type { FeaturedProject, SkillAccent } from "../../types";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  onOpenProof: (tile: { label: string; image?: string }) => void;
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

export default function FeaturedProjectCard({ project, onOpenProof }: FeaturedProjectCardProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  // Two or fewer tiles fit side by side, so show a static grid instead of a carousel
  const isGrid = project.tiles.length <= 2;

  const scrollByTile = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const tile = el.querySelector<HTMLElement>("[data-tile]");
    const amount = tile ? tile.offsetWidth + 10 : el.clientWidth * 0.65;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

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

      <div className="relative mb-5">
        <div
          ref={scrollerRef}
          className={
            isGrid
              ? "grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              : "flex gap-2.5 overflow-x-auto pb-1 -mx-1 px-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
        >
          {project.tiles.map((tile) => (
            <button
              key={tile.image ?? tile.caption}
              type="button"
              data-tile
              onClick={() => onOpenProof({ label: tile.caption, image: tile.image })}
              className={`group text-left ${isGrid ? "w-full aspect-video" : "shrink-0 snap-start w-[65%] sm:w-[42%] lg:w-[32%] aspect-video sm:aspect-[4/3]"} bg-[#0d0d12] border border-border rounded-xl overflow-hidden transition-colors duration-200 ease hover:border-border-strong cursor-pointer relative`}
            >
              {tile.image ? (
                <>
                  <img src={tile.image} alt={tile.caption} className="absolute inset-0 w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 text-[11px] font-medium px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm border border-white/10 text-white/85">
                    {tile.chip}
                  </span>
                </>
              ) : (
                <div className="p-3 h-full flex flex-col justify-between">
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
                </div>
              )}
            </button>
          ))}
        </div>

        {!isGrid && (
          <>
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollByTile(-1)}
              className="hidden sm:flex items-center justify-center absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-2 border border-border text-text-dim hover:text-text hover:border-border-strong transition-colors duration-200 ease shadow-md"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollByTile(1)}
              className="hidden sm:flex items-center justify-center absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-2 border border-border text-text-dim hover:text-text hover:border-border-strong transition-colors duration-200 ease shadow-md"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
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