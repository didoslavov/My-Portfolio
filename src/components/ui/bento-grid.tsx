import { Project } from '@/types/projects';
import { cn } from '@/utils/cn';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
    return (
        <div className={cn('grid md:auto-rows-1fr grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({ project, className }: { project: Project; className: string }) => {
    return (
        <div
            className={cn(
                'row-span-1 min-h-80 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
                className
            )}>
            <div className="group-hover/bento:translate-x-2 transition duration-200 min-h-52">
                <div
                    style={{ backgroundImage: `url(${project.image})` }}
                    className={`h-full bg-cover bg-center bg-opacity-30`}></div>
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{project.name}</div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">{project.description}</div>
            </div>
        </div>
    );
};
