import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

interface ThemeButtonProps {
    toggleTheme: () => void;
    isMobileMenuOpen: boolean;
    isDarkMode: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ toggleTheme, isMobileMenuOpen, isDarkMode }) => {
    useGSAP(
        () => {
            gsap.from('.theme-btn', { duration: 0.5, opacity: 0 });
            gsap.to('.theme-btn', { duration: 0.5, opacity: 1, ease: 'power1.in' });
        },
        { dependencies: [isMobileMenuOpen] }
    );

    return (
        <button
            onClick={toggleTheme}
            className={`z-50 ${
                isMobileMenuOpen ? 'block' : 'hidden'
            } lg:block md:block transition-opacity duration-700 theme-btn`}>
            {isDarkMode ? (
                <BsSunFill size={30} className="text-sheen-gold sun" />
            ) : (
                <BsFillMoonFill size={30} className="text-wine moon" />
            )}
        </button>
    );
};

export default ThemeButton;
