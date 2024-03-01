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

// Delete a book
// Delete a book
router.delete('/:id', getBook, async (req, res) => {
    try {
        // Use res.book directly from the middleware
        await Book.findByIdAndRemove(res.book._id); // Use findByIdAndRemove
        res.json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Publish a book
router.put('/publish/:id', getBook, async (req, res) => {
    res.book.available = true;
    try {
        const publishedBook = await res.book.save();
        res.json(publishedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

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
    let bookId = req.params.id.replace(/\.$/, '');

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID' });
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
