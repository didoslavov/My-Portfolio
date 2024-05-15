import Marquee from "@/components/ui/marquee";
import React from "react";
import Summary from "./(components)/summary";

const page = () => {
  return (
    <section className="mx-auto max-w-[1440px]">
      <article className="mx-auto mb-20 w-3/4">
        <h2 className="text-center text-5xl font-semibold leading-[100px] text-raisin-black dark:text-silver">
          About me
        </h2>
        <Summary />
      </article>
      <article className="flex flex-col items-center justify-between">
        <h3 className="text-5xl font-semibold leading-[100px] text-raisin-black dark:text-silver">
          Technologies I&apos;m familiar with
        </h3>
        <Marquee />
      </article>
    </section>
  );
};

export default page;
