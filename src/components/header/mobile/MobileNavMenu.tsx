import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MobileButton from './MobileButton';
import Link from 'next/link';

gsap.registerPlugin(useGSAP);

let listItemTween: gsap.core.Tween;

const MobileNavMenu = ({ isMobileMenuOpen, toggleMobile }: { isMobileMenuOpen: boolean; toggleMobile: () => void }) => {
    useGSAP(
        () => {
            gsap.from('.menu', { duration: 1, opacity: 0 });
            gsap.to('.menu', { duration: 1, opacity: 1, height: '100vh', ease: 'power1.in' });

            listItemTween = gsap.from('.li', { opacity: 0, y: -200, stagger: 0.2, ease: 'power1.out' });
        },
        { dependencies: [isMobileMenuOpen] }
    );

    const toggleMobileMenu = () => {
        listItemTween.reverse().then(() => {
            toggleMobile();
        });
    };

    return (
        <>
            {isMobileMenuOpen && <MobileButton isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />}
            <div className="menu text-raisin-black flex items-center justify-center backdrop-blur-2xl py-4 px-4 absolute top-0 right-0 w-full h-screen shadow-md z-40 lg:hidden md:hidden">
                <ul className="text-4xl">
                    <li className="mb-8 li">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="mb-8 li">
                        <Link href="#">About me</Link>
                    </li>
                    <li className="mb-8 li">
                        <Link href="#">Contacts</Link>
                    </li>
                    <li className="mb-8 li">
                        <Link href="#">Guest book</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileNavMenu;
