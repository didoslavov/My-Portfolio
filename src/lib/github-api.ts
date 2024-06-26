"use server";

import { BaseProject, Project } from "@/types/projects";

export async function getProjects() {
  const owner = "didoslavov";
  const imagePath = "thumbnail.png";
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

  const reposResponse = await fetch(
    `https://api.github.com/users/${owner}/repos`,
    {
      headers: { Authorization: `Bearer ${githubToken}` },
    },
  );

  const baseRepos: BaseProject[] = await reposResponse.json();

  const repos = await Promise.all(
    baseRepos.map(async (repo) => {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo.name}/contents/${imagePath}`,
        {
          headers: { Authorization: `Bearer ${githubToken}` },
        },
      );
      const data: { download_url: string } = await response.json();

      return data.download_url ? { ...repo, image: data.download_url } : null;
    }),
  );

  return repos
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b?.created_at || 0).getTime() -
        new Date(a?.created_at || 0).getTime(),
    ) as Project[];
}
