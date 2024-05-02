'use client';

import { useState } from 'react';
import MobileButton from './mobile/MobileButton';
import ThemeButton from './theme-button';
import MobileImage from './mobile/MobileImage';
import Nav from './nav';
import MobileNavMenu from './mobile/MobileNavMenu';
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
            <ThemeButton isMobileMenuOpen={isMobileMenuOpen} toggleTheme={toggleTheme} />
            {!isMobileMenuOpen && <MobileImage isMobileMenuOpen={isMobileMenuOpen} />}
            {!isMobileMenuOpen && <MobileButton toggleMobileMenu={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
            <Nav />
            {isMobileMenuOpen && <MobileNavMenu toggleMobile={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
        </header>
    );
};

export default Header;
