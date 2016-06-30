var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Me',
    description: 'stuff about jackson prince..'
  });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {
    title: 'Projects',
    description: 'stuff about jacksons projects..'
  });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', {
    title: 'Admin',
    description: 'admin react app..'
  });
});



module.exports = router;
