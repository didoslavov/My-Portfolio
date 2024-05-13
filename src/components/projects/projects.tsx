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
        <div ref={contentRef} className="max-w-[1440px] mx-auto">
            <BentoGrid>
                {projects?.map(
                    (p: Project, i: number) =>
                        p && (
                            <BentoGridItem key={p.id} project={p} className={i % 3 === 0 || i % 5 === 0 ? 'md:col-span-2' : ''} />
                        )
                )}
            </BentoGrid>
        </div>
    );
}
