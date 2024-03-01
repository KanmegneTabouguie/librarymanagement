// src/components/AddBook.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleAddBook = () => {
    axios.post('http://localhost:3001/books', { title, author })
      .then(_response => {
        setConfirmationMessage('Book added successfully!');
        setModalOpen(true);
        // You can optionally reset the form fields or perform other actions here
      })
      .catch(error => {
        console.error('Error adding book:', error);
        setConfirmationMessage('Failed to add book. Please try again.');
        setModalOpen(true);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
    setConfirmationMessage('');
  };

  return (
    <div>
      <h1>Add Book</h1>
      <label>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></label>
      <label>Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} /></label>
      <button onClick={handleAddBook}>Add Book</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{confirmationMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBook;
