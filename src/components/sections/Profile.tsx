import { socialLinks, cvUrl } from "../../data/nav";
import Button from "../ui/Button";

export default function Profile() {
  return (
    <section
      id="profile"
      className="mx-[5%] lg:mx-40 pt-[4vh] box-border relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 h-fit lg:h-[80vh] mb-24 lg:mb-0"
    >
      <div className="flex h-[46vw] sm:h-[275px] lg:h-[400px] w-[46vw] sm:w-[275px] lg:w-[400px] m-auto lg:m-0 justify-center order-2 lg:order-1">
        <img
          src="/detail/profil.jpg"
          alt="Desy Maharani profile picture"
          className="rounded-3xl border border-border object-cover w-full h-full"
        />
      </div>
      <div className="relative isolate self-center text-center lg:text-left order-1 lg:order-2 w-full lg:max-w-3xl">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[8%] left-1/2 lg:left-[10%] -translate-x-1/2 lg:translate-x-0 w-[70%] h-[45%] rounded-full bg-[rgba(139,92,246,0.22)] blur-[90px]" />
          <div className="absolute top-[22%] right-[5%] lg:right-[15%] w-[45%] h-[35%] rounded-full bg-[rgba(6,182,212,0.16)] blur-[90px]" />
        </div>

        <div className="inline-flex items-center gap-2 border border-[rgba(167,139,250,0.3)] text-accent-violet rounded-full px-4 py-1.5 mb-6 font-mono text-xs tracking-[0.05em]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          FULL-STACK &amp; AI ENGINEER
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.02em] text-text leading-[1.15]">
          Hi, I&rsquo;m Desy Maharani.
          <br />
          I build{" "}
          <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
            AI-powered products
          </span>
          <br />
          from concept to production.
        </h1>

        <p className="text-base sm:text-lg text-text-dim leading-[1.7] mt-6 max-w-xl mx-auto lg:mx-0">
          Full-stack engineer building cloud-native web and mobile apps with{" "}
          <span className="text-text font-medium">AI/LLM integration</span>, using{" "}
          <span className="text-text font-medium">React, TypeScript, GraphQL, and AWS</span>.
        </p>

        <div className="flex justify-center lg:justify-start flex-wrap gap-3 mt-8">
          <Button label="View my work" href="#experience" variant={1} />
          <Button
            label="View CV"
            href={cvUrl}
            iconNode={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6M9 13h6M9 17h6" />
              </svg>
            }
          />
        </div>

        <div className="mt-8 pt-6 border-t border-border max-w-xl mx-auto lg:mx-0">
          <p className="text-sm text-text-faint mb-3">
            Explore more of my experience, code, and research on
          </p>
          <div className="flex justify-center lg:justify-start flex-wrap gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text-dim px-3 py-1.5 rounded-full bg-surface border border-border transition-colors duration-200 ease hover:text-text hover:border-accent-violet"
              >
                <img src={s.icon} alt="" className="h-3.5 w-3.5 rounded object-contain bg-white p-[1px]" />
                {s.shortLabel}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}