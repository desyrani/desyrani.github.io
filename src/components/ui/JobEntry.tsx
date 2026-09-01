import type { JobEntryData } from "../../types";
import WorkEvidenceGallery from "./WorkEvidenceGallery";
import FeaturedProjectCard from "./FeaturedProjectCard";

interface JobEntryProps {
  entry: JobEntryData;
  onOpenEvidence: (label: string) => void;
}

export default function JobEntry({ entry, onOpenEvidence }: JobEntryProps) {
  if (entry.projects) {
    return (
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="font-display text-[1.3rem] font-bold text-text">{entry.role}</h3>
          <span className="text-[0.85rem] text-text-faint whitespace-nowrap">{entry.dates}</span>
        </div>
        <div className="text-[0.95rem] text-accent-violet mb-4">
          {entry.metaCompany} &middot; {entry.metaLocation}
        </div>
        <div className="flex flex-col gap-5">
          {entry.projects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} onOpenEvidence={onOpenEvidence} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-surface rounded-2xl border border-border border-l-[3px] border-l-accent-violet text-left">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-[1.3rem] font-bold text-text">{entry.role}</h3>
        <span className="text-[0.85rem] text-text-faint whitespace-nowrap">{entry.dates}</span>
      </div>
      <div className="text-[0.95rem] text-accent-violet my-[0.35rem] mb-4">
        {entry.metaCompany} &middot; {entry.metaLocation}
      </div>

      {entry.workEvidence && (
        <WorkEvidenceGallery
          eyebrow={entry.workEvidence.eyebrow}
          title={entry.workEvidence.title}
          tiles={entry.workEvidence.tiles}
          onOpen={onOpenEvidence}
        />
      )}

      <ul className="list-none flex flex-col gap-[0.65rem]">
        {entry.bullets?.map((bullet, i) => (
          <li key={i} className="relative pl-[1.1rem] text-text-dim text-[0.95rem] leading-[1.65]">
            <span className="absolute left-0 top-[0.55em] w-[5px] h-[5px] rounded-full bg-accent-violet" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}