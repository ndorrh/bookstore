/* eslint-disable react/prop-types */
import React from 'react';

function Book(prop) {
  const { props } = prop;
  const { title, author, id } = props;
  return (
    <div>
      <div className="book-container" key={id}>
        <div className="book-info">
          <h1>{title}</h1>
          <h3>{author}</h3>
        </div>
      </div>
    </div>
  );
}

export default Book;
