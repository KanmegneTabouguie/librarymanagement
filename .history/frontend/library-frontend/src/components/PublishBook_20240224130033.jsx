// src/components/PublishBook.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes

const PublishBook = ({ bookId }) => {
  const handlePublishBook = () => {
    axios.put(`http://localhost:3017/books/publish/${bookId}`) // Replace with your backend URL
      .then(response => console.log('Book published:', response.data))
      .catch(error => console.error('Error publishing book:', error));
  };

  return (
    <div>
      <h1>Publish Book</h1>
      <button onClick={handlePublishBook}>Publish Book</button>
    </div>
  );
};

PublishBook.propTypes = {
  bookId: PropTypes.string.isRequired, // Validate prop type
};

export default PublishBook;
