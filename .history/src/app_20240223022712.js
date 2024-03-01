const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB Connection
// Replace 'your_connection_string_here' with your actual MongoDB Atlas connection string
mongoose.connect('mongodb+srv://kanmegnea:AmuIszHKjAqsDNon@library.csfjttu.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
