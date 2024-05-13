export interface BaseProject {
    id: number;
    name: string;
    private: boolean;
    description: string;
    stargazers_count: number;
}

export interface Project extends BaseProject {
    image: string;
}
