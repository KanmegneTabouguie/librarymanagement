// src/components/BookList.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteBook from './DeleteBook';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3017/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <Link to="/add" style={actionLinkStyle}>Add Book</Link>
      <div style={bookContainer}>
        {books.map(book => (
          <div key={book._id} style={bookStyle}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <div style={buttonContainer}>
              <Link to={`/update/${book._id}`} style={actionLinkStyle}>Update</Link>
              {/* Use a function to handle the deletion and pass the book ID */}
              <DeleteBook bookId={book._id} />
              <Link to={`/publish/${book._id}`} style={actionLinkStyle}>Publish</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Styles
const bookContainer = {
  display: 'flex',
  flexWrap: 'wrap',
};

const bookStyle = {
  border: '1px solid black',
  margin: '10px',
  padding: '10px',
  width: '200px',
  backgroundColor: getRandomColor(),
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const actionLinkStyle = {
  textDecoration: 'none',
  color: 'blue',
  marginLeft: '10px',
};

export default BookList;
