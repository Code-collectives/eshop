import React from 'react';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';

const adverts = [
  { id: 1, title: "Advert 1", description: "Description for advert 1", status: "Active" },
  { id: 2, title: "Advert 2", description: "Description for advert 2", status: "Paused" },
  { id: 3, title: "Advert 3", description: "Description for advert 3", status: "Active" },
  { id: 4, title: "Advert 4", description: "Description for advert 4", status: "Expired" },
];

const VendorDashboard = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen p-5">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Vendor Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adverts.map((advert) => (
            <div key={advert.id} className="bg-white dark:bg-gray-700 shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{advert.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{advert.description}</p>
              <p className={`mb-4 ${advert.status === "Active" ? "text-green-500" : "text-gray-500 dark:text-gray-400"}`}>
                Status: {advert.status}
              </p>

              <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600">
                  <FaEye className="mr-2" /> View
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600">
                  <FaEdit className="mr-2" /> Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600">
                  <FaTrashAlt className="mr-2" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
