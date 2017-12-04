const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  facebook_id: {
    type: Number
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
  } 
})

const User = mongoose.model('User', userSchema);
module.exports = User;