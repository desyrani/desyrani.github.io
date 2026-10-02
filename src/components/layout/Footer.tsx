import { navLinks } from "../../data/nav";

export default function Footer() {
  return (
    <footer className="h-fit mx-4 bg-bg border-t border-border py-8">
      <nav className="!flex !h-auto !bg-transparent !backdrop-blur-none !border-none">
        <div className="w-full flex justify-center px-4">
          <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 list-none text-base sm:text-lg lg:text-xl text-center max-w-4xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-text no-underline transition-colors duration-300 ease hover:text-accent-violet">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <p className="text-center text-text-faint mt-4">Copyright &#169; 2026 Desy Maharani. All Rights Reserved.</p>
    </footer>
  );
}
