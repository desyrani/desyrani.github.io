import { contactLinks } from "../../data/nav";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-[5%] lg:mx-40 pt-[4vh] box-border relative flex justify-center flex-col h-fit sm:h-[40vh] lg:h-[70vh]"
    >
      <p className="text-text-dim text-[0.85rem] font-semibold tracking-[0.12em] uppercase text-center">
        Get in Touch
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-text text-center">
        Contact Me
      </h1>
      <div className="flex justify-center flex-wrap rounded-2xl border border-border bg-surface my-8 mx-auto p-6 relative overflow-hidden">
        {contactLinks.map((link) => (
          <div key={link.href} className="flex items-center justify-center gap-2 m-4 relative">
            <img src={link.icon} alt={`${link.label} icon`} className="cursor-default bg-white rounded-lg p-[0.35rem] h-8" />
            <p className="text-lg">
              <a href={link.href} className="text-accent-cyan hover:text-text transition-colors duration-300 ease">
                {link.label}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
