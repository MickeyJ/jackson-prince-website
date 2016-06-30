var bcrypt = require('bcrypt');


exports.seed = function(knex, Promise) {

  var password = bcrypt.hashSync('asdfzxcv', 10);
  return Promise.join (
    knex('admin').del(),
    knex('admin')
      .insert({
        name: "Mickey J",
        email: "mickeyj.music@gmail.com",
        password_hash: password,
        image_url: ""
      })
  )
};