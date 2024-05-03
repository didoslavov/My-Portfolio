import { getAllProjects } from '@/api/github';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { Project } from '@/types/projects';

export async function BentoGridProjcts() {
    const projects = await getAllProjects();

    return (
        <BentoGrid className="max-w-[1440px] mx-auto">
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
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
