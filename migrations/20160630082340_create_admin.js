
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', table =>{
    table.increments('admin_id');
    table.string('name');
    table.string('email');
    table.string('password_hash');
    table.string('image_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin');
};