// movie.routes.js

const express = require('express');
const router = express.Router();
const movies = require('../controllers/movie.controller.js');

router.get('/movies', movies.findAllMovies);
router.get('/movies/:movieId', movies.findOne);

module.exports = router;
