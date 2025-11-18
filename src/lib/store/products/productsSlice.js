import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsThunks";

const initialState = {
  loading: false,
  error: null,
  products: [],
  next: null,
  previous: null,
  count: 0,
  currentPage: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.results;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.count = action.payload.count;
        state.currentPage = action.payload.page;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
