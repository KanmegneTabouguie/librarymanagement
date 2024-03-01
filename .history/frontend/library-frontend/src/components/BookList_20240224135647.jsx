// src/components/BookList.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  return (
    <div style={container}>
      <h1 style={headingStyle}>Book List</h1>
      <Link to="/add" style={actionLinkStyle}>Add Book</Link>
      <div style={bookContainer}>
        {books.map(book => (
          <div key={book._id} style={{ ...bookStyle, backgroundColor: getRandomColor() }}>
            <h3 style={titleStyle}>{book.title}</h3>
            <p style={authorStyle}>Author: {book.author}</p>
            <div style={buttonContainer}>
              <Link to={`/update/${book._id}`} style={updateLinkStyle}>Update</Link>
              <button onClick={() => handleDeleteBook(book._id)} style={deleteButtonStyle}>Delete</button>
              <Link to={`/publish/${book._id}`} style={publishLinkStyle}>Publish</Link>
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

