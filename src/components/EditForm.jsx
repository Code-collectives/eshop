import React, { useState, useEffect } from 'react';


const EditProductForm = ({ productId }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    category: ''
  });

  // Fetch the existing product data for editing
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://your-api-endpoint.com/products/${productId}`);
        const product = await response.json();
        setFormData({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          image: product.image
        });
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image change
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0] // Store the new image file if uploaded
    });
  };

  // Handle form submission to update the product
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to send via API
    const apiFormData = new FormData();
    apiFormData.append('title', formData.title);
    apiFormData.append('description', formData.description);
    apiFormData.append('image', formData.image); // Send image only if a new one is selected
    apiFormData.append('price', formData.price);
    apiFormData.append('category', formData.category);

    try {
      // Send updated form data to API via PUT request
      const response = await fetch(`https://your-api-endpoint.com/products/${productId}`, {
        method: 'PUT',
        body: apiFormData,
      });

      if (response.ok) {
        alert('Product updated successfully!');
      } else {
        alert('Failed to update product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
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

        {/* Description */}
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

        {/* Image */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Price */}
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

        {/* Category */}
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
            <option value="electronics">Electronics</option>
          </select>
        </div>

        {/* Submit Button */}
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

