import React, { useState } from 'react';
import { apiLogin } from './services/Auth';

const VendorLoginForm = () => {


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
const email = formData.get("email");
const password = formData.get("password");
console.log(email)
 
const response = await apiLogin({email, password});
// console.log(response.data);
if(response.status===200){
  localStorage.setItem("token", response.data.accessToken)

}

  };

    


  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Vendor Login</h2>

     

      <form onSubmit={handleSubmit}>
       
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
          name="email"
            type="email"
            id="email"
            
           
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
        name="password"
            type="password"
            id="password"
            
       
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default VendorLoginForm;
