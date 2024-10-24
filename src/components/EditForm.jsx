


const EditProductForm = () => {

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Edit Product</h2>

      <form >
        
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">
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
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
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
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
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

