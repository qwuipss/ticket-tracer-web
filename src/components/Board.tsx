import { useState } from "react";
import TaskInfoCard from "./TaskInfoCard";
import { ITask, TaskStatus, TaskGroups } from "../types/Types.tsx";
import { tasks } from "../mock/Mock";

const Board = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(tasks[0]);
    const [currentFilter, setCurrentFilter] = useState<TaskStatus>(TaskStatus.NoFilter);
    const [tasksState, setTasksState] = useState(tasks);    

    const handleOpenModal = (task: ITask) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleSaveTask = (updatedTask: ITask) => {
        setTasksState(prevTasks => 
            prevTasks.map(task => 
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const filteredTasks: TaskGroups = {
        [TaskStatus.Todo]: tasksState.filter(task => task.status === TaskStatus.Todo),
        [TaskStatus.InProgress]: tasksState.filter(task => task.status === TaskStatus.InProgress),
        [TaskStatus.Done]: tasksState.filter(task => task.status === TaskStatus.Done),
        [TaskStatus.NoFilter]: tasksState
    };

    const visibleColumns = currentFilter === TaskStatus.NoFilter
        ? [TaskStatus.Todo, TaskStatus.InProgress, TaskStatus.Done]
        : [currentFilter];

    return (
        <main className="board">
            <div className="project-settings">
                <div className="project-header">
                    <h1>Alfaproject</h1>
                    <button className="save-btn">
                        <img src="/imgs/save.svg" alt="Сохранить" />Сохранить
                    </button>
                    <button className="share-btn">
                        <img src="/imgs/share.svg" alt="Поделиться" />Поделиться
                    </button>
                </div>
            </div>
            
            <div className="filter">
                <label>Фильтр</label>
                <select 
                    id="filter" 
                    value={currentFilter}
                    onChange={(e) => setCurrentFilter(e.target.value as TaskStatus)}
                >
                    {Object.values(TaskStatus).map(status => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
                <input
                    className="filter-search-bar"
                    type="text"
                    placeholder="Поиск"
                />
            </div>

            <div className="task-board">
                {visibleColumns.map(column => (
                    <div className="task-column" key={column}>
                        <h2>{column}</h2>
                        <div className="task-list">
                            {filteredTasks[column].map((task: ITask) => (
                                <div
                                    className="task-card"
                                    key={task.id}
                                    onClick={() => handleOpenModal(task)}
                                >
                                    <p className="task-name-table">{task.name}</p>
                                    <div className="task-info">
                                        <img
                                            className="task-card-photo"
                                            src="/imgs/user.svg"
                                            alt="User"
                                        />
                                        <img className="type-flag" src={`/imgs/flag-${task.type}.svg`}></img>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {column === "К выполнению" && (
                            <button 
                                className='create-new-task-btn' 
                                onClick={() => handleOpenModal(tasks[0])}
                            >
                                + Создать
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <TaskInfoCard 
                    task={selectedTask} 
                    onClose={handleCloseModal}
                    onSave={handleSaveTask}
                />
            )}
        </main>
    );
};

export default Board;