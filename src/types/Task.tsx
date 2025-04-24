interface Task {
    id: string;
    name: string;
    description: string;
}

interface Page {
    name: string;
    link: string;
}

export const timelines = ['Недели', 'Месяцы', 'Кварталы']

export const pages = [
    { name: 'Доска', link: '/board' }, 
    { name: 'Хронология', link: '/timeline' }, 
    { name: 'Календарь', link: '/calendar' }, 
    { name: 'Сводка', link: '/summary' }, 
]

export type { Task, Page }