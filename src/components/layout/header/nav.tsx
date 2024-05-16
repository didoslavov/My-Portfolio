import { links } from "@/constans/navigation-links";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav
      className={`hidden w-full items-center md:flex md:justify-end lg:flex lg:justify-end`}
    >
      <ul className="flex items-center justify-around gap-4 text-xl uppercase text-raisin-black dark:text-silver lg:justify-end">
        {links.map((link) => (
          <li
            key={link.id}
            className="transition-all duration-500 ease-in-out hover:text-wine dark:hover:text-sheen-gold"
          >
            <Link href={link.href}>{link.link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
