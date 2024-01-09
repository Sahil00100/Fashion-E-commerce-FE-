
import axios from 'axios';
import {BASE_BACKEND_URL} from "../../settings"

export const ProductsListApi = axios.create({
    baseURL: BASE_BACKEND_URL + 'api/products/product/',
  });
export const fetchProducts = async (searchTerm, category) => {
  try {
    const response = await ProductsListApi.get('', {
      params: {
        searchTerm: searchTerm,
        category: category,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const CategoriesApi = axios.create({
  baseURL: BASE_BACKEND_URL + 'api/products/categories/', 
});

export const fetchCategories = async () => {
  try {
    const response = await CategoriesApi.get('');
    return response.data.data; 
  } catch (error) {
    throw error;
  }
};