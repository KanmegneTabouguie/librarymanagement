// src/components/AddBook.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    axios.post('http://localhost:3001/books', { title, author }) // Replace with your backend URL
      .then(response => console.log('Book added:', response.data))
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <div>
      <h1>Add Book</h1>
      <label>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></label>
      <label>Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} /></label>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
