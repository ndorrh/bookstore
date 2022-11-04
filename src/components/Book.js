import React from 'react';
import PropTypes from 'prop-types';

function Book(prop) {
  const { props } = prop;
  const { title, author } = props;
  return (
    <div>
      <div className="book-container">
        <div className="book-info">
          <h1>{title}</h1>
          <h3>{author}</h3>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
