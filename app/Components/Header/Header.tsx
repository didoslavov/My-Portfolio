'use client';

import { useState } from 'react';
import MobileButton from './Mobile/MobileButton';
import ThemeButton from './ThemeButton';
import MobileImage from './Mobile/MobileImage';
import Nav from './Nav';
import MobileNavMenu from './Mobile/MobileNavMenu';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    const toggleMobile = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="py-6 px-10 flex justify-between items-center relative m-auto mb-8">
            <ThemeButton isMobileMenuOpen={isMobileMenuOpen} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            {!isMobileMenuOpen && <MobileImage isMobileMenuOpen={isMobileMenuOpen} />}
            {!isMobileMenuOpen && <MobileButton toggleMobileMenu={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
            <Nav />
            {isMobileMenuOpen && <MobileNavMenu toggleMobile={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
        </header>
    );
};

export default Header;
