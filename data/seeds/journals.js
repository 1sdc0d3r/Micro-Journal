exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Journal")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Journal").insert([
        { journal_id: 1, entry_id: 1 },
        { journal_id: 1, entry_id: 2 },
        { journal_id: 1, entry_id: 3 },
        { journal_id: 2, entry_id: 4 },
        { journal_id: 2, entry_id: 5 },
        { journal_id: 2, entry_id: 6 }
      ]);
    });
};
