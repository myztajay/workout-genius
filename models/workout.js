const mongoose = require('mongoose');
const User = require('./user')

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Every workout needs a name'
  },
  description:{
    type: String,
    required: "Every workout need a description"
  },
  exercises:{
    type: Array,
    required: "Every workout need at least one exercise"
  },
  intensity:{
    type: Number
  },
  workout_type:{
    type: Number,
    required: "Please specify the workout type"
  },
  Rating: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  creator: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  liked: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;