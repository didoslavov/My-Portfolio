import Image from 'next/image';
import React from 'react';

interface MobileImageProps {
    isMobileMenuOpen: boolean;
}

const MobileImage: React.FC<MobileImageProps> = ({ isMobileMenuOpen }) => {
    return (
        <>
            <Image
                width={100}
                height={100}
                src="/portfolio-img-bg-light.jpg"
                alt="Picture of me, Dido"
                className={`rounded-full w-12 h-12 drop-shadow-2xl  dark:hidden md:hidden lg:hidden ${
                    isMobileMenuOpen ? 'hidden' : 'block'
                }`}
            />
            <Image
                width={100}
                height={100}
                src="/portfolio-img-bg-dark.jpg"
                alt="Picture of me, Dido"
                className={`rounded-full w-12 h-12 drop-shadow-2xl hidden dark:block md:dark:hidden lg:dark:hidden  ${
                    isMobileMenuOpen ? 'hidden' : 'block'
                }`}
            />
        </>
    );
};

export default MobileImage;
