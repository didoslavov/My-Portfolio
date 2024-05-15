import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

interface ThemeButtonProps {
  toggleTheme: () => void;
  isMobileMenuOpen: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  toggleTheme,
  isMobileMenuOpen,
}) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useGSAP(
    () => {
      if (mounted) {
        gsap.from(".theme-btn", { duration: 0.5, opacity: 0 });
        gsap.to(".theme-btn", { duration: 0.5, opacity: 1, ease: "power1.in" });
      }
    },
    { dependencies: [isMobileMenuOpen, mounted] },
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className={`z-50 ${
        isMobileMenuOpen ? "block" : "hidden"
      } theme-btn transition-opacity duration-700 md:block lg:block`}
    >
      {resolvedTheme === "dark" ? (
        <BsSunFill className="sun text-xl text-sheen-gold md:text-3xl" />
      ) : (
        <BsFillMoonFill size={26} className="moon text-wine" />
      )}
    </button>
  );
};

export default ThemeButton;
