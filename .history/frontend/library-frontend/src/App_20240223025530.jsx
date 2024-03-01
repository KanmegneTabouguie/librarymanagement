// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllBooks from './components/AllBooks';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import PublishBook from './components/PublishBook';
import ReturnBook from './components/ReturnBook';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="/publish/:id" element={<PublishBook />} />
          <Route path="/return/:id" element={<ReturnBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
