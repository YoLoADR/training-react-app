// slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { productsDB } from '../../mocks/productsDB'; // Vérifiez le chemin
import { apiService } from '../../services/apiService'; // Vérifiez le chemin

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const fetchProducts = (useMockData = true) => async (dispatch) => {
  if (useMockData) {
    dispatch(setProducts(productsDB.products));
  } else {
    try {
      const products = await apiService.fetchProducts();
      dispatch(setProducts(products));
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
    }
  }
};

export default productsSlice.reducer;
