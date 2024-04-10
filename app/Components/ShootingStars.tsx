'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AiFillStar } from 'react-icons/ai';

const Star = () => {
    gsap.ticker.lagSmoothing(false);

    const leftPosition = `${Math.random() * 100}vw`;
    const starRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const duration = Math.random() * 1.5 + 3;
        const starElement = starRef.current;
        const trailElement = trailRef.current;

        const tl = gsap.timeline({ repeat: -1 });

        tl.to([starElement], {
            opacity: 0,
            x: '-50vw',
            y: '100vh',
            duration,
            ease: 'sine',
        });

        tl.to(
            trailElement,
            {
                opacity: 0,
                height: 0,
                duration,
                ease: 'sine',
            },
            8
        );
    });

    return (
        <>
            <div className="star absolute top-2" style={{ left: leftPosition }} ref={starRef}>
                <div
                    ref={trailRef}
                    className="opacity-60 bg-wine dark:bg-silver w-[1px] h-16 rounded-full rotate-45 absolute -top-[56px] -right-[24px]"></div>
                <AiFillStar size={6} className="opacity-60 text-raisin-black dark:text-silver" />
            </div>
        </>
    );
};

const ShootingStars = () => {
    const [stars, setStars] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStars((prevStars) => [...prevStars, <Star key={prevStars.length} />]);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="stars" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            {stars}
        </div>
    );
};

export default ShootingStars;
