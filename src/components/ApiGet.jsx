import React from 'react';

const ApiGet = ({ title, description, category, media, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md p-4 text-center">
      <img 
        src={`https://savefiles.org/${media}?shareable_link=462`} 
        alt={title} 
        className="mb-4 w-full h-48 object-cover" 
      />
      <p className="text-gray-500 lowercase text-sm mb-2">{category}</p>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">{description}</p>
      <p className="text-xl font-bold text-primary">${price}</p>
    </div>
  );
};

export default ApiGet;
