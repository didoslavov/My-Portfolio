'use client';

import React, { useEffect, useState } from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { getAllProjects } from '@/api/github';

export async function BentoGridProjcts() {
    const [loading, setLoading] = useState(true);
    const projects = getAllProjects();

    if (loading) {
        return <Skeleton />;
    }

    return (
        <BentoGrid className="max-w-[1440px] mx-auto">
            {projects.then((promise) =>
                promise.map((p: any, i: number) => (
                    <BentoGridItem
                        key={i}
                        name={p.name}
                        description={p.description}
                        header={p.header}
                        image={p.image}
                        className={i % 3 === 0 || i % 5 === 0 ? 'md:col-span-2' : ''}
                    />
                ))
            )}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
