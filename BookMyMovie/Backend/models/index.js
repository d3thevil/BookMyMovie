const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = "mongodb://localhost:27017";
db.artists = require("./artist.model.js")(mongoose);
db.genres = require("./genre.model.js")(mongoose);
db.movies = require("./movie.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);

module.exports = db;
