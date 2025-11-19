import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://64.227.179.189:8000/api/products/";

export const searchProducts = createAsyncThunk(
  "searchProducts/searchProducts",
  async ({ page = 1, search = "" }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${BASE_URL}?page_number=${page}&search=${search}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch products");
    }
  }
);
