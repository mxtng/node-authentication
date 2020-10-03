// modules
const express = require('express');
const app = express();
const login = require('./routes/login');
const register = require('./routes/register');

// app setup
app.use(express.json());
app.use('/login', login);
app.use('/register', register);

// app routes
app.get('/', (req, res) => res.send('Root route'));

// port
const PORT = 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`));
