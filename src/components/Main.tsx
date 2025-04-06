function Main() {
    return (
        <main className="main-content">
            <div className="project-info">
                <div className="project-settings">
                    <div className="project-header">
                        <h1>Alfaproject</h1>
                        <button className="save-btn"><img src="../imgs/mark.svg"></img>Сохранить</button>
                        <button className="share-btn"><img src="../imgs/share.svg"></img>Поделиться</button>
                    </div>
                    <div className="filter">
                        <label>Фильтр</label>
                        <select id="filter">
                            <option>Отсутствует</option>
                            <option>К выполнению</option>
                            <option>В работе</option>
                            <option>Готово</option>
                        </select>
                        <input className="search-bar" type="text" placeholder="Поиск"></input>
                    </div>
                </div>
                <div className="members-settings">
                    <p>Участники</p>
                    <div className="members">
                        <img src="../imgs/user.png"></img>
                        <img src="../imgs/user.png"></img>
                        <img src="../imgs/user.png"></img>
                        <img src="../imgs/user.png"></img>
                    </div>
                    <img src="../imgs/ellipsis.svg"></img>
                    <img src="../imgs/plus.svg"></img>
                </div>
            </div>
                
            <div className="task-board">
                <div className="task-column">
                    <h2>К выполнению</h2>
                    <div className="task-card">
                        <p className="task-name">Добавить блок описания</p>
                        <div className="task-info">
                            <img src="../imgs/user.png"></img>
                            <span className="task-id">AI-01</span>
                        </div>
                    </div>
                </div>
                <div className="task-column">
                    <h2>В работе</h2>
                    <div className="task-card">
                        <p className="task-name">Посмотреть аналоги</p>
                        <div className="task-info">
                            <img src="../imgs/user.png"></img>
                            <span className="task-id">AI-02</span>
                        </div>
                    </div>
                </div>
                <div className="task-column">
                    <h2>Готово</h2>
                    <div className="task-card">
                        <p className="task-name">Продумать схему БД</p>
                        <div className="task-info">
                            <img src="../imgs/user.png"></img>
                            <span className="task-id">AI-03</span>
                        </div>
                    </div>
                </div>
                <img className="add-button" src="../imgs/add.svg"></img>
            </div>
        </main>
    );
  }
  
  export default Main;
  