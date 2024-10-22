import { apiClient } from "./config";
//get product

export const apiGetProducts = async () => {
 return apiClient.get("/adverts")
};


//add product
export const apiAddProducts = async () => {
    return apiClient.post("/adverts")
   };

   //get single product
export const apiGetSingleProduct =async (id   ) => {
    return apiClient.get(`/adverts/${id}`); 
  
}

// edit product
export const apiEditProduct =async (id   ) => {
    return apiClient.patch(`/aderts/${id}`); 
  
}

//delete product
export const apiDeleteProduct =async (id   ) => {
    return apiClient.patch(`/adverts/${id}`); 
  
}