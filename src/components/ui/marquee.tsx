"use client";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { horizontalLoop } from "@/utils/animations/animate-marquee";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

interface MarqueeProps {
  items: { id: number; src: StaticImageData; alt: string; link: string }[];
  className: string;
  reversed?: boolean;
}

const Marquee = ({ items, className, reversed }: MarqueeProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".box") as HTMLElement[];
      gsap.set(items, {
        backgroundColor: gsap.utils.wrap(["bg-wine", "bg-silver"]),
      });
      tl.current = horizontalLoop(items, { repeat: -1, reversed });
    },
    {
      scope: marqueeRef,
    },
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    tl.current?.pause();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    tl.current?.resume();
  };

  const handleMoveForward = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft += 50;
    }
  };

  const handleMoveBackward = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft -= 50;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative mx-10 flex w-5/6 justify-center rounded-xl md:w-9/12"
    >
      {isHovered && (
        <button
          onClick={handleMoveBackward}
          className="absolute -left-[10%] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center sm:-left-[5%] lg:-left-[3%]"
        >
          <BsArrowLeftCircleFill className="text-4xl text-wine dark:text-sheen-gold md:text-5xl" />
        </button>
      )}
      <div
        className="relative flex w-11/12 items-center gap-2 overflow-hidden rounded-xl bg-raisin-black bg-opacity-20 p-4 dark:bg-silver dark:bg-opacity-30"
        ref={marqueeRef}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`${cn("box group relative mr-2", className)}`}
          >
            <Link href={item?.link} target="_blank">
              <Image
                src={item.src}
                alt={item.alt}
                className="z-40 min-h-14 w-full"
              />
            </Link>
            <div className="absolute -bottom-4 left-0 z-50 text-nowrap rounded-md bg-raisin-black bg-opacity-90 px-2 py-1 text-sm text-silver opacity-0 transition duration-200 ease-in-out group-hover:opacity-100 dark:bg-silver dark:bg-opacity-90 dark:text-raisin-black">
              {item.alt}
            </div>
          </div>
        ))}
      </div>
      {isHovered && (
        <button
          onClick={handleMoveForward}
          className="absolute -right-[10%] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center sm:-right-[5%] lg:-right-[3%]"
        >
          <BsArrowRightCircleFill className="text-4xl text-wine dark:text-sheen-gold md:text-5xl" />
        </button>
      )}
    </div>
  );
};

export default Marquee;
