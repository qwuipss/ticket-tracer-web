import { NavLink } from 'react-router-dom';

import { pages } from '../types/Task';

function Sidebar() {

  return (
    <aside className="sidebar">
      <img className="sidebar-logo" src="imgs\logo.svg"></img>
      <p className="sidebar-name">
        Alfaproject<br></br>
        Проект по<br></br>
        разработке ПО
      </p>
      <ul className='page-list'>
        {pages.map((page) => (
          <li key={page.name}>
            <NavLink
              key={page.name}
              to={page.link}
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
