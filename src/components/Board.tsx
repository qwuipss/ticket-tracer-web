import { useEffect, useState } from "react";
import TaskInfoCard from "./TaskInfoCard";
import { ITask, TaskStatus, TaskGroups, IBoardProps, BASE_URL } from "../types/Types.tsx";
import { tasks } from "../mock/Mock";
import { useParams } from "react-router-dom";
import LoadingPopup from "./LoadingPopup.tsx";
import axios from "axios";
import CreateTaskModal from "./CreateTaskModal.tsx";

const Board = () => {
    const { id } = useParams<{ id: string }>();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(tasks[0]);
    const [isCreateWindowOpened, setCreateWindow] = useState(false);
    const [currentFilter, setCurrentFilter] = useState<TaskStatus>(TaskStatus.NoFilter);
    const [tasksState, setTasksState] = useState(tasks);  
    const [board, setBoard] = useState<IBoardProps | null>(null);

    const handleTaskCreated = (newTask: ITask) => {
        setTasksState(prev => [...prev, newTask]);
    };

    useEffect(() => {
        const controller = new AbortController();

        const getBoardById = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/boards/${id}?id=${id}`,
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true,
                        signal: controller.signal
                    }
                );
                setBoard(response.data);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    console.error('Ошибка загрузки доски:', error);
                }
            }
        };

        if (id) getBoardById();

        return () => controller.abort();
    }, [id]);

    if (!board) {
        return <LoadingPopup />;
    }

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


    console.log(tasksState);

    if(id) {   
        return (
            <main className="board">
                <div className="project-settings">
                    <div className="project-header">
                        <h1>{board.title}</h1>
                        <button className="save-btn">
                            <img src={`${import.meta.env.BASE_URL}imgs/save.svg`} alt="Сохранить" />Сохранить
                        </button>
                        <button className="share-btn">
                            <img src={`${import.meta.env.BASE_URL}imgs/share.svg`} alt="Поделиться" />Поделиться
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
                                        <p className="task-name-table">{task.title}</p>
                                        <div className="task-info">
                                            <img
                                                className="task-card-photo"
                                                src={`${import.meta.env.BASE_URL}imgs/user.svg`}
                                                alt="User"
                                            />
                                            <img className="type-flag" src={`${import.meta.env.BASE_URL}imgs/flag-${task.type}.svg`}></img>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {column === "К выполнению" && (
                                <button 
                                    className='create-new-task-btn' 
                                    onClick={() => setCreateWindow(true)}
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

                {isCreateWindowOpened && (
                    <CreateTaskModal 
                    boardId={id}
                    onClose={() => setCreateWindow(false)}
                    onTaskCreated={handleTaskCreated}
                    />
                )}
            </main>
        );
    }
};

export default Board;