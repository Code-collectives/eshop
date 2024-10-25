import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import image1 from '../assets/website/profile.png';
import DarkMode from './DrakMode';
import { apiGetVendorProfile } from './services/product';

const Sidebar = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

 

  const getUser = async () => {
    try {
      let response;

        response = await apiGetVendorProfile();
   

      
      setUser(response.data ); 
      // console.log("user here",response)
      
    } catch (error) {
      console.error("Error fetching products:", error.message); 
    }
  };

 

  return (
    <div className=" w-64 h-[100vh] fixed bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-5 max-h-screen"> 
      <div className="flex flex-col items-center space-y-4">
        <a href={image1} className="block w-24 h-24 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
          <img src={image1} alt="Profile" className="w-full h-full object-cover" />
        </a>

       
       
          <>
          <h2 
            className="text-xl font-semibold text-gray-800 dark:text-gray-100 cursor-pointer" 
        
          >
            {user && user.name}

          </h2>
           <p 
           className="text-xl font-semibold text-gray-800 dark:text-gray-100 cursor-pointer" 
         
         >
           {user && user.email}
           
         </p>
         </>
 
        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          Edit Profile
        </button>
        */}
      </div> 

      {/* <div className="mt-10 flex flex-col items-center">
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="hover:text-red-600">Home</a></li>
          <li><a href="#" className="hover:text-red-600">About</a></li>
          <li><a href="#" className="hover:text-red-600">Contact</a></li>
          <li><a href="#" className="hover:text-red-600">Blog</a></li>
        </ul>
      </div> */}

      <div className="mt-10 flex flex-col items-center">
        <h3 className="font-semibold text-lg">Contact Us</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Osu close, plot n. 7</p>
        <p className="text-gray-600 dark:text-gray-400">+233 24 007 0628</p>

        <div className="flex space-x-4 mt-5">
          <FaFacebook className="text-gray-600 dark:text-gray-400 hover:text-red-600" />
          <FaInstagram className="text-gray-600 dark:text-gray-400 hover:text-red-600" />
          <FaLinkedin className="text-gray-600 dark:text-gray-400 hover:text-red-600" />
        </div>
      </div>

      <div className="mt-10">
        <DarkMode />
      </div>
    </div>
  );
};

export default Sidebar;
