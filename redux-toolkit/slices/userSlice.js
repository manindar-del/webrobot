import { checkWindow } from "../../lib/functions/_helpers.lib";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { destroyCookie } from "nookies";

const initialState = {
  isLoggedIn: false,
  userData: null,
  blogData: null,
};


export const userSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginData: (state, { payload }) => {
      // state.email
      state.userData = payload;
      state.isLoggedIn = true;
    },

    setaddblog: (state, { payload }) => {
      // state.email
      state.blogData = payload;
      state.isLoggedIn = true;
    },
    checkLoggedInServer: (state, { payload }) => {
      state.isLoggedIn = payload?.hasToken;
      state.userData = payload?.user;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;

      destroyCookie(null, "token", { path: "/" });
      if (checkWindow()) {
        window.location.href = "/login";
      }
    },
  },
  extraReducers: {},
});

export const { setLoginData, checkLoggedInServer, logout, setaddblog } =
  userSlice.actions;

export default userSlice.reducer;
