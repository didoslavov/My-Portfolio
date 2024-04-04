'use client';

import { BsSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';

import { useState } from 'react';
import Image from 'next/image';
import MobileNavMenu from './Mobile/MobileNavMenu';
import MobileButton from './Mobile/MobileButton';
import ThemeButton from './ThemeButton';
import MobileImage from './Mobile/MobileImage';
import Nav from './Nav';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="py-4 px-2 flex justify-between items-center relative w-[80%] m-auto">
            <ThemeButton isMobileMenuOpen={isMobileMenuOpen} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            {!isMobileMenuOpen && <MobileImage isMobileMenuOpen={isMobileMenuOpen} />}
            <MobileButton toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
            <Nav />
            {isMobileMenuOpen && <MobileNavMenu />}
        </header>
    );
};

export default Header;
