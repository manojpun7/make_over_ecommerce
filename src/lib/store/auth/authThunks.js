import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// --- SIGNUP THUNK ---
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (signupData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://18.208.251.169:8000/api/auth/signup/",
        {
          email: signupData.email,
          contact: signupData.contact,
          full_name: signupData.full_name,
          password: signupData.password,
        }
      );

      return {
        message:
          response.data.detail,
        tokens: { access: null, refresh: null },
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  }
);

// --- LOGIN THUNK ---
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://18.208.251.169:8000/api/auth/login/",
        loginData
      );

      const access_token = res.data.access_token;
      const refresh_token = res.data.refresh_token;

      if (access_token && refresh_token) {
        // Store tokens
        document.cookie = `refresh_token=${refresh_token}; path=/; max-age=${7 * 24 * 60 * 60
          }; secure=false; samesite=strict`;
        localStorage.setItem("access_token", access_token);
      }

      return {
        message: res.data.message || "Login successful!",
        tokens: { access: access_token, refresh: refresh_token },
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Invalid credentials!"
      );
    }
  }
);
