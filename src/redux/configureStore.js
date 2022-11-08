import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './books/books';

const rootReducer = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export default rootReducer;
