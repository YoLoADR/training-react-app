// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import authenticationReducer from './slices/authenticationSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    authentication: authenticationReducer,
  },
});