import { useState } from "react";
import { ITask, ITaskInfoCardProps } from "../types/Types.tsx";

const TaskInfoCard = ({ task, onClose, onSave }: ITaskInfoCardProps) => {
    const [editedTask, setEditedTask] = useState<ITask>({ ...task });
    const [isEditing, setIsEditing] = useState(false);

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setEditedTask({ ...editedTask, description: e.target.value });
    };

    const handleSave = () => {
        onSave(editedTask);
        setIsEditing(false);
    };

    return (
        <div>
            <div className="task-info-substrate"></div>
            <div className="task-info-card">
                <div className="base-info">
                    <div className="task-main-info">
                        <h1 className="task-name">{editedTask.title}</h1>
                        <img
                            className="card-type-flag"
                            src={`${import.meta.env.BASE_URL}imgs/flag-${editedTask.type}.svg`}
                            alt="Тип задачи"
                        />
                    </div>
                    <div className="description-section">
                        {isEditing ? (
                            <>
                                <div className="edit-controls">
                                    <h2 className="task-desc-header">
                                        Описание задачи
                                    </h2>
                                    <button
                                        className="save-changes-btn"
                                        onClick={handleSave}
                                    >
                                        Сохранить
                                    </button>
                                    <button
                                        className="cancel-changes-btn"
                                        onClick={() => setIsEditing(false)}
                                    >
                                        Отмена
                                    </button>
                                </div>
                                <textarea
                                    className="task-desc"
                                    value={editedTask.description}
                                    onChange={handleDescriptionChange}
                                    autoFocus
                                />
                            </>
                        ) : (
                            <>
                                <div className="edit-controls">
                                    <h2 className="task-desc-header">
                                        Описание задачи
                                    </h2>
                                    <button
                                        className="edit-btn"
                                        onClick={() => setIsEditing(true)}
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}imgs/edit.svg`}
                                            alt="Редактировать"
                                        />
                                    </button>
                                </div>
                                <p
                                    className="task-desc-text"
                                    onClick={() => setIsEditing(true)}
                                >
                                    {editedTask.description ||
                                        "Нажмите, чтобы добавить описание"}
                                </p>
                            </>
                        )}
                    </div>

                    <h2 className="task-comments-header">Комментарии</h2>
                    <div className="comments-section">
                        <img className="user-photo" src={`${import.meta.env.BASE_URL}imgs/user.svg`}></img>
                        <textarea
                            className="task-comments"
                            placeholder="Написать комментарий..."
                        ></textarea>
                    </div>
                </div>
                <div className="card-side-info">
                    <div className="task-card-btns">
                        <button className="share-button">
                            <img src={`${import.meta.env.BASE_URL}imgs/share.svg`}></img>Поделиться
                        </button>
                        <button className="action-button">
                            <img src={`${import.meta.env.BASE_URL}imgs/ellipsis.svg`}></img>Действия
                        </button>
                        <img
                            className="close"
                            src={`${import.meta.env.BASE_URL}imgs/cross.svg`}
                            onClick={onClose}
                        ></img>
                    </div>
                    <select className="card-filter">
                        <option>К выполнению</option>
                        <option>В работе</option>
                        <option>Готово</option>
                    </select>
                    <div className="task-info-table">
                        <div className="task-info-header">
                            Сведения о задаче
                        </div>
                        <div className="author">
                            <div className="author-header">Автор</div>
                            <div className="author-info">
                                <img
                                    className="author-photo"
                                    src={`${import.meta.env.BASE_URL}imgs/user.svg`}
                                ></img>
                                <p className="author-id">@vanya</p>
                            </div>
                        </div>
                        <div className="doer">
                            <div className="doer-header">Исполнитель</div>
                            <div className="doer-info">
                                <img
                                    className="doer-photo"
                                    src={`${import.meta.env.BASE_URL}imgs/user.svg`}
                                ></img>
                                <p className="doer-id">@petya</p>
                            </div>
                        </div>
                        <div className="marks">
                            <div className="marks-header">Метки</div>
                            <div className="marks-info">Отсутствует</div>
                        </div>
                    </div>
                    <p className="create-info">
                        Создано 2 апреля 2025 г. в 11:17
                    </p>
                    <p className="update-info">Обновлено 35 минут назад</p>
                </div>
            </div>
        </div>
    );
};

export default TaskInfoCard;
