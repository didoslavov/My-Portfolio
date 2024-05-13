import { FaStar } from 'react-icons/fa';
import { Project } from '@/types/projects';
import { cn } from '@/utils/cn';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
    return <div className={cn('grid grid-cols-1 md:grid-cols-12', className)}>{children}</div>;
};

export const BentoGridItem = ({ project, className }: { project: Project; className: string }) => {
    return (
        <div
            className={cn(
                'rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4',
                className
            )}>
            <div className="group-hover/bento:translate-x-2 transition duration-200 min-h-64 text-raisin-black dark:text-silver">
                <div
                    style={{ backgroundImage: `url(${project.image})` }}
                    className={`h-64 bg-cover bg-center bg-opacity-30 rounded-xl`}
                />
                <h3 className="font-sans font-black text-neutral-600 text-xl dark:text-neutral-200 mb-2 mt-2">
                    <div className="flex justify-between">
                        {project.name}
                        <span className="flex items-center gap-1 text-lg font-bold">
                            <FaStar className="dark:text-sheen-gold text-wine" />
                            {project.stargazers_count}
                        </span>
                    </div>
                </h3>
                <p className="font-sans text-lg font-medium dark:text-neutral-300">{project.description}</p>
            </div>
        </div>
    );
};
