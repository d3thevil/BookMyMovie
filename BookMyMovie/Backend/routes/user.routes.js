const express = require('express');
const router = express.Router();
const users = require('../controllers/user.controller');

router.post('/auth/signup', users.signUp);
router.post('/auth/login', users.login);
router.post('/auth/logout', users.logout);

router.get('/getCouponCode', users.getCouponCode);
router.post('/bookShow', users.bookShow);


module.exports = router;

module.exports = router;
