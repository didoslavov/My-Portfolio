'use client';

import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { Project } from '@/types/projects';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateEnterPage } from '@/utils/animatePage';

export function BentoGridProjcts({ projects }: { projects: Project[] }) {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        animateEnterPage(contentRef);
    });

    return (
        <div ref={contentRef} className="w-full">
            <BentoGrid className="">
                {projects?.map((p: Project, i: number) => {
                    const row = Math.floor(i / 3);
                    const positionInRow = i % 3;
                    let className;
                    if (row % 3 === 0) {
                        className = positionInRow === 1 ? 'md:col-span-6' : 'md:col-span-3';
                    } else if (row % 3 === 1) {
                        className = 'md:col-span-4';
                    } else {
                        className = positionInRow === 1 ? 'md:col-span-6' : 'md:col-span-3';
                    }
                    return p && <BentoGridItem key={p.id} project={p} className={className} />;
                })}
            </BentoGrid>
        </div>
    );
}
