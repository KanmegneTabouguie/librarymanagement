// src/components/ReturnBook.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes

const ReturnBook = ({ bookId }) => {
  const handleReturnBook = () => {
    axios.put(`http://localhost:3001/books/return/${bookId}`) // Replace with your backend URL
      .then(response => console.log('Book returned:', response.data))
      .catch(error => console.error('Error returning book:', error));
  };

  return (
    <div>
      <h1>Return Book</h1>
      <button onClick={handleReturnBook}>Return Book</button>
    </div>
  );
};

ReturnBook.propTypes = {
  bookId: PropTypes.string.isRequired, // Validate prop type
};

export default ReturnBook;
