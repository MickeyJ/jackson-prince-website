'use strict';
require('dotenv').load();
const express = require('express');
const router = express.Router();
const auth = require('../auth/admin_auth');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Minio = require('minio');
const db = require('../db');

var s3Client = new Minio({
  endPoint: 's3.amazonaws.com',
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretKey: process.env.AWS_SECRET_ACCESS_KEY
})

router.get('/list_files', (req, res) =>{
  const objects = [];
  const objectsStream = s3Client.listObjects('at-play', '', true)

  objectsStream.on('data', (obj) =>{
    const pathSplit = obj.name.split(/\//);
    if(pathSplit[0] === req.query.dir && pathSplit[1].length > 1){
      objects.push(obj)
    }
  })
  objectsStream.on('error', (e) =>{
    objects.push(e)
  })

  setTimeout(() =>{
    res.send(objects);
  }, 500)
})

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
      if(!admin || !bcrypt.compareSync(body.password, admin.password_hash)){
        res.status(422).send({ error: 'Invalid email or password' });
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
  let bucketSuccess;
  
  db.Client()
    .insert({ artist_name, email, password_hash, description, bucket_dir })
    .returning('*')
    .then(returned => {
      db.Client()
      .then(clients =>{
        clients.map(x =>{
          delete x.password_hash;
        })
        s3Client.makeBucket(bucket_dir, 'us-west-1', function(err) {
          if (err) return res.send('Error creating bucket.', err)
          bucketSuccess = 'Bucket created successfully in "us-west-1".'
        })
        res.json({clients});
      })
    })
});

router.post('/client', (req, res) =>{
  if(req.body){
    db.Client()
    .where({client_id: req.body.id})
    .first()
    .then(client =>{
      delete client.password_hash;
      db.Audio()
      .where({client_audio_id: req.body.id})
      .then(audio =>{
        client.audio = audio
        res.json({client});
      })
    })
  }
})

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