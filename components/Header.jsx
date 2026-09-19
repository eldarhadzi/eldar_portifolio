import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { site, headerCta } from "@/data/site";

const focusRing = "outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-black">
        <div className="container mx-auto flex justify-between items-center">

          {/* logo */}
          <Link href="/" aria-label={`${site.name}, home`} className={`relative rounded-sm after:absolute after:-inset-y-1 after:inset-x-0 ${focusRing}`}>
            <span className="block text-4xl font-semibold">
              {site.shortName}
              <span className="text-accent-dark">.</span>
            </span>
          </Link>

          {/* desktop nav */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Button asChild className={focusRing}>
              <Link href={headerCta.href}>{headerCta.label}</Link>
            </Button>
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>

        </div>
    </header>
  )
}

export default Header
