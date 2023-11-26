const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Genre', GenreSchema);
