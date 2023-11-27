import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com/products';

export const apiService = {
  fetchProducts() {
    return axios.get(API_BASE_URL).then(response => response.data.products);
  },
};