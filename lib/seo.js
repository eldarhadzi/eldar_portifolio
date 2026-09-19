import { site } from "@/data/site";

// Per-route metadata: description, canonical URL and Open Graph, from one place so the tags
// always agree. A route's openGraph replaces the root one in Next, so it is built in full here.
// Next derives Twitter tags from Open Graph. The card is set to "summary" because the shared
// image (the hero photo) is 550x453, too small for a large-image card.
export const pageMetadata = ({ title, description, path }) => {
  const fullTitle = typeof title === "string" ? `${title} | ${site.name}` : title.absolute;

  return {
    title,
    description,
    alternates: { canonical: path },
    twitter: { card: "summary" },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: site.ogImage.path, width: site.ogImage.width, height: site.ogImage.height, alt: site.ogImage.alt }],
    },
  };
};
