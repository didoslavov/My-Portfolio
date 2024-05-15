'use client';
import { TbBrandTailwind, TbBrandReact, TbBrandNextjs, TbBrandAngular, TbBrandNodejs } from 'react-icons/tb';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { horizontalLoop } from '@/utils/horizontalAnimation';

const boxesArr = [
    <TbBrandNextjs key={1} />,
    <TbBrandReact key={2} />,
    <TbBrandTailwind key={3} />,
    <TbBrandAngular key={4} />,
    <TbBrandNodejs key={5} />,
];

const Marquee = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.box') as HTMLElement[];
            gsap.set(boxes, {
                backgroundColor: gsap.utils.wrap(['bg-wine', 'bg-silver']),
            });
            horizontalLoop(boxes, { repeat: -1 });
        },
        {
            scope: marqueeRef,
        }
    );

    return (
        <div
            className="flex items-center text-3xl text-wine dark:text-sheen-gold relative overflow-hidden gap-2"
            ref={marqueeRef}>
            {boxesArr.map((el) => (
                <div key={`box-${el}`} className="box mr-2">
                    {el}
                </div>
            ))}
        </div>
    );
};

export default Marquee;
