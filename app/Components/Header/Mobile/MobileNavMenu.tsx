import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MobileButton from './MobileButton';

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
            <div className="menu text-raisin-black dark:text-silver flex items-center justify-center backdrop-blur-md py-4 px-4 absolute top-0 right-0 w-full h-screen shadow-md z-40 lg:hidden md:hidden">
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
