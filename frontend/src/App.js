import React, { useState } from "react";
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
  return (
      <div className="App">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      </div>
  );
}

export default App;
