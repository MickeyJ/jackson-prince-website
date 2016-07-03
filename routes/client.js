'use strict';
require('dotenv').load();
const express = require('express');
const router = express.Router();
const auth = require('../auth/admin_auth');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db');

router.get('/client_me', (req, res, next) => {
  if(req.headers.authorization){
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    db.Client()
      .where({client_id: payload.client_id})
      .first()
      .then(client =>{
        delete client.password_hash;
        res.json({token, client});
      })
  } else {
    res.status(401).send({ error: 'No authorized token' });
  }
});

router.post('/client_login', auth.login, (req, res, next) =>{
  const body = req.body;
  db.Client()
    .whereRaw('lower(email) = ?', body.email.toLowerCase())
    .innerJoin('audio', 'client.client_id', 'audio.client_audio_id')
    .first()
    .then(client => {
      if(!client){
        res.status(422).send({ error: 'Invalid email' });
      } else if(!bcrypt.compareSync(body.password, client.password_hash)) {
        res.status(422).send({ error: 'Invalid password' });
      } else {
        const client_id = client.client_id;
        const token = jwt.sign({client_id}, process.env.JWT_SECRET);
        delete client.password_hash;
        res.json({token, client});
      }
    });
});




module.exports = router;