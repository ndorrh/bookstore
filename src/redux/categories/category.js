import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus(state, action) {
      if (state.categories.length === 0) { state.categories.push(action.payload); }
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
