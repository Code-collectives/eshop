import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    category: ''
  });

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
      image: e.target.files[0] // Store the image file
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to send via API
    const apiFormData = new FormData();
    apiFormData.append('title', formData.title);
    apiFormData.append('description', formData.description);
    apiFormData.append('image', formData.image);
    apiFormData.append('price', formData.price);
    apiFormData.append('category', formData.category);

    try {
      // Send form data to API
      const response = await fetch('https://your-api-endpoint.com/products', {
        method: 'POST',
        body: apiFormData,
      });

      if (response.ok) {
        const result = await response.json();
        alert('Product added successfully!');
      } else {
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
    }
  };

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
    <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Add New Product</h2>

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
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
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
    <option value="electronics">Electronics</option>
  </select>
</div>


       
        <button
          type="submit"
          className="w-full bg-brandBlue text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          Submit Product
        </button>
      </form>
    </div>
    </div>
  );
};

export default ProductForm;
