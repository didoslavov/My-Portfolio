'use client';

import { useGSAP } from '@gsap/react';
import { Sprite } from '@pixi/react';
import gsap from 'gsap';
import { useRef } from 'react';

const StaticStar = ({ resolvedTheme, starType }: { resolvedTheme: string | undefined; starType: string }) => {
    const staticStarsRef = useRef(null);
    const star = 'star.png';

    const leftPosition = Math.random() * screen.width;
    const topPosition = Math.random() * screen.height;
    const starSize = starType === 'small' ? Math.ceil(Math.random() * 5) : 10;

    useGSAP(() => {
        const duration = Math.random() * 1.5 + 1;
        const delay = Math.random() * 2 + 2;
        const starRef = staticStarsRef.current;

        gsap.fromTo(
            starRef,
            { alpha: 1 },
            {
                repeat: -1,
                duration,
                delay,
                alpha: 0.1,
                ease: 'circ.inOut',
                yoyo: true,
            }
        );
    }, []);

    return (
        <Sprite
            ref={staticStarsRef}
            tint={resolvedTheme === 'dark' ? '#BBB4B3' : '#291F28'}
            image={star}
            x={leftPosition}
            y={topPosition}
            width={starSize}
            height={starSize}
        />
    );
};

export default StaticStar;
