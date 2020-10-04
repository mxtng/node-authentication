const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const privateKey = require('../config/keys').privateKey;

router.post('/', (req, res, next) => {
  const { id } = req.user;

  jwt.sign(id, privateKey, function (err, token) {
    if (err) return next(err);
    return res.json({ token });
  });
});

module.exports = router;
