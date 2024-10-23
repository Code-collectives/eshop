import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";

const VendorApiGet = ({ title, description, category, media, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md p-4 text-center rounded-md w-64 h-[350px] flex flex-col justify-between">
      
      <div className="w-full h-36 mb-2">
        <img src={media} alt={title} className="w-full h-full object-cover rounded-md" />
      </div>

     
      <p className="text-gray-500 dark:text-gray-400 lowercase text-xs">{category}</p>
      <h2 className="text-md font-semibold ">{title}</h2>

    
      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 mb-2">{description}</p>

     
      <p className="text-lg font-bold text-primary">${price}</p>

     
      <div className="flex justify-between mt-4">
        <button className="text-green-600 font-bold py-1 px-2 flex items-center justify-center w-[40%] bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
          <FaRegEdit className="mr-1" />
        </button>
        <button className="text-red-600 font-bold py-1 px-2 flex items-center justify-center w-[40%] bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
          <MdDeleteForever className="mr-1" />
        </button>
      </div>
    </div>
  );
};

export default VendorApiGet;
