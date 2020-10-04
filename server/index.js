// modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const login = require('./routes/login');
const register = require('./routes/register');
const passport = require('passport');

// passport services setup
require('./services/passport');
const requireLogin = passport.authenticate('local', { session: false });

// database setup
mongoose
  .connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.error(err));

// app setup
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());

// app routes
app.use('/login', requireLogin, login);
app.use('/register', register);

// port
const PORT = 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`));
