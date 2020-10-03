// modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const login = require('./routes/login');
const register = require('./routes/register');

// database setup
mongoose
  .connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.error(err));

// app setup
app.use(express.json());

// app routes
app.get('/', (req, res) => res.send('Root route'));
app.use('/login', login);
app.use('/register', register);

// port
const PORT = 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`));
