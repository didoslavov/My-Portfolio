'use client';

import React, { useEffect, useState } from 'react';
import StaticStar from './StaticStars';
import FallingStar from './FallingStars';

const ShootingStars = () => {
    const [stars, setStars] = useState<JSX.Element[]>([]);

    const staticCount = 120;
    const fallingCount = 10;

    useEffect(() => {
        const staticStars: JSX.Element[] = [];
        const fallingStars: JSX.Element[] = [];

        for (let i = 0; i < staticCount; i++) {
            staticStars.push(<StaticStar key={`static-${i}`} />);
        }

        for (let i = 0; i < fallingCount; i++) {
            fallingStars.push(<FallingStar key={`falling-${i}`} />);
        }

        setStars(() => [...staticStars, ...fallingStars]);
    }, []);

    return (
        <div id="stars" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            {stars}
        </div>
    );
};

export default ShootingStars;
