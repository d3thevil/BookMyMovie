const Artist = require('../models/artist.model');

// Get all artists
exports.findAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find({});
        res.json(artists);
    } catch (error) {
        res.status(500).send({ message: error.message || "Some error occurred while retrieving artists." });
    }
};
