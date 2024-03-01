// src/components/PublishBook.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const PublishBook = () => {
  const { id } = useParams(); // Use the useParams hook to get the bookId from the URL
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3017/books/${id}`);
        setAvailable(response.data.available);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleToggleAvailability = async () => {
    try {
      setAvailable((prevAvailable) => !prevAvailable);
      await axios.put(`http://localhost:3017/books/publish/${id}`, {
        available: !available,
      });
      console.log('Book availability updated');
    } catch (error) {
      console.error('Error updating book availability:', error);
    }
  };

  return (
    <div>
      <h1>Publish Book</h1>
      <p>Book Availability: {available ? 'Available' : 'Not Available'}</p>
      <button onClick={handleToggleAvailability}>Toggle Availability</button>
      <Link to="/">Back to Book List</Link>
    </div>
  );
};

PublishBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default PublishBook;
