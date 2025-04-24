function Summary() {
    return (
        <main className="main-content">
            <div className="project-info">
                <div className="project-settings">
                    <div className="project-header">
                        <h1>Alfaproject</h1>
                        <button className="save-btn"><img src="../imgs/save.svg"></img>Сохранить</button>
                        <button className="share-btn"><img src="../imgs/share.svg"></img>Поделиться</button>
                    </div>
                    <div className="filter">
                        <select id="filter">
                            <option>Настройки просмотра</option>
                            <option>К выполнению</option>
                            <option>В работе</option>
                            <option>Готово</option>
                        </select>
                        <input className="filter-search-bar" type="text" placeholder="Поиск"></input>
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
        </main>
    );
  }
  
  export default Summary;
  