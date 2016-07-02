var bcrypt = require('bcrypt');


exports.seed = function(knex, Promise) {

  var password1 = bcrypt.hashSync('xxxxxxx', 10);
  var password2 = bcrypt.hashSync('xxxxxxx', 10);
  return Promise.join (
    knex('admin').del(),
    knex('admin')
      .insert({
        name: "Mickey J",
        email: "mickeyj.music@gmail.com",
        password_hash: password1,
        image_url: ""
      }),
    knex('admin')
      .insert({
        name: "Jackson",
        email: "jackson.prince@me.com",
        password_hash: password2,
        image_url: ""
      })
  )
};