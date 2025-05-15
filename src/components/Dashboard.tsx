import Header from "./Header";
import Sidebar from "./Sidebar";
import Board from "./Board";
import { Route, Routes } from "react-router-dom";
import Calendar from "./Calendar";
import Timeline from "./Timeline";
import Summary from "./Summary";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header />
            <Sidebar />
            <main className="content">
                <Routes>
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="gantt" element={<Timeline />} />
                    <Route path="board" element={<Board />} />
                    <Route path="summary" element={<Summary />} />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;
