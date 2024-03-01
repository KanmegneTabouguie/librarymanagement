// src/components/DeleteBook.js
import React from 'react';
import axios from 'axios';

const DeleteBook = ({ bookId }) => {
  const handleDeleteBook = () => {
    axios.delete(`http://localhost:3000/books/${bookId}`) // Replace with your backend URL
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

export default DeleteBook;
