import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'book',
  initialState: { booksList: [] },
  reducers: {
    addBook(state, action) {
      const newBook = action.payload;
      console.log('add book');
    },
    removeBook(state, action) { console.log('remove book'); },
  },
});

const booksActions = booksSlice.actions;

export { booksActions, booksSlice };
