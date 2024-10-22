import React from 'react'
import Navbar from '../components/Navbar2'
import Sidebar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

import DashFooter from '../components/DashboardFoot'

const DashboardLayout = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <div className=' h-[10vh] w-[100vw] bg-[green]'>
        <Navbar />
        </div>
        <div className='flex justify-center gap-16 h-full '> 
          <div className='w-64 h-[100vh]' >
          <Sidebar />
          </div>
          <Outlet />
        </div>
        <DashFooter/>
       
      
    </div>
  )
}

export default DashboardLayout
