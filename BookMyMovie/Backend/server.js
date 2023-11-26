const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbURL = 'mongodb://localhost:27017';
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database!');
}).catch(err => {
    console.error('Cannot connect to the database!', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Upgrad Movie booking application development.' });
});

const PORT = process.env.PORT || 9000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const movieRoutes = require('./routes/movie.routes');
const artistRoutes = require('./routes/artist.routes');
const genreRoutes = require('./routes/genre.routes');

app.use('/api', movieRoutes);
app.use('/api', artistRoutes);
app.use('/api', genreRoutes);

const userRoutes = require('./routes/user.routes');

app.use('/api', userRoutes);

module.exports = app;
