// src/components/DeleteBook.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const DeleteBook = ({ bookId }) => {
  const handleDeleteBook = () => {
    console.log('Deleting book with ID:', bookId);

    axios.delete(`http://localhost:3017/books/${bookId}`)
      .then(response => {
        console.log('Book deleted:', response.data);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received from the server');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
        }
      });
  };

  return (
    <div>
      <h1>Delete Book</h1>
      <button onClick={handleDeleteBook}>Delete Book</button>
    </div>
  );
};

DeleteBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default DeleteBook;
