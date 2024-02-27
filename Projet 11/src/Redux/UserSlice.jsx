import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
  },
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    editUsername: (state, action) => {
      state.user.userName = action.payload;
    },
    editEmail: (state, action) => {
      state.user.email = action.payload;
    },
    editFirstname: (state, action) => {
      state.user.firstName = action.payload;
    },
    editLastname: (state, action) => {
      state.user.lastName = action.payload;
    },
    resetUserProfile: (state) => {
      state.user.userName = "";
      state.user.email = "";
      state.user.firstName = "";
      state.user.lastName = "";
    },
  },
});

export const {
  editUsername,
  editEmail,
  editFirstname,
  editLastname,
  resetUserProfile,
} = userSlice.actions;

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
