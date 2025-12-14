import { useState } from "react"; 
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const SIDEBAR_PADDING_OFFSET = '270px'; 

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  
  
  const mainContentClasses = `
    flex-grow 
    p-5 
    transition-all duration-300 ease-in-out
    min-h-screen 
  `;

  return (
    
    <div className="flex flex-col min-h-screen ">
      
      
      <Navbar toggleSidebar={toggleSidebar} /> 

      
      <div className="flex"> 
        
        
        <Sidebar isOpen={isSidebarOpen}/>

        
        <main className={mainContentClasses}>
          <Outlet /> 
        </main>

      </div>

      
      <Footer />
    </div>
  );
};

export default AppLayout;