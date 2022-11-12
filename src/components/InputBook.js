import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { booksActions, addBooks } from '../redux/books/books';

function InputBook() {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const handleAddBook = () => {
    if (state.author !== '' && state.title !== '' && state.category !== '') {
      const book = {
        title: state.title,
        author: state.author,
        category: state.category,
        id: uuidv4(),
      };
      dispatch(booksActions.addBook(book));

      dispatch(addBooks(book));

      setState({
        title: '',
        author: '',
        category: '',
      });
    }
  };
  return (
    <div className="input-form">
      <div className="input-title">
        <h2>ADD NEW BOOK</h2>
      </div>
      <form className="input-book">
        <div className="book-title">
          <input
            type="text"
            placeholder="Book Title"
            name="title"
            onChange={handleInput}
            id="title"
            value={state.title}
          />
        </div>
        <div className="book-author">
          <input
            type="text"
            placeholder="Book Author"
            name="author"
            onChange={handleInput}
            id="author"
            value={state.author}
          />
        </div>
        <div className="book-categ">
          <input
            name="category"
            type="text"
            id="category"
            placeholder="Book Category"
            value={state.category}
            onChange={handleInput}
          />
        </div>
        <div className="add-btn">
          <button type="button" onClick={handleAddBook}>Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default InputBook;
