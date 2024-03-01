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
  fontSize: '2.5em',
  color: '#2ecc71',
  fontWeight: '700',
  marginBottom: '20px',
};

const bookContainer = {
  display: 'flex',
  flexWrap: 'wrap',
};

const bookStyle = {
  border: '1px solid #ecf0f1',
  margin: '10px',
  padding: '15px',
  width: '200px',
  borderRadius: '10px',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
  transformOrigin: 'center bottom',
  overflow: 'hidden',
};

const titleStyle = {
  fontSize: '1.8em',
  marginBottom: '10px',
  color: '#34495e',
};

const authorStyle = {
  fontSize: '1.2em',
  color: '#7f8c8d',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '15px',
};

const actionLinkStyle = {
  textDecoration: 'none',
  color: '#3498db',
  fontSize: '1.2em',
  marginTop: '30px',
  display: 'block',
};

const updateLinkStyle = {
  textDecoration: 'none',
  color: '#e74c3c',
  fontSize: '1em',
};

const deleteButtonStyle = {
  backgroundColor: '#e74c3c',
  color: 'white',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1em',
  transition: 'background-color 0.3s ease-in-out',
};

const publishLinkStyle = {
  textDecoration: 'none',
  color: '#f39c12',
  fontSize: '1em',
};

export default BookList;
