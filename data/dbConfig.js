require("dotenv").config();
const knex = require("knex");
const configOptions = require("../knexfile");

// const env = process.env.NODE_ENV || development;

const journalDb = knex(configOptions.development);

module.exports = journalDb;
