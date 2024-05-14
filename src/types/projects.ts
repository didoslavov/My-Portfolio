export interface BaseProject {
    id: number;
    name: string;
    private: boolean;
    description: string;
    language: string;
    stargazers_count: number;
    html_url: string;
}

export interface Project extends BaseProject {
    image: string;
}
