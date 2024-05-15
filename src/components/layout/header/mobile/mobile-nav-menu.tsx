import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileButton from "./mobile-button";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

let listItemTween: gsap.core.Tween;

const MobileNavMenu = ({
  isMobileMenuOpen,
  toggleMobile,
}: {
  isMobileMenuOpen: boolean;
  toggleMobile: () => void;
}) => {
  useGSAP(
    () => {
      gsap.from(".menu", { duration: 1, opacity: 0 });
      gsap.to(".menu", {
        duration: 1,
        opacity: 1,
        height: "100vh",
        ease: "power1.in",
      });

      listItemTween = gsap.from(".li", {
        opacity: 0,
        y: -200,
        stagger: 0.2,
        ease: "power1.out",
      });
    },
    { dependencies: [isMobileMenuOpen] },
  );

  const toggleMobileMenu = () => {
    listItemTween.reverse().then(() => {
      toggleMobile();
    });
  };

  return (
    <>
      {isMobileMenuOpen && (
        <MobileButton
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}
      <div className="menu absolute right-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-silver bg-opacity-70 px-4 py-4 text-raisin-black shadow-md backdrop-blur-2xl will-change-auto dark:bg-raisin-black dark:text-silver-300 md:hidden lg:hidden">
        <ul className="text-4xl" onClick={toggleMobileMenu}>
          <li className="li mb-8">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="li mb-8">
            <Link href="/about">About me</Link>
          </li>
          <li className="li mb-8">
            <Link href="#">Contacts</Link>
          </li>
          <li className="li mb-8">
            <Link href="#">Guest book</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavMenu;
