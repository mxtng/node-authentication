const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
  email: { type: String, lowercase: true, unique: true, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userModel);
