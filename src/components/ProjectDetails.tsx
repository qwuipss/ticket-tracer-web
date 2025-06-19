import axios from "axios";
import { BASE_URL, IBoard, IProjectDetailsProps } from "../types/Types";
import { useState, useEffect } from "react";
import LoadingPopup from "./LoadingPopup";
import ErrorPopup from "./ErrorPopup";
import BoardCreate from "./BoardCreate";
import { NavLink } from "react-router-dom";

const ProjectDetails = ({ project, onBack }: IProjectDetailsProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isRequestError, setRequestError] = useState(false);
    const [isCreateWindowOpened, setCreateWindow] = useState(false);
    const [boards, setBoards] = useState<IBoard[]>([]);

    const onCreate = () => {
        setCreateWindow(true);
    };

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await axios.get<IBoard[]>(
                    `${BASE_URL}/boards/all-by-project?projectId=${project.id}&offset=0&limit=50`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                setBoards(response.data);
            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status !== 404) {
                        setRequestError(true);
                    }
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchBoards();
    }, [project.id]);

    if (isLoading) {
        return <LoadingPopup />;
    }

    if (isRequestError) {
        return <ErrorPopup onClose={() => setRequestError(false)} />;
    }

    if (isCreateWindowOpened) {
        return <BoardCreate projectId={project.id} onBack={() => setCreateWindow(false)}/>
    }

    return (
        <div className="project-list">
            <div className="boards-wrapper">
                <h2 className="boards-project-title">{project.title}</h2>

                <h3 className="boards-title">Доски проекта:</h3>
                <div className="boards-list">
                    {boards.length > 0 ? (
                        boards.map((board) => (
                            <div key={board.id} className="board-item">
                                <NavLink 
                                    to={`/app/dashboard/board/${board.id}`}
                                >
                                    {board.title}
                                </NavLink>
                            </div>
                        ))
                    ) : (
                        <p className="board-item">В этом проекте пока нет досок</p>
                    )}
                </div>
                <button className="boards-list-button" onClick={onCreate}>Создать доску</button>
                <button className="boards-list-button back" onClick={onBack}>Назад к списку</button>
            </div>
        </div>
    );
};

export default ProjectDetails;
