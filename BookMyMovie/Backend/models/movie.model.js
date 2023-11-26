const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
  releaseDate: Date,
  genre: String
});

module.exports = mongoose.model('Movie', MovieSchema);
