'use client';

import { useEffect, useState } from 'react';
import MobileButton from './mobile/mobile-button';
import ThemeButton from './theme-button';
import Nav from './nav';
import MobileNavMenu from './mobile/mobile-nav-menu';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import logoBgLight from '/public/logo-bg-light.png';
import logoBgDark from '/public/logo-bg-dark.png';
import Link from 'next/link';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const toggleMobile = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header
            className={`max-w-[1440px] z-50 flex justify-between pr-4 items-center m-auto relative ${
                isMobileMenuOpen && 'sticky top-0 left-0'
            }`}>
            <div className="md:max-w-32 max-w-28 z-50">
                <Link href="/">
                    {mounted && resolvedTheme === 'dark' ? (
                        <Image src={logoBgDark} alt="Logo" />
                    ) : (
                        <Image src={logoBgLight} alt="Logo" />
                    )}
                </Link>
            </div>
            <div
                className={`flex items-center gap-4 md:justify-between ${
                    isMobileMenuOpen && 'flex-row-reverse w-full justify-between'
                }`}>
                {!isMobileMenuOpen && <MobileButton toggleMobileMenu={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
                <Nav />
                {isMobileMenuOpen && <MobileNavMenu toggleMobile={toggleMobile} isMobileMenuOpen={isMobileMenuOpen} />}
                <ThemeButton isMobileMenuOpen={isMobileMenuOpen} toggleTheme={toggleTheme} />
            </div>
        </header>
    );
};

export default Header;
