import { socialLinks } from "../../data/nav";
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
          alt="Daisy Cyy profile picture"
          className="rounded-3xl border border-border object-cover w-full h-full"
        />
      </div>
      <div className="self-center text-center lg:text-left order-1 lg:order-2 w-full lg:max-w-3xl">
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
          Full-stack software engineer specializing in cloud-native applications with AI/LLM
          integration &mdash; architecting scalable web and mobile platforms with React, TypeScript,
          GraphQL, and AWS.
        </p>

        <div className="flex justify-center lg:justify-start flex-wrap gap-2.5 mt-8">
          {socialLinks.map((s) => (
            <Button key={s.href} label={s.shortLabel} href={s.href} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}