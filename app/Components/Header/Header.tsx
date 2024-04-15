'use client';

import { useState } from 'react';
import MobileButton from './Mobile/MobileButton';
import ThemeButton from './ThemeButton';
import MobileImage from './Mobile/MobileImage';
import Nav from './Nav';
import MobileNavMenu from './Mobile/MobileNavMenu';
import { useTheme } from 'next-themes';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const toggleMobile = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="py-6 px-10 flex justify-between items-center m-auto mb-8 relative z-50">
            <ThemeButton isMobileMenuOpen={isMobileMenuOpen} isDarkMode={resolvedTheme === 'dark'} toggleTheme={toggleTheme} />
            {!isMobileMenuOpen && <MobileImage isMobileMenuOpen={isMobileMenuOpen} />}
            {!isMobileMenuOpen && <MobileButton toggleMobileMenu={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
            <Nav />
            {isMobileMenuOpen && <MobileNavMenu toggleMobile={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
        </header>
    );
};

export default Header;
