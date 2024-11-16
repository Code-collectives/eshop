import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiEditProduct, apiGetSingleProduct } from "./services/product";

const EditProductForm = () => {
  const { id } = useParams(); // Get product ID from URL params
  const navigate = useNavigate(); // For redirecting after successful update

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    media: null, // Initialize media as null
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const response = await apiGetSingleProduct(id);
        const product = response.data;

        setFormData({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          media: product.media || null, // Ensure media is handled
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product details.");
        setLoading(false);
      }
    };

    fetchAdvert();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    // For file input, handle the file object
    if (name === "media") {
      setFormData({
        ...formData,
        [name]: files[0], // Only select the first file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("ID:", id);  // Ensure this matches the advert you're trying to edit
    console.log("Payload:", formData);  // Ensure the data you're passing is correct
  
    const updatedData = {
      title: formData.title,
      description: formData.description,
      price: formData.price,
      category: formData.category,
      media: formData.media ? formData.media : undefined,
    };
  
    try {
      await apiEditProduct(id, updatedData);  // Check if correct ID is passed
      navigate("/vendorDashboard");
    } catch (err) {
      console.error("Error updating the product:", err);
      setError("Failed to update product.");
    }
  };
  
  if (loading) return <p>Loading Advert       ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Edit Advert</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="media">
            Image
          </label>
          <input
            type="file"
            id="media"
            name="media"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
