import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch categories from API
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://64.227.179.189:8000/api/categories/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);
