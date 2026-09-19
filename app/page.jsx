import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { site, contact, socialLinks } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const focusRing = "outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary";

export const metadata = pageMetadata({
  title: { absolute: `${site.name} | Software Engineer` },
  description: "Software engineer building products across web, mobile, and backend systems. Currently a Mobile Application Developer at Promet Bilgi Sistemleri.",
  path: "/",
});

// Person structured data: only facts already on the site. GitHub and LinkedIn are profiles;
// the WhatsApp link is a chat link, not a profile, so it is not listed in sameAs.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${site.ogImage.path}`,
  jobTitle: site.currentRole.title,
  sameAs: socialLinks.filter((link) => link.type === "github" || link.type === "linkedin").map((link) => link.href),
};

const Home = () => {
  const [firstName, ...rest] = site.name.split(" ");
  const lastName = rest.join(" ");
  const city = contact.location.split(",")[0];

  return (
    <section className="h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16 pb-12 xl:pt-4 xl:pb-16">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-[560px]">
            <p className="text-sm xl:text-base uppercase tracking-[2px] text-accent-dark font-semibold mb-3">
              {site.headline}
            </p>
            <h1 className="text-[44px] sm:text-[56px] xl:text-[80px] leading-[1.05] font-semibold mb-6">
              <span className="block">{firstName}</span>
              <span className="block text-accent-dark">{lastName}</span>
            </h1>
            <p className="mb-6 text-base xl:text-lg leading-relaxed text-black/80">
              I build software products across web, mobile, and backend systems, with a focus on turning ideas into working products.
            </p>
            <p className="mb-8 xl:mb-10 text-sm leading-relaxed text-black/80 xl:border-l-2 xl:border-accent-dark xl:pl-4">
              Currently a {site.currentRole.title} at {site.currentRole.company}, an Ankara-based company, working remotely from {city}.
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
              <Button asChild variant="outline" size="lg" className={focusRing}>
                <a href={site.cvHref} download>
                  <span>Download CV</span>
                  <FiDownload className="ml-2 text-xl" aria-hidden="true" />
                </a>
              </Button>
              <Socials containerStyles="flex gap-3" />
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
