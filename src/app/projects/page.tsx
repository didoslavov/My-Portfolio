import { BentoGridProjcts } from '@/components/projects/projects';

const Projects = () => {
    return (
        <section className="m-auto flex flex-wrap max-w-[1440px] gap-8 justify-between">
            <BentoGridProjcts />
        </section>
    );
};

export default Projects;
