import { useState } from "react";
import TaskInfoCard from "./TaskInfoCard";

import { ITask } from "../types/Types.tsx";

import { tasks } from "../mock/Mock";

const Board = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(tasks[0]);

    const handleOpenModal = (task: ITask) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className="board">
            <div className="project-settings">
                <div className="project-header">
                    <h1>Alfaproject</h1>
                    <button className="save-btn">
                        <img src="/imgs/save.svg"></img>Сохранить
                    </button>
                    <button className="share-btn">
                        <img src="/imgs/share.svg"></img>Поделиться
                    </button>
                </div>
                <div className="members-settings">
                    <p>Участники</p>
                    <div className="members">
                        <img src="/imgs/user.svg"></img>
                        <img src="/imgs/user.svg"></img>
                        <img src="/imgs/user.svg"></img>
                        <img src="/imgs/user.svg"></img>
                    </div>
                    <img src="/imgs/ellipsis.svg"></img>
                    <img src="/imgs/plus.svg"></img>
                </div>
            </div>
            <div className="filter">
                <label>Фильтр</label>
                <select id="filter">
                    <option>Отсутствует</option>
                    <option>К выполнению</option>
                    <option>В работе</option>
                    <option>Готово</option>
                </select>
                <input
                    className="filter-search-bar"
                    type="text"
                    placeholder="Поиск"
                ></input>
            </div>

            <div className="task-board">
                <div className="task-column">
                    <h2>К выполнению</h2>
                    <div
                        className="task-card"
                        onClick={() => handleOpenModal(tasks[0])}
                    >
                        <p className="task-name-table">{tasks[0].name}</p>
                        <div className="task-info">
                            <img
                                className="task-card-photo"
                                src="/imgs/user.svg"
                            ></img>
                            <span className="task-id-table">{tasks[0].id}</span>
                        </div>
                    </div>
                </div>
                <div className="task-column">
                    <h2>В работе</h2>
                    <div
                        className="task-card"
                        onClick={() => handleOpenModal(tasks[1])}
                    >
                        <p className="task-name-table">{tasks[1].name}</p>
                        <div className="task-info">
                            <img
                                className="task-card-photo"
                                src="/imgs/user.svg"
                            ></img>
                            <span className="task-id-table">{tasks[1].id}</span>
                        </div>
                    </div>
                </div>
                <div className="task-column">
                    <h2>Готово</h2>
                    <div
                        className="task-card"
                        onClick={() => handleOpenModal(tasks[2])}
                    >
                        <p className="task-name-table">{tasks[2].name}</p>
                        <div className="task-info">
                            <img
                                className="task-card-photo"
                                src="/imgs/user.svg"
                            ></img>
                            <span className="task-id-table">{tasks[2].id}</span>
                        </div>
                    </div>
                </div>
                <img className="add-button" src="/imgs/add.svg"></img>
            </div>

            {isModalOpen && (
                <TaskInfoCard task={selectedTask} onClose={handleCloseModal} />
            )}
        </main>
    );
};

export default Board;
