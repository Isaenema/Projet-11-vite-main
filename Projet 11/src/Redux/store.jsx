// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice"; // Importez votre slice Redux

const store = configureStore({
  reducer: {
    auth: authReducer, // Utilisez le reducer du slice auth
    // Autres reducers si nécessaire
  },
});

export default store;
