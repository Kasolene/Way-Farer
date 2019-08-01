const express  = require('express');


const router = require('express-promise-router')();

const UserController = require('../controllers/User')

const validateInput = require('../helpers/validateInput')
// user signup route
router.route('/signup')
    .post(validateInput.signUp, UserController.signUp);

// user signIn route
router.route('/signin')
    .post(UserController.signIn);

module.exports = router;
