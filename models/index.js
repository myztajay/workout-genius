const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/workout-genius-api');
mongoose.connection.on('error', console.error.bind(console, 'connection error'))

mongoose.Promise = Promise;
module.exports.User = require('./user')
module.exports.Workout = require('./workout')