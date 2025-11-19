import { createSlice } from "@reduxjs/toolkit";
import { searchProducts } from "./searchProductsThunks";

const initialState = {
  loading: false,
  products: [],
  count: 0,
  error: null,
};

const searchProductsSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.products = [];
      state.count = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSearch } = searchProductsSlice.actions;
export default searchProductsSlice.reducer;
