import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// searchProductsThunks.js
export const searchProducts = createAsyncThunk(
  "searchProducts/fetch",
  async ({ page = 1, search = "", sort = "", category = "", priceRange = "" }, { rejectWithValue }) => {
    try {
      let url = `http://64.227.179.189:8000/api/products/?page_number=${page}`;

      if (search) url += `&search=${search}`;
      if (sort) url += `&sort=${sort}`;
      if (category) url += `&category=${category}`; // <-- category slug here
      if (priceRange) url += `&price_range=${priceRange}`;

      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);
