import React from 'react';

const SingleApiGet = ({ title, description, category, media, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700  p-4 flex items-center space-x-6 h-36">
      <img src={media} alt={title} className="w-48 h-auto object-cover" />
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-gray-500 lowercase text-sm">{category}</p>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">{description}</p>
          <p className="text-xl font-bold text-primary">${price}</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleApiGet;
