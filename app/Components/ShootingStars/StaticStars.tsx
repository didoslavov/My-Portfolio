'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';

const StaticStar = () => {
    const staticStarsRef = useRef<HTMLDivElement>(null);

    const leftPosition = `${Math.random() * 100}vw`;
    const topPosition = `${Math.random() * 100}vh`;

    useGSAP(() => {
        const starRef = staticStarsRef.current;
        const tl = gsap.timeline({ repeat: -1, delay: Math.random() * 2 });

        tl.to(starRef, { duration: 2, alpha: 0.2, ease: 'elastic' }).to(starRef, { duration: 10, alpha: 1, ease: 'elastic' });
    }, []);

    return (
        <div ref={staticStarsRef} className="absolute rotate-45" style={{ left: leftPosition, top: topPosition }}>
            <AiFillStar size={Math.ceil(Math.random() * 10)} className="text-raisin-black dark:text-silver" />
        </div>
    );
};

export default StaticStar;
