'use client';

import { useGSAP } from '@gsap/react';
import { Sprite } from '@pixi/react';
import gsap from 'gsap';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

const FallingStar = () => {
    const { resolvedTheme } = useTheme();

    const fallingStarRef = useRef(null);
    const star = 'shootingstar.png';

    const leftPosition = Math.random() * screen.width;
    const starSize = Math.ceil(Math.random() * 10);

    useGSAP(() => {
        const duration = Math.random() * 1.5 + 5;
        const starRef = fallingStarRef.current;

        gsap.to(starRef, {
            alpha: 0,
            x: -1000,
            y: 3000,
            duration,
            ease: 'sine',
            repeat: -1,
        });
    }, []);

    return (
        <Sprite
            tint={resolvedTheme === 'dark' ? '#7F3343' : '#CAA45D'}
            ref={fallingStarRef}
            angle={45}
            image={star}
            x={leftPosition}
            y={0}
            width={starSize}
            height={100}
        />
    );
};

export default FallingStar;
