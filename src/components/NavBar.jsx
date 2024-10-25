import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from './DrakMode';
import { Link, useNavigate } from 'react-router-dom';

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/About",
  }
];

const LandingNav = ({children}) => {
  

 
  
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
          <div className='container flex justify-between items-center'>
            <div className='flex items-center gap-4'>
              <Link to="/"
                className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                Eshop
              </Link>
             
              <div className='hidden lg:block'>
                <ul className='flex items-center gap-4'>
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link}
                        className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:text-white duration-200'>
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='flex justify-between items-center gap-4'>
              
              {/* Search bar */}
              {/* <div className='relative group hidden sm:block'>
                <form onSubmit={handleSearch}>
                  <input 
                    type="text" 
                    placeholder="search" 
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {/* <button type="submit">
                    <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                  </button> */}
                  
                {/* </form> */} 
                {children}
              </div>
              
              <div className='ml-[20%]'>
                <DarkMode />
              </div>
             
              <Link to="/vendorForm" className='font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                Login as Vendor
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default LandingNav;