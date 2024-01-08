
import axios from 'axios';
import {BASE_BACKEND_URL} from "../../settings"

export const ProductsListApi = axios.create({
    baseURL: BASE_BACKEND_URL + 'api/products/product/',
  });