require('dotenv').load();
var express = require('express');
var router = express.Router();

var fs = require('fs');
var AWS = require('aws-sdk');
var S3FS = require('s3fs');

AWS.config.region = 'us-west-1';
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID,
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

var s3 = new AWS.S3();
var s3Bucket = new AWS.S3({params: {Bucket: 'my-testing-storage'}});

router.post('/upload', function(req, res){

  var s3Imp = new S3FS('my-testing-storage', {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  var file = req.files.file;
  var stream = fs.createReadStream(file.path)
  
  return s3Imp.writeFile(file.originalFilename, stream)
    .then(() =>{
      fs.unlink(file.path, (err) =>{
        if(err) console.error(err);
      })
      res.send('Success!')
    })
})

router.post('/download', function(req, res){

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

router.post('/data', function (req, res){

  const s3bucket = new AWS.S3({params: {Bucket: 'my-testing-storage'}});

  s3Bucket.createBucket(function() {
    const params = {Key: req.body.key, Body: req.body.value};
    s3Bucket.upload(params, function(err, data) {
      if (err) {
        res.send("Error uploading data: ", err);
      } else {
        res.send("Successfully uploaded data to myBucket/myKey");
      }
    });
  });

})


module.exports = router;


