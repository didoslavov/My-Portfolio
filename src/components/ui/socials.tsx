import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';

import React from 'react';
import Link from 'next/link';

const Socials = React.forwardRef<HTMLUListElement>((props, ref) => {
    return (
        <ul
            ref={ref}
            className="opacity-0 flex flex-col absolute bottom-8 left-8 md:top-4 md:left-6 sm:left-8 md:justify-center gap-6 text-raisin-black dark:text-silver">
            <li>
                <Link
                    target="_blank"
                    href="https://github.com/didoslavov"
                    className="text-silver text-2xl md:text-4xl dark:text-raisin-black">
                    <AiFillGithub />
                </Link>
            </li>
            <li>
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/deyan-slavov-14648a207/"
                    className="text-silver text-2xl md:text-4xl dark:text-raisin-black">
                    <AiFillLinkedin />
                </Link>
            </li>
            <li>
                <Link
                    target="_blank"
                    href="https://chocolate-chrysa-65.tiiny.site/"
                    className="text-silver text-2xl md:text-4xl dark:text-raisin-black">
                    <IoIosPaper />
                </Link>
            </li>
        </ul>
    );
});

Socials.displayName = 'Socials';

export default Socials;
