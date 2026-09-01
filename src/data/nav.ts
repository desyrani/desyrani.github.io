import type { NavLink, SocialLink, ContactLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publication", href: "#publication" },
  { label: "Highlights", href: "#certifications-and-achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "My LinkedIn Profile", shortLabel: "LinkedIn", icon: "/detail/linkedin.jpg", href: "https://linkedin.com/in/desykhmaharani/" },
  { label: "My GitHub Profile", shortLabel: "GitHub", icon: "/detail/github.png", href: "https://github.com/desyrani/" },
  { label: "My Google Scholar Profile", shortLabel: "Scholar", icon: "/detail/gscholar.jpg", href: "https://scholar.google.com/citations?hl=en&user=-U01tcoAAAAJ" },
  { label: "My Kaggle Profile", shortLabel: "Kaggle", icon: "/detail/kaggle.jpg", href: "https://www.kaggle.com/work/discussions" },
];

export const contactLinks: ContactLink[] = [
  { icon: "/detail/email.jpg", label: "My Email", href: "https://mail.google.com/mail/?view=cm&to=desyandmaharani@gmail.com" },
  { icon: "/detail/linkedin.jpg", label: "Connect with Me", href: "https://linkedin.com/in/desykhmaharani/" },
];
