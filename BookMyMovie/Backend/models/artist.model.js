const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  works: [String]
});

module.exports = mongoose.model('Artist', ArtistSchema);
