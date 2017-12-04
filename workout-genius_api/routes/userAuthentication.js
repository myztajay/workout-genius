const express = require('express');
const router = express.Router();
const db = require('../models');
  
router.route('/auth/facebook', passport.authenticate('facebook'));  
router.route('/auth/facebook/callback',
    // passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });