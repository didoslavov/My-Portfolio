import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

interface MobileButtonProps {
    toggleMobileMenu: () => void;
    isMobileMenuOpen: boolean;
}

const MobileButton: React.FC<MobileButtonProps> = ({ toggleMobileMenu, isMobileMenuOpen }) => {
    return (
        <button onClick={toggleMobileMenu} className="lg:hidden btn md:hidden z-50 py-2">
            {isMobileMenuOpen ? (
                <AiOutlineClose size={30} className="text-raisin-black dark:text-silver" />
            ) : (
                <RxHamburgerMenu size={30} className="text-raisin-black dark:text-silver" />
            )}
        </button>
    );
};

export default MobileButton;
