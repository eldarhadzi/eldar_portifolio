// Single source for site-wide shell data: identity, navigation, contact and social links.

export const site = {
  name: "Eldar Hadžović",
  shortName: "Eldar",
  headline: "Software Engineer & Builder",
  description: "Software engineer building web, mobile, and backend products.",
  currentRole: {
    title: "Mobile Application Developer",
    company: "Promet Bilgi Sistemleri",
    since: "Feb 2026",
  },
  cvHref: "/assets/resume/eldar-hadzovic-cv.pdf",
};

export const contact = {
  email: "eldarhadzovic03@gmail.com",
  phone: "+387 61 880 853",
  location: "Sarajevo, Bosnia and Herzegovina",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const headerCta = { label: "Hire me", href: "/contact" };

export const socialLinks = [
  { type: "github", label: "GitHub", href: "https://github.com/eldarhadzi" },
  {
    type: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eldar-had%C5%BEovi%C4%87-1375a925b/",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/38761880853?text=Hello%20Eldar%2C%20I%20want%20to%20connect%20with%20you!",
  },
];
