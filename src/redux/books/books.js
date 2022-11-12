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
  const del = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qKP1ozAFmOaklxICkovD/books/${parameter}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());

  return del;
});

export const addBooks = createAsyncThunk('books/addBooks', async (parameters) => {
  const {
    title,
    author,
    category,
    id,
  } = parameters;
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qKP1ozAFmOaklxICkovD/books', {
    method: 'POST',
    body: JSON.stringify({
      title,
      author,
      category,
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
});
const initialState = {
  bookList: [],
  status: '',
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook(state, action) {
      const newBook = action.payload;
      state.bookList.push({
        id: newBook.id,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
      });
    },
    removeBook(state, action) {
      const newState = state;
      const bookId = action.payload;
      const filterBooks = state.bookList.filter((book) => book.id !== bookId);
      newState.bookList = filterBooks;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const newState = state;
      newState.status = 'Book Added Successfully';
      newState.bookList = action.payload;
    });
    builder.addCase(deleteBooks.fulfilled, (state) => {
      const newState = state;
      newState.deleted = true;
    });
  },

});

export const booksActions = booksSlice.actions;

export default booksSlice;
