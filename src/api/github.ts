//TODO: Implement error handling

import { Project } from '@/types/projects';

export const getAllProjects = async () => {
    try {
        const response = await fetch('https://api.github.com/users/didoslavov/repos');
        if (!response.ok) {
            throw new Error('Error loading projects from GitHub Api');
        }
        const projectsTemp = await response.json();

        const thumbnailPromises = projectsTemp.map(async (p: Project) => {
            const res = fetch(`https://api.github.com/repos/didoslavov/${p.name}/contents/thumbnail/thumbnail.png`);
            const thumbnailData = res.then((response) => response.json());
            return thumbnailData;
        });

        const projectsWithThumbnails = await Promise.all(thumbnailPromises);

        const projectsWithImages = projectsTemp.map((p: Project, i: number) => {
            return {
                ...p,
                image: projectsWithThumbnails[i],
            };
        });

        return await projectsWithImages;
    } catch (error) {
        console.log(error);
    }
};
