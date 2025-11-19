import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice.js";
import productsReducer from "../store/products/productsSlice.js";
import searchProductsReducer from '../store/searchProducts/searchProductsSlice.js'
import categoryReducer from '../store/category/categorySlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    searchProducts: searchProductsReducer,
    categories: categoryReducer

  },
});

export default store;
