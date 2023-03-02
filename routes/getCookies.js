var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(`req.header ${JSON.stringify(req.header)} and cookies are ${JSON.stringify(req.cookies)}`);
  console.log(`req.body ${req.body} and cookies are ${JSON.stringify(req.cookies)}`);
  res.render('index', { title: `reading a cookie on App 2 req.body ${JSON.stringify(req.body)} and cookies are ${JSON.stringify(req.cookies)}` });
});

module.exports = router;
