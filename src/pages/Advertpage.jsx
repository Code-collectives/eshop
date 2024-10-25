import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { apiGetFilteredCategories, apiGetProducts } from '../components/services/product';
import ApiGet from '../components/ApiGet';
import { IoMdSearch } from "react-icons/io";

function Advertpage() {
  const [Adverts, setAdverts] = useState([]); 
 
const [searchVal, setSearchVal] = useState("");

useEffect(() => {
  fetchData();
}, []);

function handleSearchClick() {
    if (searchVal === "") { setAdverts(Adverts); return; }
    const filterBySearch = Adverts.filter((item) => {
        if (item.title.toLowerCase()
            .includes(searchVal.toLowerCase())) { return item; }
    })
    setAdverts(filterBySearch);
}

  // const navigate = useNavigate();



  //  const queryParams = new URLSearchParams(location.search);
  // const searchQuery = queryParams.get('search');

  const fetchData = async () => {
    try {
      let response;

        response = await apiGetProducts();
      setAdverts(response.data ); 
      console.log("search answer here",response)
      
    } catch (error) {
      console.error("Error fetching products:", error.message); 
    }
  };
  // const handleSearch = (e) => {
  //   e.preventDefault();
  // };


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar>
      <div className="relative w-[100%]">
          <input 
            type="text" 
            placeholder="Search products..." 
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button  onClick={handleSearchClick}>
                    <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                  </button> 
          </span>
        </div>
   
      {/* <div className='relative group hidden sm:block'>
               
                  <input 
                    type="text" 
                    placeholder="search" 
                    className="search-bar"
                    onChange={(e) => setSearchVal(e.target.value)}
                  />
                   <button  onClick={handleSearchClick}>
                    <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                  </button> 
                   
                 </div> */}
      </NavBar>
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
        <h1 className="text-2xl font-bold mb-10">ADVERTS</h1>
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
