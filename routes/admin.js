'use strict';
require('dotenv').load();
const express = require('express');
const router = express.Router();
const auth = require('../auth/admin_auth');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db');

// router.use(expressJwt({
//   secret: process.env.JWT_SECRET
// }).unless({
//   path: [
//     '/users/login',
//     '/users/register',
//     '/users/me'
//   ]
// }));

router.get('/me', (req, res, next) => {
  if(req.headers.authorization){
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    db.Admin()
      .where({admin_id: payload.admin_id})
      .first()
      .then(admin =>{
        delete admin.password_hash;
        db.Client()
          .then(clients =>{
            clients.map(x =>{
              delete x.password_hash;
            })
            res.json({token, admin, clients});
          })
      })
  } else {
    res.status(401).send({ error: 'No authorized token' });
  }
});

router.post('/login', auth.login, (req, res, next) =>{
  const body = req.body;
  db.Admin()
    .whereRaw('lower(email) = ?', body.email.toLowerCase())
    .first()
    .then(admin => {
      if(!admin){
        res.status(422).send({ error: 'Invalid email' });
      } else if(!bcrypt.compareSync(body.password, admin.password_hash)) {
        res.status(422).send({ error: 'Invalid password' });
      } else {
        const admin_id = admin.admin_id;
        const token = jwt.sign({admin_id}, process.env.JWT_SECRET);
        delete admin.password_hash;
        db.Client()
          .then(clients =>{
            clients.map(x =>{
              delete x.password_hash;
            })
            res.json({token, admin, clients});
          })
      }
    });
});

router.post('/register_client', auth.register, (req, res, next) =>{
  
  const artist_name = req.body.artistName;
  const email = req.body.email;
  const password_hash = bcrypt.hashSync(req.body.password, 10);
  const description = req.body.description;
  const bucket_dir = req.body.bucketDir;
  
  db.Client()
    .insert({ artist_name, email, password_hash, description, bucket_dir })
    .returning('*')
    .then(returned => {
      db.Client()
        .then(clients =>{
          clients.map(x =>{
            delete x.password_hash;
          })
          res.json({clients});
        })
    })
});

router.get('/show_clients', (req, res) =>{
  db.Client()
    .then(clients =>{
      clients.map(x =>{
        delete x.password_hash;
      })
      res.json({clients});
    })
})

module.exports = router;