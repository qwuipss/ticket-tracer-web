import { createContext, PropsWithChildren } from "react";

interface ITask {
    id: string;
    name: string;
    description: string;
}

type User = {
    email: string,
    name: string,
    surname: string,
    password: string
};

type AuthProviderProps = PropsWithChildren & {
    isSignedIn?: boolean;
}

type ProtectedRouteProps = PropsWithChildren;

export const AuthContext = createContext<User | null>(null);

export const timelines = ['Недели', 'Месяцы', 'Кварталы']

export const pages = [
    { name: 'Доска', link: '/board' }, 
    { name: 'Хронология', link: '/timeline' }, 
    { name: 'Календарь', link: '/calendar' }, 
    { name: 'Сводка', link: '/summary' }, 
]

export type { ITask, ProtectedRouteProps, User, AuthProviderProps }