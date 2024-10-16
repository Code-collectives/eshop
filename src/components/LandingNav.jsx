import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from './DrakMode';
import { Link } from 'react-router-dom';


const MenuLinks =[
    {
       id: 1,
        name:"Home",
        link:"/#",
        
    },
     {
        id: 3,
         name:"About",
         link:"/aboutus",
         
     },
     {
        id: 4,
         name:"Blogs",
         link:"/#blogs",
         
     },
];
const DropdownLinks =[
    {
       id:1 ,
       name:"Trending Products",
       links:"/#",
    },
    {
        id:2 ,
        name:"Best Selling",
        links:"/#",
     },
     {
        id:13,
        name:"Top Rated",
        links:"/#",
     },
]

const LandingNav=() => {
  return (
    <div>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex justify-between items-center'>
          {/* logo and links section */}
          <div className='flex items-center gap-4'>
            <a href="#" 
              className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
              Eshop
            </a>
            {/* menu items */}
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
                {/* dropdown */}
                <li className='relative cursor-pointer group'>
                  <a href="#" className='flex items-center gap-[20] font-semibold text-gray-500 dark:hover:text-white py-2'>
                    Quick Links
                    <span>
                      <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                    </span>
                  </a>
                  {/* dropdown links */}
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
  
          {/* navbar right section */}
          <div className='flex justify-between items-center gap-4'>
            {/* searchbar section */}
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='search' className='search-bar' />
              <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
            </div>
            {/* order button section */}
            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
            </button>
            {/* dark mode section */}
            <div>
              <DarkMode />
            </div>
            {/* sign up link */}
            <Link to="/terms" className='font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
  Sign Up
</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default LandingNav
