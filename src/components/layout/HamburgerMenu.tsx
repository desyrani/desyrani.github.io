import { useState } from "react";
import { navLinks } from "../../data/nav";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <nav className="flex lg:hidden items-center justify-between h-16 px-5 sm:px-8 bg-[rgba(8,8,12,0.85)] backdrop-blur-[10px] border-b border-border relative z-20">
      <div className="logo cursor-default font-display text-base font-extrabold tracking-[-0.02em] text-text">
        Desy Maharani
      </div>
      <div className="relative inline-block">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex flex-col justify-center items-center gap-[5px] h-10 w-10 -mr-2 cursor-pointer rounded-lg hover:bg-surface-2 transition-colors duration-300 ease"
          onClick={toggleMenu}
        >
          <span
            className={`h-[2px] w-5 bg-text transition-all duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span className={`h-[2px] w-5 bg-text transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"}`} />
          <span
            className={`h-[2px] w-5 bg-text transition-all duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
        <div
          className={`absolute top-[calc(100%+10px)] right-0 bg-[#0d0d12] backdrop-blur-[10px] border border-border rounded-xl w-48 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-all duration-300 ease-in-out ${
            open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-2">
            {navLinks.map((link) => (
              <li key={link.href} className="list-none">
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="block px-4 py-2.5 text-left text-sm text-text-muted no-underline transition-all duration-300 ease-in-out hover:text-accent-violet hover:bg-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}