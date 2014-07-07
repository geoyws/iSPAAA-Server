var express = require('express');
var router = express.Router();

// log everytime someone uses the router
router.use(function(req, res, next) {
  console.log('Something is using our routes!');
  next();
});

router.get('/', function(req, res) {
  res.json({ Message: 'YAY!'});
});

module.exports = router;
