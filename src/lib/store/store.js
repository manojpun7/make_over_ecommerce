import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice.js";
import productsReducer from "../store/products/productsSlice.js";
import searchProductsReducer from '../store/searchProducts/searchProductsSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    searchProducts: searchProductsReducer,

  },
});

export default store;
