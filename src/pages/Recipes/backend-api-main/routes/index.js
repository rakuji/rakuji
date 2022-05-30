var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RESTful API' });
});

router.post('/', function(req, res) { 
  res.send(req.body.num);
 });

module.exports = router;
