import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Summary = () => {
    const [taskData, setTaskData] = useState([
        { name: "К выполнению", value: 5, color: "#FFBB28" },
        { name: "В работе", value: 8, color: "#0088FE" },
        { name: "Готово", value: 7, color: "#00C49F" },
    ]);

    const [userProgress, setUserProgress] = useState([
        { email: "@vanya", percent: 50 },
        { email: "@vanya", percent: 50 },
        { email: "@vanya", percent: 50 },
        { email: "@vanya", percent: 50 }
    ]);

    const [totalTasks, setTotalTasks] = useState(20);

    useEffect(() => setTaskData([
        { name: "К выполнению", value: 4, color: "#C7F66F" },
        { name: "В работе", value: 6, color: "#1D57EB" },
        { name: "Готово", value: 10, color: "#F66F6F" },
    ]), []);

    useEffect(() => setUserProgress([
        { email: "@vanya", percent: 70 },
        { email: "@vanya", percent: 40 },
        { email: "@vanya", percent: 50 },
        { email: "@vanya", percent: 60 },
    ]), []);

    useEffect(() => setTotalTasks(20), []);

    return (
        <main className="summary" key="summary">
            <div className="project-settings">
                <div className="project-header">
                    <h1>Alfaproject</h1>
                    <button className="save-btn">
                        <img src="/imgs/save.svg"></img>Сохранить
                    </button>
                    <button className="share-btn">
                        <img src="/imgs/share.svg"></img>Поделиться
                    </button>
                </div>
            </div>
            <div className='summary-info'>
                <div className="status-info wrapper">
                    <h2 className='section-header'>Сводка статусов</h2>
                    <div className='diagram'>
                        <div className="status-diagram">
                            <div className="diagram-container">
                                <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                    data={taskData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    dataKey="value"
                                    >
                                    {taskData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                    </Pie>
                                    <text 
                                    x="50%" 
                                    y="50%" 
                                    textAnchor="middle" 
                                    dominantBaseline="middle"
                                    className="center-text"
                                    >
                                    <tspan x="50%" dy="-0.5em" style={{fontFamily: 'Unbounded', fontSize: '22px'}}>
                                        {totalTasks}
                                    </tspan>
                                    <tspan x="50%" dy="1.5em" style={{fontFamily: 'Unbounded', fontSize: '12px'}}>
                                        Всего задач
                                    </tspan>
                                    </text>
                                </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <ul className='legend'>
                            <li className='leg-el' key='todo'><div className='mark todo'></div><p>К выполнению</p></li>
                            <li className='leg-el' key='inwork'><div className='mark inwork'></div><p>В работе</p></li>
                            <li className='leg-el' key='ready'><div className='mark ready'></div><p>Готово</p></li>
                        </ul>
                    </div>
                </div>
                <div className="team-info wrapper">
                    <h2 className='section-header'>Рабочая нагрузка команды</h2>
                    <div className='team-table'>
                        <h3 className='column-header'>Исполнитель</h3>
                        <h3 className='column-header'>Распределение работы</h3>
                        {userProgress.map(({ email, percent }, index) => (
                            <div key={index}>
                                <div className='table-user-info'><img src="/imgs/user.svg"></img>{email}</div>
                                <div className="progress-container">
                                    <div className="progress" style={{ width: percent + '%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="task-list wrapper">
                    <h2 className='section-header'>Список задач</h2>
                    <div className='task-list-table'>
                        <table>
                            <thead>
                                <tr className='task-list-table-header'>
                                    <th className='type-column'>Тип</th>
                                    <th className='key-column'>Ключ</th>
                                    <th>Название</th>
                                    <th>Статус</th>
                                    <th>Исполнитель</th>
                                    <th className='comment-column'>Комментарий</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='type-column'><img src='/imgs/flag-epic.svg'></img></td>
                                    <td className='key-column'>Al-01</td>
                                    <td>Добавить блок описания</td>
                                    <td><span className="status-badge ready">Готово</span></td>
                                    <td><div className='user-column'><img src="/imgs/user.svg"></img>@vanya</div></td>
                                    <td className='comment-column'>Готово</td>
                                </tr>
                                <tr>
                                    <td className='type-column'><img src='/imgs/flag-epic.svg'></img></td>
                                    <td className='key-column'>Al-02</td>
                                    <td>Добавить блок описания</td>
                                    <td><span className="status-badge ready">Готово</span></td>
                                    <td><div className='user-column'><img src="/imgs/user.svg"></img>@vanya</div></td>
                                    <td className='comment-column'>Готово</td>
                                </tr>
                                <tr>
                                    <td className='type-column'><img src='/imgs/flag-epic.svg'></img></td>
                                    <td className='key-column'>Al-03</td>
                                    <td>Добавить блок описания</td>
                                    <td><span className="status-badge in-progress">В работе</span></td>
                                    <td><div className='user-column'><img src="/imgs/user.svg"></img>@vanya</div></td>
                                    <td className='comment-column'>В работе</td>
                                </tr>
                                <tr>
                                    <td className='type-column'><img src='/imgs/flag-epic.svg'></img></td>
                                    <td className='key-column'>Al-04</td>
                                    <td>Добавить блок описания</td>
                                    <td><span className="status-badge todo">К выполнению</span></td>
                                    <td><div className='user-column'><img src="/imgs/user.svg"></img>@vanya</div></td>
                                    <td className='comment-column'>К выполнению</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Summary;
