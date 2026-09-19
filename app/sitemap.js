import { site, navLinks } from "@/data/site";

// One entry per route, from the same list as the navigation. No lastModified: there is no
// real per-page modification date to report.
export default function sitemap() {
  return navLinks.map((link) => ({ url: `${site.url}${link.href === "/" ? "" : link.href}` }));
}
