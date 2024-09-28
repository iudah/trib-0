var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/challenge', (req, res, next) => {
  res.send('Hello, Iudah here. I took this challenge');
});

module.exports = router;
