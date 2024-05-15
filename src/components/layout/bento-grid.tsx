import { FaStar } from "react-icons/fa";
import { Project } from "@/types/projects";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 gap-2 md:grid-cols-12", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  project,
  className,
}: {
  project: Project;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento col-start-2 col-end-11 flex flex-col justify-between space-y-4 rounded-xl p-4 shadow-wine transition duration-200 hover:cursor-pointer hover:shadow-lg dark:shadow-sheen-gold",
        className,
      )}
    >
      <Link
        href={project.homepage || project.html_url}
        target="_blank"
        className="min-h-64 text-raisin-black transition duration-200 group-hover/bento:-translate-y-2 dark:text-silver"
      >
        <div
          style={{ backgroundImage: `url(${project.image})` }}
          className={`relative mb-4 h-64 overflow-hidden rounded-xl bg-opacity-30 bg-cover bg-center before:absolute before:-left-8 before:-top-1 before:transition-all md:mb-10 ${
            project.language.toLowerCase() === "javascript"
              ? 'before:bg-sheen-gold before:content-["JS"]'
              : 'before:bg-blue-700 before:content-["TS"]'
          } before before:z-50 before:-rotate-45 before:px-10 before:py-2 before:text-xl before:text-silver-100`}
        />
        <h3 className="text-raisin-black-600 mb-2 mt-2 font-sans text-xl font-black dark:text-silver">
          <div className="flex justify-between">
            {project.name}
            <span className="flex items-center gap-1 text-lg font-bold">
              <FaStar className="text-wine dark:text-sheen-gold" />
              {project.stargazers_count}
            </span>
          </div>
        </h3>
        <p className="font-sans text-lg font-medium text-raisin-black dark:text-silver">
          {project.description}
        </p>
      </Link>
    </div>
  );
};
