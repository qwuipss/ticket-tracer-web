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
import ErrorMessage from "./components/ErrorMessage";
import Summary from "./components/Summary";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            { path: "auth", element: <Auth /> },
            { path: "login", element: <Login /> },
            {
                path: "app",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard />,
                        children: [
                            { path: "calendar", element: <Calendar/> },
                            { path: "gantt", element: <Timeline/> },
                            { path: "board", element: <Board/> },
                            { path: "summary", element: <Summary /> },
                            { index: true, element: <Navigate to="board" replace /> }
                        ],
                    },
                ],
            },
            { index: true, element: <Navigate to="/auth" replace /> },
        ],
    },
    {
        path: "*",
        element: <ErrorMessage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
