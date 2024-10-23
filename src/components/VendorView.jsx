import image2 from "../assets/website/image1.png";
import { FaRegEdit } from "react-icons/fa";
import { apiGetProducts } from '../components/services/product';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VendorApiGet from "./ApiGetVendor";

const VendorView = () => {
  const [Adverts, setAdverts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await apiGetProducts();
      console.log("API Response:", response);
      const products = response.data || [];
      setAdverts(products);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
      {Adverts.length > 0 ? (
        Adverts.map((advert) => (
          <VendorApiGet
            key={advert.id} 
            title={advert.title}
            description={advert.description}
            category={advert.category}
            media={advert.media}
            price={advert.price}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default VendorView;
