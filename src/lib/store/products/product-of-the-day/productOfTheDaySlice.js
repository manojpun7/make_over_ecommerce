// productOfTheDaySlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchProductOfTheDay } from "./productOfTheDayThunk";

const productOfTheDaySlice = createSlice({
  name: "productOfTheDay",
  initialState: {
    items: [],            // list of flash sale products
    count: 0,
    next: null,
    previous: null,
    loading: false,
    error: null,
    currentPage: 1,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductOfTheDay.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProductOfTheDay.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.results;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })

      .addCase(fetchProductOfTheDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong.";
      });
  },
});

export default productOfTheDaySlice.reducer;
