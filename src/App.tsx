import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Board from './components/Board';
import Timeline from './components/Timeline';
import Calendar from './components/Calendar';
import Summary from './components/Summary';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/board" element={<Board />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/" element={<Board />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
