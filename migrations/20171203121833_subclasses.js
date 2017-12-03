
exports.up = function(knex, Promise) {
  return knex.schema.createTable("subclasses", (subs) => {
    subs.increments('id').unsigned().primary()
    subs.string('name')
    subs.int('levelAvailable')
    subs.string('description')
  })
};

exports.down = function(knex, Promise) {

};
