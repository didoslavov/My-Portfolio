import { BentoGridProjcts } from '@/components/projects/projects';
import { Project } from '@/types/projects';

const Projects = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/github/projects`);
    const projects = await response.json();

    return (
        <section className="m-auto flex flex-wrap max-w-[1440px] gap-8 justify-between">
            <BentoGridProjcts projects={projects.filter((p: Project) => p.stargazers_count > 2)} />
        </section>
    );
};

export default Projects;
