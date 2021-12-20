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
      default: 'uploads/default-photo.png',
    },
    description: {
      type: String,
    },
    instagram: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
    telegram: {
      type: String,
    },
    defaultLanguage: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Language',
    },
    learnLanguage: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Language',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
