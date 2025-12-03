import { createAsyncThunk } from "@reduxjs/toolkit";

let productOfTheDayCache = null;

export const fetchProductOfTheDay = createAsyncThunk(
  "productOfTheDay/fetchProductOfTheDay",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    if (productOfTheDayCache || (state.productOfTheDay?.product)) {
      return productOfTheDayCache;
    }

    try {
      const res = await fetch("http://64.227.179.189:8000/api/product-of-the-day/");

      if (!res.ok) {
        return rejectWithValue("Failed to fetch Product of the Day.");
      }

      const data = await res.json();
      productOfTheDayCache = data; // cache it
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
