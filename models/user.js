const mongoose = require('mongoose');
const Workout = require('./workout');
// allows you to add method findorcreate to models
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new mongoose.Schema({
  facebook_id: {
    type: Number
  },
  facebook_photo:{
    type: String,
  },
  display_name: {
    type: String,
    required: 'Name cannot be blank'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: 'Email cannot be blank'
  },
  liked: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }]
}).plugin(findOrCreate)

const User = mongoose.model('User', userSchema);
module.exports = User;