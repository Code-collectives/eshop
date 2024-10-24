import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <nav className="bg-gray-100 fixed dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 shadow-md h-[10vh] w-[100vw]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
        <p className="text-lg">Welcome, {name}</p> {/* Display the user's name here */}
        <div className="relative w-1/3">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg 
              className="w-5 h-5 text-gray-500 dark:text-gray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l-4-4m0 0l4-4m-4 4h12" />
            </svg>
          </span>
        </div>

        <div className="flex space-x-6 items-center">
          <button className="text-sm bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            <Link to="/ProductForm">Add Advert</Link>
          </button>
          <Link to="/logOutPage" className='font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
