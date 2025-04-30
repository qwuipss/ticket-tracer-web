import { useState } from "react";

import { timelines } from "../types/Types.tsx";

const Timeline = () => {
  const [activeUnit, setActiveUnit] = useState("Недели");

  const handleUnitClick = (unit: string) => {
    setActiveUnit(unit);
  };

  return (
    <main className="timeline">
      <div className="timeline-info">
        <div className="timeline-header">
          <h1>Alfaproject</h1>
          <button className="save-btn">
            <img src="/imgs/save.svg"></img>Сохранить
          </button>
          <button className="share-btn">
            <img src="/imgs/share.svg"></img>Поделиться
          </button>
        </div>
        <div className="timeline-members">
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
          {timelines.map((unit) => (
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
    </main>
  );
};

export default Timeline;
