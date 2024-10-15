import React from 'react'
import Navbar from '../components/Navbar2'
import Sidebar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Outlet />
      
    </div>
  )
}

export default DashboardLayout
