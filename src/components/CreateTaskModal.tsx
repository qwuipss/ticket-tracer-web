import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../types/Types";
import { ITask } from "../types/Types";

interface CreateTaskModalProps {
    boardId: string;
    onClose: () => void;
    onTaskCreated: (newTask: ITask) => void;
}

const CreateTaskModal = ({
    boardId,
    onClose,
    onTaskCreated,
}: CreateTaskModalProps) => {
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        type: 1,
        boardId: boardId,
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setTaskData((prev) => ({
            ...prev,
            [name]: name === "type" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post<ITask>(
                `${BASE_URL}/tickets`,
                {
                    title: taskData.title,
                    description: taskData.description,
                    type: taskData.type,
                    boardId: taskData.boardId,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            const newTask: ITask = {
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                status: "К выполнению",
                type: response.data.type,
            };

            onTaskCreated(newTask);
            onClose();
        } catch (error) {
            console.error("Ошибка при создании задачи:", error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="task-modal">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <h2 className="modal-label">Создать задачу</h2>
                        <button type="submit" className="save-task-btn">
                            <img src="./imgs/save.svg" alt="Сохранить" />
                            Сохранить
                        </button>
                        <img
                            className="close-task-create"
                            src="./imgs/cross.svg"
                            onClick={onClose}
                        ></img>
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Название</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={taskData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Описание</label>
                        <textarea
                            id="description"
                            name="description"
                            value={taskData.description}
                            onChange={handleChange}
                            rows={4}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Тип задачи</label>
                        <div className="type-selector">
                            <select
                                id="type"
                                name="type"
                                value={taskData.type}
                                onChange={handleChange}
                                defaultValue={1}
                            >
                                <option value={1}>Обычная</option>
                                <option value={2}>Эпик</option>
                                <option value={3}>Багфикс</option>
                            </select>
                            <img
                                src={`./imgs/flag-${taskData.type}.svg`}
                                alt="Тип задачи"
                                className="type-flag-preview"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTaskModal;
