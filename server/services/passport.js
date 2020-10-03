const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// passport-local setup
const localOptions = {
  usernameField: 'email',
  session: false,
};

passport.use(
  new LocalStrategy(localOptions, function (email, password, done) {
    User.findOne({ email }, function (err, user) {
      if (err) return done(err);

      if (!user) {
        return done(null, false, { error: 'Invalid credentials.' });
      }

      if (!user.validatePassword(password)) {
        return done(null, false, { error: 'Invalid credentials.' });
      }

      return done(null, user);
    });
  })
);
