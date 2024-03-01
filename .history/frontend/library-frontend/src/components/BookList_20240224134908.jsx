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

// Styles
const container = {
  textAlign: 'center',
  padding: '20px',
};

const headingStyle = {
  fontSize: '2em',
  color: '#333',
};

const bookContainer = {
  display: 'flex',
  flexWrap: 'wrap',
};

const bookStyle = {
  border: '1px solid #ddd',
  margin: '10px',
  padding: '15px',
  width: '200px',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
};

const titleStyle = {
  fontSize: '1.5em',
  marginBottom: '10px',
};

const authorStyle = {
  fontSize: '1em',
  color: '#555',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const actionLinkStyle = {
  textDecoration: 'none',
  color: '#3498db',
  fontSize: '1.2em',
  marginTop: '20px',
  display: 'block',
};

const updateLinkStyle = {
  textDecoration: 'none',
  color: '#2ecc71',
};

const deleteButtonStyle = {
  backgroundColor: '#e74c3c',
  color: 'white',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1em',
};

const publishLinkStyle = {
  textDecoration: 'none',
  color: '#f39c12',
};
export default BookList;
