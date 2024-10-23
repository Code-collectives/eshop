import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetSingleProduct } from '../components/services/product';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import Hero from '../components/Hero';
import SingleApiGet from '../components/SingleApi';

function SingleProduct() {
  const { advertid } = useParams(); 
  const [product, setProduct] = useState(null); 

  const fetchProduct = async () => {
    try {
      const response = await apiGetSingleProduct(advertid); 
      const fetchedProduct = response.data;
      setProduct(fetchedProduct); 
      console.log("Fetched Product:", fetchedProduct);
    } catch (error) {
      console.error("Error fetching product:", error.message); 
    }
  };

  useEffect(() => {
    fetchProduct(); 
  }, [advertid]);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className='mt-14 h-[50vh] flex items-center justify-center'>  
        {product ? (  
        <SingleApiGet
          title={product.title} 
          description={product.description} 
          category={product.category} 
          media={product.media} 
          price={product.price} 
        />
      ) : (
        <p>Loading product...</p> 
      )}</div>
  
      <Footer />
    </div>
  );
}

export default SingleProduct; 
