const Calendar = () => {
    return (
        <main className="board" key="calendar">
            <div className="project-settings">
                <div className="project-header">
                    <h1>Alfaproject</h1>
                    <button className="save-btn">
                        <img src={`${import.meta.env.BASE_URL}imgs/save.svg`}></img>Сохранить
                    </button>
                    <button className="share-btn">
                        <img src={`${import.meta.env.BASE_URL}imgs/share.svg`}></img>Поделиться
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Calendar;
