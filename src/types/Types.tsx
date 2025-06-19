import { createContext, PropsWithChildren } from "react";

interface ITask {
    id: string;
    title: string;
    description: string;
    status: string;
    type: number;
}

interface IProject {
    title: string;
    id: string;
}

interface IBoard {
    id: string;
    title: string;
    projectId: string;
}

interface IUserResponse {
    email: string;
    name: string;
    surname: string;
    id: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    auth: (user: IUserResponse) => void;
    login: (user: IUserResponse) => void;
    logout: () => void;
};

interface ITaskInfoCardProps {
    task: ITask;
    onClose: () => void;
    onSave: (updatedTask: ITask) => void;
}

interface IProjectDetailsProps {
    project: IProject;
    onBack: () => void;
}

interface IBoardCreateProps {
    projectId: string;
    onBack: () => void;
}

interface IBoardProps {
    title: string;
    id: string;
}

interface IErrorPopupProps {
    onClose: () => void;
}

type ProtectedRouteProps = PropsWithChildren;

export enum TaskStatus {
    Todo = "К выполнению",
    InProgress = "В работе",
    Done = "Готово",
    NoFilter = "Отсутствует",
}

export type TaskGroups = Record<TaskStatus, ITask[]>;

export const AuthContext = createContext<AuthContextType | null>(null);

export const TIMELINES = ["Кварталы", "Месяцы", "Недели"];

export const BASE_URL = "https://qwuipss.space/ticket-tracer-api";

export const FILTER = ["all", "todo", "inwork", "done"];

export type {
    ITask,
    IProject,
    IBoard,
    IUserResponse,
    ITaskInfoCardProps,
    IProjectDetailsProps,
    IBoardCreateProps,
    IErrorPopupProps,
    ProtectedRouteProps,
    IBoardProps,
    AuthContextType,
};
