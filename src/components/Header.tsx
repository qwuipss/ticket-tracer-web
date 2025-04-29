const Sidebar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="">
          <ul className="nav-links">
            <li>
              <a href="#">
                Проекты<img src="../imgs/arrow.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                Мои задачи<img src="../imgs/arrow.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                Ещё<img src="../imgs/arrow.svg"></img>
              </a>
            </li>
            <li>
              <button className="create-btn">Создать</button>
            </li>
          </ul>
        </div>
        <div className="nav-side">
          <input className="search-bar" type="text" placeholder="Поиск"></input>
          <div className="nav-buttons">
            <img src="../imgs/help.svg"></img>
            <img src="../imgs/settings.svg"></img>
          </div>
          <img className="nav-photo" src="../imgs/user.svg" alt="User1"></img>
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
