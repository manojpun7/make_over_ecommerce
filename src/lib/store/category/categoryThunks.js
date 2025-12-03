import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let categoriesCache = null;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    if (categoriesCache || (state.categories && state.categories.length > 0)) {
      return categoriesCache;
    }

    try {
      const response = await axios.get("http://64.227.179.189:8000/api/categories/");
      categoriesCache = response.data; // cache it
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);
