import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileButton from "./mobile-button";
import Link from "next/link";
import { links } from "@/constans/navigation-links";

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
      <div className="menu absolute right-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-transparent bg-opacity-70 px-4 py-4 text-raisin-black shadow-md backdrop-blur-2xl will-change-auto dark:bg-raisin-black dark:bg-opacity-70 dark:text-silver md:hidden lg:hidden">
        <ul className="flex flex-col gap-8 text-4xl">
          {links.map((link) => (
            <li
              key={link.id}
              className="li transition-all duration-500 ease-in-out hover:text-wine dark:hover:text-sheen-gold"
              onClick={toggleMobileMenu}
            >
              <Link href={link.href}>{link.link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavMenu;
