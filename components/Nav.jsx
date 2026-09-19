"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";

const Nav = () => {

  const pathname = usePathname()

  return ( 
  <nav className="flex gap-8">
    {navLinks.map((link)=>{
      return (
      <Link href={link.href} key={link.href} className={`${link.href === pathname ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`}>
        {link.label}
      </Link>
      );
    })}
  </nav>
  )
}

export default Nav
