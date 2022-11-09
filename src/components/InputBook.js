import React from 'react';
import { useDispatch } from 'react-redux';
import { booksActions } from '../redux/books/books';

function InputBook() {
  const dispatch = useDispatch();
  const handleAddBook = () => {
    dispatch(booksActions.addBook({}));
  };
  return (
    <div>
      <form className="input-book">
        <div className="book-title">
          <input type="text" placeholder="Book Title" />
        </div>
        <div className="book-author">
          <input type="text" placeholder="Book Author" />
        </div>
        <div className="add-btn">
          <button type="button" onClick={handleAddBook}>Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default InputBook;
