exports.up = function(knex) {
  return knex.schema.createTable("Journal", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .notNullable()
      .unsigned();
    //   .references("User.id");
    tbl
      .integer("entry_id")
      .notNullable()
      .unsigned();
    //   .references("Entry.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Journal");
};
