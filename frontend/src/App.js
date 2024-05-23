import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Homepage from "./components/Homepage";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        document.body.classList.toggle('overflow-hidden');
    };
  return (
      <div className={`App ${sidebarOpen ? 'overlay' : ''}`}>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
          <Router>
              <Routes>
                  <Route path="/" element={<Homepage />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
