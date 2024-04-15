'use client';

import { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { Stage } from '@pixi/react';
import StaticStar from './StaticStar';
import FallingStar from './FallingStar';
import { useTheme } from 'next-themes';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const Canvas = () => {
    const { resolvedTheme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const [canvasDimensions, setCanvasDimensions] = useState({
        width: 800,
        height: 600,
    });
    const [staticStars, setStaticStars] = useState<JSX.Element[]>([]);
    const [fallingStars, setFallingStars] = useState<JSX.Element[]>([]);

    const staticCount = 300;
    const fallingCount = 10;

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
            staticStars.push(<StaticStar resolvedTheme={resolvedTheme} key={`static-${i}`} />);
        }

        for (let i = 0; i < fallingCount; i++) {
            fallingStars.push(<FallingStar resolvedTheme={resolvedTheme} key={`falling-${i}`} />);
        }

        setStaticStars(() => [...staticStars]);
        setFallingStars(() => [...fallingStars]);
    }, [resolvedTheme]);

    return (
        <div className="w-screen h-screen absolute top-0 right-0" ref={containerRef}>
            <Stage width={canvasDimensions.width} height={canvasDimensions.height} options={{ backgroundAlpha: 0 }}>
                {staticStars}
                {fallingStars}
            </Stage>
        </div>
    );
};

export default Canvas;
