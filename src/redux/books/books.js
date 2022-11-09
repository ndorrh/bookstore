import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const booksSlice = createSlice({
  name: 'book',
  initialState: {
    booksList: [
      {
        id: uuidv4(),
        title: 'james walker',
        author: 'Ndorrh',

      },
      {
        id: uuidv4(),
        title: 'home coming',
        author: 'Oswald',

      },
      {
        id: uuidv4(),
        title: 'Man of steel',
        author: 'Peter',

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
      const filterBooks = state.booksList.filter((book) => book.id !== bookId);
      return { booksList: filterBooks };
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice;
