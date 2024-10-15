import React from 'react';
// import { useHistory } from 'react-router-dom'; // If using react-router for navigation
// import UserLoginForm from './UserLoginForm'; // Import your user login form component
// import VendorLoginForm from './VendorLoginForm'; // Import your vendor login form component

const LoginPage = () => {
  const [loginType, setLoginType] = React.useState(null);
//   const history = useHistory(); // Assuming you're using react-router for navigation

  const handleVendorLogin = () => {
    setLoginType('vendor');
    history.push('/vendor/login'); // Redirect to vendor login
  };

  const handleUserLogin = () => {
    setLoginType('user');
    // history.push('/user/login'); // Redirect to user login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Select Login Type
        </h2>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={handleVendorLogin}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Vendor Login
          </button>
          <button
            onClick={handleUserLogin}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            User Login
          </button>
        </div>

        {/* Render the login form based on selected type */}
        {loginType === 'vendor' && <VendorLoginForm />}
        {loginType === 'user' && <UserLoginForm />}
      </div>
    </div>
  );
};

export default LoginPage;
