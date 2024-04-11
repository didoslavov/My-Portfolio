'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FallingStar = () => {
    const leftPosition = `${Math.random() * 100}vw`;
    const starRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const duration = Math.random() * 1.5 + 2;
        const starElement = starRef.current;

        const tl = gsap.timeline({ repeat: -1 });

        tl.to([starElement], {
            opacity: 0,
            x: '-50vw',
            y: '100vh',
            duration,
            ease: 'sine',
        });
    }, []);

    return (
        <>
            <div className="star absolute -top-2" style={{ left: leftPosition }} ref={starRef}>
                <div
                    ref={trailRef}
                    className="bg-wine dark:bg-sheen-gold w-[0.4px] h-20 rounded-full rotate-45 absolute -top-[70px] -right-[30px]"></div>
                <AiFillStar size={Math.ceil(Math.random() * 10)} className="text-wine dark:text-sheen-gold rotate-90" />
            </div>
        </>
    );
};

export default FallingStar;
