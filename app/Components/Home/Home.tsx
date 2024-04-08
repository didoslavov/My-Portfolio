'use client';
import { IoIosPaper } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

import { useGSAP } from '@gsap/react';
import gsap, { Elastic } from 'gsap';
import Image from 'next/image';
import React from 'react';

const Home = () => {
    const stack = ['Java Script', 'React', 'Next', 'Node JS', 'Express'];

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
        <div className="relative flex flex-col md:flex-row items-center justify-between md:justify-around py-8 px-6">
            <div className="flex flex-col gap-12 md:gap-44 items-start text-raisin-black  dark:text-silver drop-shadow-2xl">
                <p className="text-3xl md:text-6xl lg:text-8xl">Hey, I&apos;m Dido.</p>
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
            <ul className="absolute right-4 top-[50%] -translate-y-[50%] flex flex-col gap-6 text-raisin-black dark:text-silver">
                <li>
                    <a href="#">
                        <AiFillGithub size={30} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <AiFillLinkedin size={30} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <IoIosPaper size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Home;
