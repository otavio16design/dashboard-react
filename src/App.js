import { useState } from 'react';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import Sidebar from './componets/sidebar/Sidebar';
import Main from './componets/main/Main'

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    setSidebarOpen(true)
  };
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
