import { highlights } from "../../data/certifications";
import type { Highlight, SkillAccent } from "../../types";

const accentText: Record<SkillAccent, string> = {
  violet: "text-accent-violet",
  cyan: "text-accent-cyan",
  orange: "text-accent-orange",
  green: "text-accent-green",
};

const icons: Record<Highlight["icon"], JSX.Element> = {
  trophy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M12 17v4M17 5h2a1 1 0 0 1 1 1 5 5 0 0 1-5 5M7 5H5a1 1 0 0 0-1 1 5 5 0 0 0 5 5" />
      <path d="M7 3h10v6a5 5 0 0 1-10 0Z" />
    </svg>
  ),
  medal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="15" r="6" />
      <path d="m9 10-3.5-7M15 10l3.5-7M9 17.5 12 19l3-1.5" />
    </svg>
  ),
  star: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  ),
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11Z" />
    </svg>
  ),
  cap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  ),
};

export default function Certifications() {
  return (
    <section
      id="certifications-and-achievements"
      className="mx-[5%] lg:mx-40 pt-[4vh] box-border relative h-fit min-h-fit mt-8 lg:mt-0"
    >
      <p className="text-text-dim text-[0.85rem] font-semibold tracking-[0.12em] uppercase text-center">
        Check Out My
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-text text-center">
        Highlights
      </h1>

      <div className="max-w-2xl mx-auto mt-10 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
        {highlights.map((h) => (
          <div key={h.title} className="flex items-start gap-3">
            <span className={`shrink-0 mt-0.5 ${accentText[h.accent]}`}>{icons[h.icon]}</span>
            <div>
              <div className="font-display font-bold text-text leading-snug">{h.title}</div>
              <div className="text-text-dim text-sm mt-0.5">{h.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}