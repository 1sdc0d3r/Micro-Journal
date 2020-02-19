exports.up = function(knex) {
  return knex.schema.createTable("Journal", tbl => {
    tbl.increments();
    tbl
      .integer("journal_id")
      .notNullable()
      .unsigned()
      .references("User.id");
    tbl.integer("entry_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Journal");
};
