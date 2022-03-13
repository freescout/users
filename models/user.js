const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Title is required"]
  },
  lastName: {
    type: String,
    required: [true, "Content can't be blank"]
  },
  city: {
    type: String,
    required: [true, "Content can't be blank"]
  },
  country: {
    type: String,
    required: [true, "Content can't be blank"]
  }
});

module.exports = mongoose.model('User', userSchema);