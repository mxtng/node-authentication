const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: { type: String, lowercase: true, unique: true, required: true },
  password: { type: String, required: true },
});

userSchema.pre('save', function (next) {
  let { password } = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return next(err);
      password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
