import type { JobEntryData } from "../../types";
import WorkProofGallery from "./WorkProofGallery";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { jobAccentStyles, cardHover } from "./jobAccent";

interface JobEntryProps {
  entry: JobEntryData;
  onOpenProof: (tile: { label: string; image?: string }) => void;
}

function CompanyName({ entry }: { entry: JobEntryData }) {
  if (!entry.companyUrl) return <>{entry.metaCompany}</>;

  return (
    <a
      href={entry.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 underline ${jobAccentStyles[entry.accent].underline} underline-offset-4 transition-colors duration-200 ease hover:text-text hover:decoration-current`}
    >
      {entry.metaCompany}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  );
}

export default function JobEntry({ entry, onOpenProof }: JobEntryProps) {
  const accent = jobAccentStyles[entry.accent];

  if (entry.projects) {
    return (
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="font-display text-[1.3rem] font-bold text-text">{entry.role}</h3>
          <span className="text-[0.85rem] text-text-faint whitespace-nowrap">{entry.dates}</span>
        </div>
        <div className={`text-[0.95rem] ${accent.text} mb-4`}>
          <CompanyName entry={entry} /> &middot; {entry.metaLocation}
        </div>
        <div className="flex flex-col gap-5">
          {entry.projects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} jobAccent={entry.accent} onOpenProof={onOpenProof} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-surface rounded-2xl border border-border border-l-[3px] ${accent.bar} text-left ${cardHover} ${accent.hoverGlow}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-[1.3rem] font-bold text-text">{entry.role}</h3>
        <span className="text-[0.85rem] text-text-faint whitespace-nowrap">{entry.dates}</span>
      </div>
      <div className={`text-[0.95rem] ${accent.text} my-[0.35rem] mb-4`}>
        <CompanyName entry={entry} /> &middot; {entry.metaLocation}
      </div>

      {entry.workProof && (
        <WorkProofGallery
          eyebrow={entry.workProof.eyebrow}
          title={entry.workProof.title}
          tiles={entry.workProof.tiles}
          onOpen={onOpenProof}
        />
      )}

      <ul className="list-none flex flex-col gap-[0.65rem]">
        {entry.bullets?.map((bullet, i) => (
          <li key={i} className="relative pl-[1.1rem] text-text-dim text-[0.95rem] leading-[1.65] sm:text-justify">
            <span className={`absolute left-0 top-[0.55em] w-[5px] h-[5px] rounded-full ${accent.dot}`} />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
