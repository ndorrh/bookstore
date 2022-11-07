import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook() { },
    removeBook() { },
  },
});

const booksActions = booksSlice.actions;

export { booksActions, booksSlice };
