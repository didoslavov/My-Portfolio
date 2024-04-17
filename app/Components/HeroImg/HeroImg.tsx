import Image from 'next/image';
import { forwardRef, useRef } from 'react';
import Socials from '../Socials/Socials';

import darkModeImage from '/public/portfolio-img-bg-dark.jpg';
import lightModeImage from '/public/portfolio-img-bg-light.jpg';
import gsap from 'gsap';

const HeroImg = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLUListElement>(null);

    const handleHover = () => {
        if (containerRef.current) {
            const expandingDivs = Array.from(containerRef.current.querySelectorAll('.expanding-div')) as HTMLElement[];
            expandingDivs.forEach((div, i) => {
                gsap.to(div, {
                    width: i === 1 ? '115%' : i === 2 ? '105%' : '125%',
                    scale: i === 1 ? 1.1 : i === 2 ? 1.05 : 1.15,
                    duration: 0.5,
                    x: i === 1 ? '20%' : i === 2 ? '-12%' : '-14%',
                    y: i === 1 ? '0%' : i === 2 ? '-14%' : '14%',
                    ease: 'expo.out',
                });
            });
        }

        gsap.to(socialsRef.current, { alpha: 1, duration: 0.5 });
    };

    const handleHoverExit = () => {
        if (containerRef.current) {
            const expandingDivs = Array.from(containerRef.current.querySelectorAll('.expanding-div')) as HTMLElement[];
            expandingDivs.forEach((div) => {
                gsap.to(div, {
                    duration: 0.5,
                    width: '100%',
                    scaleX: 1,
                    scaleY: 1,
                    x: '0%',
                    y: '0%',
                    ease: 'expo.in',
                });
            });
        }

        gsap.to(socialsRef.current, { alpha: 0, duration: 0.5 });
    };

    return (
        <div className="relative" ref={containerRef} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            <Image
                width={800}
                height={800}
                src={darkModeImage}
                alt="Picture of me, Dido"
                className="space-x-3 z-50 relative rounded-xl md:w-[360px] md:h-[470px] hidden md:block md:dark:hidden"
            />
            <Image
                width={800}
                height={800}
                src={lightModeImage}
                alt="Picture of me, Dido"
                className="space-x-3 z-50 relative rounded-xl md:w-[360px] md:h-[470px] hidden md:hidden md:dark:block"
            />
            <div className="expanding-div z-10 rounded-xl md:w-[360px] md:h-[470px] hidden md:block opacity-50 absolute -top-6 -right-6 bg-wine-700 dark:bg-sheen-gold-100">
                <Socials ref={socialsRef} />
            </div>
            <div className="expanding-div z-10 rounded-xl md:w-[360px] md:h-[470px] hidden md:block opacity-50 absolute -top-4 -right-4 bg-wine-800 dark:bg-sheen-gold-200"></div>
            <div className="expanding-div z-10 rounded-xl md:w-[360px] md:h-[470px] hidden md:block opacity-50 absolute -top-2 -right-2 bg-wine-900 dark:bg-sheen-gold-300"></div>
        </div>
    );
};

HeroImg.displayName = 'HeroImg';

export default HeroImg;
