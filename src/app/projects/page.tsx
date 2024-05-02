import { BentoGridProjcts } from '@/components/Project/BentoGrid';
import Project from '../../components/Project/Project';

const Projects = () => {
    return (
        <section className="m-auto flex flex-wrap max-w-[1440px] gap-8 justify-between">
            <BentoGridProjcts />
        </section>
    );
};

export default Projects;
