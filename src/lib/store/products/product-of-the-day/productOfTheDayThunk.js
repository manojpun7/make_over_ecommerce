// productOfTheDayThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductOfTheDay = createAsyncThunk(
  "productOfTheDay/fetchProductOfTheDay",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "http://64.227.179.189:8000/api/product-of-the-day/"
      );

      if (!res.ok) {
        return rejectWithValue("Failed to fetch Product of the Day.");
      }

      const data = await res.json();
      return data; // This should be a single product object
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
