import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import LandingNav from '../components/LandingNav';



function VendorSignup() {
  return (
    <div>
      <LandingNav />
      <div className="flex items-center justify-center min-h-screen mt-20 mb-20">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome to eShop</h2>
          <h1 className="text-2xl font-bold mb-6 text-center text-primary">Vendor</h1>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
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
                type="password"
                placeholder="Your Password"
                required
              />
            </div>

            <button
              className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Register
            </button>
          </form>

          <div className="flex items-center justify-between my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>


<div className='flex justify-center items-center'>   <Link
                        to="/userform"
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