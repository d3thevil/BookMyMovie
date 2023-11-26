const Genre = require('../models/genre.model');

// Get all genres
exports.findAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find({});
        res.json(genres);
    } catch (error) {
        res.status(500).send({ message: error.message || "Some error occurred while retrieving genres." });
    }
};
