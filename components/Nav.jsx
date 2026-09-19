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
        className={`${active ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-primary`}
      >
        {link.label}
      </Link>
      );
    })}
  </nav>
  )
}

export default Nav
