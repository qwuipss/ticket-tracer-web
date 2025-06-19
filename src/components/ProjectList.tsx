import axios from "axios";
import { BASE_URL, IProject } from "../types/Types";
import { useEffect, useState } from "react";
import LoadingPopup from "./LoadingPopup";
import ErrorPopup from "./ErrorPopup";
import ProjectDetails from "./ProjectDetails";

const ProjectList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isRequestError, setRequestError] = useState(false);
    const [projects, setProjects] = useState<IProject[]>([]);

    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

    const handleCloseErrorMessage = () => {
        setRequestError(false);
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get<IProject[]>(
                    `${BASE_URL}/projects/all?offset=0&limit=50`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                setProjects(response.data);
            } catch {
                setRequestError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (isLoading) {
        return <LoadingPopup />;
    }

    if (isRequestError) {
        return <ErrorPopup onClose={() => handleCloseErrorMessage()} />;
    }

    if (selectedProject) {
        return (
        <ProjectDetails 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
        />
        );
    }

    return (
        <main className="project-list" key="project-list">
        <h1>Список проектов</h1>
            <div className="project-list-wrapper">
                {projects.map((project) => (
                    <div 
                        className="project-title" 
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                    >
                        {project.title}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default ProjectList;
