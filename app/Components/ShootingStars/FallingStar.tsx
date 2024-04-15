'use client';

import { useGSAP } from '@gsap/react';
import { Sprite } from '@pixi/react';
import gsap from 'gsap';
import { useRef } from 'react';

const FallingStar = ({ resolvedTheme }: { resolvedTheme: string | undefined }) => {
    const fallingStarRef = useRef(null);
    const star = 'shootingstar.png';

    const leftPosition = Math.random() * screen.width;
    const starSize = Math.ceil(Math.random() * 10);

    useGSAP(() => {
        const duration = Math.random() * 1.5 + 7;
        const starRef = fallingStarRef.current;

        gsap.to(starRef, {
            alpha: 0,
            x: -3000,
            y: 3000,
            duration,
            ease: 'sine',
            repeat: -1,
        });
    }, []);

    return (
        <Sprite
            tint={resolvedTheme === 'dark' ? '#CAA45D' : '#7F3343'}
            ref={fallingStarRef}
            angle={45}
            image={star}
            x={leftPosition}
            y={10}
            width={starSize}
            height={100}
        />
    );
};

export default FallingStar;
