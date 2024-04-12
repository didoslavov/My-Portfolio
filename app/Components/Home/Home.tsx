'use client';
import { IoIosPaper } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

import { useGSAP } from '@gsap/react';
import gsap, { Elastic } from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';

import darkModeImage from '/public/portfolio-img-bg-dark.jpg';
import lightModeImage from '/public/portfolio-img-bg-light.jpg';

const Home = () => {
    const stack = ['Java Script', 'React', 'Next', 'Node JS', 'Express'];
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLUListElement>(null);

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

        gsap.from(contentRef.current, {
            transform: 'translateY(-100%)',
            duration: 2,
            ease: 'power3.out',
        });
    });

    const handleHover = () => {
        if (containerRef.current) {
            const expandingDivs = Array.from(containerRef.current.querySelectorAll('.expanding-div')) as HTMLElement[];
            expandingDivs.forEach((div, i) => {
                gsap.to(div, {
                    width: i === 1 ? '115%' : i === 2 ? '105%' : '125%',
                    scale: i === 1 ? 1.1 : i === 2 ? 1.05 : 1.15,
                    duration: 0.5,
                    x: i === 1 ? '20%' : i === 2 ? '-12%' : '-14%',
                    y: i === 1 ? '0%' : i === 2 ? '-14%' : '14%',
                    ease: 'expo.out',
                });
            });
        }

        gsap.to(socialsRef.current, { opacity: 1, duration: 1 });
    };

    const handleHoverExit = () => {
        if (containerRef.current) {
            const expandingDivs = Array.from(containerRef.current.querySelectorAll('.expanding-div')) as HTMLElement[];
            expandingDivs.forEach((div) => {
                gsap.to(div, {
                    duration: 0.5,
                    width: '100%',
                    scaleX: 1,
                    scaleY: 1,
                    x: '0%',
                    y: '0%',
                    ease: 'expo.in',
                });
            });
        }

        gsap.to(socialsRef.current, { opacity: 0, duration: 1 });
    };
    return (
        <div
            ref={contentRef}
            className="relative flex flex-col md:flex-row items-center justify-between md:justify-evenly lg:justify-around py-8 px-6 ">
            <div className="flex flex-col gap-12 md:gap-44 items-start text-raisin-black  dark:text-silver drop-shadow-2xl">
                <p className="text-3xl md:text-4xl lg:text-8xl">Hey, I&apos;m Dido.</p>
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
            <div className="relative" ref={containerRef} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                <Image
                    width={800}
                    height={800}
                    src={darkModeImage}
                    alt="Picture of me, Dido"
                    className="z-50 relative rounded-xl md:w-[360px] md:h-[470px] hidden md:block md:dark:hidden"
                />
                <Image
                    width={800}
                    height={800}
                    src={lightModeImage}
                    alt="Picture of me, Dido"
                    className="z-50 relative rounded-xl md:w-[360px] md:h-[470px] hidden md:hidden md:dark:block"
                />
                <div className="expanding-div z-10 rounded-xl md:w-[360px] md:h-[470px] hidden md:block opacity-50 absolute -top-6 -right-6 bg-wine-700 dark:bg-sheen-gold-100">
                    <ul
                        ref={socialsRef}
                        className="flex flex-col absolute top-4 left-4 md:justify-center gap-6 text-raisin-black dark:text-silver">
                        <li>
                            <a href="#" className="text-silver dark:text-raisin-black">
                                <AiFillGithub size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-silver dark:text-raisin-black">
                                <AiFillLinkedin size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-silver dark:text-raisin-black">
                                <IoIosPaper size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="expanding-div z-10 rounded-xl md:w-[360px] md:h-[470px] hidden md:block opacity-50 absolute -top-4 -right-4 bg-wine-800 dark:bg-sheen-gold-200"></div>
                <div className="expanding-div z-10 rounded-xl md:w-[360px] md:h-[470px] hidden md:block opacity-50 absolute -top-2 -right-2 bg-wine-900 dark:bg-sheen-gold-300"></div>
            </div>
        </div>
    );
};

export default Home;
