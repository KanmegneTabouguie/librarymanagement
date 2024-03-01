// src/components/DeleteBook.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes

const DeleteBook = ({ bookId }) => {
  const handleDeleteBook = () => {
    axios.delete(`http://localhost:3001/books/${bookId}`) // Replace with your backend URL
      .then(response => console.log('Book deleted:', response.data))
      .catch(error => console.error('Error deleting book:', error));
  };

  return (
    <div>
      <h1>Delete Book</h1>
      <button onClick={handleDeleteBook}>Delete Book</button>
    </div>
  );
};

DeleteBook.propTypes = {
  bookId: PropTypes.string.isRequired, // Validate prop type
};

export default DeleteBook;
