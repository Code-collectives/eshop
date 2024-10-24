import React, { useState } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import LandingNav from '../components/LandingNav';
import { apiSignup } from '../components/services/Auth';
import { useNavigate } from 'react-router-dom';


function VendorSignup() {
  const [loading, setLoading] = useState(false)

const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault() // prevent the page from reloading
    try { 
      setLoading(true)
      //prepare data to be sent to backend
      const formData = new FormData (event.target) // takes the data from the form
     
       const name = formData.get("name")
       const bussinessName = formData.get("bussinessName")
       const email = formData.get("email")
       const confirmpass = formData.get("confirmpass")
       const password = formData.get("password")
       const role = formData.get("role")
   console.log(name)

       //check if pass match
       if(password !== confirmpass){
return

       }

       const payload = {bussinessName:bussinessName,name:name,email:email, password:password, role:"vendor"}
     
      const response = await apiSignup(payload)
console.log(response.data)
    } catch(error) {
  console.log(error)
  //if the message is message successfull then you redirect them to the login page but if they give us a token then we send them straight to the vendor page
  navigate ("/UserSignup")
    } finally {setLoading(false)}
    
  }
  return (
    <div>
      <LandingNav />
      <div className="flex items-center justify-center min-h-screen mt-20 mb-20">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome to eShop</h2>
          <h1 className="text-2xl font-bold mb-6 text-center text-primary">Register</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                //check the name documentation
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Bussiness Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                //check the name documentation
                name="bussinessName"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name ="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name ="password"
                type="password"
                placeholder="Your Password"
                required
              />
              
            
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
               Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name ="confirmpass"
                type="password"
              
                required
              />
                <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="role">
           Role
          </label>
          <select
          name="role"
           required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">--role--</option>
            <option value="option1">User</option>
            <option value="option2">vendor</option>
          </select>
        </div> 
            
            </div>

            <button
              className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              {loading ? "Loading....":"Register"}
            </button>
          </form>

          <div className="flex items-center justify-between my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>


<div className='flex justify-center items-center'>   <Link
                        to="/vendorform"
                        className="text-gray-900 font-bold "
                        type="submit"
                    >
                        Sign In
                    </Link></div>
                    

          <div className="flex justify-center mt-10">
            <button className="flex items-center bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
            <FaFacebook className="mr-2" /> Facebook

            </button>
            <button className="flex items-center bg-primary text-white font-bold py-2 px-4 rounded">
            <FaGoogle className="mr-2" />
                            Google
            </button>
          </div>
        </div>
      </div>








      <Footer />
    </div>
  )
}

export default VendorSignup