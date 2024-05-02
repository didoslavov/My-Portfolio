import Image from 'next/image';
import React from 'react';
import image from '/public/card.jpg';

const Project = ({ className }: { className: string }) => {
    return (
        <div
            className={`flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row ${className}`}>
            <Image
                className="w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                src={image}
                alt="Project image"
            />
            <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium">Card title</h5>
                <p className="mb-4 text-base">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
                    little bit longer.
                </p>
                <p className="text-xs text-surface/75 dark:text-neutral-300">Last updated 3 mins ago</p>
            </div>
        </div>
    );
};

export default Project;
