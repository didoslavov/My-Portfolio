import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

interface MobileButtonProps {
    toggleMobileMenu: () => void;
    isMobileMenuOpen: boolean;
}

const MobileButton: React.FC<MobileButtonProps> = ({ toggleMobileMenu, isMobileMenuOpen }) => {
    return (
        <button onClick={toggleMobileMenu} className="lg:hidden md:hidden z-50">
            {isMobileMenuOpen ? (
                <AiOutlineClose size={30} className="text-oxford-blue dark:text-timberwolf" />
            ) : (
                <RxHamburgerMenu size={30} className="text-oxford-blue dark:text-timberwolf" />
            )}
        </button>
    );
};

export default MobileButton;
