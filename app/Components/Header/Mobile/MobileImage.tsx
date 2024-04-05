import Image from 'next/image';
import React from 'react';

interface MobileImageProps {
    isMobileMenuOpen: boolean;
}

const MobileImage: React.FC<MobileImageProps> = ({ isMobileMenuOpen }) => {
    return (
        <>
            <Image
                width={500}
                height={500}
                src="/portfolio-img-bg-light.jpg"
                alt="Picture of me, Dido"
                className={`rounded-full w-14 h-14 drop-shadow-2xl  dark:hidden md:hidden lg:hidden ${
                    isMobileMenuOpen ? 'hidden' : 'block'
                }`}
            />
            <Image
                width={500}
                height={500}
                src="/portfolio-img-bg-dark.jpg"
                alt="Picture of me, Dido"
                className={`rounded-full w-14 h-14 drop-shadow-2xl hidden dark:block md:dark:hidden lg:dark:hidden ${
                    isMobileMenuOpen ? 'hidden' : 'block'
                }`}
            />
        </>
    );
};

export default MobileImage;
