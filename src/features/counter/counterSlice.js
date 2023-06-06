import {createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // immer.js
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementBy(amount));
  }, 5_000);
};
