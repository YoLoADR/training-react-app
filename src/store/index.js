// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { apiService } from '../services/apiService'; // Assurez-vous que le chemin est correct
import { productsDB } from '../mocks/productsDB'; // Assurez-vous que le chemin est correct

const initialState = {
  products: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = slice.actions;

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

export default configureStore({
  reducer: slice.reducer,
});
