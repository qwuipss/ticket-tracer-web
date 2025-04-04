function Sidebar() {
  return (
    <aside className="sidebar">
        <img className="sidebar-logo" src="imgs\Лого.svg"></img>
        <p className="sidebar-name">
                Alfaproject<br></br>
                Проект по<br></br>
                разработке ПО
        </p>
        <ul>
            <li><a href="#">Доска</a></li>
            <li><a href="#">Хронология</a></li>
            <li><a href="#">Календарь</a></li>
            <li><a href="#">Список</a></li>
            <li><a href="#">Формы</a></li>
            <li><a href="#">Цели</a></li>
            <li><a href="#">Задачи</a></li>
        </ul>
    </aside>
  );
}

export default Sidebar;
