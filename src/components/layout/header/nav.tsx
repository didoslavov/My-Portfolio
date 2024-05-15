import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav
      className={`hidden w-full items-center md:flex md:justify-end lg:flex lg:justify-end`}
    >
      <ul className="flex items-center justify-around gap-4 text-xl uppercase text-raisin-black dark:text-silver lg:justify-end">
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/about">
          <li>About me</li>
        </Link>
        <Link href="#">
          <li>Contacts</li>
        </Link>
        <Link href="#">
          <li>Guest book</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
