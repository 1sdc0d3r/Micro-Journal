exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Entry")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Entry").insert([
        {
          medication: "adderall xr",
          dose: "20mg",
          entry: "entry 1"
        },
        {
          medication: "adderall xr",
          dose: "20mg",
          entry: "entry 2"
        },
        {
          medication: "adderall xr",
          dose: "20mg",
          entry: "entry 3"
        },
        {
          medication: "adderall",
          dose: "10mg",
          entry: "entry 1"
        },
        {
          medication: "adderall",
          dose: "10mg",
          entry: "entry 2"
        },
        {
          medication: "adderall",
          dose: "10mg",
          entry: "entry 3"
        }
      ]);
    });
};
