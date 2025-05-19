import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header />
            <Sidebar />
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
