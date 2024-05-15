"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "@/utils/horizontalAnimation";
import Image, { StaticImageData } from "next/image";

interface MarqueeProps {
  items: { id: number; src: StaticImageData; alt: string }[];
  className: string;
}

const Marquee = ({ items, className }: MarqueeProps) => {
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
      className="relative flex w-5/6 items-center gap-2 overflow-hidden rounded-xl bg-raisin-black bg-opacity-20 p-4 dark:bg-silver dark:bg-opacity-30 md:w-2/3"
      ref={marqueeRef}
    >
      {items.map((item, i) => (
        <div key={item.id} className={`box mr-2 ${className}`}>
          <Image src={item.src} alt={item.alt} className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default Marquee;
