// src/components/PublishBook.js
import React from 'react';
import axios from 'axios';

const PublishBook = ({ bookId }) => {
  const handlePublishBook = () => {
    axios.put(`http://localhost:3000/books/publish/${bookId}`) // Replace with your backend URL
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

export default PublishBook;
