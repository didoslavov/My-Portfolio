'use client';

import { useGSAP } from '@gsap/react';
import gsap, { Elastic } from 'gsap';
import Image from 'next/image';

export default function Home() {
    const stack = ['Java Script', 'React', 'Next', 'Node JS', 'Express'];
    useGSAP(() => {
        var vsOpts = {
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
        vsOpts.slides.forEach(function (i, j) {
            if (index > vsOpts.slides.length - 1) {
                index = 0;
            }

            vSlide.to(vsOpts.list, {
                duration: vsOpts.duration / vsOpts.slides.length,
                y: index * -1 * vsOpts.lineHeight,
                ease: Elastic.easeOut.config(1, 0.9),
            });

            index++;
        });

        vSlide.play();
    });

    return (
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-around py-8 px-6">
            <div className="flex flex-col gap-12 md:gap-44 items-start text-raisin-black  dark:text-silver drop-shadow-2xl">
                <p className="text-3xl md:text-6xl lg:text-8xl">Hey, I&apos;m Dido Slavov.</p>
                <div className="flex items-center gap-6 overflow-hidden text-3xl">
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
            <Image
                width={800}
                height={800}
                src="/portfolio-img-bg-dark.jpg"
                alt="Picture of me, Dido"
                className="rounded-xl w-[500px] h-[600px] hidden md:block md:dark:hidden"
            />
            <Image
                width={800}
                height={800}
                src="/portfolio-img-bg-light.jpg"
                alt="Picture of me, Dido"
                className="rounded-xl w-[500px] h-[600px] hidden md:dark:block"
            />
        </div>
    );
}
