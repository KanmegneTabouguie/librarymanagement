// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App = () => {
  return (
    <div>
      <BookList />
      <AddBook />
      {/* Include other components here */}
    </div>
  );
};

export default App;
