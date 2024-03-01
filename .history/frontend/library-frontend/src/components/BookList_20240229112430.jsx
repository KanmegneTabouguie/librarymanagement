// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;

// Adjusted styles for ActionLink component
const ActionLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  padding: 10px 20px; /* Adjusted padding */
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 1.2em; /* Adjusted font size */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const BookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BookStyle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Author = styled.p`
  color: #555;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const UpdateLink = styled(Link)`
  text-decoration: none;
  color: #2ecc71;
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  color: #e74c3c;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const PublishLink = styled(Link)`
  text-decoration: none;
  color: #f39c12;
`;

// Component
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
      setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <Container>
      <Heading>Book List</Heading>
      <ActionLink to="/add">Add Book</ActionLink>
      <BookContainer>
        {books.map(book => (
          <BookStyle key={book._id} color={getRandomColor()}>
            <Title>{book.title}</Title>
            <Author>Author: {book.author}</Author>
            <p>Availability: {book.available ? 'Available' : 'Not Available'}</p>
            <ButtonContainer>
              <UpdateLink to={`/update/${book._id}`}>Update</UpdateLink>
              <DeleteButton onClick={() => handleDeleteBook(book._id)}>Delete</DeleteButton>
              <PublishLink to={`/publish/${book._id}`}>Publish</PublishLink>
            </ButtonContainer>
          </BookStyle>
        ))}
      </BookContainer>
    </Container>
  );
};

const getRandomColor = () => {
  const letters = '456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
};

export default BookList;
