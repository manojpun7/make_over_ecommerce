import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFlashSales = createAsyncThunk(
  "flashSales/fetchFlashSales",
  async (pageNumber = 1, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://64.227.179.189:8000/api/flash-sales/?page_number=${pageNumber}`
      );

      if (!res.ok) {
        return rejectWithValue("Failed to fetch flash sales.");
      }

      const data = await res.json();
      return data; // contains { count, next, previous, results }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
