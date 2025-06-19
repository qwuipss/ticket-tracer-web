import { useState } from "react";

import { TIMELINES } from "../types/Types.tsx";
import { tasks } from "../mock/Mock.tsx";

const Timeline = () => {
    const [activeUnit, setActiveUnit] = useState("Кварталы");

    const handleUnitClick = (unit: string) => {
        setActiveUnit(unit);
    };

    return (
        <main className="timeline" key="timeline">
            <div className="project-settings">
                <div className="timeline-header">
                    <h1>Alfaproject</h1>
                    <button className="save-btn">
                        <img src="../imgs/save.svg"></img>Сохранить
                    </button>
                    <button className="share-btn">
                        <img src="../imgs/share.svg"></img>Поделиться
                    </button>
                </div>
            </div>
            <div className="side-info">
                <div className="timeline-filter">
                    <select>
                        <option>Настройки просмотра</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                    <input
                        className="timeline-filter-search-bar"
                        type="text"
                        placeholder="Поиск"
                    ></input>
                </div>
                <ul className="timeline-units">
                    {TIMELINES.map((unit) => (
                        <li
                            key={unit}
                            className={activeUnit === unit ? "unit-active" : ""}
                            onClick={() => handleUnitClick(unit)}
                        >
                            {unit}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="timeline-board">
                <div className="timeline-elements">
                    <h2 className="tasks-header">Элементы</h2>
                    <ul className="timeline-tasks">
                        {tasks.map((task) => (
                            <li className="timeline-task" key={task.id}>
                                {task.id} {task.title}
                            </li>
                        ))}
                    </ul>
                    <button className="add-task-button">
                        <img src="../imgs/dark_plus.svg"></img>Создать
                    </button>
                </div>
                <div className="timeline-elements">
                    <h2 className="timeunit-header">Январь - Март</h2>
                    <ul className="timeline-tasks">
                        {tasks.map((task) => (
                            <li className="timeline-task" key={task.id}></li>
                        ))}
                    </ul>
                </div>
                <div className="timeline-elements current">
                    <h2 className="timeunit-header">Апрель - Июнь</h2>
                    <img
                        className="timeline-index"
                        src="../imgs/timeline_index.svg"
                    ></img>
                    <ul className="timeline-tasks">
                        {tasks.map((task) => (
                            <li className="timeline-task" key={task.id}></li>
                        ))}
                    </ul>
                </div>
                <div className="timeline-elements">
                    <h2 className="timeunit-header">Июль - Сентябрь</h2>
                    <ul className="timeline-tasks">
                        {tasks.map((task) => (
                            <li className="timeline-task" key={task.id}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Timeline;
