import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice.js";
import productsReducer from "../store/products/productsSlice.js";
import searchProductsReducer from '../store/searchProducts/searchProductsSlice.js'
import categoryReducer from '../store/category/categorySlice.js'
import cartReducer from '../store/cart/cartSlice.js'
import flashSalesReducer from '../store/products/flash-sale/flashSaleSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    searchProducts: searchProductsReducer,
    categories: categoryReducer,
    cart: cartReducer,
    flashSales: flashSalesReducer

  },
});

export default store;
