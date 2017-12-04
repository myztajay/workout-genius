const mongoose = require('mongoose');
const User = require('./user')

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'every workout needs a name'
  },
  Rating: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  creator: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;