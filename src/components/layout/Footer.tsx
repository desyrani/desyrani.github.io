import { navLinks } from "../../data/nav";

export default function Footer() {
  return (
    <footer className="h-[26vh] sm:h-fit mx-4 bg-bg border-t border-border py-6">
      <nav className="!flex !h-auto !bg-transparent !backdrop-blur-none !border-none">
        <div className="w-full flex justify-center">
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-8 list-none text-base sm:text-2xl text-center">
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
      <p className="text-center text-text-faint mt-4">Copyright &#169; 2024 Desy Maharani. All Right Reserved.</p>
    </footer>
  );
}
