const express = require('express');
const router = express.Router();
const helpers = require('../helpers/users');
const db = require ('../models');


router.route('/:user')
  .put(helpers.updateUser)
  
module.exports = router;