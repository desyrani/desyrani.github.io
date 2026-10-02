import { useState } from "react";
import { contactLinks, contactEmail } from "../../data/nav";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  };

  return (
    <section id="contact" className="mx-[5%] lg:mx-40 py-[8vh] box-border relative flex flex-col items-center">
      <p className="text-text-dim text-[0.85rem] font-semibold tracking-[0.12em] uppercase text-center">
        Get in Touch
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-text text-center">
        Contact Me
      </h1>

      <p className="text-text-muted text-base sm:text-lg leading-[1.7] text-center max-w-2xl mt-6">
        I&rsquo;m open to full-stack and AI engineering roles. The fastest way to reach me is email &mdash; I
        usually reply within a day.
      </p>

      {/* Availability and location */}
      <div className="flex flex-wrap justify-center gap-2.5 mt-6">
        <span className="inline-flex items-center gap-2 text-[13px] font-medium text-accent-green px-3 py-1.5 rounded-full border border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.08)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
          </span>
          Available to join immediately
        </span>
        <span className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted px-3 py-1.5 rounded-full border border-border bg-surface">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M8 2v4M16 2v4M3 10h18" />
          </svg>
          Requires visa sponsorship
        </span>
      </div>
      <p className="inline-flex items-center gap-1.5 text-sm text-text-dim mt-4 text-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Based in Cyberjaya, Malaysia &middot; Open to remote / hybrid / relocation
      </p>

      {/* Contact details */}
      <div className="w-full max-w-xl rounded-2xl border border-border bg-surface mt-8 divide-y divide-border">
        {contactLinks.map((link) => {
          const isEmail = link.href.startsWith("mailto:");
          return (
            <div key={link.href} className="flex items-center gap-3 px-5 py-4">
              <img
                src={link.icon}
                alt=""
                className={`shrink-0 bg-white rounded-lg h-10 w-10 object-contain ${isEmail ? "p-0.5" : "p-[0.3rem]"}`}
              />
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-faint">
                  {isEmail ? "Email" : "LinkedIn"}
                </div>
                {isEmail ? (
                  <span className="block truncate text-text select-all">{link.label}</span>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block truncate text-text hover:text-accent-violet transition-colors duration-200 ease"
                  >
                    {link.label}
                  </a>
                )}
              </div>
              {isEmail && (
                <button
                  type="button"
                  onClick={copyEmail}
                  className="shrink-0 inline-flex items-center gap-1.5 text-[13px] font-medium text-text-muted px-3 py-1.5 rounded-full border border-border hover:text-text hover:border-accent-violet transition-colors duration-200 ease"
                >
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-accent-green">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              )}
              {!isEmail && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-text-faint">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
