'use client';
import { AiFillStar } from 'react-icons/ai';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ShootingStars = () => {
    useGSAP(() => {
        const createStar = () => {
            const mainStar = document.createElement('div');
            mainStar.innerHTML = '&star;';
            mainStar.classList.add('star', 'w-1', 'h-1', 'text-raisin-black', 'dark:text-silver', 'absolute', 'rounded-full');
            mainStar.style.left = `${Math.random() * 100}vw`;
            mainStar.style.top = '0';
            document.getElementById('stars')?.appendChild(mainStar);

            const numTrailStars = 5;
            const trailStars: HTMLDivElement[] = [];

            for (let i = 0; i < numTrailStars; i++) {
                const trailStar = document.createElement('div');
                trailStar.classList.add(
                    'trail-star',
                    'w-1',
                    'h-1',
                    'bg-raisin-black',
                    'dark:bg-silver',
                    'absolute',
                    'rounded-full'
                );
                trailStar.style.left = mainStar.style.left;
                trailStar.style.top = mainStar.style.top;
                document.getElementById('stars')?.appendChild(trailStar);
                trailStars.push(trailStar);
            }

            gsap.to(mainStar, {
                opacity: 0,
                x: '-100vw',
                y: '100vh',
                duration: Math.random() * 1.5 + 5,
                ease: 'power1.inOut',
                onComplete: () => {
                    mainStar.remove();
                    trailStars.forEach((trailStar) => trailStar.remove());
                },
            });

            trailStars.forEach((trailStar, index) => {
                gsap.to(trailStar, {
                    opacity: 0,
                    x: () => `${parseFloat(mainStar.style.left) - index * 10}px`,
                    y: '+=20',
                    duration: Math.random() * 1 + 1,
                    delay: index * 0.1,
                    ease: 'power1.inOut',
                    onComplete: () => {
                        trailStar.remove();
                    },
                });
            });
        };

        const interval = setInterval(createStar, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div id="stars" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></div>;
};

export default ShootingStars;
