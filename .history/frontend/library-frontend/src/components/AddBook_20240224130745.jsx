// src/components/AddBook.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleAddBook = () => {
    axios.post('http://localhost:3007/books', { title, author })
      .then(response => {
        setConfirmationMessage(`Book "${response.data.title}" by ${response.data.author} added successfully!`);
        setModalOpen(true);
      })
      .catch(error => {
        console.error('Error adding book:', error.response.data); // Log the error message from the server
        setConfirmationMessage('Failed to add book. Please try again.');
        setModalOpen(true);
      });
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setConfirmationMessage('');
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Add Book</h1>
        <label>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></label>
        <label>Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} /></label>
        <button className="add-book-button" onClick={handleAddBook}>Add Book</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{confirmationMessage}</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBook;
