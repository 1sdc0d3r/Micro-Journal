exports.up = function(knex) {
  return knex.schema.createTable("Entry", tbl => {
    tbl.increments();
    tbl
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    tbl.dateTime("modified_at");
    tbl
      .integer("journal_id")
      .notNullable()
      .unsigned()
      .references("Journal.id");
    tbl.string("medication");
    tbl.string("dose");
    tbl.string("entry").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Entry");
};
