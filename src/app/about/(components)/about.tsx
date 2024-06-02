"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { technologies } from "@/constans/technologies";
import { certificates } from "@/constans/certificates";
import { useGSAP } from "@gsap/react";
import {
  animateEnterPage,
  animateListSlider,
} from "@/utils/animations/animate-page";

const Summary = dynamic(() => import("../(components)/summary"));
const Marquee = dynamic(() => import("@/components/ui/marquee"));

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateListSlider(contentRef);
    animateEnterPage(contentRef);
  });

  return (
    <section ref={contentRef} className="mx-auto max-w-[1440px]">
      <article className="mx-auto mb-10 w-5/6 md:mb-20 md:w-3/4">
        <h2 className="mb-10 text-center font-concert text-3xl text-raisin-black dark:text-silver md:text-5xl lg:leading-[100px]">
          About me
        </h2>
        <Summary />
      </article>
      <article className="mb-10 flex flex-col items-center justify-between md:mb-20">
        <h3 className="mb-10 font-concert text-xl text-raisin-black dark:text-silver md:text-4xl lg:leading-[100px]">
          Technologies I&apos;m familiar with
        </h3>
        <Marquee items={technologies} className="min-w-16" reversed />
      </article>
      <article className="mb-10 flex flex-col items-center justify-between text-xl">
        <h3 className="mb-10 font-concert text-raisin-black dark:text-silver md:text-4xl lg:leading-[100px]">
          Certificates I earned during my journey
        </h3>
        <Marquee items={certificates} className="min-h-32 min-w-56" />
      </article>
    </section>
  );
};

export default About;
