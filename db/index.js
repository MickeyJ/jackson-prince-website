var knex = require('./knex');

exports.Admin = () => knex('admin');
exports.Client = () => knex('client');
exports.Audio = () => knex('audio');
exports.Document = () => knex('document');
exports.Comment = () => knex('comment');
