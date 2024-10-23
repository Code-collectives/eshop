import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from './DrakMode';
import { Link } from 'react-router-dom';

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/aboutus",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    links: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    links: "/#",
  },
  {
    id: 13,
    name: "Top Rated",
    links: "/#",
  },
];

const LandingNav = () => {
  
  const [showModal, setShowModal] = useState(false);

  
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
          <div className='container flex justify-between items-center'>
           
            <div className='flex items-center gap-4'>
              <a href="#"
                className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                Eshop
              </a>
             
              <div className='hidden lg:block'>
                <ul className='flex items-center gap-4'>
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link}
                        className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                        {data.name}
                      </a>
                    </li>
                  ))}
                  
                  <li className='relative cursor-pointer group'>
                    <a href="#" className='flex items-center gap-[20] font-semibold text-gray-500 dark:hover:text-white py-2'>
                      Quick Links
                      <span>
                        <FaCaretDown className='group-hover:rotate-180 duration-300' />
                      </span>
                    </a>
                   
                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                      <ul className='space-y-2'>
                        {DropdownLinks.map((data, index) => (
                          <li key={index}>
                            <a className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold' href={data.links}>
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          
            <div className='flex justify-between items-center gap-4'>
              
              <div className='relative group hidden sm:block'>
                <input type="text" placeholder='search' className='search-bar' />
                <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
              </div>

             
              <button className='relative p-3' onClick={toggleModal}>
<FaCartShopping className='text-xl text-gray-600
 dark:text-gray-400' />
 <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
  4 
 </div>
</button>

              <div>
                <DarkMode />
              </div>

             
            
            </div>
          </div>
        </div>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative w-96">
            
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-red-500"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>

            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-200">Card Number</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 bg-gray-100 dark:bg-gray-700 border rounded"
                  placeholder="Enter your card number"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 dark:text-gray-200">Expiry Date</label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 bg-gray-100 dark:bg-gray-700 border rounded"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 dark:text-gray-200">CVV</label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 bg-gray-100 dark:bg-gray-700 border rounded"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200">Name on Card</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 bg-gray-100 dark:bg-gray-700 border rounded"
                  placeholder="Enter your name"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Submit Payment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingNav;
