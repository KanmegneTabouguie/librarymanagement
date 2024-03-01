// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import PublishBook from './components/PublishBook';
import BookList from './components/BookList'; // Import BookList component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<BookList />} /> {/* Display BookList component at the root route */}
          <Route path="/add" element={<AddBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="/publish/:id" element={<PublishBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
