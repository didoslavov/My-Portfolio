'use client';

import { useState } from 'react';
import MobileButton from './mobile/MobileButton';
import ThemeButton from './theme-button';
import MobileImage from './mobile/MobileImage';
import Nav from './nav';
import MobileNavMenu from './mobile/MobileNavMenu';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import logoBgLight from '/public/logo-bg-light.png';
import logoBgDark from '/public/logo-bg-dark.png';
import Link from 'next/link';

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
        <header className="max-w-[1440px] flex justify-between items-center m-auto mb-8 relative z-50">
            <div className="max-w-32">
                <Link href="/">
                    {resolvedTheme === 'dark' ? <Image src={logoBgDark} alt="Logo" /> : <Image src={logoBgLight} alt="Logo" />}
                </Link>
            </div>
            <ThemeButton isMobileMenuOpen={isMobileMenuOpen} toggleTheme={toggleTheme} />
            {!isMobileMenuOpen && <MobileImage isMobileMenuOpen={isMobileMenuOpen} />}
            {!isMobileMenuOpen && <MobileButton toggleMobileMenu={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
            <Nav />
            {isMobileMenuOpen && <MobileNavMenu toggleMobile={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
        </header>
    );
};

export default Header;
