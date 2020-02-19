exports.up = function(knex) {
  return knex.schema.createTable("User", tbl => {
    tbl.increments();
    tbl
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    tbl.string("first_name");
    tbl.string("last_name");
    tbl.string("email", 226).notNullable();
    tbl.string("username", 16).notNullable();
    tbl.string("password", 32).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("User");
};
