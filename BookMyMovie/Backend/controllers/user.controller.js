const User = require('../models/user.model');
const TokenGenerator = require('uuid-token-generator');
const { v4: uuidv4 } = require('uuid');
const b2a = require('b2a');

const tokgen = new TokenGenerator(); 

exports.signUp = async (req, res) => {
    try {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.firstName + "_" + req.body.lastName, 
            uuid: uuidv4(),
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        const passwordIsValid = b2a.atob(req.body.password) === user.password; // Adjust based on your encryption
        if (!passwordIsValid) {
            return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
        }
        const token = tokgen.generate();
        res.status(200).send({
            id: user._id,
            username: user.username,
            accessToken: token
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.logout = async (req, res) => {

    res.status(200).send({ message: "You have been logged out." });
};

exports.getCouponCode = async (req, res) => {
    try {
        const couponCode = "SOME_COUPON_CODE"; 
        res.status(200).send({ couponCode });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.bookShow = async (req, res) => {
    try {
        const bookingDetails = req.body; 
        res.status(200).send({ message: "Show booked successfully", bookingDetails });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
