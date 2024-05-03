import { RefObject } from 'react';
import gsap, { Elastic } from 'gsap';

export const animatePage = (contentRef: RefObject<HTMLDivElement>) => {
    const vsOpts = {
        slides: document.querySelectorAll('.slide'),
        list: document.querySelector('.slides'),
        duration: 6,
        lineHeight: 50,
    };

    const vSlide = gsap.timeline({
        paused: true,
        repeat: -1,
    });

    let index = 1;

    vsOpts.slides.forEach(function () {
        if (index > vsOpts.slides.length - 1) {
            index = 0;
        }

        vSlide.to(vsOpts.list, {
            duration: vsOpts.duration / vsOpts.slides.length,
            y: index * -1 * vsOpts.lineHeight,
            ease: Elastic.easeOut.config(1, 2),
        });

        index++;
    });

    vSlide.play();

    gsap.from(contentRef?.current, {
        transform: 'translateY(-100%)',
        duration: 2,
        ease: 'power3.out',
    });
};
