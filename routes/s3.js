require('dotenv').load();
const express = require('express');
const router = express.Router();
const fs = require('fs');
const AWS = require('aws-sdk');
const Minio = require('minio');
const db = require('../db');

AWS.config.region = 'us-west-1';
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID,
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

var s3 = new AWS.S3();

router.post('/upload_audio/:bucket_dir', function(req, res){

  if(!req.files || !req.body){

    res.status(422).send('Form is Empty')

  } else {

    var file = req.files.file;
    var filename = file.originalFilename.split(' ').join('+')
    var stream = fs.createReadStream(file.path)
    var client_audio_id = req.body.client_id;
    var title = req.body.title;
    var date = req.body.date;
    
    s3.putObject({
      ACL: 'public-read',
      Bucket: process.env.AWS_BUCKET,
      Key: req.params.bucket_dir +"/audio/"+ file.originalFilename,
      Body: stream,
    }, (error, response) =>{
      if(error){
        console.log(error);
        res.send('Error!')
      } else {
        fs.unlink(file.path, (err) =>{
          if(err) console.error(err);
        })
        db.Audio()
        .insert({client_audio_id, title, date, filename})
        .then(audio =>{
          res.status(200).send('Success!')
        })
        .catch(error =>{
          res.status(422).send({error})
        })
      }
    });
  }
})

router.get('/buckets', function(req, res){
  s3.listBuckets(function(err, data) {
    if (err) { console.log("Error:", err); }
    else {
      const buckets = [];
      for (var index in data.Buckets) {
        var bucket = data.Buckets[index];
        buckets.push("Bucket: "+ bucket.Name +' : '+ bucket.CreationDate)
      }
      res.send(buckets)
    }
  });
})

module.exports = router;


