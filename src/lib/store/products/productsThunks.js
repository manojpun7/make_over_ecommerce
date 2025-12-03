import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://64.227.179.189:8000/api/products/";

// Cache object to prevent repeated requests
const productsCache = {};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page = 1, { getState, rejectWithValue }) => {
    const state = getState();
    // If page is already cached in Redux or local cache, skip API call
    if (productsCache[page] || (state.products.pages && state.products.pages[page])) {
      return { ...productsCache[page], page };
    }

    try {
      const res = await axios.get(`${BASE_URL}?page_number=${page}`);
      // Cache the result
      productsCache[page] = res.data;
      return { ...res.data, page };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch products");
    }
  }
);
