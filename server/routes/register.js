const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const privateKey = require('../config/keys').privateKey;

// user registration route
router.post('/', (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email, password });
  user.save(function (err) {
    if (err) return res.status(400).send({ error: 'Registration failed.' });

    jwt.sign(user.id, privateKey, function (err, token) {
      if (err) return next(err);
      return res.json({ token });
    });
  });
});

module.exports = router;
