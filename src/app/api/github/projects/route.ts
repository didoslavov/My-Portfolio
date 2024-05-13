import { Project } from '@/types/projects';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const owner = 'didoslavov';
    const imagePath = 'thumbnail.png';
    const token = process.env.GITHUB_API_TOKEN;

    const reposResponse = await fetch(`https://api.github.com/users/${owner}/repos`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    const baseRepos: Project[] = await reposResponse.json();

    const repos = await Promise.all(
        baseRepos.map(async (repo) => {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo.name}/contents/${imagePath}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data: { download_url: string } = await response.json();

            return data.download_url ? { ...repo, image: data.download_url } : null;
        })
    );

    return NextResponse.json(repos.filter(Boolean));
}
