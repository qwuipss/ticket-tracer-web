import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import Timeline from "./components/Timeline";
import Board from "./components/Board";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./components/AuthLayout";
import Summary from "./components/Summary";
import ProjectList from "./components/ProjectList";
import ProjectCreate from "./components/ProjectCreate";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    index: true,
                    element: <Navigate to="login" replace />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "auth",
                    element: <Auth />,
                },
                {
                    path: "app",
                    element: <ProtectedRoute />,
                    children: [
                        {
                            path: "dashboard",
                            element: <Dashboard />,
                            children: [
                                {
                                    index: true,
                                    element: (
                                        <Navigate to="project-list" replace />
                                    ),
                                },
                                { path: "calendar", element: <Calendar /> },
                                { path: "gantt", element: <Timeline /> },
                                { path: "board/:id", element: <Board /> },
                                { path: "summary", element: <Summary /> },
                                {
                                    path: "project-list",
                                    element: <ProjectList />,
                                },
                                {
                                    path: "project-create",
                                    element: <ProjectCreate />,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            path: "*",
            element: <Navigate to="/" replace />,
        },
    ],
    {
        basename: "/ticket-tracer-web",
    }
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
