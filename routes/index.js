var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(`Cookies:-> ${req.headers.cookie}`)
  res.render('index', { title: 'Express 2' });
});

module.exports = router;
