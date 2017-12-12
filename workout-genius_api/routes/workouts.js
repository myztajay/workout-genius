const express = require('express');
const router = express.Router();
const db = require ('../models');
const helpers = require('../helpers/workouts');

router.route('/')
  .get(helpers.getWorkouts)
  .post(helpers.createWorkout);

router.route('/:workout')
  .get(helpers.showWorkout)
  .put(helpers.updateWorkout)
  .delete(helpers.deleteWorkout)

module.exports = router;