
exports.up = function(knex, Promise) {
  return knex.schema.createTable("classes", (classes) => {
    classes.increments('id').unsigned().primary()
    classes.string('name').notNull()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
