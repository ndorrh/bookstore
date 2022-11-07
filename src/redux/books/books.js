import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook() { console.log('add book'); },
    removeBook() { console.log('add book'); },
  },
});

const booksActions = booksSlice.actions;

export { booksActions, booksSlice };
