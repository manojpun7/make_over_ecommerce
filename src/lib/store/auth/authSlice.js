import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser } from "./authThunks";

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: null,
  isEmailVerified: false, 
  tokens: {
    access: null,
    refresh: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Existing actions
    logout: (state) => {
      state.user = null;
      state.tokens = { access: null, refresh: null };
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_email");
      document.cookie = "refresh_token=; path=/; max-age=0";
    },
    setUserFromStorage: (state, action) => {
      state.user = { email: action.payload };
    },

    // 🌟 NEW ACTION TO UPDATE EMAIL VERIFICATION STATUS 🌟
    setEmailVerified: (state, action) => {
      // The action.payload is expected to be a boolean (true or false)
      state.isEmailVerified = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        // The isEmailVerified state remains 'false' here,
        // as the user still needs to verify their email after signup.
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.tokens = action.payload.tokens;
        state.user = { email: action.meta.arg.email };
        localStorage.setItem("user_email", action.meta.arg.email);
        // NOTE: You might also set isEmailVerified here if your login APIw
        // returns the verification status of the user (e.g., action.payload.isVerified)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setUserFromStorage, setEmailVerified } = authSlice.actions; // 👈 Export the new action
export default authSlice.reducer;