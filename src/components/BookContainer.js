import React from 'react';
import { useDispatch } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { booksActions } from '../redux/books/books';

function BookContainer() {
  const bookArr = [
    {
      id: 1,
      title: 'Things fall apart',
      author: 'Chinua Achebe',
    },
    {
      id: 2,
      title: 'The gods are wise',
      author: 'Andrew Abbas',
    },
    {
      id: 3,
      title: 'Gods Hands',
      author: 'Chamba Lumba',
    },
  ];

  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(booksActions.removeBook());
  };
  return (
    <div>
      <section className="bookContainer">
        {bookArr.map((book) => (
          <>
            <div className="book-details">
              <h3>Empty</h3>
              <Book key={book.id} props={book} />
            </div>
            <div className="book-actions">
              <button type="button" onClick={handleRemoveBook}>Remove</button>
            </div>
          </>
        ))}
      </section>
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
