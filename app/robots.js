import { site } from "@/data/site";

// Indexing is allowed. The API route only accepts form POSTs, so crawlers are kept off it.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
