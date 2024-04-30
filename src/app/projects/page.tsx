import Project from '../../components/Project/Project';

const Projects = () => {
    const projects: JSX.Element[] = new Array(10).fill(1);

    return (
        <div className="grid grid-cols-12 p-20 gap-20 justify-center">
            {projects.map((_, i) => (
                <Project key={i} className="col-span-3" />
            ))}
        </div>
    );
};

export default Projects;
