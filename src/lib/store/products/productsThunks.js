import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://64.227.179.189:8000/api/products/";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page = 2, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}?page_number=${page}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || "Failed to fetch products"
      );
    }
  }
);
