'use client';

import { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { Stage } from '@pixi/react';
import StaticStar from './StaticStars';
import FallingStar from './FallingStars';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const Canvas = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canvasDimensions, setCanvasDimensions] = useState({
        width: 800,
        height: 600,
    });
    const [stars, setStars] = useState<JSX.Element[]>([]);
    const [stars1, setStars1] = useState<JSX.Element[]>([]);

    const staticCount = 300;
    const fallingCount = 30;

    useEffect(() => {
        const updateCanvasDimensions = () => {
            const width = containerRef.current?.offsetWidth;
            const height = containerRef.current?.offsetHeight;

            if (width && height) {
                setCanvasDimensions({ width, height });
            }
        };

        updateCanvasDimensions();
        window.addEventListener('resize', updateCanvasDimensions);

        return () => {
            window.removeEventListener('resize', updateCanvasDimensions);
        };
    }, []);

    useEffect(() => {
        const staticStars: JSX.Element[] = [];
        const fallingStars: JSX.Element[] = [];

        for (let i = 0; i < staticCount; i++) {
            staticStars.push(<StaticStar key={`static-${i}`} />);
        }

        for (let i = 0; i < fallingCount; i++) {
            fallingStars.push(<FallingStar key={`falling-${i}`} />);
        }

        setStars(() => [...staticStars]);
        setStars1(() => [...fallingStars]);
    }, []);

    return (
        <div className="w-screen h-screen absolute top-0 right-0" ref={containerRef}>
            <Stage width={canvasDimensions.width} height={canvasDimensions.height} options={{ backgroundAlpha: 0 }}>
                {stars}
                {stars1}
            </Stage>
        </div>
    );
};

export default Canvas;
