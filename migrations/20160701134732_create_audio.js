
exports.up = function(knex, Promise) {
  return knex.schema.createTable('audio', table =>{
    table.increments('audio_id').primary();
    table.integer('client_audio_id').unsigned().references('client_id').inTable('client');
    table.string('title');
    table.string('date');
    table.string('filename');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('audio');
};
