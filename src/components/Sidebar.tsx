import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img className="sidebar-logo" src="../imgs/logo.svg"></img>
      <p className="sidebar-name">
        Alfaproject<br></br>
        Проект по<br></br>
        разработке ПО
      </p>
      <ul className="page-list">
        <li key="Доска">
          <NavLink
            key="Доска"
            to="/dashboard/board"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Доска
          </NavLink>
        </li>
        <li key="Хронология">
          <NavLink
            key="Хронология"
            to="/dashboard/gantt"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Хронология
          </NavLink>
        </li>
        <li key="Календарь">
          <NavLink
            key="Календарь"
            to="/dashboard/calendar"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Календарь
          </NavLink>
        </li>
        <li key="Сводка">
          <NavLink
            key="Сводка"
            to="/dashboard/summary"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Сводка
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
