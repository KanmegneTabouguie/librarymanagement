// src/components/DeleteBook.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const DeleteBook = ({ bookId }) => {
  const navigate = useNavigate();

  const handleDeleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3017/books/${bookId}`);
      console.log('Book deleted');
      // Redirect to the book list after successful deletion
      navigate('/');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h1>Delete Book</h1>
      <button onClick={handleDeleteBook}>Delete Book</button>
      <Link to="/">Back to Book List</Link>
    </div>
  );
};

DeleteBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default DeleteBook;
