// src/components/UpdateBook.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const UpdateBook = () => {
  const { id: bookId } = useParams();
  console.log('Received bookId:', bookId);

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  useEffect(() => {
    // Fetch book details based on bookId, if needed
    // Example: Fetch book details and set form fields
    axios.get(`http://localhost:3001/books/${bookId}`)
      .then(response => {
        setNewTitle(response.data.title);
        setNewAuthor(response.data.author);
      })
      .catch(error => console.error('Error fetching book details:', error));
  }, [bookId]);

  const handleUpdateBook = () => {
    const updatedBook = {
      title: newTitle,
      author: newAuthor,
    };

    axios.patch(`http://localhost:3001/books/${bookId}`, updatedBook)
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
  bookId: PropTypes.string.isRequired,
};

export default UpdateBook;
