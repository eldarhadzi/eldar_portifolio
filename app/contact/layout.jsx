import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Eldar Hadžović by email, phone, or the contact form. Based in Sarajevo, Bosnia and Herzegovina.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
