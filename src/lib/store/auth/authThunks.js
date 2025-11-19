import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// --- SIGNUP THUNK ---
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (signupData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://64.227.179.189:8000/api/auth/signup/",
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
// authThunks.js

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://64.227.179.189:8000/api/auth/login/",
        loginData
      );

      const access_token = res.data.access_token;
      const refresh_token = res.data.refresh_token;
      
      // 🔑 CRUCIAL: Assume the API also returns 'is_email_verified' on success
      const is_email_verified = res.data.is_email_verified; 

      if (access_token && refresh_token) {
        // Store tokens
        document.cookie = `refresh_token=${refresh_token}; path=/; max-age=${7 * 24 * 60 * 60}; secure=false; samesite=strict`;
        localStorage.setItem("access_token", access_token);
      }

      return {
        message: res.data.message || "Login successful!",
        tokens: { access: access_token, refresh: refresh_token },
        // 🔑 Return the verification status for Redux state
        isEmailVerified: is_email_verified, 
      };
    } catch (error) {
      const apiError = error.response?.data;
      
      // 👇 CHECK FOR THE SPECIFIC UNVERIFIED EMAIL ERROR
      if (apiError?.non_field_errors?.length > 0) {
        const unverifiedError = apiError.non_field_errors[0];
        if (unverifiedError.includes("Email is not verified")) {
          return rejectWithValue(unverifiedError);
        }
      }
      
      // Default error
      return rejectWithValue(
        apiError?.message || "Invalid credentials!"
      );
    }
  }
);