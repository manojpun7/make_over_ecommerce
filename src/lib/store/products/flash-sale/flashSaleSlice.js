import { createSlice } from "@reduxjs/toolkit";
import { fetchFlashSales } from "./flashSaleThunk";

// ---------- SLICE ----------
const flashSaleSlice = createSlice({
  name: "flashSales",
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
      .addCase(fetchFlashSales.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlashSales.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.results;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;

        // Extract page number from next/previous
        const url = new URL(action.meta.arg
          ? `http://dummy.com/?page_number=${action.meta.arg}`
          : "http://dummy.com/?page_number=1"
        );
        state.currentPage = Number(url.searchParams.get("page_number"));
      })
      .addCase(fetchFlashSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong.";
      });
  },
});

export default flashSaleSlice.reducer;
