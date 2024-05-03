'use client';

import { getAllProjects } from '@/api/github';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { Project } from '@/types/projects';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { animatePage } from '@/utils/animatePage';

export async function BentoGridProjcts() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [projects, setProjects] = useState<Project[]>([]);

    useGSAP(() => {
        animatePage(contentRef);
    }, []);

    useEffect(() => {
        async function getProjects() {
            const res: Project[] | undefined = await getAllProjects();

            res && setProjects(res);
        }

        getProjects();
    }, []);

    return (
        <div ref={contentRef} className="max-w-[1440px] mx-auto">
            <BentoGrid>
                {projects?.map((p: Project, i: number) => (
                    <BentoGridItem
                        key={p.id}
                        name={p.name}
                        description={p.description}
                        image={p.image || ''}
                        className={i % 3 === 0 || i % 5 === 0 ? 'md:col-span-2' : ''}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
