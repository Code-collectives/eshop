
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vendor Dashboard</h1>

        <div className="flex space-x-4">
          <button className="text-sm bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add Advert
          </button>
          <button className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete Advert
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
