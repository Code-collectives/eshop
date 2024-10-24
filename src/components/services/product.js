import { apiClient } from "./config";
//get product

export const apiGetProducts = async () => {
 return apiClient.get("/adverts")
};


//add product
// Ensure apiAddProducts is set up to take `FormData` directly
export const apiAddProducts = async (formData) => {
    return apiClient.post("/adverts", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
};



   //get single product
export const apiGetSingleProduct =async (id   ) => {
    return apiClient.get(`/adverts/${id}`); 
  
}

// edit product
export const apiEditProduct =async (id, payload) => {
    return apiClient.patch(`/aderts/${id}`, payload); 
  
}

//delete product
export const apiDeleteProduct =async (id   ) => {
    return apiClient.delete(`/adverts/${id}`); 
  
}