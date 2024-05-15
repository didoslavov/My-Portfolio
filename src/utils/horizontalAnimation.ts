import gsap from "gsap";

interface Config {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: number | false;
  paddingRight?: string;
  reversed?: boolean;
}

export function horizontalLoop(items: HTMLElement[], config: Config = {}) {
  items = gsap.utils.toArray(items);

  const { repeat, paused, speed = 1, snap = 1, paddingRight = "0" } = config;

  const pixelsPerSecond = speed * 100;
  const snapFunc = snap === false ? (v: number) => v : gsap.utils.snap(snap);
  const widths: number[] = [];
  const xPercents: number[] = [];

  const tl = gsap.timeline({
    repeat,
    paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  });

  gsap.set(items, {
    xPercent: (i, el) => {
      const width = parseFloat(gsap.getProperty(el, "width", "px") as string);
      widths[i] = width;
      const xPercent = snapFunc(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / width) * 100 +
          parseFloat(gsap.getProperty(el, "xPercent") as any),
      );
      xPercents[i] = xPercent;
      return xPercent;
    },
    x: 0,
  });

  const totalWidth =
    items[items.length - 1].offsetLeft +
    (xPercents[items.length - 1] / 100) * widths[items.length - 1] -
    items[0].offsetLeft +
    items[items.length - 1].offsetWidth *
      parseFloat(
        gsap.getProperty(items[items.length - 1], "scaleX") as string,
      ) +
    parseFloat(paddingRight);

  items.forEach((item, i) => {
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - items[0].offsetLeft;
    const distanceToLoop =
      distanceToStart +
      widths[i] * parseFloat(gsap.getProperty(item, "scaleX") as string);

    tl.to(
      item,
      {
        xPercent: snapFunc(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0,
    )
      .fromTo(
        item,
        {
          xPercent: snapFunc(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
  });

  if (tl.vars.onReverseComplete) {
    tl.vars.onReverseComplete();
  }
  tl.reverse();
  return tl;
}
