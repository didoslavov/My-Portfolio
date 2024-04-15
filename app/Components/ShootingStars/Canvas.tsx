'use client';

import { useLayoutEffect, useRef, useState, useMemo, useEffect } from 'react';
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

    const smallStarsCount = 2000;
    const bigStarsCount = 50;
    const fallingStarsCount = 20;

    useEffect(() => {
        updateCanvasDimensions();

        window.addEventListener('resize', updateCanvasDimensions);

        return () => {
            window.removeEventListener('resize', updateCanvasDimensions);
        };
    }, []);

    const staticStarsSmall = useMemo(() => {
        const stars = [];
        for (let i = 0; i < smallStarsCount; i++) {
            stars.push(<StaticStar starType="small" resolvedTheme={resolvedTheme} key={`staticSmall-${i}`} />);
        }
        return stars;
    }, [resolvedTheme]);

    const staticStarsBig = useMemo(() => {
        const stars = [];
        for (let i = 0; i < bigStarsCount; i++) {
            stars.push(<StaticStar starType="big" resolvedTheme={resolvedTheme} key={`staticBig-${i}`} />);
        }
        return stars;
    }, [resolvedTheme]);

    const fallingStars = useMemo(() => {
        const stars = [];
        for (let i = 0; i < fallingStarsCount; i++) {
            stars.push(<FallingStar resolvedTheme={resolvedTheme} key={`falling-${i}`} />);
        }
        return stars;
    }, [resolvedTheme]);

    const updateCanvasDimensions = () => {
        const width = containerRef.current?.offsetWidth;
        const height = containerRef.current?.offsetHeight;

        if (width && height) {
            setCanvasDimensions({ width, height });
        }
    };

    return (
        <div className="w-screen h-screen absolute top-0 right-0" ref={containerRef}>
            <Stage width={canvasDimensions.width} height={canvasDimensions.height} options={{ backgroundAlpha: 0 }}>
                {staticStarsSmall}
                {staticStarsBig}
                {fallingStars}
            </Stage>
        </div>
    );
};

export default Canvas;
