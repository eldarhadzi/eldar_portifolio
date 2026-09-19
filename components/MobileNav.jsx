"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { navLinks, site } from "@/data/site";

const focusRing = "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary";

const MobileNav = () => {

  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // close the menu once navigation has happened
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className={`flex justify-center items-center p-2 -m-2 ${focusRing}`}
      >
        <CiMenuFries className="text-[32px] text-accent-dark"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>

        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" aria-label={`${site.name}, home`} onClick={() => setOpen(false)} className={focusRing}>
            <span className="text-4xl font-semibold">
              {site.shortName}<span className="text-accent-dark">.</span>
            </span>
          </Link>
        </div>

        {/* nav */}
        <nav aria-label="Main" className="flex flex-col justify-center items-center gap-4">
          {navLinks.map((link)=>{
            const active = link.href === pathname;
            return (
            <Link 
              href={link.href} 
              key={link.href} 
              aria-current={active ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`${active ? "text-accent-dark border-b-2 border-accent-dark" : ""} py-2 text-xl capitalize hover:text-accent-dark ${focusRing}`}>
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
