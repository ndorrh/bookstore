import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk(
  'booksSlice/getBooks',
  async () => {
    const results = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qKP1ozAFmOaklxICkovD/books')
      .then((res) => res.json());
    const newArray = Object.keys(results).map((id) => {
      const obj = results[id][0];
      obj.id = id;
      return obj;
    });

    return newArray;
  },
);

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (parameter) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qKP1ozAFmOaklxICkovD/books/${parameter}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
});

const booksSlice = createSlice({
  name: 'book',
  initialState: {
    booksList: [],
    status: '',
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
