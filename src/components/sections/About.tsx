import { aboutIntro, aboutStats, testimonial } from "../../data/about";
import type { StatAccent } from "../../types";

const accentText: Record<StatAccent, string> = {
  violet: "text-accent-violet",
  cyan: "text-accent-cyan",
  orange: "text-accent-orange",
  green: "text-accent-green",
};

const statIcons = [
  // briefcase
  <svg key="briefcase" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>,
  // building
  <svg key="building" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <path d="M9 22v-4h6v4M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
  </svg>,
  // cloud
  <svg key="cloud" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11Z" />
  </svg>,
  // award
  <svg key="award" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" />
  </svg>,
];

export default function About() {
  return (
    <section id="about" className="mx-[5%] lg:mx-40 pt-[4vh] box-border relative h-fit min-h-fit">
      <p className="text-text-dim text-[0.85rem] font-semibold tracking-[0.12em] uppercase text-center">
        Get To Know More
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-text text-center">
        About Me
      </h1>

      <div className="max-w-3xl mx-auto mt-10 flex flex-col gap-8">
        <p className="text-text-muted text-base sm:text-lg leading-[1.75]">{aboutIntro}</p>

        <blockquote className="border-l-2 border-accent-cyan pl-5 sm:pl-6">
          <p className="italic text-text-muted leading-[1.75]">&ldquo;{testimonial.quote}&rdquo;</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4">
            <span className="font-semibold text-text">{testimonial.name}</span>
            <span className="text-text-faint">&mdash; {testimonial.title}</span>
            <span className="inline-flex items-center gap-1.5 text-text-faint text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6" />
              </svg>
              Full letter
            </span>
          </div>
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
          {aboutStats.map((stat, i) => (
            <div key={stat.headline} className="flex items-start gap-3">
              <span className={`shrink-0 mt-0.5 ${accentText[stat.accent]}`}>{statIcons[i]}</span>
              <div>
                <div className="font-display font-bold text-text">{stat.headline}</div>
                <div className="text-text-dim text-sm mt-0.5">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}