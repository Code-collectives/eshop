import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { apiAddProducts } from "./services/product";

const ProductForm = () => {
  const navigate = useNavigate();

  // const saveAdvert = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   await axios.post(apiAddProducts, formData);
  //   navigate("/vendorDashboard");
  // console.log(formData)

  // };
  const saveAdvert = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    try {
      // Debugging the form data entries
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      console.log('payload to be submitted:', formData);
      
      const response = await apiAddProducts(formData);
  
      console.log('Advert saved:', response.data);
      navigate("/vendorDashboard"); // Redirect after success
    } catch (error) {
      console.error('Error saving advert:', error);
    }
  };
  

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Add New Advert
        </h2>

        <form onSubmit={saveAdvert}>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="media"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select a category</option>
              <option value="phones">Phones</option>
              <option value="laptop">Laptop</option>
              <option value="vr">VR</option>
              <option value="electronics">Accessories</option>
            </select>
          </div>

          <div className="space-y-4">
  <button
    type="submit"
    className="w-full bg-brandBlue text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 block"
  >
    Submit Product
  </button>

  <Link
    to="/vendorDashboard"
    className="w-full bg-transparent text-brandBlue font-bold py-2 px-4 rounded-lg border border-brandBlue hover:bg-brandBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-brandBlue focus:ring-opacity-50 block text-center"
  >
    Cancel
  </Link>
</div>

        </form>
      </div>
    </div>
  );
};

export default ProductForm;
