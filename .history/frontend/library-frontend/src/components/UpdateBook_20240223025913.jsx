// src/components/UpdateBook.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes

const UpdateBook = ({ bookId }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleUpdateBook = () => {
    const updatedBook = {
      title: newTitle,
      author: newAuthor,
    };

    axios.patch(`http://localhost:3001/books/${bookId}`, updatedBook) // Replace with your backend URL
      .then(response => console.log('Book updated:', response.data))
      .catch(error => console.error('Error updating book:', error));
  };

  return (
    <div>
      <h1>Update Book</h1>
      <div>
        <label>New Title: </label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </div>
      <div>
        <label>New Author: </label>
        <input type="text" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
      </div>
      <button onClick={handleUpdateBook}>Update Book</button>
    </div>
  );
};

UpdateBook.propTypes = {
  bookId: PropTypes.string.isRequired, // Validate prop type
};

export default UpdateBook;
