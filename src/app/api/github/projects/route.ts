import { Project } from '@/types/projects';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest, res: NextResponse) {
    const owner = 'didoslavov';
    const imagePath = 'thumbnail.png';
    const githubToken = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

    const reposResponse = await fetch(`https://api.github.com/users/${owner}/repos`, {
        headers: { Authorization: `Bearer ${githubToken}` },
    });

    const baseRepos: Project[] = await reposResponse.json();

    const repos = await Promise.all(
        baseRepos.map(async (repo) => {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo.name}/contents/${imagePath}`, {
                headers: { Authorization: `Bearer ${githubToken}` },
            });
            const data: { download_url: string } = await response.json();

            return data.download_url ? { ...repo, image: data.download_url } : null;
        })
    );

    console.log(repos.filter(Boolean));

    return NextResponse.json(repos.filter(Boolean));
}
