"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import HeroImg from "../ui/hero-img";
import {
  animateEnterPage,
  animateListSlider,
} from "@/utils/animations/animate-page";

const Home = () => {
  const stack = ["Vanilla JS", "TS", "React", "Next", "Node JS", "Express"];
  const contentRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateListSlider(techRef);
    animateEnterPage(contentRef);
  });

  return (
    <div
      ref={contentRef}
      className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-y-24 py-8 will-change-auto md:flex-col md:gap-36 lg:justify-around xl:mt-20 xl:flex-row"
    >
      <div className="flex flex-col items-start gap-12 text-raisin-black  drop-shadow-2xl dark:text-silver">
        <h1 className="font-concert text-3xl md:text-4xl lg:text-8xl">
          Hey, I&apos;m Dido.
        </h1>
        <div className="flex h-11 items-center justify-center gap-6 overflow-hidden text-4xl">
          <div
            ref={techRef}
            className=" max-h-8 items-center text-end text-wine dark:text-sheen-gold"
          >
            <ul className="slides">
              {stack.map((tech, i) => (
                <li className="slide font-bold" key={i}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-2 font-concert">Developer</p>
        </div>
      </div>
      <HeroImg />
    </div>
  );
};

export default Home;
