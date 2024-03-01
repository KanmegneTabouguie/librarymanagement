// src/components/DeleteBook.js
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const DeleteBook = ({ bookId }) => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);

  const handleDeleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3017/books/${bookId}`);
      console.log('Book deleted');
      // Redirect to the book list after successful deletion
      navigate('/');
    } catch (error) {
      console.error('Error deleting book:', error);
      setError('Error deleting book. Please try again.'); // Set an error message
    }
  };

  return (
    <div>
      <h1>Delete Book</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleDeleteBook}>Delete Book</button>
      <Link to="/">Back to Book List</Link>
    </div>
  );
};

DeleteBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default DeleteBook;
