import { BentoGridProjcts } from '@/components/projects/projects';
import { getProjects } from '@/lib/github-api';
import { Project } from '@/types/projects';

const Projects = async () => {
    const projects: Project[] = await getProjects();

    return (
        <section className="mx-auto flex flex-wrap max-w-[1440px] gap-8 justify-between">
            <BentoGridProjcts projects={projects} />
        </section>
    );
};

export default Projects;
