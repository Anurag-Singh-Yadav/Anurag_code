const express = require('express');
const { signup } = require('../controllers/userRegistration/signup');
const { login } = require('../controllers/userRegistration/login');
const { getUserData, updateUserData } = require('../controllers/userRegistration/userData');

const router = express.Router();
router.post('/signup',signup);
router.post('/login',login);


router.get('/getUserDetails',getUserData);
router.post('/updateUser',updateUserData);


module.exports = router;