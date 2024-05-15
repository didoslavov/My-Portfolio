import Marquee from "@/components/ui/marquee";
import React from "react";
import Summary from "./(components)/summary";
import { logos } from "@/constans/logos";
import { certificates } from "@/constans/certificates";

const page = () => {
  return (
    <section className="mx-auto max-w-[1440px]">
      <article className="mx-auto mb-10 w-5/6 md:mb-20 md:w-3/4">
        <h2 className="mb-10 text-center text-3xl text-raisin-black dark:text-silver md:text-5xl lg:leading-[100px]">
          About me
        </h2>
        <Summary />
      </article>
      <article className="mb-10 flex flex-col items-center justify-between md:mb-20">
        <h3 className="mb-10 text-xl text-raisin-black dark:text-silver md:text-4xl lg:leading-[100px]">
          Technologies I&apos;m familiar with
        </h3>
        <Marquee items={logos} className="min-w-16" />
      </article>
      <article className="mb-10 flex flex-col items-center justify-between text-xl">
        <h3 className="mb-10 text-raisin-black dark:text-silver md:text-4xl lg:leading-[100px]">
          Certificates I earned during my journey
        </h3>
        <Marquee items={certificates} className="min-h-32 min-w-44" />
      </article>
    </section>
  );
};

export default page;
