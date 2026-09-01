import { useState } from "react";
import { jobEntries, skillCategories } from "../../data/experience";
import JobEntry from "../ui/JobEntry";
import SkillCategoryCard from "../ui/SkillCategoryCard";
import EvidenceModal from "../ui/EvidenceModal";

export default function Experience() {
  const [openEvidenceLabel, setOpenEvidenceLabel] = useState<string | null>(null);

  return (
    <section id="experience" className="mx-[5%] lg:mx-40 pt-[4vh] box-border relative h-fit min-h-[96vh] mt-8 lg:mt-0">
      <p className="text-text-dim text-[0.85rem] font-semibold tracking-[0.12em] uppercase text-center">Explore My</p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-text text-center">
        Experience
      </h1>

      <div className="flex flex-col gap-8 mt-8 mb-8">
        {jobEntries.map((entry) => (
          <JobEntry key={entry.role} entry={entry} onOpenEvidence={setOpenEvidenceLabel} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {skillCategories.map((category) => (
          <SkillCategoryCard
            key={category.title}
            title={category.title}
            accent={category.accent}
            items={category.items}
          />
        ))}
      </div>

      <EvidenceModal label={openEvidenceLabel} onClose={() => setOpenEvidenceLabel(null)} />
    </section>
  );
}
