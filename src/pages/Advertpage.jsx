import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import image2 from "../assets/website/image2.png"
import Hero from '../components/Hero';
import { apiGetProducts } from '../components/services/product';
import ApiGet from '../components/ApiGet';


const gadgets = [
    {
      id: 1,
      img:image2,
      name: 'Smartphone',
      description: 'A high-end smartphone with excellent features.',
      price: 699.99,
    },
    {
        id: 2,
        img:image2,
        name: 'Smartphone',
        description: 'A high-end smartphone with excellent features.',
        price: 699.99,
      },

      {
        id: 3,
        img:image2,
        name: 'Smartphone',
        description: 'A high-end smartphone with excellent features.',
        price: 699.99,
      },
      {
        id: 4,
        img:image2,
        name: 'Smartphone',
        description: 'A high-end smartphone with excellent features.',
        price: 699.99,
      },
    {
      id: 5,
      img:image2,
      name: 'Laptop',
      description: 'A powerful laptop for all your needs.',
      price: 1299.99,
    },

    {
        id: 6,
        img:image2,
        name: 'Laptop',
        description: 'A powerful laptop for all your needs.',
        price: 1299.99,
      },



      {
        id: 7,
        img:image2,
        name: 'Laptop',
        description: 'A powerful laptop for all your needs.',
        price: 1299.99,
      },

      {
        id: 8,
        img:image2,
        name: 'Laptop',
        description: 'A powerful laptop for all your needs.',
        price: 1299.99,
      },

      
     {
      id: 9,
      img:image2,
      name: 'Camera',
      description: 'Capture your memories with this high-resolution camera.',
      price: 499.99,
     },

    {
      id: 10,
      img:image2,
      name: 'Headphones',
      description: 'Noise-canceling headphones for the best audio experience.',
      price: 199.99,
    },

    {
        id: 11,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },

      {
        id: 12,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },
      {
        id: 13,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },
      {
        id: 14,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },

      {
        id: 15,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },
      {
        id: 16,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },
      {
        id: 17,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },
      {
        id: 18,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },
      {
        id: 19,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },
      {
        id: 20,
        img:image2,
        name: 'Headphones',
        description: 'Noise-canceling headphones for the best audio experience.',
        price: 199.99,
      },
  
  
  
  
  

    
  ];





function Advertpage() {
  const [Adverts, setAdverts] = useState ([]);

  const fetchData = async () => {
    try{
      const fetchedAdverts =await apiGetProducts() ;
      setAdverts(fetchedAdverts);
      console.log("fetchedAdverts:", fetchedAdverts);
    } catch(error){
      console.log (error.message);
    }
    
  };
  useEffect(()=> {
    fetchData();
  }, []);
  return (

    <div>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar />
      <nav className="container bg-white dark:bg-gray-800 p-4 mt-10">
        <ul className="flex space-x-6 justify-center text-blue">
          <li>
            <Link
              to="/categories"
              className="text-primary inline-block border-b-2 border-primary pb-1 font-semibold"
            >
              Categories
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
  {Adverts.map((advert) => (
    <ApiGet
      key={advert.id}
      title={advert.title}
      description={advert.description}
      category={advert.category}
      media={advert.media}
      price={advert.price}
    />
  ))}
</div>

      </div>
    
      <Footer />
    </div>
    </div>
    
      )
  
   }
  
 


export default Advertpage
