"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "@/utils/horizontalAnimation";
import { logos } from "@/constans/logos";
import Image from "next/image";

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".box") as HTMLElement[];
      gsap.set(items, {
        backgroundColor: gsap.utils.wrap(["bg-wine", "bg-silver"]),
      });
      tl.current = horizontalLoop(items, { repeat: -1 });
    },
    {
      scope: marqueeRef,
    },
  );

  const handleMouseEnter = () => {
    tl.current?.pause();
  };

  const handleMouseLeave = () => {
    tl.current?.resume();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-2/3 items-center gap-2 overflow-hidden rounded-xl bg-raisin-black bg-opacity-20 p-4 dark:bg-silver dark:bg-opacity-30"
      ref={marqueeRef}
    >
      {logos.map((logo) => (
        <div key={logo.id} className="box mr-2">
          <Image src={logo.src} alt={logo.alt} className="min-w-16" />
        </div>
      ))}
    </div>
  );
};

export default Marquee;
