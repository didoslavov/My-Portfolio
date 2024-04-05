import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MobileButton from './MobileButton';

gsap.registerPlugin(useGSAP);

let listItemTween: gsap.core.Tween;

const MobileNavMenu = ({ isMobileMenuOpen, toggleMobile }: { isMobileMenuOpen: boolean; toggleMobile: () => void }) => {
    useGSAP(() => {
        gsap.from('.menu', { opacity: 0 });
        gsap.to('.menu', { opacity: 1, height: '100vh', ease: 'expo.inOut' });

        listItemTween = gsap.from('.li', { opacity: 0, y: -200, stagger: 0.2, ease: 'expo.inOut' });
    });

    const toggleMobileMenu = () => {
        listItemTween.reverse().then(() => {
            toggleMobile();
        });
    };

    return (
        <>
            {isMobileMenuOpen && <MobileButton isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />}
            <div className="menu text-oxford-blue dark:text-timberwolf flex items-center justify-center backdrop-blur-2xl py-4 px-4 absolute top-0 -right-12 w-screen h-screen shadow-md z-40 lg:hidden md:hidden">
                <ul className="text-4xl">
                    <li className="mb-8 li">
                        <a href="#">Projects</a>
                    </li>
                    <li className="mb-8 li">
                        <a href="#">About me</a>
                    </li>
                    <li className="mb-8 li">
                        <a href="#">Contacts</a>
                    </li>
                    <li className="mb-8 li">
                        <a href="#">Guest book</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileNavMenu;
