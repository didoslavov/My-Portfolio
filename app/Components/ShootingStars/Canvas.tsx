'use client';

import { useRef } from 'react';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { useGSAP } from '@gsap/react';
import { Application } from 'pixi.js';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const Canvas = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useGSAP(async () => {
        const app = new Application();

        await app.init({
            backgroundAlpha: 0,
            resizeTo: window,
        });

        canvasRef.current?.appendChild(app.canvas);

        const graphics = new PIXI.Graphics();

        graphics.beginPath();
        graphics.star(0, 0, 6, 10);
        graphics.fill();
        graphics.pivot.set(50, 50);
        graphics.position.set(100, 100);

        app.stage.addChild(graphics);

        gsap.timeline({
            repeat: -1,
            yoyo: true,
        }).to(graphics, {
            pixi: {
                alpha: 0,
            },
            duration: 1,
        });

        return () => {
            app.destroy({ removeView: true });
        };
    });

    return <div ref={canvasRef}></div>;
};

export default Canvas;
