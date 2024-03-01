// src/components/DeleteBook.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const DeleteBook = ({ bookId }) => {
  const history = useHistory();

  const handleDeleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3017/books/${bookId}`);
      console.log('Book deleted');
      // Redirect to the book list after successful deletion
      history.push('/');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <Link to={`/delete/${bookId}`} style={actionLinkStyle} onClick={handleDeleteBook}>
      Delete
    </Link>
  );
};

DeleteBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

const actionLinkStyle = {
  textDecoration: 'none',
  color: 'red',
  marginLeft: '10px',
  cursor: 'pointer',
};

export default DeleteBook;
