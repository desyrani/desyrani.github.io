import { navLinks } from "../../data/nav";

export default function Nav() {
  return (
    <nav className="hidden lg:flex items-center justify-between h-20 px-8 xl:px-16 bg-[rgba(8,8,12,0.85)] backdrop-blur-[10px] border-b border-border relative z-20">
      <div className="logo cursor-default font-display text-lg font-extrabold tracking-[-0.02em] text-text shrink-0">
        Desy Maharani
      </div>
      <ul className="flex items-center gap-5 xl:gap-7 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-text-muted no-underline whitespace-nowrap transition-colors duration-300 ease hover:text-accent-violet"
            >
              {link.navLabel ?? link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}