// src/components/BookListStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ActionLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #3498db;
  margin-bottom: 20px;
  display: inline-block;
`;

export const BookContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const BookCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.backgroundColor || '#3498db'};
  color: #fff;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Author = styled.p`
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
`;

export const UpdateLink = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
  color: #2ecc71;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const PublishLink = styled(Link)`
  text-decoration: none;
  color: #3498db;
`;
