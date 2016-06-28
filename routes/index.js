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

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
    description: 'stuff about jacksons projects..'
  });
});

router.get('/client', function(req, res, next) {
  res.render('client', {
    title: 'Client',
    description: 'client react app..'
  });
});



module.exports = router;
