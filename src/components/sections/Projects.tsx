import { useEffect, useState } from "react";
import { featuredProjects, courseworkProjects } from "../../data/projects";
import Button from "../ui/Button";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#projects") setExpanded(true);
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <section id="projects" className="mx-[5%] lg:mx-40 pt-[4vh] box-border relative h-fit min-h-fit mt-8 lg:mt-0">
      <p className="text-text-dim text-[0.85rem] font-semibold tracking-[0.12em] uppercase text-center">
        Research &amp; Academic
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-text text-center">
        Projects
      </h1>
      <p className="text-text-muted text-base sm:text-lg leading-[1.7] text-center max-w-2xl mx-auto mt-4">
        Selected Machine Learning, Computer Vision, and NLP projects, including two published as research papers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col p-4 bg-surface rounded-xl border border-border border-l-2 border-l-accent-violet"
          >
            <img
              src={project.image}
              alt={project.alt}
              className="rounded-lg border border-border w-full h-28 object-cover"
            />
            <h2 className="font-display font-bold text-base mt-3 text-text leading-snug">{project.title}</h2>
            <p className="text-text-muted text-[13px] leading-[1.6] mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-text-dim border border-border rounded-full px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
              {project.buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-text bg-transparent border border-border rounded-full px-2.5 py-1 whitespace-nowrap transition-all duration-300 ease hover:border-accent-violet hover:text-accent-violet"
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!expanded && (
        <div className="flex justify-center mt-8 mb-8">
          <Button label="Explore more ML & data projects →" href="#" onClick={() => setExpanded(true)} variant={1} />
        </div>
      )}

      {expanded && (
        <div className="mt-8 mb-8">
          <p className="text-center text-text-dim text-sm font-semibold mb-1">More ML &amp; data projects</p>
          <p className="text-center text-text-faint text-xs mb-4">Scroll right for more →</p>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-[5%] px-[5%] lg:mx-0 lg:px-0 scroll-smooth">
            {courseworkProjects.map((project) => (
              <div
                key={project.title}
                className="shrink-0 snap-start w-56 sm:w-60 p-4 bg-surface rounded-xl border border-border border-l-2 border-l-accent-cyan text-center"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="rounded-lg border border-border w-full h-28 object-cover mx-auto"
                />
                <h2 className="font-display font-bold text-sm my-3 text-text leading-snug line-clamp-2">
                  {project.title}
                </h2>
                <div className="flex justify-center flex-wrap gap-1.5">
                  {project.buttons.map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-text bg-transparent border border-border rounded-full px-2.5 py-1.5 whitespace-nowrap transition-all duration-300 ease hover:border-accent-violet hover:text-accent-violet"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <Button label="Show less ↑" href="#" onClick={() => setExpanded(false)} />
          </div>
        </div>
      )}
    </section>
  );
}