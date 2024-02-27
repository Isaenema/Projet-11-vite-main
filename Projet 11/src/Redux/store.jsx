// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
