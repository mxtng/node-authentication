const express = require('express');
const router = express.Router();
const User = require('../models/user');

// user registration route
router.post('/', (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email, password });
  user.save(function (err) {
    if (err) return res.status(400).send({ error: 'Registration failed.' });

    return res.json('Registration success.');
  });
});

module.exports = router;
