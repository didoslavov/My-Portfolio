import React from 'react';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

interface ThemeButtonProps {
    toggleTheme: () => void;
    isMobileMenuOpen: boolean;
    isDarkMode: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ toggleTheme, isMobileMenuOpen, isDarkMode }) => {
    return (
        <button
            onClick={toggleTheme}
            className={`transition-all z-50 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block md:block`}>
            {isDarkMode ? (
                <BsSunFill size={30} className="text-sheen-gold" />
            ) : (
                <BsFillMoonFill size={30} className="text-oxford-blue" />
            )}
        </button>
    );
};

export default ThemeButton;
