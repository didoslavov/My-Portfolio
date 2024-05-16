import { useGSAP } from "@gsap/react";
import MobileButton from "./mobile-button";
import Link from "next/link";
import { links } from "@/constans/navigation-links";
import { animateMobileMenu } from "@/utils/animations/animateMobileMenu";
import { useState } from "react";

const MobileNavMenu = ({
  isMobileMenuOpen,
  toggleMobile,
}: {
  isMobileMenuOpen: boolean;
  toggleMobile: () => void;
}) => {
  const [listItemTween, setListItemTween] = useState<gsap.core.Tween>();
  useGSAP(
    () => {
      setListItemTween(animateMobileMenu());
    },
    { dependencies: [isMobileMenuOpen] },
  );

  const toggleMobileMenu = () => {
    listItemTween?.reverse().then(() => {
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
        <ul className="font-concert text-4xl">
          {links.map((link) => (
            <li
              key={link.id}
              className="li mb-8 transition-colors duration-500 hover:text-wine dark:hover:text-sheen-gold"
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
