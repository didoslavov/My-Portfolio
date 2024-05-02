import React from 'react';

const Nav = () => {
    return (
        <nav className={`w-full lg:flex lg:justify-end hidden md:flex md:justify-end`}>
            <ul className="flex lg:justify-end text-xl uppercase justify-around gap-4 text-raisin-black dark:text-silver">
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
                <li>
                    <a href="#">Guest book</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
