import React from 'react';
import Navbar from '../components/Navbar2';
import Sidebar from '../components/SideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import DashFooter from '../components/DashboardFoot';

const DashboardLayout = () => {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen flex flex-col">
      
      <div className="h-[10vh] w-full">
        <Navbar />
      </div>

      
      <div className="flex-grow flex">
       
        <div className="w-64 h-full">
          <Sidebar />
        </div>

        
        <div className="flex-grow overflow-auto p-4">
          <Outlet />
        </div>
      </div>

    
      <div className="w-full">
        <DashFooter />
      </div>
    </div>
  );
};

export default DashboardLayout;
