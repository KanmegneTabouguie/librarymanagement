const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const mongoose = require('mongoose');

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single book
router.get('/:id', getBook, (req, res) => {
    res.json(res.book);
});

// Add a new book
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        available: true, // Assuming the default is available
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a book
router.patch('/:id', getBook, async (req, res) => {
    if (req.body.title != null) {
        res.book.title = req.body.title;
    }
    if (req.body.author != null) {
        res.book.author = req.body.author;
    }

    try {
        const updatedBook = await res.book.save();
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', getBook, async (req, res) => {
    try {
      // Use res.book directly from the middleware
      await Book.deleteOne({ _id: res.book._id }); // Use deleteOne
      res.json({ message: 'Book deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



// Publish a book
// Publish a book (Toggle availability)
// Handle publish logic for both POST and PUT
router.post('/publish/:id', getBook, handlePublish);
router.put('/publish/:id', getBook, handlePublish);

// Handle publish logic
async function handlePublish(req, res) {
    console.log('Request Body:', req.body);
    console.log('Content-Type:', req.get('Content-Type'));
    console.log('Book ID:', req.params.id);
    console.log('Book Object Before:', res.book);

    // Toggle the availability
    res.book.available = !res.book.available;

    console.log('Book Object After:', res.book);

    try {
        const publishedBook = await res.book.save();
        res.json(publishedBook);
    } catch (error) {
        console.error('Error in /publish/:id endpoint:', error);
        res.status(400).json({ message: error.message });
    }
}







// Return a book
router.put('/return/:id', getBook, async (req, res) => {
    
    res.book.available = false;
    try {
        const returnedBook = await res.book.save();
        res.json(returnedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

async function getBook(req, res, next) {
    console.log('Incoming request to getBook:', req.method, req.url);

    let bookId = req.params.id.replace(/\.$/, '');

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID' });
    }

    // Ensure request payload is valid JSON
    if (req.method === 'POST') {
        if (!req.is('application/json')) {
            return res.status(400).json({ message: 'Invalid content type. Expected JSON.' });
        }
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Empty JSON payload.' });
        }
    }

    try {
        let book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.book = book;
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = router;
module.exports.getBook = getBook;

