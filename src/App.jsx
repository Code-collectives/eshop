import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductForm from './components/AddForm'
import EditProductForm from './components/EditForm'
import LoginPage from './components/FirstPage'
import Navbar from './components/Navbar2'
import Sidebar from './components/SideBar'
import TermsOfService from './components/TermsPage'
import VendorLoginForm from './components/VendorForm'
import LandingPage from './pages/LandingPage'
import VendorDashboard from './pages/Vendor'
import UserLoginForm from './components/UserForm'
import DashboardLayout from './layout/DashboardLayout'
import VendorView from './components/VendorView'
import AboutUs from './pages/AboutUs'




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TermsOfService />
    },
    {
      path: "/userform",
      element: <UserLoginForm />
    },
    {
      path: "/vendorform",
      element: <VendorLoginForm />
    },
    {
      path: "/view", 
      element: <LandingPage />
    },
    {
      path:"/hero",
      element:<DashboardLayout/>,
      children:[
       { index: true,
        element:<VendorView />,
       },
      ]
    },
    {
      path:"/aboutus",
      element:<AboutUs />
    }

  
    
  ])

 
  return (
    <RouterProvider router={router} />
  )
}

export default App