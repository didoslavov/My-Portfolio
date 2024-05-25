import gsap from "gsap";

let listItemTween: gsap.core.Tween;

export const animateMobileMenu = (): gsap.core.Tween => {
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

  return listItemTween;
};
