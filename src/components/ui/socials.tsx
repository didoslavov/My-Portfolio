import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";

import React from "react";
import Link from "next/link";

const Socials = React.forwardRef<HTMLUListElement>((props, ref) => {
  return (
    <ul
      ref={ref}
      className="absolute bottom-8 left-8 flex flex-col gap-6 text-raisin-black opacity-0 dark:text-silver sm:left-8 md:left-6 md:top-4 md:justify-center"
    >
      <li>
        <Link
          target="_blank"
          href="https://github.com/didoslavov"
          className="text-2xl text-silver dark:text-raisin-black md:text-4xl"
        >
          <AiFillGithub />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/deyan-slavov-14648a207/"
          className="text-2xl text-silver dark:text-raisin-black md:text-4xl"
        >
          <AiFillLinkedin />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href="https://chocolate-chrysa-65.tiiny.site/"
          className="text-2xl text-silver dark:text-raisin-black md:text-4xl"
        >
          <IoIosPaper />
        </Link>
      </li>
    </ul>
  );
});

Socials.displayName = "Socials";

export default Socials;
