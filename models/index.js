const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://mongo-container/workout-genius-api' || process.env.MONGO_URL ) ;
mongoose.connection.on('error', console.error.bind(console, 'connection error'))

mongoose.Promise = Promise;
module.exports.User = require('./user')
module.exports.Workout = require('./workout')