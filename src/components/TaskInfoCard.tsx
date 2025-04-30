import { ITask } from "../types/Types.tsx";

interface TaskInfoCardProps {
    task: ITask;
    onClose: () => void;
}

const TaskInfoCard = ({ task, onClose }: TaskInfoCardProps) => {
    return (
        <div>
            <div className="task-info-substrate"></div>
            <div className="task-info-card">
                <div className="base-info">
                    <p className="task-id">{task.id}</p>
                    <h1 className="task-name">{task.name}</h1>
                    <h2 className="task-desc-header">Описание задачи</h2>
                    <p className="task-desc">{task.description}</p>
                    <button className="task-add-btn">
                        Добавить <img src="/imgs/dark_plus.svg"></img>
                    </button>
                    <h2 className="task-comments-header">Комментарии</h2>
                    <div className="comments-section">
                        <img className="user-photo" src="/imgs/user.svg"></img>
                        <textarea
                            className="task-comments"
                            placeholder="Написать комментарий..."
                        ></textarea>
                    </div>
                </div>
                <div className="card-side-info">
                    <div className="task-card-btns">
                        <button className="share-btn">
                            <img src="/imgs/share.svg"></img>Поделиться
                        </button>
                        <button className="action-btn">
                            <img src="/imgs/ellipsis.svg"></img>Действия
                        </button>
                        <img
                            className="close"
                            src="/imgs/cross.svg"
                            onClick={onClose}
                        ></img>
                    </div>
                    <select className="card-filter">
                        <option>Отсутствует</option>
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
                                    src="/imgs/user.svg"
                                ></img>
                                <p className="author-id">@vanya</p>
                            </div>
                        </div>
                        <div className="doer">
                            <div className="doer-header">Исполнитель</div>
                            <div className="doer-info">
                                <img
                                    className="doer-photo"
                                    src="/imgs/user.svg"
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
