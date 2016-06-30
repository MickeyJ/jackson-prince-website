
exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', table =>{
    table.increments('client_id');
    table.string('artist_name');
    table.string('email');
    table.string('password_hash');
    table.string('description');
    table.string('bucket_dir');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client');
};
