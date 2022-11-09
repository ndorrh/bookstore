import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { booksActions } from '../redux/books/books';

function BookContainer() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.booksList);

  const handleRemoveBook = (e) => {
    dispatch(booksActions.removeBook(e.target.id));
  };

  return (
    <div>
      <section className="bookContainer">
        {books.map((book) => (
          <ul key={book.id}>
            <div className="book-details">
              <h3>Empty</h3>
              <Book props={book} />
            </div>
            <div className="book-actions">
              <button type="button" onClick={handleRemoveBook} id={book.id}>Remove</button>
            </div>
          </ul>
        ))}
      </section>
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
