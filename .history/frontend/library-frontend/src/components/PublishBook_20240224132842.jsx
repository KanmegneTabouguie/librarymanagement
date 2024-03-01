// src/components/PublishBook.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const PublishBook = ({ bookId }) => {
  const [available, setAvailable] = useState(false); // State to track the availability
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the book details when the component mounts
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3017/books/${bookId}`);
        setAvailable(response.data.available);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handlePublishBook = async () => {
    try {
      await axios.post(`http://localhost:3017/books/publish/${bookId}`, { available: !available });
      console.log('Book availability updated');
      // Redirect to the book list after successful update
      navigate('/');
    } catch (error) {
      console.error('Error updating book availability:', error);
    }
  };

  return (
    <div>
      <h1>Publish Book</h1>
      <p>Book Availability: {available ? 'Available' : 'Not Available'}</p>
      <button onClick={handlePublishBook}>Toggle Availability</button>
      <Link to="/">Back to Book List</Link>
    </div>
  );
};

PublishBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default PublishBook;
