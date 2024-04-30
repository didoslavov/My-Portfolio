'use client';

import { useGSAP } from '@gsap/react';
import gsap, { Elastic } from 'gsap';
import React, { useRef } from 'react';
import HeroImg from '../HeroImg/HeroImg';

const Home = () => {
    const stack = ['Java Script', 'React', 'Next', 'Node JS', 'Express'];
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const vsOpts = {
            slides: document.querySelectorAll('.slide'),
            list: document.querySelector('.slides'),
            duration: 6,
            lineHeight: 50,
        };

        const vSlide = gsap.timeline({
            paused: true,
            repeat: -1,
        });

        let index = 1;

        vsOpts.slides.forEach(function () {
            if (index > vsOpts.slides.length - 1) {
                index = 0;
            }

            vSlide.to(vsOpts.list, {
                duration: vsOpts.duration / vsOpts.slides.length,
                y: index * -1 * vsOpts.lineHeight,
                ease: Elastic.easeOut.config(1, 2),
            });

            index++;
        });

        vSlide.play();

        gsap.from(contentRef.current, {
            transform: 'translateY(-100%)',
            duration: 2,
            ease: 'power3.out',
        });
    });

    return (
        <div
            ref={contentRef}
            className="relative flex flex-col md:flex-col md:gap-36 items-center justify-between lg:flex-row lg:justify-around py-8 lg:mt-28">
            <div className="flex flex-col gap-12 items-start text-raisin-black  dark:text-silver drop-shadow-2xl">
                <p className="text-3xl md:text-4xl lg:text-8xl">Hey, I&apos;m Dido.</p>
                <div className="flex items-center gap-6 overflow-hidden text-4xl">
                    <div className="h-12 text-end text-wine dark:text-sheen-gold">
                        <ul className="slides">
                            {stack.map((tech, i) => (
                                <li className="slide leading-[50px]" key={i}>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="leading-[50px]">Developer</p>
                </div>
            </div>
            <HeroImg />
        </div>
    );
};

export default Home;
