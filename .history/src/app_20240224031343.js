const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kanmegnea:AmuIszHKjAqsDNon@library.csfjttu.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const bookRoutes = require('./routes/bookRoutes');
const { getBook } = require('./routes/bookRoutes'); // Import getBook separately

app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
