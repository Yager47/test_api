
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    // primary key
    table.increments();

    // data
    table.string('login', 50).unique().notNullable();
    table.string('email', 250).unique().notNullable();
    table.string('password', 128).notNullable();
    table.string('first_name', 50);
    table.string('last_name', 50);
    table.boolean('admin').notNullable().defaultTo(false);

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
