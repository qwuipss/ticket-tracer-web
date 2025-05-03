import { createContext, PropsWithChildren } from "react";

interface ITask {
    id: string;
    name: string;
    description: string;
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

type ProtectedRouteProps = PropsWithChildren;

export const AuthContext = createContext<AuthContextType | null>(null);

export const TIMELINES = ["Недели", "Месяцы", "Кварталы"];

export const BASE_URL = 'https://qwuipss.space/ticket-tracer-api/';

export type { ITask, IUserResponse, ProtectedRouteProps, AuthContextType };
