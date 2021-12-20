const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    login: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
      default: "../uploads/blank-profile-picture-973460_1280.png"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
