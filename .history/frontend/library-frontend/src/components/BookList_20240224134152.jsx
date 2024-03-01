// src/components/BookList.js
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
      <Link to="/add">Add Book</Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map(book => (
          <div key={book._id} style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '200px', backgroundColor: getRandomColor() }}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <div>
              <Link to={`/update/${book._id}`}>Update</Link>
              {/* Pass the correct book id to the DeleteBook component */}
              <DeleteBook bookId={book._id} />
              <Link to={`/publish/${book._id}`}>Publish</Link>
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

export default BookList;
