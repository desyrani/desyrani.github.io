import type { NavLink, SocialLink, ContactLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publication", href: "#publication" },
  { label: "Highlights", href: "#certifications-and-achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "My LinkedIn Profile", shortLabel: "LinkedIn", icon: "/detail/linkedin.jpg", href: "https://linkedin.com/in/desykhmaharani/" },
  { label: "My GitHub Profile", shortLabel: "GitHub", icon: "/detail/github.png", href: "https://github.com/desyrani/" },
  { label: "My Google Scholar Profile", shortLabel: "Scholar", icon: "/detail/gscholar.jpg", href: "https://scholar.google.com/citations?hl=en&user=-U01tcoAAAAJ" },
];

export const contactEmail = "desyandmaharani@gmail.com";

export const cvUrl = "/detail/Letters/Desy_Resume_Full_Stack_Software_Engineer.pdf";

export const contactLinks: ContactLink[] = [
  { icon: "/detail/email.jpg", label: contactEmail, href: `mailto:${contactEmail}` },
  { icon: "/detail/linkedin.jpg", label: "linkedin.com/in/desykhmaharani", href: "https://linkedin.com/in/desykhmaharani/" },
];
