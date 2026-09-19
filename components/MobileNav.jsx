"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { navLinks, site } from "@/data/site";

const MobileNav = () => {

  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">

        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              {site.shortName}<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link)=>{
            return (
            <Link 
              href={link.href} 
              key={link.href} 
              className={` ${link.href === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent`}>
              {link.label}
            </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
