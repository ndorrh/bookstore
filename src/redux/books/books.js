import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'book',
  initialState: {
    booksList: [
      {
        id: 2,
        title: 'jame walker',
        author: 'Ndorrh Oswald',

      },
      {
        id: 4,
        title: 'home coming',
        author: 'Ndorrh Oswald',

      },
    ],
  },
  reducers: {
    addBook(state, action) {
      const newBook = action.payload;
      state.booksList.push({
        id: newBook.id,
        title: newBook.title,
        author: newBook.author,
      });
    },
    removeBook(state, action) {
      const bookId = action.payload;
      const filterBooks = state.booksList.filter((book) => book.id !== parseInt(bookId, 10));
      return { booksList: filterBooks };
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice;
