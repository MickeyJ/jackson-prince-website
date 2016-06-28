var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Me',
    description: 'stuff about jackson prince..'
  });
});


module.exports = router;
