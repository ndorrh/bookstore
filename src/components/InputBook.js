import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { booksActions, addBooks } from '../redux/books/books';

function InputBook() {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const handleAddBook = () => {
    if (state.author !== '' && state.title !== '') {
      const book = {
        title: state.title,
        author: state.author,
        category: 'Empty',
        id: uuidv4(),
      };
      dispatch(booksActions.addBook(book));

      dispatch(addBooks(book));

      setState({
        title: '',
        author: '',
      });
    }
  };
  return (
    <div>
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
        <div className="add-btn">
          <button type="button" onClick={handleAddBook}>Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default InputBook;
