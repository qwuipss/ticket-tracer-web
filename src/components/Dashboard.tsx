import Header from "./Header";
import Sidebar from "./Sidebar";
import Board from "./Board";
import { Route, Routes } from "react-router-dom";
import Calendar from "./Calendar";
import Timeline from "./Timeline";

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
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
