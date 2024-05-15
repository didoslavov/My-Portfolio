import Marquee from '@/components/ui/marquee';
import React from 'react';

const page = () => {
    return (
        <section className="max-w-[1440px] mx-auto">
            <article className="flex flex-col justify-between items-center">
                <h3 className="text-5xl mb-10 leading-[100px] font-semibold text-raisin-black dark:text-silver">
                    Technologies I&apos;m familiar with
                </h3>
                <Marquee />
            </article>
        </section>
    );
};

export default page;
