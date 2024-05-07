import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const globalSlice = createSlice({
  name: "globalSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
  extraReducers: {},
});

export const { increment, decrement } = globalSlice.actions;

export default globalSlice.reducer;
