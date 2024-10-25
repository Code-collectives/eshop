import { apiClient } from "./config";

// Get all products
export const apiGetProducts = async () => {
  return apiClient.get("/adverts");
};

// Add product

export const apiAddProducts = async (formData) => {
  return apiClient.post("/adverts", formData, {
    headers: {
      "Content-Type": "multipart/form-data", 
    },
  });
};

// Get a single product by ID
export const apiGetSingleProduct = async (id) => {
  return apiClient.get(`/adverts/${id}`);
};

// Edit product

export const apiEditProduct = async (id, formData) => {
  return apiClient.patch(`/adverts/${id}`, formData);
};

// Delete product
export const apiDeleteProduct = async (id) => {
  return apiClient.delete(`/adverts/${id}`);
};
export const apiGetVendorProducts = async () => {
  return apiClient.get("/users/me/adverts");
};
export const apiGetVendorProfile = async () => {
  return apiClient.get("/users/me");
};
export const apiGetFilteredCategories = async (category) => {
  return apiClient.get(`/adverts?filter={"category" : ${category}}`);
};