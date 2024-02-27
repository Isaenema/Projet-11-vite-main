import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// Exporte les actions générées par createSlice
export const { loginSuccess, logoutSuccess } = authSlice.actions;

// Exporte le reducer généré par createSlice
export default authSlice.reducer;
