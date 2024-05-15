export interface BaseProject {
  id: number;
  name: string;
  private: boolean;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  homepage: string;
  created_at: string;
}

export interface Project extends BaseProject {
  image: string;
}
