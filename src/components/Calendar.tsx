import { useState } from "react";
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
} from "date-fns";

interface Task {
    id: string;
    date: Date;
    text: string;
    completed: boolean;
}

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskText, setNewTaskText] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Генерация календарной сетки
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

    // Формирование недель для отображения
    const weeks: Date[][] = [];
    while (daysInMonth.length > 0) {
        weeks.push(daysInMonth.splice(0, 7));
    }

    // Добавление задачи
    const addTask = () => {
        if (selectedDate && newTaskText.trim()) {
            const newTask: Task = {
                id: Math.random().toString(),
                date: selectedDate,
                text: newTaskText,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setNewTaskText("");
        }
    };

    // Переключение статуса задачи
    const toggleTask = (taskId: string) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    return (
        <div className="calendar-container">
            <div className="calendar-controls">
                <button
                    onClick={() =>
                        setCurrentDate(
                            new Date(
                                currentDate.setMonth(currentDate.getMonth() - 1)
                            )
                        )
                    }
                >
                    ← Предыдущий
                </button>
                <h2>{format(currentDate, "MMMM yyyy")}</h2>
                <button
                    onClick={() =>
                        setCurrentDate(
                            new Date(
                                currentDate.setMonth(currentDate.getMonth() + 1)
                            )
                        )
                    }
                >
                    Следующий →
                </button>
            </div>

            <table className="calendar-grid">
                <thead>
                    <tr>
                        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map(
                            (day) => (
                                <th key={day}>{day}</th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map((date, dayIndex) => {
                                const dayTasks = tasks.filter((task) =>
                                    isSameDay(task.date, date)
                                );
                                return (
                                    <td
                                        key={dayIndex}
                                        className={`calendar-day 
                      ${!isSameMonth(date, currentDate) ? "other-month" : ""}
                      ${isSameDay(date, new Date()) ? "today" : ""}`}
                                        onClick={() => setSelectedDate(date)}
                                    >
                                        <div className="day-number">
                                            {format(date, "d")}
                                        </div>
                                        <div className="tasks-list">
                                            {dayTasks.map((task) => (
                                                <div
                                                    key={task.id}
                                                    className={`task-item ${
                                                        task.completed
                                                            ? "completed"
                                                            : ""
                                                    }`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleTask(task.id);
                                                    }}
                                                >
                                                    {task.text}
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedDate && (
                <div className="task-input">
                    <h3>
                        Добавить задачу на {format(selectedDate, "dd.MM.yyyy")}
                    </h3>
                    <input
                        type="text"
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        placeholder="Новая задача"
                    />
                    <button onClick={addTask}>Добавить</button>
                </div>
            )}
        </div>
    );
};

export default Calendar;
