import { useState } from "react";
import ErrorPopup from "./ErrorPopup";
import LoadingPopup from "./LoadingPopup";
import { BASE_URL, IBoard, IBoardCreateProps } from "../types/Types";
import axios from "axios";

const BoardCreate = ({projectId, onBack}: IBoardCreateProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isRequestError, setRequestError] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
    });

    const handleCloseErrorMessage = () => {
        setRequestError(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.title.length > 0) {
            try {
                setIsLoading(true);
                await axios.post<IBoard>(
                    `${BASE_URL}/boards`,
                    {
                        "title": formData.title,
                        "projectId": projectId,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                onBack();
            } catch {
                setRequestError(true);
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isLoading) {
        return <LoadingPopup />;
    }

    if (isRequestError) {
        return <ErrorPopup onClose={() => handleCloseErrorMessage()} />;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <main className="project-list" key="project-list">
            <form 
                className="project-list-wrapper"
                onSubmit={handleSubmit}
                noValidate>
                <input 
                    className='project-title-input'
                    id="project-title-input"
                    name="title"
                    placeholder="Введите название доски"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}>
                </input>
                <div className="board-create-buttons">
                    <button className="project-submit" type="submit">Создать доску</button>
                    <button className="boards-list-button" onClick={onBack}>Назад к списку</button>
                </div>
            </form>
        </main>
    );
};

export default BoardCreate;