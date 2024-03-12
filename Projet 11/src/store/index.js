import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import { getUserInfo } from "../actions/UserActions";
// import { editUserInfo } from "../actions/UserActions";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
  devtools: true,
});

store.dispatch(getUserInfo());
// store.dispatch(editUserInfo());

export default store;
