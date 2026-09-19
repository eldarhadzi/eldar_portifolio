"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";

const Nav = () => {

  const pathname = usePathname()

  return ( 
  <nav aria-label="Main" className="flex gap-8">
    {navLinks.map((link)=>{
      const active = link.href === pathname;
      return (
      <Link
        href={link.href}
        key={link.href}
        aria-current={active ? "page" : undefined}
        className={`relative after:absolute after:-inset-y-[6px] after:inset-x-0 ${active ? "text-accent-dark border-b-2 border-accent-dark" : ""} capitalize font-medium hover:text-accent-dark transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary`}
      >
        {link.label}
      </Link>
      );
    })}
  </nav>
  )
}

export default Nav
