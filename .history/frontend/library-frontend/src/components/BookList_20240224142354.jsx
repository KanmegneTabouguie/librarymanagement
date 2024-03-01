// src/components/BookList.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookListStyles from './BookListStyles';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3017/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:3017/books/${bookId}`);
      console.log('Book deleted');
      // Update the state to reflect the deletion
      setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handlePublishBook = async (bookId) => {
    try {
      await axios.put(`http://localhost:3017/publish/${bookId}`);
      console.log('Book published');
      // Update the state to reflect the publishing
      setBooks(prevBooks =>
        prevBooks.map(book =>
          book._id === bookId ? { ...book, available: !book.available } : book
        )
      );
    } catch (error) {
      console.error('Error publishing book:', error);
    }
  };

  return (
    <div style={BookListStyles.container}>
      <h1 style={BookListStyles.headingStyle}>Book List</h1>
      <Link to="/add" style={BookListStyles.actionLinkStyle}>Add Book</Link>
      <div style={BookListStyles.bookContainer}>
        {books.map(book => (
          <div key={book._id} style={{ ...BookListStyles.bookStyle, backgroundColor: getRandomColor() }}>
            <h3 style={BookListStyles.titleStyle}>{book.title}</h3>
            <p style={BookListStyles.authorStyle}>Author: {book.author}</p>
            <div style={BookListStyles.buttonContainer}>
              <Link to={`/update/${book._id}`} style={BookListStyles.updateLinkStyle}>Update</Link>
              <button onClick={() => handleDeleteBook(book._id)} style={BookListStyles.deleteButtonStyle}>Delete</button>
              <button onClick={() => handlePublishBook(book._id)} style={BookListStyles.publishButtonStyle}>
                {book.available ? 'Unpublish' : 'Publish'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to generate a random color
const getRandomColor = () => {
  const letters = '456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
};

export default BookList;
