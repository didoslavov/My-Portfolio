import { BentoGridProjcts } from "@/components/layout/projects";
import { getProjects } from "@/lib/github-api";
import { Project } from "@/types/projects";

const Projects = async () => {
  const projects: Project[] = await getProjects();

  return (
    <section className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-8">
      <BentoGridProjcts projects={projects} />
    </section>
  );
};

export default Projects;
