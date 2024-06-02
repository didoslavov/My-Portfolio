import { FaUserAstronaut } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import lightModeImage from "/public/portfolio-img-bg-light.avif";
import darkModeImage from "/public/portfolio-img-bg-dark.avif";
import Socials from "./socials";

const Image = dynamic(() => import("next/image"));

const HeroImg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLUListElement>(null);
  const astronautRef = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    if (containerRef.current) {
      const expandingDivs = Array.from(
        containerRef.current.querySelectorAll(".expanding-div"),
      ) as HTMLElement[];
      expandingDivs.forEach((div, i) => {
        gsap.to(div, {
          width: i === 1 ? "115%" : i === 2 ? "105%" : "125%",
          scale: i === 1 ? 1.1 : i === 2 ? 1.05 : 1.15,
          duration: 0.5,
          x: i === 1 ? "20%" : i === 2 ? "-12%" : "-14%",
          y: i === 1 ? "0%" : i === 2 ? "-14%" : "14%",
          ease: "expo.out",
        });
      });
    }

    gsap.to(socialsRef.current, { alpha: 1, duration: 0.5 });
    gsap.to(astronautRef.current, { alpha: 1, duration: 0.5, rotate: -45 });
  };

  const handleHoverExit = () => {
    if (containerRef.current) {
      const expandingDivs = Array.from(
        containerRef.current.querySelectorAll(".expanding-div"),
      ) as HTMLElement[];
      expandingDivs.forEach((div) => {
        gsap.to(div, {
          duration: 0.5,
          width: "100%",
          scaleX: 1,
          scaleY: 1,
          x: "0%",
          y: "0%",
          ease: "expo.in",
        });
      });
    }

    gsap.to(socialsRef.current, { alpha: 0, duration: 0.5 });
    gsap.to(astronautRef.current, { alpha: 0, duration: 0.5, rotate: 0 });
  };

  return (
    <div
      className="relative max-w-[50%]"
      ref={containerRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      <Image
        placeholder="blur"
        width={800}
        height={800}
        src={darkModeImage}
        alt="Picture of me, Dido"
        className="relative z-50 block w-[260px] space-x-3 rounded-xl dark:hidden md:w-[360px] lg:h-[470px]"
      />
      <Image
        placeholder="blur"
        width={800}
        height={800}
        src={lightModeImage}
        alt="Picture of me, Dido"
        className="relative z-50 hidden w-[260px] space-x-3 rounded-xl dark:block md:w-[360px] lg:h-[470px]"
      />
      <div className="expanding-div absolute -right-6 -top-6 z-10 block h-full rounded-xl bg-wine-700 opacity-50 dark:bg-sheen-gold-100 md:h-[470px] md:w-[360px]">
        <Socials ref={socialsRef} />
        <div
          ref={astronautRef}
          className="absolute left-4 top-4 text-6xl text-silver opacity-0 dark:text-raisin-black"
        >
          <FaUserAstronaut />
        </div>
      </div>
      <div className="expanding-div absolute -right-4 -top-4 z-10 block rounded-xl bg-wine-800 opacity-50 dark:bg-sheen-gold-200 md:h-[470px] md:w-[360px]"></div>
      <div className="expanding-div absolute -right-2 -top-2 z-10 block rounded-xl bg-wine-900 opacity-50 dark:bg-sheen-gold-300 md:h-[470px] md:w-[360px]"></div>
    </div>
  );
};

HeroImg.displayName = "HeroImg";

export default HeroImg;
