const Movie = require('../models/movie.model');

exports.findAllMovies = async (req, res) => {
    try {
        let query = {};
        if (req.query.status) {
            query.status = req.query.status;
        }
        const movies = await Movie.find(query);
        res.json(movies);
    } catch (error) {
        res.status(500).send({ message: error.message || "Some error occurred while retrieving movies." });
    }
};

exports.findOne = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) {
            return res.status(404).send({ message: "Movie not found with id " + req.params.movieId });
        }
        res.json(movie);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({ message: "Movie not found with id " + req.params.movieId });
        }
        return res.status(500).send({ message: "Error retrieving movie with id " + req.params.movieId });
    }
};

exports.findShows = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId).populate('shows');
        if (!movie) {
            return res.status(404).send({ message: "Movie not found with id " + req.params.movieId });
        }
        res.json(movie.shows);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({ message: "Movie not found with id " + req.params.movieId });
        }
        return res.status(500).send({ message: "Error retrieving shows for movie with id " + req.params.movieId });
    }
};
