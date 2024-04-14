'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { useGSAP } from '@gsap/react';
import { Sprite } from '@pixi/react';
import gsap from 'gsap';
import { useRef } from 'react';

const FallingStar = () => {
    const fallingStarRef = useRef(null);
    const star = 'shootingstar.png';
    const theme = useTheme();

    const leftPosition = Math.random() * screen.width;
    const starSize = Math.ceil(Math.random() * 20);

    useGSAP(() => {
        const duration = Math.random() * 1.5 + 2;
        const starRef = fallingStarRef.current;

        gsap.to(starRef, {
            alpha: 0,
            x: Math.random() * 1.5 + 20,
            y: Math.random() * 1.5 + 2000,
            duration,
            ease: 'sine',
            repeat: -1,
        });
    }, []);

    return (
        <Sprite tint={'#7F3343'} ref={fallingStarRef} image={star} x={leftPosition} y={0} width={starSize} height={starSize} />
    );
};

export default FallingStar;
