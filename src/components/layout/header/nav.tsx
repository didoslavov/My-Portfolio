import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <nav className={`w-full lg:flex lg:justify-end hidden items-center md:flex md:justify-end`}>
            <ul className="flex lg:justify-end text-xl items-center uppercase justify-around gap-4 text-raisin-black dark:text-silver">
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
