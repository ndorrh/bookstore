/* eslint-disable react/prop-types */
import React from 'react';

function Book(prop) {
  const { props } = prop;
  const { title, author } = props;
  return (
    <div>
      <div className="book-container">
        <div className="book-info">
          <h1 className="bookTitle">{title}</h1>
          <h3 className="bookAuthor">{author}</h3>
        </div>
      </div>
    </div>
  );
}

export default Book;
