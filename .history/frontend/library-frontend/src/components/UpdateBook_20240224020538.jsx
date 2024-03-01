// src/components/UpdateBook.jsx
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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/books/${bookId}`);
        setNewTitle(response.data.title);
        setNewAuthor(response.data.author);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError('Error fetching book details. Please try again.');
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleUpdateBook = () => {
    const updatedBook = {
      title: newTitle,
      author: newAuthor,
    };

    axios.patch(`http://localhost:3001/books/${bookId}`, updatedBook)
      .then(response => console.log('Book updated:', response.data))
      .catch(error => {
        console.error('Error updating book:', error);
        setError('Error updating book. Please try again.');
      });
  };

  return (
    <div>
      <h1>Update Book</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
