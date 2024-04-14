'use client';

import { useGSAP } from '@gsap/react';
import { Sprite } from '@pixi/react';
import gsap from 'gsap';
import { useRef } from 'react';

const StaticStar = () => {
    const staticStarsRef = useRef(null);
    const star = 'star.png';

    const leftPosition = Math.random() * screen.width;
    const topPosition = Math.random() * screen.height;
    const starSize = Math.ceil(Math.random() * 8);

    useGSAP(() => {
        const duration = Math.random() * 1.5 + 5;
        const starRef = staticStarsRef.current;

        gsap.fromTo(
            starRef,
            { alpha: 0.1 },
            {
                repeat: -1,
                duration,
                alpha: 1,
                ease: 'expo',
            }
        );
    }, []);

    return (
        <Sprite
            ref={staticStarsRef}
            tint={'#BBB4B3'}
            image={star}
            x={leftPosition}
            y={topPosition}
            width={starSize}
            height={starSize}
        />
    );
};

export default StaticStar;
