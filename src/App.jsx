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
import Advertpage from './pages/Advertpage'
import VendorSignup from './pages/VendorSignup'
import UserSignup from './pages/UserSignup'
import SingleProduct from './pages/SingleProduct'




function App() {
  const router = createBrowserRouter([
    {
      path: "/terms",
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
      path: "/logOutPage", 
      element: <LandingPage />
    },
    {
      path:"/vendorDashboard",
      element:<DashboardLayout/>,
      children:[
       { index: true,
        element:<VendorView />,
       },
      ]
    },
    {
      path:"/About",
      element:<AboutUs />
    },
    {
      path: "/",
      element: <Advertpage />
    },
    {
      path: "/ProductForm",
      element: <ProductForm />
    },

    {path:"editform/:id",
      element:<EditProductForm/>
    },
  
    {path:"/vendorSignup",
      element:<VendorSignup/>
    },
    
    {path:"/UserSignup",
      element:<UserSignup/>
    },
    {path:"/single/:advertid",
      element:<SingleProduct/>
    },
  ])

 
  return (
    <RouterProvider router={router} />
  )
}

export default App