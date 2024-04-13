'use client';

import { useRef } from 'react';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { useGSAP } from '@gsap/react';
import { Application } from 'pixi.js';
import { Sprite, Stage } from '@pixi/react';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const Star = () => {
    const starRef = useRef(null);

    useGSAP(() => {
        gsap.to(starRef.current, { opacity: 1, repeat: -1, duration: 1, ease: 'bonce' });
    });

    return <Sprite ref={starRef} image={'star.png'} width={100} height={100} visible={false} />;
};

const Canvas = () => {
    return (
        <Stage width={800} height={800} options={{ background: '#E9E9E9' }}>
            <Star />
        </Stage>
    );
};

export default Canvas;
