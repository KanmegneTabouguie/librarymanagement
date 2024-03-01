// src/components/UpdateBook.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const UpdateBook = ({ bookId }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleUpdateBook = () => {
    axios.patch(`http://localhost:3000/books/${bookId}`, { title, author }) // Replace with your backend URL
      .then(response => console.log('Book updated:', response.data))
      .catch(error => console.error('Error updating book:', error));
  };

  return (
    <div>
      <h1>Update Book</h1>
      <label>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></label>
      <label>Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} /></label>
      <button onClick={handleUpdateBook}>Update Book</button>
    </div>
  );
};

export default UpdateBook;
