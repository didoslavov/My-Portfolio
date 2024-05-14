import { FaStar } from 'react-icons/fa';
import { Project } from '@/types/projects';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
    return <div className={cn('grid grid-cols-1 md:grid-cols-12 gap-2', className)}>{children}</div>;
};

export const BentoGridItem = ({ project, className }: { project: Project; className: string }) => {
    return (
        <div
            className={cn(
                'rounded-xl group/bento hover:shadow-2xl transition duration-200 shadow-raisin-black hover:cursor-pointer dark:shadow-none p-4 justify-between flex flex-col space-y-4',
                className
            )}>
            <Link
                href={project.homepage || project.html_url}
                target="_blank"
                className="group-hover/bento:-translate-y-2 transition duration-200 min-h-64 text-raisin-black dark:text-silver">
                <div
                    style={{ backgroundImage: `url(${project.image})` }}
                    className={`h-64 bg-cover overflow-hidden bg-center bg-opacity-30 rounded-xl relative before:absolute before:-top-1 before:-left-8 before:transition-all ${
                        project.language.toLowerCase() === 'javascript'
                            ? 'before:content-["JS"] before:bg-sheen-gold'
                            : 'before:content-["TS"] before:bg-blue-700'
                    } before:text-xl before:text-silver-100 before:-rotate-45 before before:px-10 before:py-2 before:z-50`}
                />
                <h3 className="font-sans font-black text-raisin-black-600 text-xl dark:text-silver mb-2 mt-2">
                    <div className="flex justify-between">
                        {project.name}
                        <span className="flex items-center gap-1 text-lg font-bold">
                            <FaStar className="dark:text-sheen-gold text-wine" />
                            {project.stargazers_count}
                        </span>
                    </div>
                </h3>
                <p className="font-sans text-lg font-medium text-raisin-black dark:text-silver">{project.description}</p>
            </Link>
        </div>
    );
};
