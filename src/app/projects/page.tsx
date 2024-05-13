import { BentoGridProjcts } from '@/components/projects/projects';
import { Project } from '@/types/projects';

const Projects = async () => {
    const response = await fetch(`/api/github/projects`);
    const projects: Project[] = await response.json();

    return (
        <section className="m-auto flex flex-wrap max-w-[1440px] gap-8 justify-between">
            <BentoGridProjcts projects={projects} />
        </section>
    );
};

export default Projects;
