import { Project } from '@/types/projects';

interface ProjectImage {
    repoName: string;
    image: string | null;
}

const getProjectImage = async (repoName: string): Promise<ProjectImage> => {
    const response = await fetch(`https://api.github.com/repos/didoslavov/${repoName}/contents/thumbnail.png`);
    const imageData = await response.json();

    return {
        repoName,
        image: imageData.download_url || null,
    };
};

export const getAllProjects = async () => {
    try {
        const response = await fetch('https://api.github.com/users/didoslavov/repos');
        if (!response.ok) {
            throw new Error('Error loading projects from GitHub Api');
        }

        const repositories: Project[] = await response.json();
        const projectImagesPromises = repositories.map((repo) => getProjectImage(repo.name));
        const projectImages = await Promise.all(projectImagesPromises);

        return repositories.map((r) => ({
            ...r,
            image: projectImages.find((p: ProjectImage) => p.repoName === r.name)?.image || null,
        }));
    } catch (error) {
        console.log(error);
    }
};
