import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { booksActions, getBooks, deleteBooks } from '../redux/books/books';

function BookContainer() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const handleRemoveBook = (e) => {
    dispatch(booksActions.removeBook(e.target.id));
    dispatch(deleteBooks(e.target.id));
  };

  return (
    <div>
      <section className="bookContainer">
        {bookList.map((book) => (
          <div key={book.id} className="book-items">
            <div className="book-ppt">
              <div className="a-book">
                <div className="book-details">
                  <h3 className="book-category">{book.category}</h3>
                  <Book props={book} />
                </div>
                <div className="book-actions">
                  <button type="button">Comments</button>
                  <span className="border" />
                  <button type="button" onClick={handleRemoveBook} id={book.id}>Remove</button>
                  <span className="border" />
                  <button type="button">Edit</button>
                </div>
              </div>

              <div className="progress-bar">
                <div className="circular-progress" />
                <div className="progress-stats">
                  <p className="percentage">65%</p>
                  <p className="completed">Completed</p>
                </div>
              </div>
              <div className="box-border" />
              <div className="current">
                <p className="current-chapter">CURRENT CHAPTER</p>
                <p className="chapter">Chapter 17</p>
                <button type="button" className="update-btn">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="divide-border" />
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
