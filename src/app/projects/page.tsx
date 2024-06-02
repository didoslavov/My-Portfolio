import type { Project } from "@/types/projects";
import { getProjects } from "@/lib/github-api";
import dynamic from "next/dynamic";

const BentoGridProjcts = dynamic(() => import("@/components/layout/projects"));

const Projects = async () => {
  const projects: Project[] = await getProjects();

  return (
    <section className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-8">
      <BentoGridProjcts projects={projects} />
    </section>
  );
};

export default Projects;
