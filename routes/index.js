var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/indexv1', function(req, res, next) {
  res.render('indexv1', { title: 'Express' });
});

router.get('/indexv2', function(req, res, next) {
  res.render('indexv2', { title: 'Express' });
});

router.get('/cvs', function(req, res, next) {
  res.render('cvs', { title: 'Express' });
});
module.exports = router;
