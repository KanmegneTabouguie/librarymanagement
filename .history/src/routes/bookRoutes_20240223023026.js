const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

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
    // Add other fields to update as needed

    try {
        const updatedBook = await res.book.save();
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a book
router.delete('/:id', getBook, async (req, res) => {
    try {
        await res.book.remove();
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
    let book;
    try {
        book = await Book.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.book = book;
    next();
}

module.exports = router;
