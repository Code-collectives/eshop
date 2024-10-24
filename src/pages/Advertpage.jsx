import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import { apiGetProducts } from '../components/services/product';
import ApiGet from '../components/ApiGet';

function Advertpage() {
  const [Adverts, setAdverts] = useState([]); 
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');

  const fetchData = async () => {
    try {
      let response;

      if (searchQuery) {
        // If search query exists, fetch search results from API
        response = await fetch(`apiGetProducts?search=${title(searchQuery)}`);
      } else {
        // Fetch all products if no search query
        response = await apiGetProducts();
      }


      // const response = await apiGetProducts(); 
      // console.log("API Response:", response);  

      const data = await response.json();
      setAdverts(data || []); 
      // const products = response.data || []; 
      // setAdverts(products);
    } catch (error) {
      console.error("Error fetching products:", error.message); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar />
      <nav className="container bg-white dark:bg-gray-800 p-4 mt-10">
        <ul className="flex space-x-6 justify-center text-blue">
          <li>
            <Link
              to="/categories"
              className="text-primary inline-block border-b-2 border-primary pb-1 font-semibold"
            >
              All Categories
            </Link>
          </li>
          <li>
            <Link
              to="/laptops"
              className="hover:text-primary inline-block border-b-2 border-transparent hover:border-primary pb-1 transition-all duration-300 ease-in-out font-semibold"
            >
              Laptops
            </Link>
          </li>
          <li>
            <Link
              to="/smartphones"
              className="hover:text-primary inline-block border-b-2 border-transparent hover:border-primary pb-1 transition-all duration-300 ease-in-out font-semibold"
            >
              Smartphones
            </Link>
          </li>
          <li>
            <Link
              to="/cameras"
              className="hover:text-primary inline-block border-b-2 border-transparent hover:border-primary pb-1 transition-all duration-300 ease-in-out font-semibold"
            >
              Cameras
            </Link>
          </li>
          <li>
            <Link
              to="/accessories"
              className="hover:text-primary inline-block border-b-2 border-transparent hover:border-primary pb-1 font-semibold transition-all duration-300 ease-in-out"
            >
              Accessories
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-10">
        <Hero />
      </div>

      <div className="container mx-auto p-10 dark:bg-gray-900">
        <h1 className="text-2xl font-bold mb-10">PRODUCTS</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-44">
          {Adverts.length > 0 ? (
            Adverts.map((advert) => (
              <Link key={advert.id} to={`/single/${advert.id}`}> 
              <ApiGet
                title={advert.title}
                description={advert.description}
                category={advert.category}
                media={advert.media}
                price={advert.price}
              />
            </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Advertpage;
