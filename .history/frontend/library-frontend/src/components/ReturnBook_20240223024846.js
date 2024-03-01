// src/components/ReturnBook.js
import React from 'react';
import axios from 'axios';

const ReturnBook = ({ bookId }) => {
  const handleReturnBook = () => {
    axios.put(`http://localhost:3000/books/return/${bookId}`) // Replace with your backend URL
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

export default ReturnBook;
