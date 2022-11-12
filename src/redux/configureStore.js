import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/books';
import categorySlice from './categories/category';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    category: categorySlice.reducer,
  },
});

export default store;
